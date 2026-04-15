'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react'

const PHONE = '16994447044'
const PHONE_DISPLAY = '(16) 99444-7044'
const EMAIL = 'eduhlourenco2004@gmail.com'

export default function ContatoPage() {
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  function sendWhatsApp() {
    if (!msg.trim()) return
    const text = encodeURIComponent(msg.trim())
    window.open(`https://wa.me/55${PHONE}?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="min-h-screen flex flex-col">

      {/* Background */}
      <div className="fixed inset-0 -z-50 bg-[#050505]" />
      <div className="fixed inset-0 -z-40 overflow-hidden opacity-15 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-brand-primary/8 blur-[140px] rounded-full top-1/4 left-1/2 -translate-x-1/2" />
      </div>

      <section className="flex-1 flex items-center justify-center container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl flex flex-col gap-4"
        >

          {/* Header simples */}
          <div className="text-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">
              Fale comigo
            </h1>
            <p className="text-sm text-white/30 font-light">
              Eduardo Lourenço
            </p>
          </div>

          {/* Card — Contatos diretos */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 flex flex-col sm:flex-row gap-4">
            {/* Telefone */}
            <a
              href={`tel:+55${PHONE}`}
              className="group flex-1 flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/10 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-success/10 border border-brand-success/20 flex items-center justify-center flex-shrink-0 group-hover:border-brand-success/40 transition-all">
                <Phone className="w-4 h-4 text-brand-success" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/25 mb-0.5">Telefone</p>
                <p className="text-sm font-semibold text-white group-hover:text-brand-success transition-colors">
                  {PHONE_DISPLAY}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="group flex-1 flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/10 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0 group-hover:border-brand-primary/40 transition-all">
                <Mail className="w-4 h-4 text-brand-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/25 mb-0.5">E-mail</p>
                <p className="text-sm font-semibold text-white group-hover:text-brand-primary transition-colors truncate">
                  {EMAIL}
                </p>
              </div>
            </a>
          </div>

          {/* Card — Enviar mensagem no WhatsApp */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-success/10 border border-brand-success/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-brand-success" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">Enviar mensagem no WhatsApp</p>
                <p className="text-[10px] text-white/25 font-mono">{PHONE_DISPLAY}</p>
              </div>
            </div>

            <textarea
              value={msg}
              onChange={e => setMsg(e.target.value)}
              rows={4}
              placeholder="Escreva sua mensagem..."
              className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-white/20 resize-none transition-all font-light leading-relaxed"
            />

            <button
              onClick={sendWhatsApp}
              disabled={!msg.trim() || sent}
              className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${
                sent
                  ? 'bg-brand-success/20 border border-brand-success/30 text-brand-success'
                  : msg.trim()
                  ? 'bg-brand-success text-black hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(0,217,142,0.2)]'
                  : 'bg-white/5 border border-white/8 text-white/20 cursor-not-allowed'
              }`}
            >
              {sent ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Abrindo WhatsApp...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar no WhatsApp
                </>
              )}
            </button>

            <p className="text-[10px] text-white/15 text-center font-mono">
              Ao clicar, o WhatsApp será aberto com a mensagem pronta.
            </p>
          </div>

        </motion.div>
      </section>
    </div>
  )
}
