'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, AreaChart, Area } from 'recharts'
import { TrendingUp, Zap, BarChart3 } from 'lucide-react'

const data = [
  { month: 'Jan', revenue: 120000, efficiency: 65 },
  { month: 'Fev', revenue: 150000, efficiency: 68 },
  { month: 'Mar', revenue: 210000, efficiency: 72 },
  { month: 'Abr', revenue: 280000, efficiency: 78 },
  { month: 'Mai', revenue: 350000, efficiency: 82 },
  { month: 'Jun', revenue: 480000, efficiency: 88 },
  { month: 'Jul', revenue: 520000, efficiency: 91 },
  { month: 'Ago', revenue: 650000, efficiency: 94 },
  { month: 'Set', revenue: 780000, efficiency: 96 },
  { month: 'Out', revenue: 890000, efficiency: 97 },
]

export function GrowthDashboard() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div className="h-[400px] w-full bg-white/[0.02] animate-pulse rounded-3xl" />

  return (
    <div className="w-full glass-card rounded-[2.5rem] p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-1">
             <TrendingUp className="w-5 h-5 text-brand-success" />
             Escala Industrial de Faturamento
          </h3>
          <p className="text-[10px] uppercase font-mono text-white/30 tracking-widest">Performance Acumulada vs Eficiência Operacional</p>
        </div>
        
        <div className="flex gap-8">
           <div className="flex flex-col">
              <span className="text-[9px] font-mono text-white/20 uppercase">Faturamento Anual</span>
              <span className="text-xl font-bold text-white tracking-tighter">R$ 4.4M</span>
           </div>
           <div className="flex flex-col">
              <span className="text-[9px] font-mono text-white/20 uppercase">Eficiência Média</span>
              <span className="text-xl font-bold text-brand-primary tracking-tighter">92.4%</span>
           </div>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00D98E" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00D98E" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
            <XAxis 
              dataKey="month" 
              stroke="rgba(255,255,255,0.1)" 
              tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 10}} 
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              hide
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0A0A0A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
              itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              name="Faturamento (R$)" 
              stroke="#00D98E" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
            />
            <Line 
              type="monotone" 
              dataKey="efficiency" 
              name="Eficiência (%)" 
              stroke="#FFD700" 
              strokeWidth={2}
              dot={false}
              strokeDasharray="5 5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
         <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-success/10 border border-brand-success/20">
               <Zap className="w-4 h-4 text-brand-success" />
            </div>
            <div>
               <p className="text-[10px] text-white/40 uppercase font-mono">Crescimento</p>
               <p className="text-sm font-bold text-white">+380% Yo-Y</p>
            </div>
         </div>
         <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20">
               <BarChart3 className="w-4 h-4 text-brand-primary" />
            </div>
            <div>
               <p className="text-[10px] text-white/40 uppercase font-mono">Otimização</p>
               <p className="text-sm font-bold text-white">+42% Ops</p>
            </div>
         </div>
      </div>
    </div>
  )
}
