import { NextResponse } from 'next/server';

const API_SECRET = 'AIzaSyBTvIjsJNvQotJyY4l5oKyq6ja3XIg6Mp4';
const GA_ENDPOINT = 'https://www.google-analytics.com/mp/collect';
const MEASUREMENT_ID = 'G-RTEPB48RDY';

interface GA4Event {
  name: string;
  params: Record<string, string | number | boolean>;
}

interface GA4Payload {
  client_id: string;
  events: GA4Event[];
  user_properties: Record<string, unknown>;
  timestamp_micros: number;
  non_personalized_ads: boolean;
}

async function sendToGA4(data: GA4Payload): Promise<boolean> {
  try {
    const response = await fetch(`${GA_ENDPOINT}?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`GA4 API responded with status ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Error sending to GA4:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { client_id, events } = body;

    const data: GA4Payload = {
      client_id: client_id || `${Math.random().toString(36).substring(2)}.${Date.now()}`,
      events,
      user_properties: {},
      timestamp_micros: Date.now() * 1000,
      non_personalized_ads: false
    };

    const success = await sendToGA4(data);

    return NextResponse.json({ success });
  } catch (error) {
    console.error('Error processing analytics request:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
} 