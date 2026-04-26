'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Database, Truck, Settings, TrendingUp } from 'lucide-react'

const EXPERTISE_DATA = [
  { icon: BarChart3,  title: 'Gestão Comercial & Ads',       desc: 'Escala de vendas, gestão de tráfego e ACOS/ROAS com dados e precificação dinâmica.' },
  { icon: TrendingUp, title: 'Escala de Vendas & Estratégia', desc: 'Crescimento em canais digitais com foco em performance, território e posicionamento.' },
  { icon: Database,   title: 'Integração de Sistemas',        desc: 'Conexão via APIs/Webhooks entre Hubs (Bling) e ERPs Industriais (Dynamics).' },
  { icon: Truck,      title: 'Logística Pesada (TMS)',         desc: 'Automação de rastreio e faturamento para cargas >40kg com integração fiscal.' },
  { icon: Settings,   title: 'Engenharia de Processos',       desc: 'Mapeamento de tarefas e travas fiscais sistêmicas (Sefaz) para estancar vazamentos.' },
];

export function ExpertiseGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 max-w-7xl mx-auto px-4 md:px-6">
      {EXPERTISE_DATA.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.08, duration: 0.5 }}
          viewport={{ once: true, margin: '-5%' }}
          className="exec-card card-hover-neon p-6 rounded-2xl group transition-all duration-350"
        >
          <div className="w-11 h-11 rounded-xl bg-[#2A2A2A] border border-[#333333] flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30">
            <item.icon className="w-5 h-5 text-[#D1D5DB] transition-colors duration-300 group-hover:text-brand-primary group-hover:opacity-100" />
          </div>
          <h3 className="text-sm font-bold text-[#FFFFFF] mb-3 tracking-tight leading-snug">{item.title}</h3>
          <p className="text-xs text-[#D1D5DB] leading-relaxed font-light group-hover:text-[#FFFFFF] transition-colors duration-300">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
