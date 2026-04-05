'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GitMerge, Briefcase, Zap, Calendar } from 'lucide-react'
import { SpotlightCard } from '@/components/ui/SpotlightCard'

const ROLES = [
  {
    company: 'Chopeiras Memo',
    role: 'Coordenador de E-commerce & Estratégia',
    date: 'Out/2024 – Atual',
    desc: 'Liderança comercial omnichannel. Gestão de Ads, calendário sazonal e mix de produtos. Arquitetou a integração do ERP Industrial aos canais digitais e a logística de cargas pesadas via TMS.',
  },
  {
    company: 'Dufthare (Consultoria B2B)',
    role: 'Consultor Estratégico e Arquiteto de Operações',
    date: 'Fev/2024 – Atual',
    desc: 'Liderança em projetos de transformação digital (C-Level). Estruturação de funis de conversão complexos, interfaces UX/UI e digitalização de processos operacionais.',
  },
  {
    company: "Perlavita Distribuidor Eko'7",
    role: 'Líder de Projeto (Canais e Operações)',
    date: 'Ago/2024 – Out/2024',
    desc: 'Mapeamento de novos canais de venda e controle do fluxo operacional de ponta a ponta (fiscal, estoque e expedição).',
  },
  {
    company: 'Goprec Capital LTDA',
    role: 'Especialista em Processos e Aquisição',
    date: 'Jun/2024 – Ago/2024',
    desc: 'Estruturação de processos de captação de leads e construção de funis de vendas B2B High Ticket.',
  },
  {
    company: 'Universidade Marketplace',
    role: 'Analista de Dados e Performance',
    date: 'Mai/2023 – Fev/2024',
    desc: 'Otimização de Ads e relatórios de margem para grandes sellers em Marketplaces.',
  }
];

export function ProfessionalTimeline() {
  return (
    <div className="relative max-w-5xl mx-auto px-4">
      {/* Center Line (Vercel Style) */}
      <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
      
      <div className="space-y-24">
        {ROLES.map((role, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8 md:gap-16`}
            >
              {/* Timeline Point */}
              <div className="absolute left-[20px] md:left-1/2 top-4 -translate-x-1/2 w-6 h-6 rounded-full bg-[#050A1A] border-4 border-brand-primary z-10 shadow-[0_0_20px_rgba(255,215,0,0.4)] flex items-center justify-center">
                 <div className="w-1 h-1 rounded-full bg-brand-primary animate-pulse" />
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-[45%] ${isEven ? 'pl-10 md:pl-0' : 'pl-10 md:pl-0'}`}>
                 <SpotlightCard className="p-8 border-white/5 bg-[#080B1A]/40" spotlightColor="rgba(255, 215, 0, 0.03)">
                    <div className="flex flex-col mb-6">
                       <span className="text-[10px] font-black font-mono text-brand-primary uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                         <Calendar className="w-3 h-3" />
                         {role.date}
                       </span>
                       <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-tight mb-2">
                         {role.company}
                       </h3>
                       <div className="flex items-center gap-2 text-brand-success">
                         <Zap className="w-3 h-3" />
                         <span className="text-[9px] font-black uppercase tracking-[0.2em]">{role.role}</span>
                       </div>
                    </div>

                    <p className="text-sm text-foreground/50 leading-relaxed font-light">
                      {role.desc}
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                       <div className="flex gap-1.5 font-mono text-[8px] text-white/20 uppercase">
                          <span>Ref:</span>
                          <span className="text-white/40">log_{idx + 1}</span>
                       </div>
                       <GitMerge className="w-4 h-4 text-white/10" />
                    </div>
                 </SpotlightCard>
              </div>

              {/* Spacer for large screens */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          )
        })}
      </div>

      {/* End Point */}
      <div className="mt-24 h-24 flex justify-center italic text-white/10 text-[9px] uppercase tracking-[0.5em] font-mono">
         End_Of_Log
      </div>
    </div>
  )
}
