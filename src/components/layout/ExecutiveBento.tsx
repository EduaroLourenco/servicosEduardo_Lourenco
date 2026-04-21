'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Cpu, Briefcase, Database, Target, Users, GitMerge, TrendingUp, Code } from 'lucide-react'

export function ExecutiveBento() {
  return (
    <div id="formacao" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mb-24">
      {/* Card 1: Formação */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl group flex flex-col justify-between"
      >
        <div>
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            <GraduationCap className="w-5 h-5 text-brand-primary" />
          </div>
          <h3 className="text-xl font-bold text-white mb-6 uppercase italic tracking-tight">Formação Acadêmica</h3>
          <ul className="space-y-4">
             <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                <p className="text-sm text-foreground/50 leading-relaxed font-light">
                   <strong className="text-white font-semibold">Engenharia de Software</strong> <br/>
                   <span className="text-[10px] text-white/30 uppercase">UNAERP (2023-2027)</span>
                </p>
             </li>
             <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                <p className="text-sm text-foreground/40 leading-relaxed font-light">
                   <strong className="text-white/60 font-semibold">Técnico em Administração</strong> <br/>
                   <span className="text-[10px] text-white/20 uppercase">ETEC (2020-2022)</span>
                </p>
             </li>
          </ul>
        </div>
      </motion.div>
      {/* Card 2: Tecnologia & Dados */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl group flex flex-col"
      >
        <div className="flex gap-2 mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Database className="w-4 h-4 text-brand-primary" />
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Code className="w-4 h-4 text-brand-primary" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-6 uppercase italic tracking-tight">Tecnologia & Dados</h3>
        <div className="space-y-4">
          {[
            { t: 'Google Analytics 4', d: 'Análise de comportamento do usuário, funis de conversão e decisões data-driven para otimizar vendas em marketplaces.' },
            { t: 'Data Analytics', d: 'Tomada de decisão orientada a dados para otimização de performance de vendas e experiência do usuário em apps web.' },
            { t: 'Análise de Comportamento', d: 'Mapeamento da jornada do usuário com GA4 para identificar gargalos de conversão e oportunidades de crescimento.' },
            { t: 'Integrações APIs', d: 'Conexão entre sistemas via REST e Webhooks para sincronização em tempo real.' },
            { t: 'MongoDB (NoSQL)', d: 'Modelagem orientada a documentos para alta flexibilidade estrutural.' },
            { t: 'BI & Excel', d: 'Dashboards complexos de receita e margem para decisão gerencial.' },
            { t: 'Full-Stack', d: 'Desenvolvimento web completo com Next.js e back-end em Python.' }
          ].map(item => (
            <div key={item.t} className="group/item">
              <h4 className="text-[11px] font-bold text-white/70 uppercase tracking-wider mb-1">{item.t}</h4>
              <p className="text-[10px] text-white/30 font-light leading-relaxed group-hover/item:text-white/50 transition-colors">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Card 3: Comercial & Gestão */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl group flex flex-col space-y-8"
      >
        <div>
          <div className="flex gap-2 mb-6">
             <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Target className="w-4 h-4 text-brand-success" />
             </div>
             <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-brand-success" />
             </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-6 uppercase italic tracking-tight">Comercial</h3>
          <div className="space-y-4">
            {[
              { t: 'Marketplaces', d: 'Gestão em canais (ML, Magalu, Amazon) e arquitetura de catálogo.' },
              { t: 'SEO & Ads', d: 'Ranqueamento orgânico e gestão de tráfego pago (Google/Meta/ML).' },
              { t: 'CRM & LTV', d: 'Estruturação de jornadas B2B/B2C com réguas automatizadas.' }
            ].map(item => (
              <div key={item.t} className="group/item">
                <h4 className="text-[11px] font-bold text-brand-success/70 uppercase tracking-wider mb-1">{item.t}</h4>
                <p className="text-[10px] text-white/30 font-light leading-relaxed group-hover/item:text-white/50 transition-colors">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex gap-2 mb-4">
             <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <GitMerge className="w-3.5 h-3.5 text-white/40" />
             </div>
             <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Users className="w-3.5 h-3.5 text-white/40" />
             </div>
          </div>
          <h3 className="text-xl font-bold text-white/60 mb-6 uppercase italic tracking-tight">Gestão</h3>
          <div className="space-y-4">
            {[
              { t: 'Liderança', d: 'Desenvolvimento de equipes multidisciplinares e gestão de performance.' },
              { t: 'BPMN & Fluxos', d: 'Modelagem de processos operacionais e melhoria contínua.' },
              { t: 'Stakeholders', d: 'Comunicação estratégica com C-Level e alinhamento executivo.' }
            ].map(item => (
              <div key={item.t} className="group/item">
                <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-wider mb-1">{item.t}</h4>
                <p className="text-[10px] text-white/20 font-light leading-relaxed group-hover/item:text-white/40 transition-colors">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
