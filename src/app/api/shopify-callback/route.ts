import { NextRequest, NextResponse } from 'next/server';

const CLIENT_ID = process.env.SHOPIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET!;
const SHOP = '7085rr-0m.myshopify.com';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://${SHOP}/admin/oauth/access_token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code }),
    });

    const data = await response.json();

    if (data.access_token) {
      return new NextResponse(
        `<html><body><h1>✅ Token capturado!</h1><p><strong>${data.access_token}</strong></p></body></html>`,
        { headers: { 'Content-Type': 'text/html' } }
      );
    }

    return NextResponse.json({ error: 'No token', data }, { status: 500 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
