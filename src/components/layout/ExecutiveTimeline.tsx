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
    tagColor: 'text-brand-primary border-brand-primary/30 bg-brand-primary/5',
    kpis: ['+30% GMV', 'ERP Integrado', 'TMS Automatizado'],
    desc: 'Responsável pela operação digital da indústria nacional do setor de bebidas e equipamentos. Define estratégia de presença nos principais marketplaces, posicionamento de marca e interface entre Comercial, Logística, TI e Diretoria. Liderou automação de processamento de pedidos, rastreio e integração logística. Conduziu integração do ERP corporativo (Microsoft Dynamics) via Hubs de E-commerce. Reestruturou fluxo de assistência técnica com validação fiscal obrigatória por fases.'
  },
  {
    company: 'Dufthare — Consultoria Estratégica',
    role: 'Consultor de Estratégia Digital & Operações B2B/B2C',
    date: 'Fev/2024 – Atual',
    tag: 'Consultoria',
    tagColor: 'text-brand-success border-brand-success/30 bg-brand-success/5',
    kpis: ['Transformação Digital', 'BPMN', 'CRM B2B'],
    desc: 'Consultoria independente voltada à transformação digital de empresas de médio porte. Atende C-Level e fundadores com diagnóstico de operação, redesenho de processos e estruturação de canais de aquisição. Digitalização de operações analógicas e modelagem em fluxogramas digitais com identificação de gargalos e proposta de automação por etapa.'
  },
  {
    company: "Perlavita — Distribuidor Eko'7",
    role: 'Líder de Projeto — Canais Digitais e Operações',
    date: 'Ago/2024 – Out/2024',
    tag: 'E-commerce',
    tagColor: 'text-brand-blue border-brand-blue/30 bg-brand-blue/5',
    kpis: ['Ativação de Canais', 'Controle de Estoque', 'Fiscal & Expedição'],
    desc: 'Liderou a criação do ecossistema digital da marca: ativação de canais de venda, inteligência competitiva e modelagem de processos para controle integrado de estoque, fiscal e expedição.'
  },
  {
    company: 'Goprec Capital LTDA',
    role: 'Especialista em Processos & Aquisição B2B',
    date: 'Jun/2024 – Ago/2024',
    tag: 'Mercado Financeiro',
    tagColor: 'text-brand-indigo border-brand-indigo/30 bg-brand-indigo/5',
    kpis: ['Funil B2B', 'Qualificação de Leads', 'CRM Institucional'],
    desc: 'Estruturação de processos comerciais para captação de clientes institucionais de alto valor. Funis de venda para o mercado financeiro com qualificação de leads, réguas de nutrição e CRM.'
  },
  {
    company: 'Universidade Marketplace',
    role: 'Analista de Dados & Performance — E-commerce',
    date: 'Mai/2023 – Fev/2024',
    tag: 'Dados & Analytics',
    tagColor: 'text-white/40 border-white/10 bg-white/5',
    kpis: ['Curva ABC', 'Dashboards Executivos', 'ML & Amazon Ads'],
    desc: 'Análise de performance de vendas para sellers de Mercado Livre e Amazon. Gestão de portfólio por curva ABC, otimização de Ads e criação de dashboards executivos de receita, faturamento e margem.'
  }
];

function TimelineCard({ item, isEven, index }: { item: typeof EXPERIENCE_DATA[0], isEven: boolean, index: number }) {
  const [expanded, setExpanded] = useState(false);
  const SHORT_DESC = item.desc.slice(0, 160);
  const needsTrunc = item.desc.length > 160;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-5%" }}
      className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-0 md:gap-12 relative`}
    >
      {/* ── Timeline Node ── */}
      <div className="absolute left-4 md:left-1/2 top-4 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#050505] border border-white/20 z-10 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)]">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
      </div>

      {/* ── Content Card ── */}
      <div className={`w-full md:w-[47%] pl-12 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
        
        {/* Tag + Date */}
        <div className={`flex items-center gap-3 mb-3 flex-wrap ${!isEven ? 'md:justify-end' : ''}`}>
          <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${item.tagColor}`}>
            {item.tag}
          </span>
          <div className="flex items-center gap-1.5 text-white/30">
            <Calendar className="w-3 h-3" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-primary/80">
              {item.date}
            </span>
          </div>
        </div>

        {/* Company + Role */}
        <h3 className="text-base md:text-lg font-bold text-white mb-1 leading-snug uppercase italic tracking-tight">
          {item.company}
        </h3>
        <div className={`flex items-start gap-1.5 mb-4 text-white/40 text-[10px] uppercase font-bold tracking-widest ${!isEven ? 'md:justify-end' : ''}`}>
          <GitCommit className="w-3 h-3 mt-0.5 flex-shrink-0" />
          <span className="leading-tight">{item.role}</span>
        </div>

        {/* KPI Badges */}
        <div className={`flex flex-wrap gap-2 mb-4 ${!isEven ? 'md:justify-end' : ''}`}>
          {item.kpis.map((kpi) => (
            <span key={kpi} className="text-[9px] font-mono font-bold text-white/30 border border-white/8 rounded px-2 py-0.5 bg-white/[0.02] uppercase tracking-wide">
              {kpi}
            </span>
          ))}
        </div>

        {/* Description with truncation */}
        <p className="text-xs md:text-sm text-foreground/40 leading-relaxed font-light italic">
          {needsTrunc && !expanded
            ? <>{SHORT_DESC}<span className="text-white/20">…</span></>
            : item.desc
          }
        </p>
        {needsTrunc && (
          <button
            onClick={() => setExpanded(v => !v)}
            className={`mt-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-brand-primary transition-colors ${!isEven ? 'md:self-end' : ''}`}
          >
            {expanded ? 'Ver menos' : 'Ver mais'}
            <ChevronDown className={`w-3 h-3 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>

      {/* ── Desktop spacer + KPI side card ── */}
      <div className={`hidden md:flex md:w-[47%] flex-col gap-2 ${isEven ? 'items-end' : 'items-start'}`}>
        <div className={`inline-flex flex-col gap-1.5 p-4 rounded-xl border border-white/5 bg-white/[0.01] ${isEven ? 'items-end text-right' : 'items-start text-left'}`}>
          {item.kpis.map((kpi) => (
            <span key={kpi} className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
              ↗ {kpi}
            </span>
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
        {/* Continuous Line — left on mobile, center on desktop */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2" />
        
        <div className="space-y-12 md:space-y-20">
          {EXPERIENCE_DATA.map((item, idx) => (
            <TimelineCard key={idx} item={item} isEven={idx % 2 === 0} index={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}
