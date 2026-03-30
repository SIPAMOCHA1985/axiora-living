import { NextRequest, NextResponse } from 'next/server'

const ISA_API = 'http://46.224.217.221:8080'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params
  const endpoint = path.join('/')

  let body: string | undefined
  try {
    body = await request.text()
  } catch {
    body = undefined
  }

  const res = await fetch(`${ISA_API}/api/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body || undefined,
  })

  const data = await res.json()
  return NextResponse.json(data, { status: res.status })
}
