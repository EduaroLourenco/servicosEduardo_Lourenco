'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts'
import { Calendar, TrendingUp, AlertTriangle } from 'lucide-react'

// Data models for different seasons
const dataDefault = [
  { name: 'Mercado Livre', ROAS: 3.2, ACOS: 14, Conv: 2.1 },
  { name: 'Amazon', ROAS: 2.8, ACOS: 18, Conv: 1.8 },
  { name: 'Magalu', ROAS: 4.1, ACOS: 11, Conv: 2.5 },
  { name: 'Shopee', ROAS: 5.5, ACOS: 8, Conv: 3.1 },
]

const dataBlackFriday = [
  { name: 'Mercado Livre', ROAS: 6.5, ACOS: 10, Conv: 4.8 },
  { name: 'Amazon', ROAS: 5.2, ACOS: 12, Conv: 3.9 },
  { name: 'Magalu', ROAS: 7.1, ACOS: 9, Conv: 5.1 },
  { name: 'Shopee', ROAS: 8.5, ACOS: 6, Conv: 6.2 },
]

const dataDiaDasMaes = [
  { name: 'Mercado Livre', ROAS: 4.5, ACOS: 12, Conv: 3.5 },
  { name: 'Amazon', ROAS: 3.8, ACOS: 14, Conv: 2.9 },
  { name: 'Magalu', ROAS: 5.1, ACOS: 10, Conv: 3.8 },
  { name: 'Shopee', ROAS: 6.0, ACOS: 7, Conv: 4.5 },
]

export function ExecutiveDashboard() {
  const [season, setSeason] = useState<'default' | 'black_friday' | 'dia_das_maes'>('default')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const getData = () => {
    switch (season) {
      case 'black_friday': return dataBlackFriday;
      case 'dia_das_maes': return dataDiaDasMaes;
      default: return dataDefault;
    }
  }

  const activeData = getData();

  const getAvg = (key: 'ROAS' | 'ACOS' | 'Conv') => {
    return (activeData.reduce((acc, val) => acc + val[key], 0) / activeData.length).toFixed(1);
  }

  return (
    <div className="w-full glass-card rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_100px_rgba(0,0,0,1)] relative overflow-hidden">
      
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-2">
            <TrendingUp className="text-brand-blue" /> Performance Estratégica
          </h3>
          <p className="text-foreground/40 text-xs font-mono uppercase tracking-widest">Dashboard: Margem vs Investimento por Canal</p>
        </div>

        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setSeason('default')}
            className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${season === 'default' ? 'bg-white text-black shadow-sm' : 'text-white/40 hover:text-white'}`}
          >
            Base
          </button>
          <button
            onClick={() => setSeason('dia_das_maes')}
            className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${season === 'dia_das_maes' ? 'bg-brand-primary text-black shadow-sm' : 'text-white/40 hover:text-white'}`}
          >
            Dia das Mães
          </button>
          <button
            onClick={() => setSeason('black_friday')}
            className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${season === 'black_friday' ? 'bg-red-500 text-white shadow-[0_0_15px_rgba(255,71,87,0.3)]' : 'text-white/40 hover:text-white'}`}
          >
            Black Friday
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
        <motion.div layout className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.05] transition-colors">
          <p className="text-white/40 text-[9px] mb-3 font-bold uppercase tracking-[0.2em]">ROAS Médio</p>
          <p className="text-4xl font-bold text-white tracking-tighter">{getAvg('ROAS')}x</p>
        </motion.div>
        <motion.div layout className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.05] transition-colors">
          <p className="text-white/40 text-[9px] mb-3 font-bold uppercase tracking-[0.2em]">ACOS Médio</p>
          <p className="text-4xl font-bold text-white tracking-tighter">{getAvg('ACOS')}%</p>
        </motion.div>
        <motion.div layout className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.05] transition-colors">
          <p className="text-white/40 text-[9px] mb-3 font-bold uppercase tracking-[0.2em]">Taxa de Conversão</p>
          <p className="text-4xl font-bold text-white tracking-tighter">{getAvg('Conv')}%</p>
        </motion.div>
      </div>

      {/* Recharts Chart */}
      <div className="h-[400px] w-full relative z-10">
        {isMounted && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={activeData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.2)" tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 10}} />
              <YAxis stroke="rgba(255,255,255,0.1)" tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 10}} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'black', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)' }}
                itemStyle={{ fontWeight: 'bold', fontSize: '11px' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }} />
              <Bar dataKey="ROAS" name="ROAS (Mult.)" fill="#00D98E" radius={[4, 4, 0, 0]} animationDuration={1000} />
              <Bar dataKey="ACOS" name="ACOS (%)" fill="#FF4757" radius={[4, 4, 0, 0]} animationDuration={1000} />
              <Bar dataKey="Conv" name="Conv. (%)" fill="#2196F3" radius={[4, 4, 0, 0]} animationDuration={1000} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {season === 'black_friday' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-red-500/10 border border-red-500/20 rounded-2xl p-6 flex items-start gap-4 relative z-10"
        >
          <AlertTriangle className="text-red-500 mt-1 shrink-0 w-5 h-5" />
          <div>
            <h4 className="text-red-500 font-bold text-xs uppercase tracking-widest mb-2">Alerta de Estratégia BF</h4>
            <p className="text-[11px] text-white/60 leading-relaxed italic">O alto volume reduz o ACOS. Recomendado: Aumentar o investimento para capturar o tráfego máximo, protegendo o estoque em tempo real.</p>
          </div>
        </motion.div>
      )}

    </div>
  )
}
