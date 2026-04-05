'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Megaphone, 
  Heart, 
  CreditCard, 
  ShoppingBag, 
  Gift, 
  RotateCcw,
  Database,
  ArrowDown,
  Info,
  RefreshCcw
} from 'lucide-react'

const FUNNEL_STAGES = [
  { 
    id: 'trafego', 
    label: 'Descoberta & Tráfego', 
    category: 'AQUISIÇÃO',
    icon: Megaphone, 
    color: 'from-brand-blue/40 to-brand-blue/10',
    width: 'w-full',
    desc: 'Atração via Performance Social, Google Shopping e Influenciadores.'
  },
  { 
    id: 'intencao', 
    label: 'Engajamento & Carrinho', 
    category: 'AQUISIÇÃO',
    icon: Heart, 
    color: 'from-brand-blue/30 to-brand-blue/5',
    width: 'w-[90%]',
    desc: 'Navegação estratégica, Wishlist e recuperação de carrinhos abandonados via IA.'
  },
  { 
    id: 'checkout', 
    label: 'Checkout de Alta Conversão', 
    category: 'DECISÃO',
    icon: CreditCard, 
    color: 'from-brand-primary/30 to-brand-primary/10',
    width: 'w-[80%]',
    desc: 'Experiência frictionless e Gateways de pagamento integrados (One-Click).'
  },
  { 
    id: 'venda', 
    label: 'Venda & Faturamento', 
    category: 'DECISÃO',
    icon: ShoppingBag, 
    color: 'from-brand-primary/20 to-brand-primary/5',
    width: 'w-[70%]',
    desc: 'Conversão efetiva com automação fiscal e logística instantânea.'
  },
  { 
    id: 'experiencia', 
    label: 'Unboxing & Experiência', 
    category: 'RETENÇÃO',
    icon: Gift, 
    color: 'from-brand-success/30 to-brand-success/10',
    width: 'w-[60%]',
    desc: 'O primeiro contato físico: Post-purchase experience e encantamento.'
  },
  { 
    id: 'recompra', 
    label: 'Ciclo de Recompra (LTV)', 
    category: 'RETENÇÃO',
    icon: RotateCcw, 
    color: 'from-brand-success/20 to-brand-success/5',
    width: 'w-[50%]',
    desc: 'Fluxos de CRM inteligentes que trazem o cliente de volta para o topo do funil.'
  },
]

