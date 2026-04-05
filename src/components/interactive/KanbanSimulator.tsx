'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FileText, Clock, PlayCircle, ShieldCheck, 
  MapPin, Camera, CheckSquare, Settings, CheckCircle2, ChevronRight, X,
  Maximize2, ArrowDown, Zap
} from 'lucide-react'

// Kanban Phases
const PHASES = [
  { id: 0, title: 'Diagnóstico', icon: FileText, color: 'text-amber-400', bg: 'bg-amber-400' },
  { id: 1, title: 'Orçamento', icon: Clock, color: 'text-blue-400', bg: 'bg-blue-400' },
  { id: 2, title: 'Execução', icon: PlayCircle, color: 'text-indigo-400', bg: 'bg-indigo-400' },
  { id: 3, title: 'Faturado', icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-400' }
]

export function KanbanSimulator() {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const [tasks, setTasks] = useState({
    photo: false,
    checklist: false,
  })

  const resetSimulation = () => {
    setCurrentPhase(0)
    setTasks({ photo: false, checklist: false })
  }

  const handleConfirm = () => {
    setIsModalOpen(false)
    if (currentPhase < PHASES.length - 1) {
      setTimeout(() => {
        setCurrentPhase(prev => prev + 1)
        setTasks({ photo: false, checklist: false })
      }, 400)
    }
  }

  return (
    <div className="w-full glass-card rounded-[2.5rem] p-4 md:p-10 shadow-2xl relative overflow-hidden flex flex-col">
      
      {/* HEADER: OPERATIONAL DASHBOARD */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div className="max-w-md">
          <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-brand-primary mb-2 block">System_Control / OS_Protocol</span>
          <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">Controlador de OS</h3>
        </div>
        <button 
          onClick={resetSimulation}
          className="haptic-touch text-[10px] uppercase tracking-widest font-black text-white/40 hover:text-white px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl transition-all"
        >
          Resetar Sistema
        </button>
      </div>

      {/* KANBAN GRID: STACKS ON MOBILE, HORIZONTAL ON DESKTOP */}
      <div className="flex flex-col lg:flex-row gap-4 h-full relative">
        
        {/* Connection Arrow for Mobile Visual Flow */}
        <div className="lg:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary/20 via-transparent to-transparent -z-10" />

        {PHASES.map((phase, idx) => {
          const Icon = phase.icon
          const isActiveCol = currentPhase === phase.id
          const isDone = currentPhase > phase.id

          return (
            <div 
              key={phase.id} 
              className={`flex-1 flex flex-col bg-white/[0.02] rounded-[2rem] border border-white/5 p-5 transition-all duration-500
                ${isActiveCol ? 'border-brand-primary/20 bg-brand-primary/[0.02] shadow-[0_0_40px_rgba(255,215,0,0.03)]' : 'opacity-40'}`}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                   <div className={`p-2 rounded-xl bg-white/5 ${phase.color}`}>
                      <Icon className="w-4 h-4" />
                   </div>
                   <span className="text-white font-black text-xs uppercase tracking-widest">{phase.title}</span>
                </div>
                {isDone && <CheckCircle2 className="w-4 h-4 text-brand-success" />}
              </div>

              {/* Column Body */}
              <div className="flex-1 min-h-[140px] relative">
                <AnimatePresence mode="popLayout">
                  {isActiveCol && (
                    <motion.div
                      layoutId="os-ticket"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, type: 'spring' }}
                      onClick={() => setIsModalOpen(true)}
                      className="haptic-touch w-full bg-[#121212] border border-white/10 p-6 rounded-2xl cursor-pointer hover:border-brand-primary/40 shadow-xl group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[9px] font-mono font-black text-brand-primary/60 bg-brand-primary/5 border border-brand-primary/10 px-2 py-0.5 rounded uppercase">MLB-9042</span>
                        <div className={`w-2 h-2 rounded-full ${phase.bg} shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-pulse`} />
                      </div>
                      
                      <h4 className="text-white font-bold text-sm mb-2 group-hover:text-brand-primary transition-colors">Manutenção / Rotor-X</h4>
                      <p className="text-white/30 text-[10px] mb-6 flex items-center gap-1.5 uppercase font-mono">
                        <MapPin className="w-3 h-3" /> Filial_S_04
                      </p>
                      
                      <div className="w-full bg-white/5 border border-white/10 text-white/50 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-brand-primary group-hover:text-black transition-all">
                        {currentPhase < 3 ? (
                          <>Validar Protocolo <Maximize2 className="w-3 h-3" /></>
                        ) : (
                          <>Fatura Emitida <ShieldCheck className="w-3 h-3" /></>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Separator Icon */}
              {idx < PHASES.length - 1 && (
                <div className="lg:hidden flex justify-center py-4 opacity-20">
                   <ArrowDown className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* ── TECHNICIAN MOBILE PROTOCOL MODAL ── */}
      <AnimatePresence>
        {isModalOpen && currentPhase < 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-end md:items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-[#080808] w-full max-w-sm rounded-[2.5rem] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden flex flex-col"
            >
              {/* iOS Style Dynamic Island/Header */}
              <div className="p-8 flex flex-col items-center text-center relative">
                 <div className="w-12 h-1 bg-white/20 rounded-full mb-6" />
                 <button 
                   onClick={() => setIsModalOpen(false)}
                   className="absolute top-8 right-8 text-white/20 hover:text-white"
                 >
                   <X className="w-6 h-6" />
                 </button>
                 <ShieldCheck className="w-12 h-12 text-brand-primary mb-4" />
                 <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Protocolo OS</h2>
                 <p className="text-white/40 text-[10px] font-mono mt-1 uppercase tracking-widest">Validar Fase: {PHASES[currentPhase].title}</p>
              </div>

              {/* Tasks List */}
              <div className="px-6 pb-6 space-y-3">
                 <button 
                   onClick={() => setTasks(p => ({ ...p, photo: true }))}
                   className={`haptic-touch w-full flex items-center justify-between p-5 rounded-2xl border transition-all
                     ${tasks.photo ? 'bg-brand-success/10 border-brand-success/30 text-brand-success' : 'bg-white/5 border-white/5 text-white/40'}`}
                 >
                   <div className="flex items-center gap-4">
                     <Camera className="w-5 h-5" />
                     <span className="text-xs font-black uppercase tracking-widest text-left">Registrar<br/>Evidência</span>
                   </div>
                   {tasks.photo && <CheckCircle2 className="w-5 h-5" />}
                 </button>

                 <button 
                   onClick={() => setTasks(p => ({ ...p, checklist: true }))}
                   className={`haptic-touch w-full flex items-center justify-between p-5 rounded-2xl border transition-all
                     ${tasks.checklist ? 'bg-brand-success/10 border-brand-success/30 text-brand-success' : 'bg-white/5 border-white/5 text-white/40'}`}
                 >
                   <div className="flex items-center gap-4">
                     <CheckSquare className="w-5 h-5" />
                     <span className="text-xs font-black uppercase tracking-widest text-left">Checklist<br/>Industrial</span>
                   </div>
                   {tasks.checklist && <CheckCircle2 className="w-5 h-5" />}
                 </button>
              </div>

              {/* Submit Button */}
              <div className="p-6 pt-2">
                 <button 
                   onClick={handleConfirm}
                   disabled={!tasks.photo || !tasks.checklist}
                   className={`w-full py-5 rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-[11px] transition-all flex items-center justify-center gap-3
                     ${tasks.photo && tasks.checklist 
                       ? 'bg-brand-primary text-black shadow-[0_10px_30px_rgba(255,215,0,0.3)] scale-100' 
                       : 'bg-white/5 text-white/20 opacity-50 scale-95'}`}
                 >
                   {tasks.photo && tasks.checklist ? <Zap className="w-4 h-4 fill-current" /> : <Settings className="w-4 h-4 animate-spin-slow" />}
                   {tasks.photo && tasks.checklist ? `Avançar Fluxo` : `Bloqueado por Segurança`}
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
