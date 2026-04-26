'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Database, Target, Users, GitMerge, TrendingUp, Code } from 'lucide-react'

export function ExecutiveBento() {
  return (
    <div id="formacao" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mb-24">

      {/* Card 1: Formação */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="exec-card p-8 rounded-2xl flex flex-col justify-between group"
      >
        <div>
          <div className="w-11 h-11 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center mb-6">
            <GraduationCap className="w-5 h-5 text-brand-primary" />
          </div>
          <h3 className="text-lg font-bold text-[#FFFFFF] mb-6 uppercase italic tracking-tight">Formação Acadêmica</h3>
          <ul className="space-y-5">
            <li className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-brand-primary mt-1.5 shrink-0 shadow-[0_0_8px_var(--color-brand-glow)]" />
              <div>
                <p className="text-sm font-semibold text-[#FFFFFF] leading-snug">Engenharia de Software</p>
                <span className="text-[10px] text-[#D1D5DB]/70 uppercase tracking-wider font-mono">UNAERP · 2023–2027</span>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-[#D1D5DB]/40 mt-1.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#D1D5DB] leading-snug">Técnico em Administração</p>
                <span className="text-[10px] text-[#D1D5DB]/70 uppercase tracking-wider font-mono">ETEC · 2020–2022</span>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Card 2: Tecnologia & Dados */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="exec-card p-8 rounded-2xl flex flex-col group"
      >
        <div className="flex gap-2 mb-6">
          <div className="w-11 h-11 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center">
            <Database className="w-4 h-4 text-brand-primary" />
          </div>
          <div className="w-11 h-11 rounded-xl bg-brand-primary/5 border border-brand-primary/20 flex items-center justify-center">
            <Code className="w-4 h-4 text-brand-primary/70" />
          </div>
        </div>
        <h3 className="text-lg font-bold text-[#FFFFFF] mb-6 uppercase italic tracking-tight">Tecnologia &amp; Dados</h3>
        <div className="space-y-4">
          {[
            { t: 'Google Analytics 4', d: 'Análise de comportamento, funis de conversão e decisões data-driven.' },
            { t: 'Integrações APIs', d: 'Conexão REST/Webhooks entre Hubs (Bling) e ERPs (Dynamics).' },
            { t: 'MongoDB (NoSQL)', d: 'Modelagem orientada a documentos para alta flexibilidade.' },
            { t: 'BI & Excel', d: 'Dashboards complexos de receita e margem para decisão gerencial.' },
            { t: 'Full-Stack', d: 'Next.js no front e Python no back-end.' }
          ].map(item => (
            <div key={item.t} className="group/item border-l-2 border-transparent hover:border-brand-primary/40 pl-3 transition-all duration-300">
              <h4 className="text-[11px] font-bold text-[#FFFFFF] uppercase tracking-wider mb-0.5">{item.t}</h4>
              <p className="text-[10px] text-[#D1D5DB] font-light leading-relaxed group-hover/item:text-[#FFFFFF] transition-colors">{item.d}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Card 3: Comercial & Gestão */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="exec-card p-8 rounded-2xl flex flex-col space-y-8 group"
      >
        <div>
          <div className="flex gap-2 mb-6">
            <div className="w-11 h-11 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center">
              <Target className="w-4 h-4 text-brand-primary" />
            </div>
            <div className="w-11 h-11 rounded-xl bg-brand-primary/5 border border-brand-primary/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-brand-primary/70" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-[#FFFFFF] mb-5 uppercase italic tracking-tight">Comercial</h3>
          <div className="space-y-4">
            {[
              { t: 'Marketplaces', d: 'Gestão em canais (ML, Magalu, Amazon) e arquitetura de catálogo.' },
              { t: 'SEO & Ads', d: 'Ranqueamento orgânico e tráfego pago (Google/Meta/ML).' },
              { t: 'CRM & LTV', d: 'Jornadas B2B/B2C com réguas automatizadas de nutrição.' }
            ].map(item => (
              <div key={item.t} className="group/item border-l-2 border-transparent hover:border-brand-primary/40 pl-3 transition-all duration-300">
                <h4 className="text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-0.5">{item.t}</h4>
                <p className="text-[10px] text-[#D1D5DB] font-light leading-relaxed group-hover/item:text-[#FFFFFF] transition-colors">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-[#2A2A2A] border border-[#333333] flex items-center justify-center">
              <GitMerge className="w-3.5 h-3.5 text-[#D1D5DB]" />
            </div>
            <div className="w-9 h-9 rounded-lg bg-[#2A2A2A] border border-[#333333] flex items-center justify-center">
              <Users className="w-3.5 h-3.5 text-[#D1D5DB]" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-[#FFFFFF] mb-4 uppercase italic tracking-tight">Gestão</h3>
          <div className="space-y-4">
            {[
              { t: 'Liderança', d: 'Equipes multidisciplinares e gestão de performance por OKRs.' },
              { t: 'BPMN & Fluxos', d: 'Modelagem de processos operacionais e melhoria contínua.' },
              { t: 'Stakeholders', d: 'Comunicação estratégica com C-Level e alinhamento executivo.' }
            ].map(item => (
              <div key={item.t} className="group/item border-l-2 border-transparent hover:border-[#D1D5DB]/40 pl-3 transition-all duration-300">
                <h4 className="text-[11px] font-bold text-[#FFFFFF] uppercase tracking-wider mb-0.5">{item.t}</h4>
                <p className="text-[10px] text-[#D1D5DB] font-light leading-relaxed group-hover/item:text-[#FFFFFF] transition-colors">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
