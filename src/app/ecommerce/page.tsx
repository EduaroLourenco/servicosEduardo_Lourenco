'use client'

import { motion } from 'framer-motion'
import { LineChart, BarChart, TrendingUp, Target, ShoppingBag, PieChart, Zap, Truck, Box, ShieldCheck } from 'lucide-react'
import { MarketplaceDataGrid } from '@/components/interactive/MarketplaceDataGrid'
import { SalesFunnel } from '@/components/interactive/SalesFunnel'
import { MarginSimulator } from '@/components/interactive/MarginSimulator'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { Accordion } from '@/components/ui/Accordion'
import { GrowthDashboard } from '@/components/interactive/GrowthDashboard'
import { MarketplaceGrid } from '@/components/interactive/MarketplaceGrid'
import { EcomFlowchart } from '@/components/interactive/EcomFlowchart'
import { SidebarNav } from '@/components/layout/SidebarNav'

const ECOMMERCE_SECTIONS = [
  { id: 'crescimento',  label: 'Dashboard',    sublabel: 'Crescimento' },
  { id: 'estrategia',   label: 'Canais',       sublabel: 'Ecossistema Omni' },
  { id: 'logistica',    label: 'Logística',    sublabel: 'Cargas +40kg' },
  { id: 'margens',      label: 'Margens',      sublabel: 'Engenharia de Lucro' },
  { id: 'funil',        label: 'Funil',        sublabel: 'Aquisição Full-Funnel' },
]

