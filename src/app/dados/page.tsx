'use client'

import { motion } from 'framer-motion'
import { ExecutiveDashboard } from '@/components/interactive/ExecutiveDashboard'
import { BarChart3, PieChart, TrendingUp, Target } from 'lucide-react'
import { SpotlightCard } from '@/components/ui/SpotlightCard'

export default function DadosPage() {
  return (
    <div className="flex flex-col gap-24 pb-32">
      
      {/* ── BACKGROUND: EXECUTIVE GRAPHITE ── */}
      <div className="fixed inset-0 -z-30 pointer-events-none bg-slate-900" />
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute w-[800px] h-[800px] bg-brand-primary/5 blur-[160px] rounded-full -top-1/4 -right-1/4" />
      </div>

      {/* HERO SECTION */}
      <section className="pt-40 container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <div className="flex items-center gap-3 mb-8">
             <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-md text-[9px] font-mono tracking-[0.2em] text-foreground/40 uppercase">
               Protocolo_Analitico / v4.2
             </span>
             <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white leading-tight">
            Dados Estratégicos &<br />
            <span className="text-slate-400">Inteligência Operacional.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mt-12">
             <p className="text-lg text-slate-200 leading-relaxed font-light max-w-xl text-container">
                Operações de alta performance exigem controle de margem em tempo real. Construímos a ponte de dados que conecta APIs de marketplaces a dashboards executivos, garantindo que cada decisão seja baseada em números sólidos.
             </p>
             
             <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Sincronização', value: 'Live', icon: TrendingUp },
                  { label: 'Integridade', value: '100%', icon: Target },
                ].map((kpi) => (
                  <div key={kpi.label} className="p-6 rounded-2xl border border-slate-700 bg-slate-800/50">
                     <p className="text-[9px] uppercase font-mono text-white/20 mb-2">{kpi.label}</p>
                     <p className="text-3xl font-bold tracking-tighter text-white">{kpi.value}</p>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </section>

      {/* DASHBOARD SECTION */}
      <section className="container mx-auto px-6 pt-24 border-t border-slate-800">
        <div className="mb-16 max-w-3xl text-container">
          <span className="text-[10px] font-mono text-brand-primary mb-4 block uppercase tracking-widest">Ambiente: BI_EXECUTIVE_DASHBOARD</span>
          <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Governança & Performance</h2>
          <p className="text-slate-200 leading-relaxed font-light text-base">
            Visualize o impacto de ajustes sazonais e estratégias comerciais em múltiplos canais. Nossa infraestrutura processa milhares de eventos para entregar uma única fonte da verdade.
          </p>
        </div>
        
        <div className="bg-slate-800/50 border border-slate-700 rounded-[3rem] p-4 md:p-12 backdrop-blur-3xl">
          <ExecutiveDashboard />
        </div>
      </section>

      {/* ADDITIONAL METRICS GRID */}
      <section className="container mx-auto px-6 pt-24 border-t border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
             { title: 'Picos Sazonais', desc: 'Modelagem preditiva para janelas de alta demanda (Black Friday / Feriados).', icon: BarChart3 },
             { title: 'Segurança de Margem', desc: 'Cálculo em tempo real de margens de contribuição por SKU/Canal.', icon: PieChart },
             { title: 'Alertas de KPI', desc: 'Gatilhos automatizados para desvios de ROAS ou limites de estoque.', icon: Target },
           ].map((item, idx) => (
              <SpotlightCard key={idx} className="p-10 border-white/5 bg-white/[0.01]" spotlightColor="rgba(255, 215, 0, 0.02)">
                 <item.icon className="w-6 h-6 text-brand-primary mb-6" />
                 <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                 <p className="text-xs text-foreground/40 leading-relaxed font-light">{item.desc}</p>
              </SpotlightCard>
           ))}
        </div>
      </section>

    </div>
  )
}
