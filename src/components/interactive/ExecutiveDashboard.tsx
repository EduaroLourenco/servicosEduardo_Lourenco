'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend,
  AreaChart, Area, ReferenceLine
} from 'recharts'
import { TrendingUp, AlertTriangle, BarChart2 } from 'lucide-react'

// ── FATURAMENTO: crescimento de R$140k → R$1.250k (20 pontos, sem nomes) ──
const revenueData = [
  { v: 140  },
  { v: 165  },
  { v: 198  },
  { v: 224  },
  { v: 267  },
  { v: 310  },
  { v: 358  },
  { v: 412  },
  { v: 480  },
  { v: 545  },
  { v: 620  },
  { v: 695  },
  { v: 770  },
  { v: 845  },
  { v: 920  },
  { v: 995  },
  { v: 1050 },
  { v: 1110 },
  { v: 1195 },
  { v: 1250 },
]

// ── PERFORMANCE POR CANAL ──
const dataDefault = [
  { name: 'Mercado Livre', ROAS: 3.2, ACOS: 14, Conv: 2.1 },
  { name: 'Amazon',        ROAS: 2.8, ACOS: 18, Conv: 1.8 },
  { name: 'Magalu',        ROAS: 4.1, ACOS: 11, Conv: 2.5 },
  { name: 'Shopee',        ROAS: 5.5, ACOS: 8,  Conv: 3.1 },
]
const dataBlackFriday = [
  { name: 'Mercado Livre', ROAS: 6.5, ACOS: 10, Conv: 4.8 },
  { name: 'Amazon',        ROAS: 5.2, ACOS: 12, Conv: 3.9 },
  { name: 'Magalu',        ROAS: 7.1, ACOS: 9,  Conv: 5.1 },
  { name: 'Shopee',        ROAS: 8.5, ACOS: 6,  Conv: 6.2 },
]
const dataDiaDasMaes = [
  { name: 'Mercado Livre', ROAS: 4.5, ACOS: 12, Conv: 3.5 },
  { name: 'Amazon',        ROAS: 3.8, ACOS: 14, Conv: 2.9 },
  { name: 'Magalu',        ROAS: 5.1, ACOS: 10, Conv: 3.8 },
  { name: 'Shopee',        ROAS: 6.0, ACOS: 7,  Conv: 4.5 },
]

// Formata o tooltip do gráfico de faturamento
function RevenueTooltip({ active, payload }: { active?: boolean; payload?: Array<{ value: number }> }) {
  if (active && payload && payload.length) {
    const v = payload[0].value
    const label = v >= 1000 ? `R$ ${(v / 1000).toFixed(3).replace('.', ',')}M` : `R$ ${v}K`
    return (
      <div className="bg-[#111827] border border-brand-primary/30 rounded-xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
        <p className="text-brand-primary font-black text-sm font-mono">{label}</p>
        <p className="text-[#D1D5DB]/60 text-[10px] uppercase tracking-widest mt-0.5">Faturamento</p>
      </div>
    )
  }
  return null
}

