import { NextResponse } from 'next/server';

interface EventParams {
    event_category: string;
    event_label: string;
    page_location: string;
    page_path: string;
    page_title: string;
}

interface TrackEvent {
    name: string;
    params: EventParams;
}

interface TrackRequestBody {
    client_id: string;
    measurement_id: string;
    events: TrackEvent[];
}

export async function POST(request: Request) {
    try {
        console.log('API: Recebendo requisição de tracking');
        
        const body = await request.json() as TrackRequestBody;
        const { client_id, events, measurement_id } = body;
        const api_secret = process.env.API_SECRET;

        console.log('API: Dados recebidos:', {
            client_id,
            measurement_id,
            events_count: events?.length,
            has_api_secret: !!api_secret
        });

        if (!client_id || !events || !measurement_id || !api_secret) {
            console.error('API: Campos obrigatórios ausentes:', {
                has_client_id: !!client_id,
                has_events: !!events,
                has_measurement_id: !!measurement_id,
                has_api_secret: !!api_secret
            });
            
            return NextResponse.json(
                { error: 'Campos obrigatórios ausentes' },
                { status: 400 }
            );
        }

        const gaEndpoint = `https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`;
        console.log('API: Enviando para GA:', gaEndpoint);

        const response = await fetch(
            gaEndpoint,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ client_id, events })
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API: Erro ao enviar para GA:', {
                status: response.status,
                statusText: response.statusText,
                error: errorText
            });
            
            return NextResponse.json(
                { error: 'Erro ao enviar para GA', details: errorText },
                { status: 500 }
            );
        }

        console.log('API: Eventos enviados com sucesso');
        return new NextResponse(null, { status: 204 });
    } catch (error) {
        console.error('API: Erro no servidor:', error);
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
        return NextResponse.json(
            { error: 'Erro no servidor', details: errorMessage },
            { status: 500 }
        );
    }
} 