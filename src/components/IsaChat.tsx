'use client'

import { useState, useRef, useEffect } from 'react'

const ISA_API = 'http://46.224.217.221:8080'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function IsaChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [started, setStarted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const startChat = async () => {
    if (started) return
    setStarted(true)
    setLoading(true)
    try {
      const res = await fetch(`${ISA_API}/api/chat/start`, { method: 'POST' })
      const data = await res.json()
      setSessionId(data.session_id)
      setMessages([{ role: 'assistant', content: data.message }])
    } catch {
      setMessages([{ role: 'assistant', content: "Hi! I'm ISA. Please call us at (689) 278-5555 to get started!" }])
    } finally {
      setLoading(false)
    }
  }

  const handleOpen = () => {
    setOpen(true)
    if (!started) startChat()
  }

  const sendMessage = async () => {
    if (!input.trim() || !sessionId || loading) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setLoading(true)

    try {
      const res = await fetch(`${ISA_API}/api/chat/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, message: userMsg })
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm having a small issue. Please call us at (689) 278-5555!"
      }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '340px',
            maxHeight: '520px',
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 9999,
            overflow: 'hidden',
            fontFamily: 'inherit',
          }}
        >
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #2c5f2e 0%, #1a3a1b 100%)',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px'
              }}>✨</div>
              <div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>ISA</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}>Design Concierge · Ixora Living</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)',
                cursor: 'pointer', fontSize: '20px', lineHeight: 1, padding: '2px 6px'
              }}
            >×</button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: 'auto', padding: '14px',
            display: 'flex', flexDirection: 'column', gap: '10px',
            background: '#f9f7f4', maxHeight: '340px'
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
              }}>
                <div style={{
                  maxWidth: '82%',
                  padding: '9px 13px',
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.role === 'user' ? '#2c5f2e' : '#fff',
                  color: msg.role === 'user' ? '#fff' : '#333',
                  fontSize: '13px',
                  lineHeight: '1.5',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  whiteSpace: 'pre-wrap',
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '9px 16px', borderRadius: '16px 16px 16px 4px',
                  background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  fontSize: '18px', letterSpacing: '2px'
                }}>···</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '10px 12px',
            borderTop: '1px solid #ede8e0',
            display: 'flex', gap: '8px', background: '#fff'
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message..."
              disabled={loading}
              style={{
                flex: 1, padding: '9px 12px', borderRadius: '20px',
                border: '1px solid #ddd', fontSize: '13px',
                outline: 'none', background: '#f9f7f4',
                fontFamily: 'inherit',
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{
                width: 36, height: 36, borderRadius: '50%',
                background: loading || !input.trim() ? '#ccc' : '#2c5f2e',
                border: 'none', cursor: loading || !input.trim() ? 'default' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', flexShrink: 0, transition: 'background 0.2s',
              }}
            >
              <span style={{ color: '#fff', marginLeft: '2px' }}>➤</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={handleOpen}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2c5f2e 0%, #1a3a1b 100%)',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(44,95,46,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 28px rgba(44,95,46,0.5)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(44,95,46,0.4)'
        }}
        aria-label="Chat with ISA"
      >
        {open
          ? <span style={{ color: '#fff', fontSize: '22px' }}>×</span>
          : <span style={{ fontSize: '24px' }}>💬</span>
        }
      </button>
    </>
  )
}
