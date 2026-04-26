'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, GitCommit, ChevronDown } from 'lucide-react'

const EXPERIENCE_DATA = [
  {
    company: 'Chopeiras Memo',
    role: 'Coordenador de E-commerce & Estratégia de Marketplace',
    date: 'Out/2024 – Atual',
    tag: 'Indústria Nacional',
    kpis: ['+30% GMV', 'ERP Integrado', 'TMS Automatizado'],
    summary: 'Liderança da operação digital da indústria com integração ERP (Microsoft Dynamics) e automação logística completa.',
    desc: 'Responsável pela operação digital da indústria nacional do setor de bebidas e equipamentos. Define estratégia de presença nos principais marketplaces, posicionamento de marca e interface entre Comercial, Logística, TI e Diretoria. Liderou automação de processamento de pedidos, rastreio e integração logística. Conduziu integração do ERP corporativo (Microsoft Dynamics) via Hubs de E-commerce. Reestruturou fluxo de assistência técnica com validação fiscal obrigatória por fases.'
  },
  {
    company: 'Dufthare — Consultoria Estratégica',
    role: 'Consultor de Estratégia Digital & Operações B2B/B2C',
    date: 'Fev/2024 – Atual',
    tag: 'Consultoria',
    kpis: ['Transformação Digital', 'BPMN', 'CRM B2B'],
    summary: 'Diagnóstico e redesenho de operações para C-Level com digitalização de fluxos e automação por etapa.',
    desc: 'Consultoria independente voltada à transformação digital de empresas de médio porte. Atende C-Level e fundadores com diagnóstico de operação, redesenho de processos e estruturação de canais de aquisição. Digitalização de operações analógicas e modelagem em fluxogramas digitais com identificação de gargalos e proposta de automação por etapa.'
  },
  {
    company: "Perlavita — Distribuidor Eko'7",
    role: 'Líder de Projeto — Canais Digitais e Operações',
    date: 'Ago/2024 – Out/2024',
    tag: 'E-commerce',
    kpis: ['Ativação de Canais', 'Controle de Estoque', 'Fiscal & Expedição'],
    summary: 'Criação do ecossistema digital: ativação de canais, controle integrado de estoque, fiscal e expedição.',
    desc: 'Liderou a criação do ecossistema digital da marca: ativação de canais de venda, inteligência competitiva e modelagem de processos para controle integrado de estoque, fiscal e expedição.'
  },
  {
    company: 'Goprec Capital LTDA',
    role: 'Especialista em Processos & Aquisição B2B',
    date: 'Jun/2024 – Ago/2024',
    tag: 'Mercado Financeiro',
    kpis: ['Funil B2B', 'Qualificação de Leads', 'CRM Institucional'],
    summary: 'Estruturação de funis de venda B2B para captação de clientes institucionais de alto valor.',
    desc: 'Estruturação de processos comerciais para captação de clientes institucionais de alto valor. Funis de venda para o mercado financeiro com qualificação de leads, réguas de nutrição e CRM.'
  },
  {
    company: 'Universidade Marketplace',
    role: 'Analista de Dados & Performance — E-commerce',
    date: 'Mai/2023 – Fev/2024',
    tag: 'Dados & Analytics',
    kpis: ['Curva ABC', 'Dashboards Executivos', 'ML & Amazon Ads'],
    summary: 'Análise de performance e gestão de portfólio por curva ABC para sellers de Mercado Livre e Amazon.',
    desc: 'Análise de performance de vendas para sellers de Mercado Livre e Amazon. Gestão de portfólio por curva ABC, otimização de Ads e criação de dashboards executivos de receita, faturamento e margem.'
  }
];

function TimelineCard({ item, isEven, index }: { item: typeof EXPERIENCE_DATA[0], isEven: boolean, index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-5%" }}
      className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-0 md:gap-12 relative`}
    >
      {/* Node */}
      <div className="absolute left-4 md:left-1/2 top-5 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#0A0A0A] border-2 border-brand-primary/40 z-10 flex items-center justify-center shadow-[0_0_20px_var(--color-brand-glow)]">
        <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_8px_var(--color-brand-glow)]" />
      </div>

      {/* Content */}
      <div className={`w-full md:w-[47%] pl-12 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
        <div className={`flex items-center gap-3 mb-4 flex-wrap ${!isEven ? 'md:justify-end' : ''}`}>
          <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border font-mono text-brand-primary border-brand-primary/40 bg-brand-primary/10`}>{item.tag}</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-brand-primary/60" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-primary">{item.date}</span>
          </div>
        </div>

        <h3 className="text-base md:text-lg font-bold text-[#FFFFFF] mb-1.5 leading-snug uppercase italic tracking-tight">{item.company}</h3>
        <div className={`flex items-start gap-1.5 mb-5 text-[#D1D5DB] text-[10px] uppercase font-bold tracking-widest ${!isEven ? 'md:justify-end' : ''}`}>
          <GitCommit className="w-3 h-3 mt-0.5 flex-shrink-0 text-[#D1D5DB]/60" />
          <span className="leading-tight">{item.role}</span>
        </div>

        <div className={`flex flex-wrap gap-2 mb-5 ${!isEven ? 'md:justify-end' : ''}`}>
          {item.kpis.map(kpi => (
            <span key={kpi} className="kpi-badge">↗ {kpi}</span>
          ))}
        </div>

        <p className="text-sm text-[#D1D5DB] leading-relaxed font-light mb-3">{item.summary}</p>

        {expanded && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-[#D1D5DB]/80 leading-relaxed font-light mt-2 border-l-2 border-brand-primary/30 pl-4 italic"
          >
            {item.desc}
          </motion.p>
        )}

        <button
          onClick={() => setExpanded(v => !v)}
          className={`mt-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all group ${
            expanded ? 'text-[#D1D5DB]/60 hover:text-[#D1D5DB]' : 'text-brand-primary/70 hover:text-brand-primary'
          } ${!isEven ? 'md:ml-auto' : ''}`}
        >
          {expanded ? 'Ver menos' : 'Ver mais detalhes'}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Desktop side card */}
      <div className={`hidden md:flex md:w-[47%] flex-col gap-2 ${isEven ? 'items-end' : 'items-start'}`}>
        <div className={`inline-flex flex-col gap-2.5 p-5 rounded-2xl border border-[#333333] bg-[#1C1C1C] ${isEven ? 'items-end text-right' : 'items-start text-left'}`}>
          {item.kpis.map(kpi => (
            <span key={kpi} className="text-[11px] font-mono text-[#D1D5DB] uppercase tracking-widest">↗ {kpi}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ExecutiveTimeline() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-primary/20 to-transparent md:-translate-x-1/2" />
        <div className="space-y-16 md:space-y-24">
          {EXPERIENCE_DATA.map((item, idx) => (
            <TimelineCard key={idx} item={item} isEven={idx % 2 === 0} index={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}
