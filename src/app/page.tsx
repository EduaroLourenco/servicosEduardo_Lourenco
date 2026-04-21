'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, ArrowRight, ExternalLink } from 'lucide-react'
import { ExpertiseGrid } from '@/components/interactive/ExpertiseGrid'
import { ExecutiveTimeline } from '@/components/layout/ExecutiveTimeline'
import { ExecutiveBento } from '@/components/layout/ExecutiveBento'
import { QuickNav } from '@/components/layout/QuickNav'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 md:gap-40 pb-40">

      {/* ── BACKGROUND: EXECUTIVE OLED DARK MODE ── */}
      <div className="fixed inset-0 -z-50 pointer-events-none bg-[#050505]" />
      <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute w-[800px] h-[800px] bg-brand-primary/5 blur-[160px] rounded-full -top-1/4 -right-1/4" />
        <div className="absolute w-[600px] h-[600px] bg-brand-success/5 blur-[140px] rounded-full bottom-0 -left-1/4" />
      </div>

      {/* ── SEÇÃO A: PERFIL EXECUTIVO (HERO) ─────────────────────────────── */}
      <section id="perfil" className="pt-32 md:pt-48 pb-10 container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto md:mx-0"
        >
          {/* Chancela Executiva */}
          <div className="flex items-center gap-3 mb-6 md:mb-10">
             <div className="w-1 h-1 rounded-full bg-brand-primary" />
             <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/40 leading-relaxed">
               Coordenador de E-commerce & Estratégia Digital
             </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6 md:mb-8 text-white leading-[1.2] md:leading-[1.1] italic">
            Eduardo Luiz Lourenço <br />
            <span className="text-brand-primary">Arquitetura de Operações & Marketplace.</span>
          </h1>

          <h2 className="text-md md:text-xl text-foreground/80 font-medium leading-tight tracking-tight mb-8 md:mb-10 border-l border-brand-primary/30 pl-4 md:pl-6 uppercase italic">
             A intersecção entre o crescimento comercial <br className="hidden lg:block"/>
             e a infraestrutura tecnológica escalável.
          </h2>
          
          <p className="text-sm md:text-md text-foreground/60 leading-relaxed font-light max-w-3xl mb-8 md:mb-12 italic">
             Estrategista Digital com formação em <strong className="text-white">Administração</strong> e <strong className="text-white">Engenharia de Software</strong>. Atuação direta na definição de posicionamento de marca, gestão de canais em escala e liderança de integrações sistêmicas complexas entre ERPs Industriais e Hubs de E-commerce. Utilizo dados do <strong className="text-brand-primary">Google Analytics 4 (GA4)</strong> para otimizar a performance de vendas em marketplaces e melhorar a experiência do usuário em aplicações web, tomando decisões fundamentadas em dados (data-driven).
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <Link href="/curriculo/curriculo.pdf" target="_blank" className="haptic-touch bg-white text-black px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-[10px] md:text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:bg-white/90 shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                Baixar Currículo (PDF) <Download className="w-4 h-4" />
             </Link>
             <a href="https://www.linkedin.com/in/eduardo-louren%C3%A7o-7a5739260/" target="_blank" rel="noopener noreferrer" className="haptic-touch border border-white/10 bg-white/5 text-white/40 hover:text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-[10px] md:text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all">
                LinkedIn <ExternalLink className="w-4 h-4" />
             </a>
          </div>
        </motion.div>
      </section>

      {/* ── NAVEGAÇÃO RÁPIDA (ATALHOS ESTRATÉGICOS) ── */}
      <QuickNav />

      {/* ── SEÇÃO B: ECOSISTEMA DE EXPERTISE ─────────────────────────── */}
      <section id="expertise" className="container mx-auto relative px-6">
         <div className="max-w-4xl mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tighter uppercase italic mb-4">Ecosistema de Expertise</h2>
            <div className="h-0.5 w-12 bg-brand-primary/40 rounded-full" />
         </div>
         <ExpertiseGrid />
      </section>
      
      {/* ── SEÇÃO C: TRAJETÓRIA PROFISSIONAL ─────────────────────────────────── */}
      <section id="experiencia" className="container mx-auto pt-16 md:pt-24 relative px-6 overflow-hidden">
        <div className="absolute right-0 top-0 rotate-90 origin-right text-[6rem] md:text-[10rem] font-black text-white/[0.02] uppercase pointer-events-none select-none">
           EXPERIÊNCIA
        </div>

        <div className="max-w-4xl mb-20 md:mb-32">
           <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-4 italic uppercase">Trajetória Profissional</h2>
           <p className="text-sm md:text-base text-white/30 font-light italic">
              Projetos estratégicos e operações críticas em escala nacional.
           </p>
        </div>

        <ExecutiveTimeline />
      </section>

      {/* ── SEÇÃO D: CHANCELA & ESPECIALIDADES ──────────────────────────────────── */}
      <section id="formacao" className="container mx-auto pt-24 md:pt-32 relative px-6">
        <div className="max-w-4xl mb-12 md:mb-20 text-center mx-auto">
           <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tighter uppercase italic mb-4 leading-none">Chancela & Especialidades</h2>
           <p className="text-[9px] md:text-[10px] text-white/10 font-mono tracking-[0.3em] md:tracking-[0.5em] uppercase italic">Registro de Qualificações</p>
        </div>
        
        <ExecutiveBento />
      </section>

      {/* ── SEÇÃO FINAL: CONTATO & DESAFIOS ── */}
      <section id="contato" className="container mx-auto px-6 pt-24 md:pt-32 text-center relative overflow-hidden">
         <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
            <h3 className="text-2xl md:text-5xl font-bold text-white tracking-tighter uppercase italic leading-tight">
               Liderança focada em <br />
               <span className="text-brand-primary">Escala & Estabilidade.</span>
            </h3>
            <div className="flex justify-center flex-wrap gap-8 md:gap-12">
               <div className="flex flex-col items-center gap-1 md:gap-2">
                  <span className="text-[9px] md:text-[10px] font-mono text-white/20 uppercase tracking-widest">Projetos Gerenciados</span>
                  <span className="text-xl md:text-2xl font-bold text-white italic">+30 Cases</span>
               </div>
               <div className="flex flex-col items-center gap-1 md:gap-2">
                  <span className="text-[9px] md:text-[10px] font-mono text-white/20 uppercase tracking-widest">Tempo de Mercado</span>
                  <span className="text-xl md:text-2xl font-bold text-white italic">5 Anos</span>
               </div>
               <div className="flex flex-col items-center gap-1 md:gap-2">
                  <span className="text-[9px] md:text-[10px] font-mono text-white/20 uppercase tracking-widest">Tecnologias Core</span>
                  <span className="text-xl md:text-2xl font-bold text-white italic text-center">ERP Indústria / Hubs / API</span>
               </div>
            </div>
         </div>
      </section>

    </div>
  )
}
