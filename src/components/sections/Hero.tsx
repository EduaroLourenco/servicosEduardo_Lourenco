'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-brand-emerald/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Transformamos o caos operacional em um ecossistema digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-emerald">lucrativo.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto"
          >
            A união definitiva entre Engenharia de Software de alta performance e a Gestão Financeira. Operações complexas exigem código escalável e caixa previsível.
          </motion.p>
          <motion.a 
            href="#engenharia"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white px-8 py-4 text-sm font-semibold transition-all hover:bg-white/10 hover:scale-105 backdrop-blur-md"
          >
            Conhecer o Ecossistema
            <ArrowDown className="ml-2 w-4 h-4 animate-bounce" />
          </motion.a>
        </div>

        {/* Bifurcated UI */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.a 
            href="#engenharia"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative p-10 rounded-3xl border border-white/5 glass hover:border-brand-blue/30 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="text-3xl font-bold mb-4 relative z-10 text-brand-blue group-hover:glow-blue duration-300">
              Engenharia & Sistemas
            </h3>
            <p className="text-foreground/70 relative z-10 text-lg">
              Arquitetura de software, sistemas web responsivos e performance extrema para operações que não podem parar.
            </p>
          </motion.a>

          <motion.a 
            href="#gestao"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative p-10 rounded-3xl border border-white/5 glass hover:border-brand-emerald/30 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-brand-emerald/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="text-3xl font-bold mb-4 relative z-10 text-brand-emerald group-hover:glow-emerald duration-300">
              Gestão & Processos
            </h3>
            <p className="text-foreground/70 relative z-10 text-lg">
              BPO Financeiro, automações de backoffice e mapeamento de rotinas operacionais para controle absoluto.
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
