'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Heart, Search, Filter, ShoppingBag } from 'lucide-react'

export function EcommerceMiniApp() {
  const [cartCount, setCartCount] = useState(0)

  const products = [
    { name: "Painel Industrial v4", price: "R$ 4.890", img: "bg-blue-500/20" },
    { name: "Módulo TMS Pro", price: "R$ 2.150", img: "bg-slate-700/40" },
    { name: "Hub de Integração", price: "R$ 1.200", img: "bg-indigo-500/20" },
    { name: "Licença API", price: "R$ 890", img: "bg-emerald-500/20" },
  ]

  return (
    <div className="w-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl group/app">
      {/* Header */}
      <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="font-bold text-white text-sm">TECH<span className="text-orange-500">STORE</span></div>
          <div className="hidden md:flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 flex-1 max-w-[200px]">
            <Search className="w-3 h-3 text-slate-500" />
            <div className="h-2 w-16 bg-slate-800 rounded" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-slate-300" />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-orange-600 rounded-full text-[8px] flex items-center justify-center text-white font-bold"
              >
                {cartCount}
              </motion.span>
            )}
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600" />
        </div>
      </div>

      <div className="p-6 h-[400px] overflow-y-auto custom-scrollbar">
        {/* Banner Area */}
        <div className="w-full h-32 bg-gradient-to-br from-orange-600/20 to-slate-800 rounded-2xl border border-orange-500/20 mb-8 p-6 flex flex-col justify-center">
          <h5 className="text-white font-bold text-sm mb-1">Oferta de Lançamento</h5>
          <p className="text-[10px] text-orange-500 font-mono">CODE: AGRISHOW48</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group/card p-3 bg-slate-800/50 border border-slate-700 rounded-xl space-y-3 hover:border-orange-500/30 transition-all"
            >
              <div className={`aspect-square w-full ${p.img} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/60 backdrop-blur-md">
                  <Heart className="w-3 h-3 text-slate-400" />
                </div>
                <div className="h-12 w-12 bg-white/5 rounded-full blur-xl" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-white truncate">{p.name}</div>
                <div className="text-[10px] text-orange-500 font-bold">{p.price}</div>
              </div>
              <button 
                onClick={() => setCartCount(prev => prev + 1)}
                className="w-full py-2 bg-slate-700 hover:bg-orange-600 rounded-lg text-[9px] font-bold text-white transition-all flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-3 h-3" /> Adicionar
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
