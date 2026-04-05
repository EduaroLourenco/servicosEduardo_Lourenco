'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, 
  MessageSquare, 
  ArrowRight, 
  MousePointer2, 
  Send,
  Zap,
  ShoppingBag,
  Target
} from 'lucide-react'

export function B2BLeadVisualizer() {
  const [leadStage, setLeadStage] = useState(0) // 0: Idle, 1: Clicking, 2: Traveling, 3: Received
  const [isSimulating, setIsSimulating] = useState(false)

  const startSimulation = () => {
    setIsSimulating(true)
    setLeadStage(1)
    setTimeout(() => setLeadStage(2), 1000)
    setTimeout(() => setLeadStage(3), 2500)
  }

  const reset = () => {
    setIsSimulating(false)
    setLeadStage(0)
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-6 glass-card rounded-[3.5rem] shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative">
        
        {/* ── LEFT: BRAND AUTHORITY (Jat Plastic) ── */}
        <div className="relative group flex flex-col">
           <div className="flex items-center gap-3 mb-6 px-4">
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[10px] font-mono font-black text-white/30 uppercase tracking-[0.3em]">Authority_Engine / Jat Plastic</span>
           </div>
           
           <div className="flex-1 bg-white/[0.01] border border-white/10 rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden group-hover:bg-white/[0.03] transition-all">
              <div className="relative z-10">
                 <h4 className="text-3xl font-black text-white tracking-tighter uppercase mb-6 italic">Indústria De<br/>Alta Precisão</h4>
                 <div className="space-y-4 mb-12">
                    <div className="h-2 w-48 bg-white/10 rounded-full" />
                    <div className="h-2 w-32 bg-white/5 rounded-full" />
                 </div>

                 <button 
                   onClick={startSimulation}
                   disabled={isSimulating}
                   className="haptic-touch relative group/cta px-8 py-4 bg-brand-primary text-black font-black uppercase text-[10px] tracking-widest rounded-2xl shadow-[0_10px_40px_rgba(255,215,0,0.1)] transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
                 >
                    Solicitar Orçamento B2B
                    {leadStage === 1 && (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl"
                      >
                         <MousePointer2 className="w-6 h-6 text-black animate-bounce" />
                      </motion.div>
                    )}
                 </button>
              </div>

              {/* Background Decoration */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-primary/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute top-0 right-0 p-8 opacity-20">
                 <Building2 className="w-24 h-24 text-white" />
              </div>
           </div>
        </div>

        {/* ── CONNECTION LOGIC ── */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
           <AnimatePresence>
              {leadStage === 2 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-64 flex items-center justify-center"
                >
                   <motion.div 
                     initial={{ x: -150, opacity: 0 }}
                     animate={{ x: 150, opacity: 1 }}
                     transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                     className="w-14 h-14 bg-[#0c0c0c] border border-brand-primary/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.1)]"
                   >
                      <Target className="w-6 h-6 text-brand-primary animate-pulse" />
                   </motion.div>
                   <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </motion.div>
              )}
           </AnimatePresence>
        </div>

        {/* ── RIGHT: LEAD PERFORMANCE (Merice) ── */}
        <div className="relative group flex flex-col">
           <div className="flex items-center gap-3 mb-6 px-4">
              <div className="w-2 h-2 rounded-full bg-brand-success animate-pulse" />
              <span className="text-[10px] font-mono font-black text-white/30 uppercase tracking-[0.3em]">Performance_Flow / Merice</span>
           </div>

           <div className="flex-1 bg-black border border-white/10 rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden group-hover:border-brand-success/30 transition-all">
              
              {/* WhatsApp Interface Mockup */}
              <div className="flex-1 flex flex-col gap-6 relative">
                 <div className="flex justify-between items-center opacity-40">
                    <div className="flex items-center gap-3">
                       <ShoppingBag className="w-5 h-5 text-brand-success" />
                       <span className="text-[10px] font-mono uppercase tracking-widest text-white">Live_Conversion</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-brand-success" />
                 </div>

                 <div className="flex-1 flex flex-col justify-end gap-4 min-h-[200px]">
                    <AnimatePresence>
                       {leadStage === 3 && (
                         <motion.div 
                           initial={{ opacity: 0, scale: 0.9, y: 20 }}
                           animate={{ opacity: 1, scale: 1, y: 0 }}
                           className="max-w-[85%] self-end bg-brand-success/20 border border-brand-success/30 p-5 rounded-[2rem] rounded-tr-none shadow-xl"
                         >
                            <p className="text-white text-xs leading-relaxed italic">
                               &quot;Vi o anúncio da Merice. Gostaria de receber o catálogo de revenda.&quot;
                            </p>
                            <div className="mt-4 flex justify-between items-center border-t border-brand-success/20 pt-3">
                               <span className="text-[8px] font-mono text-brand-success uppercase tracking-widest">Lead_Score: 9.8</span>
                               <span className="text-[8px] font-mono text-white/20">Agora • Entregue</span>
                            </div>
                         </motion.div>
                       )}
                    </AnimatePresence>
                 </div>

                 <div className="h-16 w-full bg-white/[0.03] border border-white/5 rounded-full flex items-center px-6 justify-between">
                    <div className="w-24 h-2 bg-white/10 rounded-full" />
                    <div className="w-10 h-10 rounded-full bg-brand-success flex items-center justify-center shadow-lg shadow-brand-success/20">
                       <Send className="w-4 h-4 text-black" />
                    </div>
                 </div>
              </div>

              {/* Reset Overlay */}
              <AnimatePresence>
                 {leadStage === 3 && (
                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="absolute inset-0 bg-[#080808]/80 backdrop-blur-md flex flex-col items-center justify-center p-12 text-center"
                   >
                       <Zap className="w-12 h-12 text-brand-success mb-6 animate-pulse" />
                       <h5 className="text-2xl font-black text-white uppercase italic mb-8">Conversão Ativa!</h5>
                       <button 
                         onClick={reset}
                         className="px-6 py-2.5 bg-white/5 border border-white/10 text-[9px] font-black uppercase text-white/40 tracking-widest hover:text-white hover:border-white/20 transition-all rounded-xl"
                       >
                         Reiniciar Protocolo
                       </button>
                   </motion.div>
                 )}
              </AnimatePresence>
           </div>
        </div>

      </div>

      {/* STRATEGIC LOG */}
      <div className="mt-12 p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] flex flex-col md:flex-row gap-8 items-center">
         <div className="w-16 h-16 rounded-[1.5rem] bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0">
            <Target className="w-8 h-8 text-brand-primary opacity-50" />
         </div>
         <div className="flex-1">
            <h5 className="text-white font-black uppercase text-xs tracking-widest mb-2">Conceito Operacional: Bi-Polaridade de UX</h5>
            <p className="text-foreground/50 text-sm leading-relaxed font-light">
               O design industrial (<strong className="text-white">Jat Plastic</strong>) protege o tráfego frio com prova técnica. <br className="hidden md:block" />
               O design de performance (<strong className="text-white">Merice</strong>) remove barreiras convertendo intenção em diálogo direto via WhatsApp.
            </p>
         </div>
         <div className="hidden xl:flex items-center gap-6 border-l border-white/5 pl-8">
            <div className="text-center">
               <p className="text-[9px] text-white/30 uppercase font-mono mb-1">Taxa Conversão</p>
               <p className="text-2xl font-black text-brand-success tracking-tighter">8.4%</p>
            </div>
            <div className="text-center">
               <p className="text-[9px] text-white/30 uppercase font-mono mb-1">CPA Lead</p>
               <p className="text-2xl font-black text-white tracking-tighter">R$ 4.20</p>
            </div>
         </div>
      </div>

    </div>
  )
}
