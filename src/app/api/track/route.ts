import { NextResponse } from 'next/server';

interface TrackEvent {
    name: string;
    params: {
        [key: string]: string;
    };
}

interface TrackRequestBody {
    client_id: string;
    measurement_id: string;
    events: TrackEvent[];
}

export async function POST(request: Request) {
    const body = await request.json() as TrackRequestBody;
    const { client_id, events, measurement_id } = body;
    const api_secret = process.env.API_SECRET;

    if (!client_id || !events || !measurement_id || !api_secret) {
        return NextResponse.json(
            { error: 'Campos obrigatórios ausentes' },
            { status: 400 }
        );
    }

    try {
        const response = await fetch(
            `https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ client_id, events })
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json(
                { error: 'Erro ao enviar para GA', details: errorText },
                { status: 500 }
            );
        }

        return new NextResponse(null, { status: 204 });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
        return NextResponse.json(
            { error: 'Erro no servidor', details: errorMessage },
            { status: 500 }
        );
    }
} 