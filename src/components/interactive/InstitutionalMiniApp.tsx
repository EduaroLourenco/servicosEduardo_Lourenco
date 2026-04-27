'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Shield, Zap, ArrowRight, Menu } from 'lucide-react'

export function InstitutionalMiniApp() {
  return (
    <div className="w-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl group/app">
      {/* Browser Header */}
      <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="bg-slate-900 px-3 py-1 rounded text-[10px] text-slate-500 font-mono">
          www.b2b-institutional.com
        </div>
        <Menu className="w-4 h-4 text-slate-500" />
      </div>

      {/* Page Content */}
      <div className="p-6 space-y-8 h-[400px] overflow-y-auto custom-scrollbar bg-[#0f172a]">
        {/* Nav Simulator */}
        <div className="flex justify-between items-center mb-8">
          <div className="font-black text-xs text-white tracking-tighter">B2B<span className="text-blue-500">CORP</span></div>
          <div className="flex gap-4">
            <div className="h-1.5 w-8 bg-slate-700 rounded" />
            <div className="h-1.5 w-8 bg-slate-700 rounded" />
          </div>
        </div>

        {/* Hero Area */}
        <div className="space-y-4 py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="h-2 w-24 bg-blue-500 rounded-full" 
          />
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-white leading-tight"
          >
            Sistemas de Alta<br />Integridade Corporativa.
          </motion.h4>
          <p className="text-[10px] text-slate-400 max-w-[200px] leading-relaxed">
            Desenvolvemos a infraestrutura técnica que sustenta operações globais com 99.9% de uptime.
          </p>
          <div className="flex gap-3 pt-2">
            <div className="px-4 py-2 bg-blue-600 rounded-lg text-[8px] font-bold text-white">Saiba Mais</div>
            <div className="px-4 py-2 border border-slate-700 rounded-lg text-[8px] font-bold text-slate-300">Contato</div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <Shield className="w-4 h-4" />, label: "Segurança" },
            { icon: <Zap className="w-4 h-4" />, label: "Performance" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl space-y-2"
            >
              <div className="text-blue-500">{item.icon}</div>
              <div className="h-1.5 w-12 bg-slate-600 rounded" />
              <div className="h-1 w-full bg-slate-700 rounded" />
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-900/40 to-slate-800 p-6 rounded-2xl border border-blue-500/20 text-center space-y-3">
          <p className="text-white font-bold text-xs">Pronto para o Próximo Nível?</p>
          <div className="h-1.5 w-32 bg-blue-500/30 mx-auto rounded" />
          <ArrowRight className="w-4 h-4 text-blue-500 mx-auto animate-bounce" />
        </div>
      </div>
    </div>
  )
}
