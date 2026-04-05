'use client'

import { motion } from 'framer-motion'
import {
  Bot, FileText, Zap, Users, Brain,
  MessageSquare, CheckCircle2, Clock,
  GitBranch, Target, Phone, Package,
  BarChart3, Workflow, Terminal, Cpu, ShieldCheck
} from 'lucide-react'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { LiveSvgFlowchart } from '@/components/interactive/LiveSvgFlowchart'
import { Accordion } from '@/components/ui/Accordion'
import { ProcessDashboard } from '@/components/interactive/ProcessDashboard'
import { LeadFlowSimulator } from '@/components/interactive/LeadFlowSimulator'
import { ComplexSacFlow } from '@/components/interactive/ComplexSacFlow'

export default function ProcessosPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-32">

      {/* ── BACKGROUND: EXECUTIVE OLED DARK MODE ── */}
      <div className="fixed inset-0 -z-50 pointer-events-none bg-[#050505]" />
      <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute w-[800px] h-[800px] bg-brand-blue/5 blur-[160px] rounded-full -top-1/4 -right-1/4" />
      </div>

      {/* ── HERO: ARQUITETURA OPERACIONAL ── */}
      <section className="pt-32 md:pt-40 container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-6xl"
        >
          <div className="flex items-center gap-3 mb-6 md:mb-10">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
             <span className="text-[9px] md:text-[10px] font-mono tracking-[0.2em] text-foreground/40 uppercase">Engenharia de Operações</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-white leading-tight">
            Arquitetura Operacional &<br />
            <span className="text-foreground/40">Engenharia de POPs.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8 md:mt-12">
             <div className="lg:col-span-5 space-y-8 md:space-y-12">
                <p className="text-base md:text-lg text-foreground/50 leading-relaxed font-light">
                   Engenharia de workflows que eliminam gargalos manuais. Construímos processos autônomos onde agentes de IA lidam com a lógica repetitiva, permitindo que a camada executiva foque em decisões estratégicas.
                </p>
                
                {/* SUMÁRIO INTERATIVO */}
                <div className="flex flex-wrap gap-2 md:gap-4">
                   <button 
                     onClick={() => document.getElementById('hub-automacao')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-4 md:px-6 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono"
                   >
                     Hub_Automação
                   </button>
                   <button 
                     onClick={() => document.getElementById('pop-explorer')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-4 md:px-6 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono"
                   >
                     Explorador_POP
                   </button>
                </div>
             </div>
             
             <div className="lg:col-span-7 space-y-4">
                <div className="flex justify-end pr-2 md:pr-0">
                   <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-blue/5 border border-brand-blue/20 text-[8px] md:text-[9px] font-bold text-brand-blue uppercase tracking-widest">
                      <Zap className="w-3 h-3" /> Ver na prática
                   </div>
                </div>
                <ProcessDashboard />
             </div>
          </div>
        </motion.div>
      </section>

      {/* ── SEÇÃO 01: OPERAÇÕES DE VENDAS COM AGENTES ── */}
      <section id="hub-automacao" className="container mx-auto px-6 pt-16 md:pt-24 border-t border-white/5">
        <div className="flex flex-col gap-10 md:gap-12 mb-16 md:mb-24">
           <div className="space-y-6 md:space-y-8 max-w-4xl">
              <div>
                <span className="text-[9px] md:text-[10px] font-mono text-brand-primary mb-3 md:mb-4 block uppercase tracking-widest">Protocolo: FUNIL_COGNITIVO</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white tracking-tight">Operações de Vendas com IA</h2>
                <p className="text-sm md:text-lg text-foreground/50 leading-relaxed font-light">
                   Saindo de planilhas manuais para qualificação orientada por agentes. Cada lead é analisado por um LLM segundos após a captura.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                 <Accordion title="Qualificação Estratégica">
                    Nossos agentes de IA analisam a intenção do lead, dados corporativos e estrutura para atribuir um score de prioridade, focando no ICP ideal.
                 </Accordion>
                 <Accordion title="Workflow Técnico">
                    Integração via webhooks customizados (n8n/Make) que conectam a camada de captura ao CRM, garantindo zero perda de dados.
                 </Accordion>
              </div>
           </div>

           <div className="w-full bg-white/[0.01] border border-white/5 rounded-2xl md:rounded-[3rem] p-4 md:p-12 overflow-x-auto">
              <LeadFlowSimulator />
           </div>
        </div>
      </section>

      {/* ── SEÇÃO 02: FRAMEWORK DE POPs ── */}
      <section id="pop-explorer" className="container mx-auto px-6 pt-16 md:pt-24 border-t border-white/5">
        <div className="flex flex-col gap-10 md:gap-12">
           <div className="max-w-3xl">
              <span className="text-[9px] md:text-[10px] font-mono text-brand-indigo mb-3 md:mb-4 block uppercase tracking-widest">Framework: ENGENHARIA_DE_POPs</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white tracking-tight">Vigilância & Documentação Estruturada</h2>
              <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-light">
                 Processos só são escaláveis se forem documentados. Mapeamos cada ponto de contato crítico (do SAC ao Fulfillment) em procedimentos visuais e auditáveis.
              </p>
           </div>
           
        </div>
      </section>
    </div>
  )
}
