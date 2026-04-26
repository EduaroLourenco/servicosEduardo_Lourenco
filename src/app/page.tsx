'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, ExternalLink } from 'lucide-react'
import { ExpertiseGrid } from '@/components/interactive/ExpertiseGrid'
import { ExecutiveTimeline } from '@/components/layout/ExecutiveTimeline'
import { ExecutiveBento } from '@/components/layout/ExecutiveBento'
import { QuickNav } from '@/components/layout/QuickNav'
import { SobreMim } from '@/components/sections/SobreMim'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 md:gap-40 pb-40">

      {/* ── AMBIENT GLOWS ── */}
      <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden">
        <div className="absolute w-[900px] h-[600px] bg-brand-primary/[0.04] blur-[180px] rounded-full -top-1/4 -right-1/3" />
      </div>

      {/* ── HERO ── */}
      <section id="perfil" className="pt-28 sm:pt-36 md:pt-52 pb-4 md:pb-10 container mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-6 md:mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_var(--color-brand-glow)]" />
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] text-[#D1D5DB]">
              Coordenador de E-commerce &amp; Estratégia Digital
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-[2rem] sm:text-5xl md:text-6xl font-black tracking-tighter mb-5 md:mb-8 leading-[1.1] italic">
            <span className="text-[#FFFFFF]">Eduardo Luiz Lourenço</span>
            <br />
            <span className="text-brand-primary">
              Arquitetura de Operações<br className="sm:hidden" />{' '}&amp; Marketplace.
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-sm md:text-xl text-[#D1D5DB] font-medium leading-snug tracking-tight mb-7 md:mb-10 border-l-2 border-brand-primary/50 pl-4 md:pl-6 uppercase italic">
            A intersecção entre o crescimento comercial{' '}
            e a infraestrutura tecnológica escalável.
          </h2>

          {/* Body */}
          <p className="text-sm md:text-base text-[#D1D5DB] leading-relaxed font-light max-w-3xl mb-9 md:mb-14">
            Estrategista Digital com formação em{' '}
            <strong className="text-[#FFFFFF] font-semibold">Administração</strong> e{' '}
            <strong className="text-[#FFFFFF] font-semibold">Engenharia de Software</strong>.
            Atuação direta na definição de posicionamento de marca, gestão de canais em escala e
            liderança de integrações sistêmicas complexas entre ERPs Industriais e Hubs de E-commerce.
            Decisões orientadas a dados via{' '}
            <strong className="text-brand-primary font-semibold">Google Analytics 4 (GA4)</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link
              href="/curriculo/curriculo.pdf"
              target="_blank"
              className="haptic-touch bg-brand-primary text-[#0A0A0A] px-7 md:px-9 py-3.5 md:py-4 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:bg-brand-hover shadow-[0_0_30px_var(--color-brand-glow)] hover:shadow-[0_0_50px_var(--color-brand-glow)]"
            >
              Baixar Currículo (PDF) <Download className="w-4 h-4" />
            </Link>
            <a
              href="https://www.linkedin.com/in/eduardo-louren%C3%A7o-7a5739260/"
              target="_blank"
              rel="noopener noreferrer"
              className="haptic-touch border border-[#222222] bg-[#1C1C1C]/50 text-[#D1D5DB] hover:text-[#FFFFFF] hover:border-[#333333] hover:bg-[#1C1C1C] px-7 md:px-9 py-3.5 md:py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all"
            >
              LinkedIn <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── QUICK NAV ── */}
      <QuickNav />

      {/* ── SOBRE MIM ── */}
      <SobreMim />

      {/* ── EXPERTISE ── */}
      <section id="expertise" className="container mx-auto relative px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-10 md:mb-14"
        >
          <span className="section-label mb-3 block">
            <span className="w-4 h-px bg-brand-primary/50 inline-block mr-2" />
            Competências Centrais
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] tracking-tighter uppercase italic mb-3">Ecosistema de Expertise</h2>
          <div className="h-0.5 w-14 bg-gradient-to-r from-brand-primary to-transparent rounded-full" />
        </motion.div>
        <ExpertiseGrid />
      </section>

      {/* ── TRAJETÓRIA ── */}
      <section id="experiencia" className="container mx-auto relative px-5 sm:px-8 overflow-hidden">
        <div className="absolute right-0 top-0 rotate-90 origin-right text-[5rem] md:text-[9rem] font-black text-[#FFFFFF]/5 uppercase pointer-events-none select-none tracking-tighter">
          EXPERIÊNCIA
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-16 md:mb-28"
        >
          <span className="section-label mb-3 block">
            <span className="w-4 h-px bg-brand-primary/50 inline-block mr-2" />
            Histórico Profissional
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] tracking-tighter mb-3 italic uppercase">Trajetória Profissional</h2>
          <p className="text-sm text-[#D1D5DB] font-light italic">
            Projetos estratégicos e operações críticas em escala nacional.
          </p>
        </motion.div>
        <ExecutiveTimeline />
      </section>

      {/* ── CHANCELA ── */}
      <section id="formacao" className="container mx-auto pt-8 relative px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-12 md:mb-20 text-center mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] tracking-tighter uppercase italic mb-3 leading-none">Chancela &amp; Especialidades</h2>
          <p className="text-[10px] text-[#D1D5DB] font-mono tracking-[0.4em] uppercase italic">Registro de Qualificações</p>
        </motion.div>
        <ExecutiveBento />
      </section>

      {/* ── CONTATO FINAL ── */}
      <section id="contato" className="container mx-auto px-5 sm:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-14">
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#FFFFFF] tracking-tighter uppercase italic leading-tight"
          >
            Liderança focada em <br />
            <span className="text-brand-primary">Escala &amp; Estabilidade.</span>
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex justify-center flex-wrap gap-10 md:gap-16"
          >
            {[
              { v: '+30', l: 'Projetos Gerenciados' },
              { v: '5 Anos', l: 'Tempo de Mercado' },
              { v: 'ERP / Hubs / API', l: 'Tecnologias Core' },
            ].map(k => (
              <div key={k.l} className="flex flex-col items-center gap-1.5">
                <span className="text-[9px] font-mono text-[#D1D5DB] uppercase tracking-widest">{k.l}</span>
                <span className="text-xl md:text-2xl font-black text-[#FFFFFF] italic">{k.v}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  )
}
