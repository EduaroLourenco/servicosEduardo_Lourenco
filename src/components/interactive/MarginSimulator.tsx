'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, AlertTriangle, Info, Zap, TrendingUp, DollarSign } from 'lucide-react'

export function MarginSimulator() {
  const [sellingPrice, setSellingPrice] = useState<number>(3500)
  const [cogsPercent, setCogsPercent] = useState<number>(40)
  const [taxPercent, setTaxPercent] = useState<number>(12)
  const [commissionPercent, setCommissionPercent] = useState<number>(16)
  const [shippingPercent, setShippingPercent] = useState<number>(5)

  // Outputs
  const [grossProfit, setGrossProfit] = useState<number>(0)
  const [netMarginPercent, setNetMarginPercent] = useState<number>(0)
  const [acosBreakEven, setAcosBreakEven] = useState<number>(0)
  
  useEffect(() => {
    const price = sellingPrice || 0
    const calcCogs = (cogsPercent / 100) * price
    const calcTax = (taxPercent / 100) * price
    const calcCommission = (commissionPercent / 100) * price
    const calcShipping = (shippingPercent / 100) * price

    const deductions = calcCogs + calcTax + calcCommission + calcShipping
    const gross = price - deductions
    const netPercent = price > 0 ? (gross / price) * 100 : 0

    setGrossProfit(gross)
    setNetMarginPercent(netPercent)
    setAcosBreakEven(netPercent)
  }, [sellingPrice, cogsPercent, taxPercent, commissionPercent, shippingPercent])

  const isCritical = netMarginPercent < 8

  // Donut Logic
  const radius = 70
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (Math.max(0, netMarginPercent) / 100) * circumference

  return (
    <div className="w-full glass-card rounded-[3rem] p-6 md:p-12 shadow-[0_0_100px_rgba(0,0,0,1)] relative transition-all duration-500">
      
      {/* GLOW BACKGROUND */}
      <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full opacity-20 transition-colors duration-1000
        ${isCritical ? 'bg-red-500' : 'bg-brand-primary'}`} />

      <div className="flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* LEFT: SLIDERS */}
        <div className="flex-1 space-y-10">
          <div>
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">Matriz de Lucratividade</h3>
          </div>

          <div className="space-y-8">
            {/* Price */}
            <div className="group">
              <div className="flex justify-between mb-4">
                <label className="text-white/40 text-[10px] uppercase font-black tracking-widest">Preço de Venda</label>
                <span className="text-white font-black text-sm">R$ {sellingPrice.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="500" max="10000" step="100" 
                value={sellingPrice} 
                onChange={(e) => setSellingPrice(Number(e.target.value))}
                className="w-full accent-white h-1 bg-white/5 rounded-full appearance-none cursor-pointer group-hover:bg-white/10 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { label: 'Custo Prod', val: cogsPercent, set: setCogsPercent, color: 'accent-slate-400' },
                 { label: 'Impostos', val: taxPercent, set: setTaxPercent, color: 'accent-slate-500' },
                 { label: 'Comissão', val: commissionPercent, set: setCommissionPercent, color: 'accent-amber-500' },
                 { label: 'Frete/TMS', val: shippingPercent, set: setShippingPercent, color: 'accent-blue-500' },
               ].map((item) => (
                 <div key={item.label} className="group">
                    <div className="flex justify-between mb-3">
                      <label className="text-white/30 text-[9px] uppercase font-black tracking-widest">{item.label}</label>
                      <span className="text-white/60 font-mono text-[10px]">{item.val}%</span>
                    </div>
                    <input 
                      type="range" min="0" max="60" step="0.5" 
                      value={item.val} 
                      onChange={(e) => item.set(Number(e.target.value))}
                      className={`w-full ${item.color} h-1 bg-white/5 rounded-full appearance-none cursor-pointer group-hover:bg-white/10 transition-colors`}
                    />
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* RIGHT: DONUT & KPI */}
        <div className="flex-1 flex flex-col items-center justify-center lg:border-l lg:border-white/5 lg:pl-16">
          
          <div className="relative mb-8 haptic-touch">
             {/* DONUT SVG */}
             <svg className="w-48 h-48 -rotate-90">
                <circle 
                  cx="96" cy="96" r={radius} 
                  className="stroke-white/5 fill-none" 
                  strokeWidth="12" 
                />
                <motion.circle 
                  cx="96" cy="96" r={radius} 
                  className={`fill-none transition-colors duration-500 ${isCritical ? 'stroke-red-500' : 'stroke-brand-primary'}`}
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ strokeDasharray: circumference }}
                />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-[10px] font-mono font-black text-white/30 uppercase">Margem</p>
                <p className={`text-4xl font-black tracking-tighter ${isCritical ? 'text-red-500' : 'text-white'}`}>
                  {netMarginPercent.toFixed(1)}%
                </p>
             </div>
          </div>

          <div className={`w-full p-8 rounded-[2rem] border transition-all duration-500
            ${isCritical ? 'bg-red-500/10 border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.1)]' : 'bg-white/[0.03] border-white/5'}`}>
             
             <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-[9px] font-mono text-white/40 uppercase mb-1">ACOS Máximo Permitido</p>
                  <p className={`text-3xl font-black tracking-tighter ${isCritical ? 'text-red-400' : 'text-brand-primary'}`}>
                    {acosBreakEven.toFixed(1)}%
                  </p>
                </div>
                <div className="flex gap-2">
                   <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      <TrendingUp className={`w-4 h-4 ${isCritical ? 'text-red-400' : 'text-brand-success'}`} />
                   </div>
                </div>
             </div>

             <div className="h-px bg-white/5 w-full mb-6" />

             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center text-white/40">
                   <DollarSign className="w-5 h-5" />
                </div>
                <div>
                   <p className="text-[9px] font-mono text-white/40 uppercase mb-0.5">Lucro Bruto/Un</p>
                   <p className="text-xl font-black text-white">R$ {grossProfit.toLocaleString()}</p>
                </div>
             </div>

             {isCritical && (
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="mt-8 flex items-start gap-3 bg-red-500/20 text-red-200 p-4 rounded-2xl text-[10px] font-black uppercase tracking-widest leading-relaxed border border-red-500/20"
               >
                 <AlertTriangle className="w-4 h-4 shrink-0 text-red-500" />
                 <span>Risco de Prejuízo Detectado. O ROAS Mínimo é maior que a meta de escala.</span>
               </motion.div>
             )}
          </div>


          <p className="text-[10px] text-white/10 text-center mt-10 uppercase font-mono tracking-widest leading-relaxed italic">
            Cálculo baseado em Margem de Contribuição & Equilíbrio Operacional
          </p>

        </div>
      </div>
      
    </div>
  )
}
