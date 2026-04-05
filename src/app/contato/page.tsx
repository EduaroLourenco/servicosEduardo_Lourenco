'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Send, MessageCircle, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { SpotlightCard } from '@/components/ui/SpotlightCard'

export default function ContatoPage() {
  return (
    <div className="flex flex-col gap-24 pb-32">
      
      {/* ── BACKGROUND: EXECUTIVE OLED DARK MODE ── */}
      <div className="fixed inset-0 -z-50 pointer-events-none bg-[#050505]" />
      <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute w-[800px] h-[800px] bg-brand-primary/5 blur-[160px] rounded-full -top-1/4 -right-1/4" />
      </div>

      {/* HERO SECTION */}
      <section className="pt-40 container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-foreground/50 font-mono tracking-tighter uppercase mb-8 text-[10px]">
             Protocolo: ALINHAMENTO_EXECUTIVO
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white leading-tight">
            Conecte-se &<br />
            <span className="text-foreground/40">Implemente Inteligência.</span>
          </h1>
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto font-light leading-relaxed">
            Acesso direto para avaliação operacional e implementação de arquitetura estratégica. 
            Sob medida para lideranças B2B de alta escala.
          </p>
        </motion.div>
      </section>

      {/* CONTACT MODULE */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          
          {/* FORMULARIO */}
          <SpotlightCard className="lg:col-span-7 p-10 md:p-14 border-white/5 bg-white/[0.01] backdrop-blur-3xl rounded-[2.5rem]" spotlightColor="rgba(255, 255, 255, 0.02)">
             <h2 className="text-2xl font-bold text-white mb-10 tracking-tight">Consulta Técnica</h2>
             <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase font-semibold tracking-widest text-white/30 ml-1">Entidade / Nome</label>
                    <input 
                      type="text" 
                      placeholder="Identificador da Organização..." 
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-white/20 transition-all font-light"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase font-semibold tracking-widest text-white/30 ml-1">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      placeholder="endereco@dominio.com" 
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-white/20 transition-all font-light"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                   <label className="text-[10px] uppercase font-semibold tracking-widest text-white/30 ml-1">Contexto Operacional (Gargalos)</label>
                   <textarea 
                     rows={5}
                     placeholder="Descreva brevemente a fricção técnica ou logística em seu ecossistema atual..." 
                     className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-white/20 transition-all font-light resize-none"
                   />
                </div>

                <div className="pt-6 flex justify-end">
                   <button className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all">
                     <Send className="w-4 h-4" /> Enviar Pedido de Alinhamento
                   </button>
                </div>
             </form>
          </SpotlightCard>

          {/* SIDE CONTACTS */}
          <div className="lg:col-span-5 flex flex-col gap-6">
             
             {/* WhatsApp Card */}
             <SpotlightCard className="p-10 border-white/5 bg-white/[0.01] backdrop-blur-3xl rounded-[2.5rem] flex flex-col justify-between" spotlightColor="rgba(0, 217, 142, 0.05)">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-10">
                    <MessageCircle className="w-6 h-6 text-brand-success/60" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Linha Executiva</h3>
                  <p className="text-sm text-foreground/40 leading-relaxed font-light mb-8">
                    Sincronização direta para avaliações técnicas urgentes ou consultas de parceria.
                  </p>
                </div>
                <Link href="#" className="inline-flex items-center gap-2 text-white/60 font-semibold uppercase tracking-widest text-[10px] hover:text-white transition-all group">
                  Conectar via WhatsApp <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
             </SpotlightCard>

             {/* Other Contacts */}
             <SpotlightCard className="p-10 border-white/5 bg-white/[0.01] backdrop-blur-3xl rounded-[2.5rem]" spotlightColor="rgba(255, 255, 255, 0.02)">
                <div className="space-y-10">
                  <div className="flex gap-5 items-start">
                    <div className="p-3 bg-white/5 rounded-xl">
                      <Mail className="w-5 h-5 text-white/30" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-semibold tracking-widest text-white/20 mb-1">Comunicação Direta</p>
                      <p className="font-semibold text-white/80 text-base">contato@eduardolourenco.com</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-start">
                    <div className="p-3 bg-white/5 rounded-xl">
                      <MapPin className="w-5 h-5 text-white/30" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-semibold tracking-widest text-white/20 mb-1">Base Operacional</p>
                      <p className="font-semibold text-white/80 text-base">Brasil / Operações Remotas Globais</p>
                    </div>
                  </div>
                </div>
             </SpotlightCard>

          </div>

        </div>
      </section>

    </div>
  )
}