export default function EcommercePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <SidebarNav sections={ECOMMERCE_SECTIONS} title="E-commerce" />

      {/* ── BACKGROUND: EXECUTIVE GRAPHITE ── */}
      <div className="fixed inset-0 -z-50 pointer-events-none bg-slate-900" />
      <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute w-[800px] h-[800px] bg-brand-success/5 blur-[160px] rounded-full -top-1/4 -right-1/4" />
      </div>

      {/* ── HERO: OPERAÇÕES EM ESCALA ── */}
      <section className="pt-32 md:pt-40 container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-7xl"
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
             <span className="text-[9px] md:text-[10px] font-mono tracking-[0.2em] text-foreground/40 uppercase">E-commerce Industrial</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-white leading-tight">
            Operações High-Ticket &<br />
            <span className="text-foreground/40">Inteligência de Marketplace.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8 md:mt-12">
              <div className="lg:col-span-4 space-y-8 md:space-y-12 text-container">
                <p className="text-base md:text-lg text-slate-200 leading-relaxed font-light">
                   Gestão estratégica para e-commerce de escala industrial. Substituímos o &quot;hype&quot; de marketing por precisão de dados, focando em ROAS, margens de lucro e logística de alta complexidade.
                </p>

                {/* GA4 DATA-DRIVEN BADGE */}
                <a
                  href="https://skillshop.credential.net/678f45ba-29da-42c5-b2f2-79981c1c4184"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl border border-[rgba(26,115,232,0.3)] bg-[rgba(26,115,232,0.05)] hover:bg-[rgba(26,115,232,0.1)] transition-all group/badge"
                >
                  <div className="shrink-0 w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="12" width="4" height="9" rx="1" fill="#F9AB00"/>
                      <rect x="10" y="6" width="4" height="15" rx="1" fill="#E37400"/>
                      <rect x="17" y="1" width="4" height="20" rx="1" fill="#1A73E8"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Certificado · Google Skillshop</p>
                    <p className="text-[11px] font-bold text-white/70 group-hover/badge:text-white transition-colors">Data-Driven · GA4 Certified</p>
                  </div>
                </a>
                
                {/* SUMÁRIO INTERATIVO */}
                <div className="flex flex-wrap gap-2 md:gap-4">
                   <button 
                     onClick={() => document.getElementById('estrategia')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-4 md:px-6 py-2.5 md:py-3 rounded-xl bg-brand-success/10 border border-brand-success/20 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-brand-success hover:bg-brand-success/20 transition-all font-mono"
                   >
                     Estratégia_Canais
                   </button>
                   <button 
                     onClick={() => document.getElementById('crescimento')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-4 md:px-6 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono"
                   >
                     Crescimento
                   </button>
                   <button 
                     onClick={() => document.getElementById('logistica')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-4 md:px-6 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono"
                   >
                     Logística TMS
                   </button>
                   <button 
                     onClick={() => document.getElementById('margens')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-4 md:px-6 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all font-mono"
                   >
                     Engenharia_Lucro
                   </button>
                </div>
             </div>
             
             <div className="lg:col-span-8 space-y-4" id="crescimento">
                <div className="flex justify-end pr-2 md:pr-0">
                   <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-success/5 border border-brand-success/20 text-[8px] md:text-[9px] font-bold text-brand-success uppercase tracking-widest">
                      <Zap className="w-3 h-3" /> Ver na prática
                   </div>
                </div>
                <GrowthDashboard />
             </div>
          </div>
        </motion.div>
      </section>

      {/* ── NOVA SEÇÃO: ESTRATÉGIA DE CANAIS & ECOSSISTEMA ── */}
      <section id="estrategia" className="container mx-auto px-6 pt-16 md:pt-24 border-t border-white/5">
        <div className="space-y-12 md:space-y-16">
          <div className="max-w-3xl text-container">
            <span className="text-[9px] md:text-[10px] font-mono text-brand-success mb-3 md:mb-4 block uppercase tracking-widest italic">Alicerce Digital: ESTRATÉGIA_OMNICHANNEL</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white tracking-tight">O Ecossistema de Vendas</h2>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed font-light">
              A dominação de mercado não acontece em um único canal. Estruturamos a presença da marca em múltiplos marketplaces, conectando a flagship store a hubs de alta vazão.
            </p>
          </div>

          <MarketplaceGrid />

          <div className="pt-8 md:pt-12">
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg md:text-xl font-bold text-white italic tracking-tight mb-2 uppercase">Alicerce do Ecossistema</h3>
              <p className="text-xs md:text-sm text-foreground/40 font-light">Integração total entre Reputação, Logística, Growth e Operação.</p>
            </div>
            <EcomFlowchart />
          </div>
        </div>
      </section>

      {/* ── CASE STUDY: LOGÍSTICA DE CARGAS PESADAS (+40KG) ── */}
      <section id="logistica" className="container mx-auto px-6 pt-16 md:pt-24 border-t border-slate-800">
        <div className="flex flex-col gap-12 mb-16 md:mb-32">
           <div className="space-y-8 max-w-4xl">
              <div>
                <span className="text-[9px] md:text-[10px] font-mono text-brand-success mb-3 md:mb-4 block uppercase tracking-widest">Estudo de Caso: LOGÍSTICA PESADA</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white tracking-tight">Cargas Industriais (+40kg)</h2>
                <p className="text-base md:text-lg text-slate-200 leading-relaxed font-light">
                   Resolvendo o gargalo invisível do e-commerce industrial: a entrega de produtos acima de 40kg. Integração de sistemas TMS com fluxos de ERP.
                </p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <Accordion title="O Gap Logístico">
                      Transportadoras padrão não lidam com pesos industriais de forma eficiente. Implementamos uma matriz de multi-transportadoras que seleciona automaticamente o melhor frete especializado por CEP.
                  </Accordion>
                  <Accordion title="Integração Sistêmica">
                      Geração automática de etiquetas para carga paletizada diretamente do faturamento ERP, reduzindo fricção e o tempo de expedição.
                  </Accordion>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-2 md:pt-4">
                <div className="p-5 md:p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
                   <TrendingUp className="w-5 h-5 text-brand-success mb-4" />
                   <p className="text-[7px] md:text-[8px] font-mono text-white/30 uppercase mb-1">Aumento de Faturamento</p>
                   <p className="text-xl md:text-2xl font-bold text-white">+48%</p>
                </div>
                <div className="p-5 md:p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
                   <Zap className="w-5 h-5 text-brand-primary mb-4" />
                   <p className="text-[7px] md:text-[8px] font-mono text-white/30 uppercase mb-1">Eficiência Operacional</p>
                   <p className="text-xl md:text-2xl font-bold text-white">+65%Avg</p>
                </div>
                <div className="p-5 md:p-6 rounded-2xl border border-white/5 bg-brand-success/5 border-brand-success/20">
                   <ShieldCheck className="w-5 h-5 text-brand-success mb-4" />
                   <p className="text-[7px] md:text-[8px] font-mono text-brand-success/60 uppercase mb-1">Reputação & Entrega</p>
                   <p className="text-xs md:text-sm font-bold text-white leading-tight">Entrega Rápida & Segurança Crítica</p>
                </div>
              </div>
           </div>

           <div className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl md:rounded-[3rem] p-4 md:p-8 overflow-x-auto">
              <MarketplaceDataGrid />
           </div>
        </div>
      </section>

      {/* ── FUNIL INTERATIVO & MARGENS ── */}
      <section id="margens" className="container mx-auto px-6 pt-16 md:pt-24 border-t border-white/5">
        <div className="flex flex-col gap-20 md:gap-32">
           
           <div className="space-y-10 md:space-y-12">
              <div className="max-w-xl text-container">
                 <span className="text-[9px] md:text-[10px] font-mono text-brand-primary mb-3 md:mb-4 block uppercase tracking-widest">Seção 02: ENGENHARIA DE LUCRO</span>
                 <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white tracking-tight">Modelagem Financeira</h2>
                 <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
                    Escalar sem visibilidade de margem é perigoso. Construímos simuladores que consideram impostos e taxas de marketplace antes de iniciar qualquer campanha.
                 </p>
              </div>
              <MarginSimulator />
           </div>

           <div className="space-y-10 md:space-y-12" id="funil">
              <div className="max-w-xl text-container">
                 <span className="text-[9px] md:text-[10px] font-mono text-brand-indigo mb-3 md:mb-4 block uppercase tracking-widest">Seção 03: ARQUITETURA DE CONVERSÃO</span>
                 <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white tracking-tight">Aquisição Full-Funnel</h2>
                 <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
                    Conduzindo usuários da descoberta à confiança técnica. Nossa lógica de funil é baseada em autoridade institucional e prova técnica.
                 </p>
              </div>
              <SalesFunnel />
           </div>

        </div>
      </section>

      {/* ── CRM & RETENÇÃO ── */}
      <section className="container mx-auto px-6 pt-16 md:pt-24 border-t border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
           <SpotlightCard className="p-8 md:p-12 border-white/5 bg-white/[0.01]" spotlightColor="rgba(79, 70, 229, 0.03)">
              <PieChart className="w-8 h-8 md:w-10 md:h-10 text-brand-indigo/40 mb-6 md:mb-8" />
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 md:mb-6 italic">Retenção via CRM</h3>
              <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-light mb-6 md:mb-8">
                 Segmentação avançada de clientes para disparar fluxos de comunicação personalizados baseados em frequência e LTV.
              </p>
              <div className="flex gap-2 md:gap-3">
                 <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-white/5 text-white/40 text-[8px] md:text-[9px] font-mono uppercase tracking-widest">Otimização_LTV</div>
                 <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-white/5 text-white/40 text-[8px] md:text-[9px] font-mono uppercase tracking-widest">Protocolo_H2H</div>
              </div>
           </SpotlightCard>

           <SpotlightCard className="p-8 md:p-12 border-white/5 bg-white/[0.01]" spotlightColor="rgba(255, 255, 255, 0.02)">
              <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-white/20 mb-6 md:mb-8" />
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 md:mb-6 italic">Estabilidade Corporativa</h3>
              <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-light mb-6 md:mb-8">
                 Protocolos operacionais que garantem a saúde da marca mesmo durante picos sazonais (Black Friday). Escala sem colapso de infraestrutura.
              </p>
           </SpotlightCard>
        </div>
      </section>

    </div>
  )
}
