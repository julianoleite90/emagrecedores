(function trackGAEvents() {
    const currentScript = document.currentScript;
    const params = new URLSearchParams(currentScript.src.split('?')[1]);
    const measurementId = params.get('id');
    if (!measurementId) return console.warn('Measurement ID ausente');

    const EVENT_QUEUE = [];
    const API_ENDPOINT = '/api/track';

    function getClientId() {
        const key = 'ga_client_id';
        let clientId = localStorage.getItem(key);
        if (!clientId) {
            clientId = `${Math.floor(Math.random() * 1e10)}.${Date.now()}`;
            localStorage.setItem(key, clientId);
        }
        return clientId;
    }

    const clientId = getClientId();

    function queueEvent(eventName, category, label) {
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
    }

    function sendQueuedEvents() {
        if (EVENT_QUEUE.length === 0) return;

        const payload = {
            client_id: clientId,
            measurement_id: measurementId,
            events: [...EVENT_QUEUE]
        };

        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });

        navigator.sendBeacon(API_ENDPOINT, blob);

        // Limpa a fila após o envio
        EVENT_QUEUE.length = 0;
    }

    // Escuta eventos de saída da página
    window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            sendQueuedEvents();
        }
    });

    window.addEventListener('beforeunload', () => {
        sendQueuedEvents();
    });

    // Page view
    queueEvent('page_view', 'Page', 'Load');

    // Clique em elementos
    document.addEventListener('click', (e) => {
        const el = e.target.closest('[data-ga-event]');
        if (!el) return;

        const name = el.dataset.gaEvent;
        const category = el.dataset.gaCategory || 'Interação';
        const label = el.dataset.gaLabel || el.innerText || el.tagName;
        queueEvent(name, category, label);
    });

    // Visualização de seções
    const observed = document.querySelectorAll('[data-ga-event="section_view"]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.dataset.gaFired) {
                entry.target.dataset.gaFired = 'true';
                const el = entry.target;
                const name = el.dataset.gaEvent;
                const category = el.dataset.gaCategory || 'Visualização';
                const label = el.dataset.gaLabel || el.className || el.tagName;
                queueEvent(name, category, label);
            }
        });
    }, { threshold: 0.5 });

    observed.forEach(el => observer.observe(el));
})(); 