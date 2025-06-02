(function trackGAEvents() {
    console.log('Analytics script initialized');
    
    const currentScript = document.currentScript;
    const params = new URLSearchParams(currentScript.src.split('?')[1]);
    const measurementId = params.get('id');
    if (!measurementId) return console.warn('Measurement ID ausente');

    console.log('Measurement ID:', measurementId);

    const EVENT_QUEUE = [];
    const API_ENDPOINT = '/api/track';

    function getClientId() {
        const key = 'ga_client_id';
        let clientId = localStorage.getItem(key);
        if (!clientId) {
            clientId = `${Math.floor(Math.random() * 1e10)}.${Date.now()}`;
            localStorage.setItem(key, clientId);
            console.log('Novo client ID gerado:', clientId);
        } else {
            console.log('Client ID existente:', clientId);
        }
        return clientId;
    }

    const clientId = getClientId();

    function queueEvent(eventName, category, label) {
        console.log('Evento adicionado à fila:', { eventName, category, label });
        EVENT_QUEUE.push({
            name: eventName,
            params: {
                event_category: category,
                event_label: label,
                page_location: window.location.href,
                page_path: window.location.pathname,
                page_title: document.title,
            }
        });

        // Envia eventos imediatamente se for pageview
        if (eventName === 'page_view') {
            console.log('Enviando page_view imediatamente');
            sendQueuedEvents();
        }
    }

    function sendQueuedEvents() {
        if (EVENT_QUEUE.length === 0) return;

        console.log('Enviando eventos:', EVENT_QUEUE.length);

        const payload = {
            client_id: clientId,
            measurement_id: measurementId,
            events: [...EVENT_QUEUE]
        };

        try {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            const sent = navigator.sendBeacon(API_ENDPOINT, blob);
            
            if (sent) {
                console.log('Eventos enviados com sucesso via sendBeacon');
            } else {
                console.warn('sendBeacon falhou, tentando fetch');
                fetch(API_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                    keepalive: true
                }).then(() => console.log('Eventos enviados com sucesso via fetch'))
                  .catch(error => console.error('Erro ao enviar eventos:', error));
            }
        } catch (error) {
            console.error('Erro ao enviar eventos:', error);
        }

        // Limpa a fila após o envio
        EVENT_QUEUE.length = 0;
    }

    // Escuta eventos de saída da página
    window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            console.log('Página oculta, enviando eventos pendentes');
            sendQueuedEvents();
        }
    });

    window.addEventListener('beforeunload', () => {
        console.log('Página sendo fechada, enviando eventos pendentes');
        sendQueuedEvents();
    });

    // Page view
    console.log('Registrando page_view');
    queueEvent('page_view', 'Page', 'Load');

    // Clique em elementos
    document.addEventListener('click', (e) => {
        const el = e.target.closest('[data-ga-event]');
        if (!el) return;

        const name = el.dataset.gaEvent;
        const category = el.dataset.gaCategory || 'Interação';
        const label = el.dataset.gaLabel || el.innerText || el.tagName;
        console.log('Clique detectado:', { name, category, label });
        queueEvent(name, category, label);
    });

    // Visualização de seções
    const observed = document.querySelectorAll('[data-ga-event="section_view"]');
    console.log('Seções observadas:', observed.length);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.dataset.gaFired) {
                entry.target.dataset.gaFired = 'true';
                const el = entry.target;
                const name = el.dataset.gaEvent;
                const category = el.dataset.gaCategory || 'Visualização';
                const label = el.dataset.gaLabel || el.className || el.tagName;
                console.log('Seção visualizada:', { name, category, label });
                queueEvent(name, category, label);
            }
        });
    }, { threshold: 0.5 });

    observed.forEach(el => observer.observe(el));
})(); 