export function SalesFunnel() {
  const [activeStage, setActiveStage] = useState<string | null>(null)

  return (
    <div className="w-full relative py-20 px-4 md:px-0 flex flex-col items-center">
      
      {/* ── LOOP DE RECOMPRA (ANIMATED SVG) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
         <svg className="w-full h-full opacity-10">
            <motion.path
              d="M 68%,75% C 85%,75% 85%,25% 68%,25%"
              fill="none"
              stroke="#00D98E"
              strokeWidth="2"
              strokeDasharray="10,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle r="4" fill="#00D98E"
              animate={{
                offsetDistance: ["0%", "100%"]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: "path('M 68%,75% C 85%,75% 85%,25% 68%,25%')" }}
            />
         </svg>
      </div>

      {/* ── LABELS: ZONES (DESKTOP ONLY) ── */}
      <div className="absolute left-0 top-20 bottom-40 w-24 hidden lg:flex flex-col justify-between py-10 pointer-events-none border-l border-white/5">
         <div className="text-[10px] font-mono font-black text-brand-blue rotate-90 origin-left mt-10 tracking-[0.5em]">AQUISIÇÃO</div>
         <div className="text-[10px] font-mono font-black text-brand-primary rotate-90 origin-left tracking-[0.5em]">DECISÃO</div>
         <div className="text-[10px] font-mono font-black text-brand-success rotate-90 origin-left tracking-[0.5em]">RETENÇÃO</div>
      </div>

      {/* ── FUNIL VISUAL ── */}
      <div className="w-full max-w-2xl flex flex-col items-center gap-1">
        {FUNNEL_STAGES.map((stage, idx) => {
          const Icon = stage.icon
          const isActive = activeStage === stage.id
          
          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full flex flex-col items-center"
            >
              <button
                onMouseEnter={() => setActiveStage(stage.id)}
                onMouseLeave={() => setActiveStage(null)}
                className={`relative h-20 ${stage.width} bg-gradient-to-br ${stage.color} border border-white/10 rounded-2xl transition-all duration-500 overflow-hidden group ${isActive ? 'scale-105 border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.05)]' : ''}`}
              >
                {/* Visual Feedback on Loop connection */}
                {stage.id === 'trafego' && (
                  <div className="absolute -top-4 right-1/4 w-px h-8 bg-brand-success/20" />
                )}
                {stage.id === 'recompra' && (
                  <div className="absolute -bottom-4 right-1/4 w-px h-8 bg-brand-success/20" />
                )}

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="px-8 flex items-center justify-between h-full relative z-10">
                   <div className="flex items-center gap-5">
                      <div className={`p-3 rounded-xl bg-black/50 border border-white/10 ${isActive ? 'text-white' : 'text-white/20'}`}>
                         <Icon className="w-5 h-5 transition-transform group-hover:rotate-12" />
                      </div>
                      <div className="flex flex-col items-start">
                         <span className={`text-[11px] font-black uppercase tracking-[0.2em] italic ${isActive ? 'text-white' : 'text-white/30'}`}>
                           {stage.label}
                         </span>
                         <span className="text-[8px] font-mono opacity-20 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{stage.category}</span>
                      </div>
                   </div>
                   
                   {stage.id === 'recompra' && (
                      <RefreshCcw className="w-4 h-4 text-brand-success animate-spin-slow opacity-40" />
                   )}
                </div>
              </button>

              {/* Tooltip Content */}
              <AnimatePresence>
                {isActive && (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.95, y: -10 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 0.95, y: -10 }}
                     className="absolute -right-4 md:-right-32 top-0 z-30 w-56 p-5 rounded-[2rem] bg-black/90 border border-white/10 backdrop-blur-xl shadow-2xl pointer-events-none"
                   >
                      <div className="w-8 h-1 bg-white/10 rounded-full mb-4" />
                      <p className="text-xs text-white/60 font-light leading-relaxed italic">{stage.desc}</p>
                   </motion.div>
                )}
              </AnimatePresence>

              {/* Connector */}
              {idx < FUNNEL_STAGES.length - 1 && (
                <div className="h-6 flex items-center justify-center opacity-10">
                   <ArrowDown className="w-4 h-4 text-white" />
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* ── BASE: ECOSSISTEMA DE DADOS (CRM) ── */}
      <div className="w-full max-w-2xl mt-12">
         <motion.div 
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           className="w-full bg-brand-success/5 border border-brand-success/10 rounded-[2.5rem] p-10 relative overflow-hidden group hover:border-brand-success/30 transition-all"
         >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-success/5 via-transparent to-transparent opacity-50" />
            
            <div className="flex flex-col items-center text-center relative z-10">
               <Database className="w-10 h-10 text-brand-success mb-5" />
               <h4 className="text-sm font-mono font-black text-white uppercase tracking-[0.5em] mb-3 leading-none underline decoration-brand-success/30 underline-offset-8 decoration-2">Motor de Retenção</h4>
               <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest max-w-sm mt-4">
                 Sincronização de dados real-time para ativação de recompra<br/>(Email / WhatsApp / Push Notification)
               </p>
               
               <div className="flex gap-2 mt-8">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-8 h-1 bg-white/5 rounded-full" />
                  ))}
               </div>
            </div>
         </motion.div>
      </div>

      <div className="mt-12 text-center flex items-center gap-3">
         <span className="w-1 h-1 rounded-full bg-brand-success animate-pulse" />
         <span className="text-[10px] font-mono uppercase text-white/10 tracking-[0.8em]">Cyclic_Consumer_Journey_v5.2</span>
      </div>

    </div>
  )
}
