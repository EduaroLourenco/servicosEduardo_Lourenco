'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight,
  Zap,
  Monitor,
  Fingerprint
} from 'lucide-react'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { KanbanSimulator } from '@/components/interactive/KanbanSimulator'
import { MarketplaceDataGrid } from '@/components/interactive/MarketplaceDataGrid'
import { SaaSFlowSimulator } from '@/components/interactive/SaaSFlowSimulator'
import { Accordion } from '@/components/ui/Accordion'
import { SidebarNav } from '@/components/layout/SidebarNav'

const INTERFACES_SECTIONS = [
  { id: 'mini-apps',     label: 'Mini-Apps',      sublabel: 'Interaction Design' },
  { id: 'design-system', label: 'Design System',  sublabel: 'Tokens & Biblioteca' },
]

export default function InterfacesPage() {
  return (
    <div className="flex flex-col gap-24">
      <SidebarNav sections={INTERFACES_SECTIONS} title="Interfaces" />

      {/* ── BACKGROUND: EXECUTIVE GRAPHITE ── */}
      <div className="fixed inset-0 -z-50 pointer-events-none bg-slate-900" />
      <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute w-[800px] h-[800px] bg-brand-indigo/5 blur-[160px] rounded-full -top-1/4 -right-1/4" />
      </div>

      {/* ── HERO ── */}
      <section className="pt-40 container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <div className="flex items-center gap-3 mb-10">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse" />
             <span className="text-[10px] font-mono tracking-[0.2em] text-foreground/40 uppercase">Arquitetura de Interfaces</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white">
            Design de Produtos Corporativos &<br />
            <span className="text-foreground/40">Engenharia de UI.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-12">
             <div className="lg:col-span-5 space-y-12 text-container">
                <p className="text-lg text-slate-200 leading-relaxed font-light">
                   Interfaces projetadas para ambientes de alta criticidade. Desenvolvemos produtos digitais que traduzem lógica de negócios complexa em experiências intuitivas e sem fricção para SaaS e softwares industriais.
                </p>
                
                {/* SUMÁRIO INTERATIVO */}
                <div className="flex flex-wrap gap-4">
                   <button 
                     onClick={() => document.getElementById('mini-apps')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono"
                   >
                     Mini-Apps
                   </button>
                   <button 
                     onClick={() => document.getElementById('design-system')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono"
                   >
                     Design_System
                   </button>
                </div>
             </div>
             
             {/* PERFORMANCE INDICATORS */}
             <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                {[
                  { label: 'LCP_Frontend', value: '<0.8s', color: 'text-brand-indigo' },
                  { label: 'Acessibilidade', value: 'WCAG', color: 'text-brand-success' },
                ].map((kpi) => (
                  <div key={kpi.label} className="p-8 rounded-3xl border border-slate-700 bg-slate-800/50">
                     <p className="text-[9px] uppercase font-mono text-white/20 mb-2">{kpi.label}</p>
                     <p className={`text-4xl font-bold tracking-tighter ${kpi.color}`}>{kpi.value}</p>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </section>

      {/* ── PROJETOS: MINI-APPS INTERATIVOS ── */}
      <section id="mini-apps" className="container mx-auto px-6 pt-24 border-t border-slate-800">
        <div className="mb-20 max-w-3xl text-container">
           <span className="text-[10px] font-mono text-brand-indigo mb-4 block uppercase tracking-widest">Caso_03: INTERACTION_DESIGN</span>
           <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Componentes de Alta Interatividade</h2>
           <p className="text-slate-200 leading-relaxed font-light text-base mb-8">
              Para softwares complexos, a interface deve ser mais que visual: deve ser funcional. Abaixo, exemplos de ferramentas interativas construídas para otimizar a tomada de decisão.
           </p>
           
           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-brand-success/5 border border-brand-success/20">
              <Zap className="w-4 h-4 text-brand-success" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Nota: Todos os componentes abaixo são funcionais (ver na prática)</span>
           </div>
        </div>

        <div className="flex flex-col gap-24 text-left">
           <div className="space-y-6">
              <h3 className="text-white font-bold text-xl italic tracking-tight">Simulador de Kanban Automatizado</h3>
              <p className="text-slate-300 text-base leading-relaxed mb-8 font-light max-w-2xl">
                 Visualização de fluxo de trabalho industrial com lógica de arrastar e soltar (drag-drop) e atualização de status em tempo real.
              </p>
              <div className="bg-white/[0.01] border border-white/5 rounded-[2rem] p-4 md:p-8">
                 <KanbanSimulator />
              </div>
           </div>

           <div className="space-y-6">
              <h3 className="text-white font-bold text-xl italic tracking-tight">Engine de Planilhas Executivas</h3>
              <p className="text-white/40 text-base leading-relaxed mb-8 font-light max-w-2xl">
                 Interface de grid leve com filtros avançados e cálculo dinâmico de margem, eliminando a dependência de arquivos Excel estáticos.
              </p>
              <div className="bg-white/[0.01] border border-white/5 rounded-[2rem] p-4 md:p-8">
                 <MarketplaceDataGrid />
              </div>
           </div>

           <div className="space-y-6">
              <h3 className="text-white font-bold text-xl italic tracking-tight">Experiência Mobile: SaaS de Agendamento</h3>
              <p className="text-white/40 text-base leading-relaxed mb-8 font-light max-w-2xl">
                 Simulador de interface mobile (iPhone 15 Pro) para serviços de alto ticket. Foco em UX fluida, conversão direta e integração com Webhooks.
              </p>
              <div className="bg-white/[0.01] border border-white/5 rounded-[2rem] p-4 md:p-8">
                 <SaaSFlowSimulator />
              </div>
           </div>
        </div>
      </section>

      {/* ── DESIGN SYSTEM ── */}
      <section id="design-system" className="container mx-auto px-6 pt-32 border-t border-slate-800">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
           <div className="flex-1 space-y-8">
              <div className="text-container">
                <span className="text-[10px] font-mono text-white/30 mb-4 block uppercase tracking-widest">Caso_04: DESIGN_SYSTEM</span>
                <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Ecossistema de Tokens</h2>
                <p className="text-slate-200 leading-relaxed font-light text-base">
                  Construção de uma biblioteca de componentes escalável que garante consistência visual e velocidade de desenvolvimento em múltiplos produtos.
                </p>
              </div>
              
              <div className="space-y-4">
                 <Accordion title="Tokens de Design">
                    Foco em tipografia Bricolage Grotesque e tokens de cores OLED Dark para legibilidade máxima em ambientes industriais.
                 </Accordion>
                 <Accordion title="Componentes Atômicos">
                    Botões, inputs e grids padronizados para reduzir a dívida técnica de front-end.
                 </Accordion>
              </div>
           </div>

           <div className="flex-[1.5] w-full grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: 'Primary', color: 'bg-brand-primary' },
                { label: 'Blue', color: 'bg-brand-blue' },
                { label: 'Success', color: 'bg-brand-success' },
                { label: 'Indigo', color: 'bg-brand-indigo' },
                { label: 'Card', color: 'bg-white/5 border border-white/10' },
                { label: 'Text', color: 'bg-white text-black' },
              ].map((item, i) => (
                <div key={i} className="group relative">
                   <div className={`h-32 w-full rounded-2xl ${item.color} mb-4 transition-transform group-hover:scale-105`} />
                   <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  )
}
