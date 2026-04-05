'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Server, Database, ShoppingCart, Truck, Activity, ArrowRight, CheckCircle2 } from 'lucide-react'

export function ErpBridge() {
  const [phase, setPhase] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  // Simulation timeline
  useEffect(() => {
    if (!isRunning) return

    if (phase === 0) {
      // 1. Data leaves marketplace
      setTimeout(() => setPhase(1), 800)
    } else if (phase === 1) {
      // 2. Enters bling
      setTimeout(() => setPhase(2), 1200)
    } else if (phase === 2) {
      // 3. Translates to Dynamics
      setTimeout(() => setPhase(3), 1800)
    } else if (phase === 3) {
      // 4. Dynamics sends Billed back to Bling
      setTimeout(() => setPhase(4), 1200)
    } else if (phase === 4) {
      // 5. Bling pings TMS
      setTimeout(() => setPhase(5), 1200)
    } else if (phase === 5) {
      // 6. TMS sends Tracking to Marketplace
      setTimeout(() => setPhase(6), 1800)
    } else if (phase === 6) {
      // End of simulation
      setTimeout(() => {
        setIsRunning(false)
      }, 3000)
    }
  }, [phase, isRunning])

  const startSimulation = () => {
    if (isRunning) return
    setPhase(0)
    setIsRunning(true)
  }

  const reset = () => {
    setPhase(0)
    setIsRunning(false)
  }

  return (
    <div className="w-full glass-card rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col items-center">
      
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
         <div className={`w-[300px] h-[300px] rounded-full blur-[80px] transition-colors duration-700 
           ${phase >= 1 && phase < 3 ? 'bg-brand-primary' : 
             phase >= 3 && phase < 5 ? 'bg-brand-blue' : 
             phase >= 5 ? 'bg-brand-success' : 'bg-transparent'}`} 
         />
      </div>

      <div className="relative z-10 w-full max-w-4xl pt-12 pb-24">
        
        {/* TOP ROW: Marketplace --- Bling --- Dynamics */}
        <div className="flex justify-between items-center w-full relative h-32">
          
          {/* Node: Marketplace */}
          <div className="relative flex flex-col items-center z-20">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 border-[#0A0E27] z-20 transition-all duration-300
              ${phase === 0 || phase === 6 ? 'bg-amber-400 text-black shadow-[0_0_30px_rgba(251,191,36,0.3)]' : 'bg-white/5 text-white/40 border-white/10'}`}>
              <ShoppingCart className="w-8 h-8" />
            </div>
            <span className="mt-4 font-bold text-white tracking-widest uppercase text-xs">Marketplace</span>
          </div>

          {/* Connection MKT -> Bling */}
          <div className="flex-1 relative h-[2px] bg-white/10 mx-4 -mt-8">
            <AnimatePresence>
              {(phase === 1 || phase === 6) && (
                <motion.div 
                  className={`absolute h-[3px] top-1/2 -translate-y-1/2 shadow-[0_0_10px_currentColor] rounded-full
                    ${phase === 6 ? 'bg-brand-success text-brand-success' : 'bg-brand-primary text-brand-primary'}`}
                  initial={{ left: phase === 6 ? "100%" : "0%", width: 0, opacity: 0 }}
                  animate={{ left: phase === 6 ? "0%" : "20%", width: "80%", opacity: 1 }}
                  exit={{ left: phase === 6 ? "0%" : "100%", opacity: 0, width: 0 }}
                  transition={{ duration: 0.8 }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Node: Hub (Bling) */}
          <div className="relative flex flex-col items-center z-20">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 border-[#0A0E27] z-20 transition-all duration-300
              ${phase >= 1 && phase <= 5 ? 'bg-brand-primary text-black shadow-[0_0_30px_rgba(255,215,0,0.4)] scale-110' : 'bg-white/5 text-white/40 border-white/10'}`}>
              <Server className="w-10 h-10" />
            </div>
            <span className="mt-4 font-bold text-brand-primary tracking-widest uppercase text-sm">Hub (Bling)</span>
            <span className="text-[10px] text-white/40 font-mono">Middleware Sync</span>
          </div>

          {/* Connection Bling -> Dynamics */}
          <div className="flex-1 relative h-[2px] bg-white/10 mx-4 -mt-8">
            <AnimatePresence>
              {(phase === 2 || phase === 3) && (
                <motion.div 
                  className={`absolute h-[3px] top-1/2 -translate-y-1/2 shadow-[0_0_10px_currentColor] rounded-full
                    ${phase === 3 ? 'bg-brand-blue text-brand-blue' : 'bg-brand-primary text-brand-primary'}`}
                  initial={{ left: phase === 3 ? "100%" : "0%", width: 0, opacity: 0 }}
                  animate={{ left: phase === 3 ? "20%" : "20%", width: "80%", opacity: 1 }}
                  exit={{ left: phase === 3 ? "0%" : "100%", opacity: 0, width: 0 }}
                  transition={{ duration: 0.8 }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Node: Dynamics */}
          <div className="relative flex flex-col items-center z-20">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 border-[#0A0E27] z-20 transition-all duration-300
              ${phase === 3 ? 'bg-brand-blue text-white shadow-[0_0_40px_rgba(0,112,243,0.6)] scale-125' : phase > 3 ? 'bg-brand-blue/30 text-brand-blue border-brand-blue/50' : 'bg-white/5 text-white/40 border-white/10'}`}>
              <Database className="w-8 h-8" />
            </div>
            <span className="mt-4 font-bold text-white tracking-widest uppercase text-xs">Dynamics ERP</span>
            {phase === 3 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-16 bg-brand-blue text-white text-[10px] uppercase font-bold py-1 px-3 rounded-md whitespace-nowrap"
              >
                Tax/Order Created
              </motion.div>
            )}
          </div>
        </div>

        {/* BOTTOM ROW: TMS directly below Hub */}
        <div className="flex justify-center w-full mt-24 relative">
           {/* Vertical connection Bling <-> TMS */}
           <div className="absolute top-[-96px] left-1/2 -translate-x-1/2 w-[2px] h-24 bg-white/10">
              <AnimatePresence>
                {(phase === 4 || phase === 5) && (
                  <motion.div 
                    className="absolute w-[3px] -left-[0.5px] shadow-[0_0_10px_currentColor] rounded-full bg-brand-success text-brand-success"
                    initial={{ top: phase === 5 ? "100%" : "0%", height: 0, opacity: 0 }}
                    animate={{ top: phase === 5 ? "0%" : "10%", height: "80%", opacity: 1 }}
                    exit={{ top: phase === 5 ? "0%" : "100%", opacity: 0, height: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </AnimatePresence>
           </div>
           
           <div className="relative flex flex-col items-center z-20">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 border-[#0A0E27] z-20 transition-all duration-300
              ${phase >= 5 ? 'bg-brand-success text-black shadow-[0_0_40px_rgba(0,217,142,0.5)] scale-110' : 'bg-white/5 text-white/40 border-white/10'}`}>
              <Truck className="w-8 h-8" />
            </div>
            <span className="mt-4 font-bold text-white tracking-widest uppercase text-xs">TMS Logística</span>
            <span className="text-[10px] text-white/40 font-mono">Cargas Pesadas (&gt;40kg)</span>
          </div>
        </div>

        {/* Direct connection TMS to Marketplace */}
        {phase === 6 && (
           <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ top: 0, left: 0 }}>
             <motion.path 
               d="M 50% 85% Q 10% 85% 10% 25%" 
               stroke="#00D98E" 
               strokeWidth="2" 
               strokeDasharray="5,5"
               fill="none"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: 1, opacity: 0.6 }}
               transition={{ duration: 1 }}
             />
           </svg>
        )}

      </div>

      {/* Control Panel Footer */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-6 mt-6 relative z-30">
        <div className="mb-6 md:mb-0">
          <p className="text-white font-mono text-sm">Status da Integração:</p>
          <p className="text-xl font-bold mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 h-8">
            {!isRunning && phase === 0 && "Sistema ocioso. Aguardando gatilho."}
            {phase === 1 && "1. Data packet leaves Marketplace -> Hub"}
            {phase === 2 && "2. Enters Bling (Middleware Translation)"}
            {phase === 3 && "3. Translates to Dynamics (Tax/Order Creation)"}
            {phase === 4 && "4. Dynamics sends 'Billed' signal back"}
            {phase === 5 && "5. Bling pings TMS (Transportadora)"}
            {phase === 6 && "6. TMS sends Tracking directly back to MKT"}
          </p>
        </div>
        
        <div className="flex gap-4">
          {phase === 6 ? (
            <button 
              onClick={reset}
              className="px-6 py-3 rounded-full bg-white/10 text-white font-bold text-sm tracking-wide hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-brand-success" />
              Operação Geração / Reset
            </button>
          ) : (
            <button 
              onClick={startSimulation}
              disabled={isRunning}
              className={`px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase transition-all flex items-center gap-2 shadow-xl
                ${isRunning 
                  ? 'bg-brand-primary/20 text-brand-primary/50 cursor-not-allowed border border-brand-primary/10' 
                  : 'bg-brand-primary text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]'
                }`}
            >
              {isRunning ? <Activity className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
              {isRunning ? 'Processando Arquitetura...' : 'Simular Venda Carga Pesada (>40kg)'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
