'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Globe, 
  MessageSquare, 
  UserPlus, 
  Bot, 
  UserCheck, 
  Zap,
  CheckCircle2,
  Cpu
} from 'lucide-react'

const STAGES = [
  { id: 'acq', label: 'Aquisição', icon: Globe, detail: 'Tráfego Orgânico/Pago', color: 'text-brand-primary' },
  { id: 'qual', label: 'Qualificação IA', icon: Bot, detail: 'Agente LLM 24/7', color: 'text-brand-blue' },
  { id: 'att', label: 'Atendente', icon: UserCheck, detail: 'Consultor Técnico B2B', color: 'text-brand-indigo' },
  { id: 'close', label: 'Fechamento', icon: Zap, detail: 'Contrato via N8N/ERP', color: 'text-brand-success' },
]

export function LeadFlowSimulator() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STAGES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full glass-card rounded-[2rem] p-8 border border-white/5 relative overflow-hidden bg-black/20">
      <div className="mb-10 text-center">
         <h4 className="text-sm font-bold text-white uppercase tracking-[0.3em] mb-2">Simulador de Lead Journey</h4>
         <p className="text-[10px] text-white/30 font-mono">AUTOMATIZAÇÃO DE PONTO A PONTO</p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 hidden md:block" />

        {STAGES.map((stage, idx) => {
          const Icon = stage.icon
          const isActive = activeStep === idx
          const isPast = activeStep > idx

          return (
            <div key={stage.id} className="relative z-10 flex flex-col items-center group">
               <motion.div 
                 animate={{ 
                   scale: isActive ? 1.2 : 1,
                   backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.02)'
                 }}
                 className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-500
                   ${isActive ? 'border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'border-white/5'}
                   ${isPast ? 'border-brand-success/40' : ''}`}
               >
                 {isPast ? (
                   <CheckCircle2 className="w-6 h-6 text-brand-success" />
                 ) : (
                   <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-white/20'}`} />
                 )}
               </motion.div>

               <div className="mt-4 text-center">
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-white' : 'text-white/20'}`}>
                    {stage.label}
                  </p>
                  <p className="text-[8px] font-mono text-white/10 mt-1 uppercase">{stage.detail}</p>
               </div>

               {/* Connector for Mobile */}
               {idx < STAGES.length - 1 && (
                 <div className="md:hidden h-8 w-px bg-white/5 my-2" />
               )}
            </div>
          )
        })}
      </div>

      <div className="mt-12 flex flex-col items-center">
         <AnimatePresence mode="wait">
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-4 flex items-center gap-4 max-w-sm"
            >
               <Cpu className="w-4 h-4 text-brand-blue animate-pulse" />
               <p className="text-[10px] text-white/60 leading-relaxed font-mono italic">
                  {activeStep === 0 && 'Monitorando canais de entrada via API Express.'}
                  {activeStep === 1 && 'Agente IA analisando fit cultural e orçamento.'}
                  {activeStep === 2 && 'Direcionando para consultor com contexto total.'}
                  {activeStep === 3 && 'Gerando protocolo de faturamento automático.'}
               </p>
            </motion.div>
         </AnimatePresence>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
    </div>
  )
}
