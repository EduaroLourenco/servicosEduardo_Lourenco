'use client'

import { motion } from 'framer-motion'
import {
  Code2, Database, Layers,
  ArrowRight, Terminal, Zap, ShieldCheck, Cpu, HardDrive
} from 'lucide-react'
import { ErpBridge } from '@/components/interactive/ErpBridge'
import { KanbanSimulator } from '@/components/interactive/KanbanSimulator'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { Accordion } from '@/components/ui/Accordion'

export default function EngenhariaPage() {
  return (
    <div className="flex flex-col gap-24 pb-32">

      {/* ── BACKGROUND: EXECUTIVE GRAPHITE ── */}
      <div className="fixed inset-0 -z-50 pointer-events-none bg-slate-900" />
      <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute w-[800px] h-[800px] bg-brand-indigo/5 blur-[160px] rounded-full -top-1/4 -right-1/4" />
      </div>

      {/* ── HERO: ARQUITETURA DE SISTEMAS ── */}
      <section className="pt-40 container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <div className="flex items-center gap-3 mb-8">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
             <span className="text-[10px] font-mono tracking-[0.2em] text-foreground/40 uppercase">Sistemas Industriais</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white">
            Arquitetura de Software &<br />
            <span className="text-slate-400">Engenharia de Operações.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-12">
             <div className="space-y-12 text-container">
                <p className="text-lg text-slate-200 leading-relaxed font-light max-w-xl">
                   Desenvolvimento do backbone técnico para escala comercial industrial. Além de APIs convencionais, construímos pontes robustas entre ERPs Industriais e Hubs de E-commerce e logística complexa via TMS, garantindo integridade absoluta de dados.
                </p>
                
                {/* SUMÁRIO INTERATIVO */}
                <div className="flex flex-wrap gap-4">
                   <button 
                     onClick={() => document.getElementById('erp-bridge')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                   >
                     Integração ERP
                   </button>
                   <button 
                     onClick={() => document.getElementById('os-system')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all"
                   >
                     Gestão de O.S.
                   </button>
                </div>
             </div>
             
             {/* TECH STACK BADGES */}
             <div className="flex flex-wrap gap-3">
                {[
                  { name: 'NestJS', type: 'Backend' },
                  { name: 'Prisma ORM', type: 'Database' },
                  { name: 'PostgreSQL', type: 'Data' },
                  { name: 'Dynamics API', type: 'ERP' },
                  { name: 'React/Next.js', type: 'Frontend' },
                ].map((tech) => (
                  <div key={tech.name} className="px-4 py-2 rounded-xl border border-white/5 bg-white/[0.02]">
                     <p className="text-[8px] uppercase font-mono text-white/20 mb-0.5">{tech.type}</p>
                     <p className="text-xs font-bold text-white/70">{tech.name}</p>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </section>

      {/* ── PROJETO 1: PONTE DE INTEGRAÇÃO ERP ── */}
      <section id="erp-bridge" className="container mx-auto px-6 pt-24 border-t border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <div className="text-container">
                <span className="text-[10px] font-mono text-brand-primary mb-4 block uppercase tracking-widest">Caso_01: SISTEMA_ERP_BRIDGE</span>
                <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Integração OMS & ERP Industrial</h2>
                <p className="text-slate-200 leading-relaxed font-light text-base mb-6">
                  Desenvolvimento de middleware de alta performance para sincronização de pedidos industriais em massa diretamente no Microsoft Dynamics. Eliminação total de erros manuais.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-primary/5 border border-brand-primary/20 text-[9px] font-bold text-brand-primary uppercase tracking-widest">
                   <Zap className="w-3 h-3" /> Ver na prática
                </div>
              </div>
              
              <div className="space-y-4">
                 <Accordion title="Desafio Arquitetural">
                    Escalar canais digitais (Marketplaces) mantendo a matriz fiscal industrial segura. O sistema traduz JSONs fragmentados de marketplaces em Orders estruturadas no ERP.
                 </Accordion>
                 <Accordion title="A Stack de Integração">
                    Abordagem API-first utilizando Node.js/NestJS. Polling automatizado de status, geração de etiquetas logísticas (TMS) e conciliação de estoque em tempo real.
                 </Accordion>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                   <Zap className="w-5 h-5 text-brand-primary mb-3" />
                   <p className="text-[10px] font-mono text-white/30 uppercase">Ganho de Eficiência</p>
                   <p className="text-2xl font-bold text-white">+95%</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                   <ShieldCheck className="w-5 h-5 text-brand-success mb-3" />
                   <p className="text-[10px] font-mono text-white/30 uppercase">Conflitos de Dados</p>
                   <p className="text-2xl font-bold text-white">0%</p>
                </div>
              </div>
           </div>

           <div className="relative">
              <div className="absolute -inset-4 bg-brand-primary/5 blur-3xl rounded-full" />
              <ErpBridge />
           </div>
        </div>
      </section>

      {/* ── PROJETO 2: SISTEMA DE GESTÃO DE O.S. FULLSTACK ── */}
      <section id="os-system" className="container mx-auto px-6 pt-32 border-t border-slate-800">
        <div className="text-center mb-20 max-w-3xl mx-auto text-container">
          <span className="text-[10px] font-mono text-brand-success mb-4 block uppercase tracking-widest">Caso_02: ENGINE_DE_PROTOCOLOS</span>
          <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Sistema de O.S. (Assistência Técnica)</h2>
          <p className="text-slate-200 leading-relaxed font-light text-base">
            Plataforma proprietária desenvolvida com **NestJS** e **Prisma ORM** para gerenciar o ciclo de vida completo de operações de assistência técnica com evidências criptográficas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
           <div className="lg:col-span-4 grid grid-cols-1 gap-6">
              <SpotlightCard className="p-8 border-white/5 bg-white/[0.01]" spotlightColor="rgba(0, 217, 142, 0.05)">
                 <Cpu className="w-6 h-6 text-brand-success mb-6" />
                 <h3 className="text-lg font-semibold text-white mb-3">Controle de Gateway</h3>
                 <p className="text-xs text-foreground/40 leading-relaxed mb-6">
                    Gestão rigorosa de ciclos de vida forçando anexo de evidências (photo-proof) antes dos ciclos de faturamento.
                 </p>
                 <div className="flex flex-wrap gap-2">
                    {['NestJS', 'PostgreSQL', 'S3 Storage'].map(t => (
                      <span key={t} className="text-[8px] font-mono text-white/30 border border-white/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                 </div>
              </SpotlightCard>
              
              <SpotlightCard className="p-8 border-white/5 bg-white/[0.01]" spotlightColor="rgba(0, 217, 142, 0.05)">
                 <HardDrive className="w-6 h-6 text-brand-success mb-6" />
                 <h3 className="text-lg font-semibold text-white mb-3">Integridade de Dados</h3>
                 <p className="text-xs text-foreground/40 leading-relaxed mb-6">
                    Schema relacional desenhado via Prisma para suportar milhas de registros históricos com consultas sub-100ms.
                 </p>
              </SpotlightCard>
           </div>

           <div className="lg:col-span-8">
              <KanbanSimulator />
           </div>
        </div>
      </section>

    </div>
  )
}
