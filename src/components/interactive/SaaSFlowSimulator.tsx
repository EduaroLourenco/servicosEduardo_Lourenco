'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  User, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Bell, 
  Database, 
  Zap,
  Smartphone,
  ArrowLeft,
  Sparkles
} from 'lucide-react'

const SERVICES = [
  { id: 'lash', name: 'Lash Extension', price: 'R$ 180', duration: '2h' },
  { id: 'brow', name: 'Design de Sobrancelha', price: 'R$ 80', duration: '45m' },
  { id: 'micropig', name: 'Micropigmentação', price: 'R$ 450', duration: '3h' },
]

const PROFESSIONALS = [
  { id: 'lilyan', name: 'Lilyan Oliveira', role: 'Master Specialist' },
  { id: 'amanda', name: 'Amanda Silva', role: 'Senior Artist' },
]

const TIMES = ['09:00', '11:00', '14:30', '16:00']

export function SaaSFlowSimulator() {
  const [step, setStep] = useState(1) // 1: Service, 2: Prof, 3: Time, 4: Success
  const [selection, setSelection] = useState({
    service: '',
    professional: '',
    time: ''
  })
  const [showAdminNotify, setShowAdminNotify] = useState(false)

  const reset = () => {
    setStep(1)
    setSelection({ service: '', professional: '', time: '' })
    setShowAdminNotify(false)
  }

  const handleConfirm = () => {
    setStep(4)
    setTimeout(() => {
      setShowAdminNotify(true)
    }, 800)
  }

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 py-12 px-6 glass-card rounded-[3.5rem] shadow-[0_0_100px_rgba(0,0,0,1)] relative overflow-hidden">
      
      {/* ── IPHONE 15 PRO FRAME ── */}
      <div className="relative group shrink-0">
        {/* Outer Glow */}
        <div className="absolute -inset-10 bg-brand-indigo/10 blur-[100px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none" />
        
        {/* Frame Structure */}
        <div className="relative w-[300px] h-[600px] bg-[#0c0c0c] border-[8px] border-[#1f1f1f] rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10">
          
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50 flex items-center justify-between px-3">
             <div className="w-1 h-1 rounded-full bg-brand-indigo/40" />
             <div className="w-2 h-2 rounded-full bg-white/5" />
          </div>

          {/* Status Bar */}
          <div className="h-12 w-full flex justify-between items-end px-8 pb-1">
             <span className="text-[10px] font-black text-white/40">9:41</span>
             <div className="flex gap-1.5 items-center">
                <div className="w-3 h-1.5 rounded-sm bg-white/20" />
                <div className="w-3 h-2 rounded-sm bg-white/40" />
                <div className="w-5 h-2.5 rounded-sm border border-white/20 relative">
                   <div className="absolute left-0 top-0 bottom-0 w-3 bg-white/60 m-[1px]" />
                </div>
             </div>
          </div>

          {/* App Header */}
          <div className="px-6 py-4 flex justify-between items-center border-b border-white/5">
             {step > 1 && step < 4 ? (
               <button onClick={() => setStep(step - 1)} className="text-white/40 hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4" />
               </button>
             ) : (
               <div className="w-4" />
             )}
             <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Studio Lilyan</span>
             <Sparkles className="w-4 h-4 text-brand-indigo animate-pulse" />
          </div>

          {/* Screen Content */}
          <div className="flex-1 overflow-hidden relative">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="s1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 h-full flex flex-col"
                >
                   <h2 className="text-xl font-black text-white mb-6 tracking-tighter">Escolher Serviço</h2>
                   <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
                      {SERVICES.map(s => (
                        <button 
                          key={s.id}
                          onClick={() => { setSelection({...selection, service: s.name}); setStep(2) }}
                          className="haptic-touch w-full text-left p-4 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-brand-indigo/10 hover:border-brand-indigo/30 transition-all group/btn"
                        >
                           <p className="text-white font-bold text-sm mb-1">{s.name}</p>
                           <div className="flex items-center justify-between">
                              <span className="text-[10px] text-white/30 font-mono italic">{s.duration}</span>
                              <span className="text-xs font-black text-brand-indigo">{s.price}</span>
                           </div>
                        </button>
                      ))}
                   </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="s2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 h-full flex flex-col"
                >
                   <h2 className="text-xl font-black text-white mb-6 tracking-tighter">Profissional</h2>
                   <div className="space-y-3">
                      {PROFESSIONALS.map(p => (
                        <button 
                          key={p.id}
                          onClick={() => { setSelection({...selection, professional: p.name}); setStep(3) }}
                          className="haptic-touch w-full text-left p-4 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-brand-indigo/10 hover:border-brand-indigo/30 transition-all flex items-center gap-4"
                        >
                           <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
                              <User className="w-6 h-6 text-white/20" />
                           </div>
                           <div>
                              <p className="text-white font-bold text-sm">{p.name}</p>
                              <p className="text-[10px] text-white/40 uppercase tracking-widest leading-none mt-1">{p.role}</p>
                           </div>
                        </button>
                      ))}
                   </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="s3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 h-full flex flex-col"
                >
                   <h2 className="text-xl font-black text-white mb-6 tracking-tighter">Horário</h2>
                   <div className="grid grid-cols-2 gap-3 mb-8">
                      {TIMES.map(t => (
                        <button 
                          key={t}
                          onClick={() => setSelection({...selection, time: t})}
                          className={`haptic-touch p-4 rounded-2xl border transition-all text-sm font-mono
                            ${selection.time === t 
                              ? 'border-brand-indigo bg-brand-indigo/20 text-brand-indigo' 
                              : 'border-white/5 bg-white/[0.03] text-white/40 hover:bg-white/[0.06]'}`}
                        >
                           {t}
                        </button>
                      ))}
                   </div>

                   <div className="mt-auto space-y-4">
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                         <div className="flex justify-between items-center text-[10px] uppercase font-mono tracking-widest text-white/30">
                            <span>Resumo</span>
                            <Zap className="w-3 h-3 text-brand-indigo" />
                         </div>
                         <p className="text-xs text-white/60">{selection.service} com {selection.professional}</p>
                      </div>
                       <button 
                        disabled={!selection.time}
                        onClick={handleConfirm}
                        className={`haptic-touch w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(99,102,241,0.3)] transition-all ${selection.time ? 'bg-brand-indigo text-white' : 'bg-white/5 text-white/20 cursor-not-allowed'}`}
                      >
                         Confirmar Horário
                      </button>
                   </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="s4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 flex flex-col items-center justify-center h-full text-center"
                >
                   <div className="w-20 h-20 rounded-full bg-brand-indigo/10 border border-brand-indigo/30 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(99,102,241,0.2)]">
                      <CheckCircle2 className="w-10 h-10 text-brand-indigo" />
                   </div>
                   <h2 className="text-2xl font-black text-white mb-2 tracking-tighter">Sucesso!</h2>
                   <p className="text-sm text-white/40 leading-relaxed font-light mb-12">
                      Sua reserva para <strong>{selection.time}</strong> foi processada pelo Ecossistema.
                   </p>
                   <button 
                     onClick={reset}
                     className="px-6 py-3 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:border-white/20 transition-all"
                   >
                     Novo Simulado
                   </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Bar */}
          <div className="h-6 w-full flex justify-center items-center pb-2">
             <div className="w-24 h-[3px] bg-white/10 rounded-full" />
          </div>

        </div>
      </div>

      {/* ── INTERACTION LOG & WEBHOOK ── */}
      <div className="flex-1 max-w-lg space-y-8 py-4">
         <div>
            <div className="flex items-center gap-3 mb-4">
               <div className="px-2 py-1 rounded bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-[9px] font-mono font-black uppercase tracking-widest">Logic_Layer</div>
               <div className="h-px flex-1 bg-white/5" />
            </div>
            <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">Automação v3</h3>
            <p className="text-foreground/50 text-lg font-light leading-relaxed mb-6">
               A interface é o <strong className="text-white">ponto de contato</strong>. A inteligência operacional acontece por trás:
            </p>
            
            <div className="grid grid-cols-1 gap-3">
               {[
                 { icon: Database, label: 'Persistência no Hub Bling (Sync 1s)' },
                 { icon: Bell, label: 'Notificação Direta (App Profissional)' },
                 { icon: Zap, label: 'Disparo de Confirmação WhatsApp' }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.01]">
                    <div className="p-2.5 rounded-xl bg-brand-indigo/5 text-brand-indigo">
                       <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono font-black text-white/60 uppercase tracking-widest">{item.label}</span>
                 </div>
               ))}
            </div>
         </div>

         {/* WEBHOOK NOTIFICATION MOCKUP */}
         <div className="relative h-24">
            <AnimatePresence>
               {showAdminNotify && (
                  <motion.div 
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-0 bg-[#0c0c0c] border border-brand-indigo/30 rounded-[2rem] p-6 shadow-2xl flex items-center gap-6 overflow-hidden"
                  >
                     <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-indigo" />
                     <div className="w-12 h-12 rounded-2xl bg-brand-indigo/10 flex items-center justify-center shrink-0">
                        <Bell className="w-6 h-6 text-brand-indigo animate-bounce" />
                     </div>
                     <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                           <span className="text-[9px] font-mono font-black text-white/20 uppercase tracking-widest">Admin_Dashboard / Webhook</span>
                           <span className="text-[8px] font-mono text-brand-indigo">Agora</span>
                        </div>
                        <p className="text-[11px] text-white/50 leading-tight">
                           Agenda Sincronizada: <span className="text-white font-bold">{selection.service}</span> às <span className="text-white font-bold">{selection.time}</span>.
                        </p>
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
            {!showAdminNotify && (
               <div className="h-full border border-white/5 rounded-[2rem] border-dashed flex items-center justify-center">
                  <p className="text-[10px] font-mono font-black text-white/10 uppercase tracking-widest italic">Aguardando_Webhook_Confirmation...</p>
               </div>
            )}
         </div>
      </div>

    </div>
  )
}
