'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts'
import { Zap, ShieldCheck, Clock } from 'lucide-react'

const data = [
  { name: 'Manual', latency: 100, reliability: 60 },
  { name: 'Sistêmico', latency: 45, reliability: 85 },
  { name: 'IA Agente', latency: 15, reliability: 98 },
]

export function ProcessDashboard() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div className="h-[300px] w-full bg-white/[0.02] animate-pulse rounded-3xl" />

  return (
    <div className="w-full glass-card rounded-[2rem] p-8 border border-white/5 relative">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Eficiência de Workflow</h4>
          <p className="text-[10px] text-white/30 font-mono">LATÊNCIA MÉDIA (SEG) POR ESTÁGIO</p>
        </div>
        <div className="p-2 rounded-lg bg-brand-blue/10 border border-brand-blue/20">
          <Clock className="w-4 h-4 text-brand-blue" />
        </div>
      </div>

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="rgba(255,255,255,0.1)" 
              tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 10}} 
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
              itemStyle={{ fontSize: '10px' }}
            />
            <Bar dataKey="latency" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === 2 ? '#2196F3' : 'rgba(255,255,255,0.1)'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
         <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <p className="text-[8px] font-mono text-white/20 uppercase mb-1">Confiabilidade IA</p>
            <p className="text-xl font-bold text-brand-success">98.2%</p>
         </div>
         <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <p className="text-[8px] font-mono text-white/20 uppercase mb-1">Freespect Time</p>
            <p className="text-xl font-bold text-white">-85%</p>
         </div>
      </div>
    </div>
  )
}