export function ExecutiveDashboard() {
  const [season, setSeason] = useState<'default' | 'black_friday' | 'dia_das_maes'>('default')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])

  const getData = () => {
    switch (season) {
      case 'black_friday':  return dataBlackFriday
      case 'dia_das_maes':  return dataDiaDasMaes
      default:              return dataDefault
    }
  }
  const activeData = getData()
  const getAvg = (key: 'ROAS' | 'ACOS' | 'Conv') =>
    (activeData.reduce((acc, val) => acc + val[key], 0) / activeData.length).toFixed(1)

  // Formata Y do gráfico de receita
  const formatY = (v: number) =>
    v >= 1000 ? `R$${(v / 1000).toFixed(2).replace('.', ',')}M` : `R$${v}K`

  return (
    <div className="w-full space-y-8">

      {/* ═══════════════════════════════════════
          BLOCO 1 — CRESCIMENTO DE FATURAMENTO
      ═══════════════════════════════════════ */}
      <div className="exec-card rounded-[2rem] p-7 md:p-10 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-brand-primary/[0.04] blur-[80px] rounded-full" />
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-brand-primary" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D1D5DB]/60">Crescimento de Receita</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-[#FFFFFF] tracking-tighter italic">
              Faturamento ao Longo do Tempo
            </h3>
          </div>

          {/* KPI pills */}
          <div className="flex gap-3 flex-wrap">
            <div className="flex flex-col items-end">
              <span className="text-[9px] text-[#D1D5DB]/50 uppercase tracking-widest font-mono">Início</span>
              <span className="text-lg font-black text-[#D1D5DB] italic">R$140K</span>
            </div>
            <div className="w-px h-10 bg-[#333333] self-center" />
            <div className="flex flex-col items-end">
              <span className="text-[9px] text-[#D1D5DB]/50 uppercase tracking-widest font-mono">Atual</span>
              <span className="text-2xl font-black text-brand-primary italic">R$1,250M</span>
            </div>
            <div className="self-center">
              <span className="kpi-badge">↗ +793%</span>
            </div>
          </div>
        </div>

        {/* Área Chart */}
        <div className="h-[260px] md:h-[320px] w-full relative z-10">
          {isMounted && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="var(--color-brand-primary)" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="var(--color-brand-primary)" stopOpacity={0.01} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                {/* SEM XAxis (tick oculto) */}
                <XAxis dataKey="v" tick={false} axisLine={false} tickLine={false} />
                <YAxis
                  tickFormatter={formatY}
                  stroke="rgba(255,255,255,0.1)"
                  tick={{ fill: 'rgba(209,213,219,0.5)', fontSize: 10, fontFamily: 'monospace' }}
                  width={80}
                  domain={[0, 1400]}
                />
                <Tooltip content={<RevenueTooltip />} cursor={{ stroke: 'rgba(251,191,36,0.2)', strokeWidth: 1 }} />
                <ReferenceLine
                  y={140} stroke="rgba(255,255,255,0.15)"
                  strokeDasharray="4 4"
                  label={{ value: 'Início: R$140K', position: 'right', fill: 'rgba(209,213,219,0.5)', fontSize: 9 }}
                />
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke="var(--color-brand-primary)"
                  strokeWidth={2.5}
                  fill="url(#revenueGradient)"
                  dot={false}
                  activeDot={{ r: 5, fill: 'var(--color-brand-primary)', stroke: '#FFFFFF', strokeWidth: 2 }}
                  animationDuration={1800}
                  animationEasing="ease-out"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Legenda inferior */}
        <div className="flex gap-6 mt-5 relative z-10 flex-wrap">
          {[
            { l: 'Crescimento acumulado', v: '+793%' },
            { l: 'Pico registrado', v: 'R$1,250M' },
            { l: 'Canais ativos', v: 'ML · Amazon · Magalu · Shopee' },
          ].map(i => (
            <div key={i.l} className="flex flex-col gap-0.5">
              <span className="text-[9px] text-[#D1D5DB]/50 uppercase tracking-widest font-mono">{i.l}</span>
              <span className="text-xs font-bold text-[#FFFFFF]">{i.v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          BLOCO 2 — PERFORMANCE POR CANAL
      ═══════════════════════════════════════ */}
      <div className="exec-card rounded-[2rem] p-7 md:p-10 relative overflow-hidden">
        {/* Header e controles */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BarChart2 className="w-4 h-4 text-brand-primary" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D1D5DB]/60">Performance Estratégica</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-[#FFFFFF] tracking-tighter italic">
              Margem vs Investimento por Canal
            </h3>
          </div>

          <div className="flex bg-[#1C1C1C] p-1 rounded-xl border border-[#333333]">
            {[
              { key: 'default',       label: 'Base',         activeClass: 'bg-[#2A2A2A] text-[#FFFFFF] shadow-sm' },
              { key: 'dia_das_maes',  label: 'Dia das Mães', activeClass: 'bg-brand-primary text-[#0A0A0A] shadow-[0_0_15px_var(--color-brand-glow)]' },
              { key: 'black_friday',  label: 'Black Friday', activeClass: 'bg-brand-primary text-[#0A0A0A] shadow-[0_0_15px_var(--color-brand-glow)]' },
            ].map(s => (
              <button
                key={s.key}
                onClick={() => setSeason(s.key as typeof season)}
                className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${season === s.key ? s.activeClass : 'text-[#D1D5DB]/60 hover:text-[#FFFFFF]'}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 relative z-10">
          {[
            { label: 'ROAS Médio', value: `${getAvg('ROAS')}x`, color: 'text-brand-primary' },
            { label: 'ACOS Médio', value: `${getAvg('ACOS')}%`, color: 'text-red-400' },
            { label: 'Taxa de Conversão', value: `${getAvg('Conv')}%`, color: 'text-blue-400' },
          ].map(kpi => (
            <motion.div
              layout key={kpi.label}
              className="bg-[#1C1C1C] border border-[#333333] rounded-2xl p-6 hover:bg-[#222222] transition-all"
            >
              <p className="text-[#D1D5DB]/60 text-[9px] mb-3 font-bold uppercase tracking-[0.2em]">{kpi.label}</p>
              <p className={`text-4xl font-black tracking-tighter ${kpi.color}`}>{kpi.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Bar Chart */}
        <div className="h-[340px] w-full relative z-10">
          {isMounted && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activeData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.2)" tick={{ fill: 'rgba(209,213,219,0.6)', fontSize: 10 }} />
                <YAxis stroke="rgba(255,255,255,0.1)" tick={{ fill: 'rgba(209,213,219,0.6)', fontSize: 10 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}
                  itemStyle={{ fontWeight: 'bold', fontSize: '11px', color: '#F9FAFB' }}
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(209,213,219,0.6)' }} />
                <Bar dataKey="ROAS" name="ROAS (Mult.)" fill="var(--color-brand-primary)" radius={[4, 4, 0, 0]} animationDuration={900} />
                <Bar dataKey="ACOS" name="ACOS (%)"    fill="#F87171" radius={[4, 4, 0, 0]} animationDuration={900} />
                <Bar dataKey="Conv" name="Conv. (%)"   fill="#60A5FA" radius={[4, 4, 0, 0]} animationDuration={900} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {season === 'black_friday' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-brand-primary/10 border border-brand-primary/30 rounded-2xl p-6 flex items-start gap-4 relative z-10"
          >
            <AlertTriangle className="text-brand-primary mt-0.5 shrink-0 w-5 h-5" />
            <div>
              <h4 className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-2">Alerta de Estratégia BF</h4>
              <p className="text-[11px] text-[#D1D5DB] leading-relaxed italic">
                O alto volume reduz o ACOS. Recomendado: Aumentar o investimento para capturar o tráfego máximo, protegendo o estoque em tempo real.
              </p>
            </div>
          </motion.div>
        )}
      </div>

    </div>
  )
}
