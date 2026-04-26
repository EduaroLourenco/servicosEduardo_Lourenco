'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { User, Code2, TrendingUp, Layers, ArrowRight } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: Layers,
    label: 'Formação Híbrida',
    desc: 'Administração (ETEC) + Engenharia de Software (UNAERP) — une visão de negócio com domínio técnico real.',
  },
  {
    icon: TrendingUp,
    label: 'Comercial & Infraestrutura',
    desc: 'Traduz estratégia comercial em fluxos sistêmicos: ERP → Hub → Marketplace, sem fricção operacional.',
  },
  {
    icon: Code2,
    label: 'Construtor de Sistemas',
    desc: 'Desenvolve soluções end-to-end: dashboards executivos, automações de integração via API e apps web.',
  }
]

export function SobreMim() {
  return (
    <section id="sobre" className="container mx-auto px-5 sm:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mb-10 md:mb-14"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-7 h-7 rounded-lg bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center">
            <User className="w-3.5 h-3.5 text-brand-primary" />
          </div>
          <span className="section-label">Minha História</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] tracking-tighter uppercase italic mb-3">Sobre Mim</h2>
        <div className="h-0.5 w-14 bg-gradient-to-r from-brand-primary to-transparent rounded-full mb-6" />
        <p className="text-sm md:text-base text-[#D1D5DB] leading-relaxed max-w-2xl font-light">
          Sou um profissional de fronteira — opero na intersecção entre{' '}
          <strong className="text-[#FFFFFF] font-semibold">gestão comercial</strong> e{' '}
          <strong className="text-[#FFFFFF] font-semibold">engenharia de software</strong>.
          Minha missão é transformar operações analógicas em ecossistemas digitais escaláveis,
          usando dados como bússola e tecnologia como alavanca.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl">
        {HIGHLIGHTS.map((item, idx) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-5%' }}
              className="exec-card card-hover-neon group p-6 rounded-2xl flex flex-col gap-4"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 bg-brand-primary/10 border border-brand-primary/30">
                <Icon className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#FFFFFF] uppercase tracking-wider mb-2">{item.label}</h3>
                <p className="text-xs text-[#D1D5DB] leading-relaxed font-light group-hover:text-[#FFFFFF] transition-colors duration-300">{item.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.35 }}
        viewport={{ once: true }}
        className="mt-10 md:mt-12 flex flex-wrap gap-8 md:gap-14 items-center max-w-5xl"
      >
        {[
          { value: '+30', label: 'Cases Gerenciados' },
          { value: '5+', label: 'Anos de Mercado' },
          { value: '3', label: 'ERPs Integrados' },
          { value: 'ML · Amazon · Magalu', label: 'Canais Principais' },
        ].map(kpi => (
          <div key={kpi.label} className="flex flex-col gap-1">
            <span className="text-xl md:text-2xl font-black text-[#FFFFFF] italic">{kpi.value}</span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#D1D5DB]">{kpi.label}</span>
          </div>
        ))}
        <a
          href="#experiencia"
          className="ml-auto hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary/80 hover:text-brand-primary transition-colors group"
        >
          Ver Trajetória
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

      <div className="section-divider mt-16 md:mt-20" />
    </section>
  )
}
