'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, CheckCircle, ChevronRight, User } from 'lucide-react'

export function BookingMiniApp() {
  const [step, setStep] = useState(1)
  const [selectedDay, setSelectedDay] = useState(15)

  return (
    <div className="w-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl group/app">
      {/* Header */}
      <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Calendar className="w-4 h-4 text-emerald-500" />
          <div className="font-bold text-white text-xs uppercase tracking-widest">Agendamento<span className="text-emerald-500">PRO</span></div>
        </div>
        <div className="h-1.5 w-16 bg-slate-700 rounded-full overflow-hidden">
          <motion.div 
            animate={{ width: `${(step / 3) * 100}%` }}
            className="h-full bg-emerald-500" 
          />
        </div>
      </div>

      <div className="p-6 h-[400px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h6 className="text-white font-bold text-sm mb-1">Selecione uma Data</h6>
                <p className="text-[10px] text-slate-500">Datas disponíveis para Consultoria Técnica</p>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {[...Array(14)].map((_, i) => (
                  <div key={i} className="h-8 bg-slate-800/30 rounded border border-slate-700/50" />
                ))}
                {[15, 16, 17, 18, 19, 20, 21].map((day) => (
                  <button 
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`h-8 rounded text-[10px] font-bold transition-all ${
                      selectedDay === day 
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setStep(2)}
                className="w-full py-3 bg-emerald-600 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2"
              >
                Continuar <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h6 className="text-white font-bold text-sm mb-1">Suas Informações</h6>
                <p className="text-[10px] text-slate-500">Agendamento para o dia {selectedDay} de Maio</p>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 flex items-center gap-3">
                  <User className="w-4 h-4 text-slate-500" />
                  <div className="h-3 w-32 bg-slate-700 rounded" />
                </div>
                <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <div className="h-3 w-24 bg-slate-700 rounded" />
                </div>
              </div>

              <button 
                onClick={() => setStep(3)}
                className="w-full py-3 bg-emerald-600 rounded-xl text-xs font-bold text-white"
              >
                Confirmar Agendamento
              </button>
              <button onClick={() => setStep(1)} className="w-full text-[10px] text-slate-500 font-bold uppercase">Voltar</button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <h6 className="text-white font-bold text-lg">Tudo Pronto!</h6>
              <p className="text-xs text-slate-400 max-w-[200px] mx-auto leading-relaxed">
                Seu agendamento foi confirmado. Você receberá os detalhes por e-mail.
              </p>
              <button 
                onClick={() => setStep(1)}
                className="px-6 py-2 border border-slate-700 rounded-lg text-[10px] font-bold text-slate-400 hover:text-white transition-all"
              >
                Novo Agendamento
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
