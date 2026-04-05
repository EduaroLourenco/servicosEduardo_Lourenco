'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FileSpreadsheet, Lock, AlertCircle, ChevronDown, CheckCircle2 } from 'lucide-react'

// Mock Data rows for visual impact (Airtable style)
const sampleData = {
  anual: [
    { period: 'Q1', meta: 'R$ 1.8M', real: 'R$ 1.95M', acos: '4.2%', roas: '23.8x', ticket: 'R$ 890', inv: 'R$ 81.9k' },
    { period: 'Q2', meta: 'R$ 2.0M', real: 'R$ 1.88M', acos: '4.8%', roas: '20.8x', ticket: 'R$ 910', inv: 'R$ 90.2k' },
    { period: 'Q3', meta: 'R$ 2.5M', real: 'R$ 2.7M', acos: '4.1%', roas: '24.3x', ticket: 'R$ 950', inv: 'R$ 111k' },
    { period: 'Q4', meta: 'R$ 3.0M', real: 'R$ 3.4M', acos: '5.0%', roas: '20.0x', ticket: 'R$ 1,020', inv: 'R$ 170k' },
  ],
  sazonal: [
    { period: 'Black Friday', meta: 'R$ 1.2M', real: 'R$ 1.45M', acos: '6.5%', roas: '15.3x', ticket: 'R$ 880', inv: 'R$ 94k' },
    { period: 'Dia do Consumidor', meta: 'R$ 600k', real: 'R$ 580k', acos: '4.5%', roas: '22.2x', ticket: 'R$ 900', inv: 'R$ 26k' },
    { period: 'Semana do Cliente', meta: 'R$ 400k', real: 'R$ 495k', acos: '3.8%', roas: '26.3x', ticket: 'R$ 930', inv: 'R$ 18k' },
  ],
  diario: [
    { period: 'Segunda-feira', meta: 'R$ 85k', real: 'R$ 92k', acos: '4.4%', roas: '22.7x', ticket: 'R$ 890', inv: 'R$ 4k' },
    { period: 'Terça-feira', meta: 'R$ 70k', real: 'R$ 81k', acos: '4.1%', roas: '24.3x', ticket: 'R$ 895', inv: 'R$ 3.3k' },
    { period: 'Quarta-feira', meta: 'R$ 75k', real: 'R$ 72k', acos: '4.8%', roas: '20.8x', ticket: 'R$ 870', inv: 'R$ 3.4k' },
    { period: 'Quinta-feira', meta: 'R$ 80k', real: 'R$ 104k', acos: '3.9%', roas: '25.6x', ticket: 'R$ 910', inv: 'R$ 4k' },
  ]
}

export function MarketplaceDataGrid() {
  const [activeTab, setActiveTab] = useState<'anual' | 'sazonal' | 'diario'>('anual')

  const columns = ['Período', 'Meta', 'Realizado', 'ACOS', 'ROAS', 'Ticket Médio', 'Investimento ADS']

  return (
    <div className="w-full glass-card rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col font-sans">
      
      {/* HEADER / TOOLBAR AIRTABLE STYLE */}
      <div className="bg-black/40 border-b border-white/5 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative rounded-t-[2.5rem]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm tracking-wide">Matriz de Performance</h3>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-mono">Consolidado Comercial &ads</p>
          </div>
        </div>

        {/* Pulsating Tooltip */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-black text-[9px] font-black px-3 py-1.5 rounded-full flex items-center gap-2 animate-bounce shadow-[0_0_20px_rgba(255,215,0,0.5)] z-50">
           <AlertCircle className="w-3 h-3" />
           Planilha Interativa: Teste os filtros e botões
        </div>

        {/* TABS */}
        <div className="flex bg-black/40 p-1 rounded-lg border border-white/5 w-full sm:w-auto">
          {([{id: 'anual', label: 'Visão Anual'}, {id: 'sazonal', label: 'Tático Sazonal'}, {id: 'diario', label: 'Acomp. Diário'}] as const).map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-[10px] font-bold transition-all uppercase tracking-widest
                ${activeTab === t.id ? 'bg-white/10 text-white shadow-sm' : 'text-white/40 hover:text-white/80'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* SPREADSHEET GRID */}
      <div className="overflow-x-auto relative hide-scrollbar">
        <table className="w-full text-left border-collapse min-w-[900px]">
          {/* THEAD */}
          <thead>
            <tr className="border-b border-white/5 bg-black/20 sticky top-0 z-20 backdrop-blur-md">
              {columns.map((col, i) => (
                <th 
                  key={i} 
                  className={`py-4 px-6 text-[9px] uppercase tracking-widest text-white/40 border-r border-white/5 last:border-0 font-black whitespace-nowrap
                    ${i === 0 ? 'sticky left-0 z-30 bg-black/60 shadow-[2px_0_10px_rgba(0,0,0,0.5)]' : ''}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    {col}
                    <ChevronDown className="w-3 h-3 text-white/20" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          {/* TBODY */}
          <tbody>
            {sampleData[activeTab].map((row, i) => {
              const acosValue = parseFloat(row.acos)
              const roasValue = parseFloat(row.roas)
              
              const acosColor = acosValue > 5.0 ? 'text-amber-400' : 'text-emerald-400'
              const roasColor = roasValue > 22 ? 'text-emerald-400' : roasValue < 20 ? 'text-amber-400' : 'text-white/80'
              
              const realNum = parseFloat(row.real.replace(/[^0-9.]/g, ''))
              const metaNum = parseFloat(row.meta.replace(/[^0-9.]/g, ''))
              const isAboveGoal = realNum >= metaNum

              return (
                <motion.tr 
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group cursor-default"
                >
                  <td className="py-4 px-6 text-[11px] font-black text-brand-primary sticky left-0 z-10 bg-black/40 border-r border-white/10 shadow-[2px_0_10px_rgba(0,0,0,0.3)] uppercase">
                    {row.period}
                  </td>
                  <td className="py-4 px-6 text-[11px] font-mono text-white/20 border-r border-white/5 bg-white/[0.01] italic">
                    {row.meta}
                  </td>
                  <td className="py-4 px-6 text-[11px] font-mono border-r border-white/5">
                    <div className="flex items-center gap-3">
                       <span className={isAboveGoal ? 'text-white font-black' : 'text-white/80'}>{row.real}</span>
                       {isAboveGoal && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />}
                    </div>
                  </td>
                  <td className={`py-4 px-6 text-[11px] font-mono font-black border-r border-white/5 ${acosColor}`}>
                    {row.acos}
                  </td>
                  <td className={`py-4 px-6 text-[11px] font-mono font-black border-r border-white/5 ${roasColor}`}>
                    {row.roas}
                  </td>
                  <td className="py-4 px-6 text-[11px] font-mono text-white/70 border-r border-white/5">
                    {row.ticket}
                  </td>
                  <td className="py-4 px-6 text-[11px] font-mono text-white/20 italic">
                    {row.inv}
                  </td>
                </motion.tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t border-white/5 bg-black/40 flex items-center justify-between rounded-b-[2.5rem]">
        <div className="flex items-center gap-2 text-white/20 text-[9px] uppercase font-bold tracking-[0.2em]">
          <Lock className="w-3 h-3" />
          <span>Matriz Bloqueada (Read-Only)</span>
        </div>
        <div className="flex items-center gap-2 text-brand-primary text-[9px] font-mono uppercase tracking-widest opacity-60">
          <AlertCircle className="w-3 h-3" /> 
          Executive Data View
        </div>
      </div>

    </div>
  )
}
