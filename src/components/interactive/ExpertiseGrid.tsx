'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Database, 
  Truck, 
  Settings,
  TrendingUp,
  Globe
} from 'lucide-react'

const EXPERTISE_DATA = [
  {
    icon: BarChart3,
    title: 'Gestão Comercial & Ads',
    desc: 'Escala de vendas, gestão de tráfego e acos/roas - sem dados e precificação dinâmica.'
  },
  {
    icon: TrendingUp,
    title: 'Escala de Vendas & Estratégia',
    desc: 'Crescimento em canais digitais com foco em performance, conquista de território e posicionamento de marca.'
  },
  {
    icon: Database,
    title: 'Integração de Sistemas',
    desc: 'Conexão via APIs/Webhooks entre Hubs (Bling) e ERPs Industriais (Dynamics).'
  },
  {
    icon: Truck,
    title: 'Logística Pesada (TMS)',
    desc: 'Automação de rastreio e faturamento para cargas >40kg.'
  },
  {
    icon: Settings,
    title: 'Engenharia de Processos',
    desc: 'Mapeamento de tarefas e travas fiscais sistêmicas (Sefaz) para estancar vazamento de caixa.'
  }
];

export function ExpertiseGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto px-4 md:px-6">
      {EXPERTISE_DATA.map((item, idx) => (
        <motion.div
           key={idx}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: idx * 0.1, duration: 0.5 }}
           className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#080808]/40 backdrop-blur-xl group hover:border-white/20 transition-all duration-500"
        >
           <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 group-hover:text-brand-primary transition-all duration-500">
              <item.icon className="w-5 h-5 md:w-6 md:h-6" />
           </div>
           <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4 tracking-tight">{item.title}</h3>
           <p className="text-xs md:text-sm text-foreground/50 leading-relaxed font-light">
              {item.desc}
           </p>
        </motion.div>
      ))}
    </div>
  )
}
