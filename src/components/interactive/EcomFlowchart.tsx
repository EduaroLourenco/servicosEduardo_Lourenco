'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, Package, TrendingUp, 
  Settings, PenTool, MessageSquare, 
  Truck, ArrowRightLeft, Users2, 
  Camera, Layout, BarChart, Zap
} from 'lucide-react'

const PILLARS = [
  {
    category: 'Fundação Digital',
    color: 'border-brand-primary/20 bg-brand-primary/5 text-brand-primary',
    items: [
      { id: 'rep', label: 'Reputação', icon: ShieldCheck },
      { id: 'ads', label: 'Qualidade Anúncios', icon: Layout },
      { id: 'seo', label: 'SEO Estratégico', icon: BarChart }
    ]
  },
  {
    category: 'Logística & Modelos',
    color: 'border-brand-success/20 bg-brand-success/5 text-brand-success',
    items: [
      { id: 'fba', label: 'FBA / ME2 / ME1', icon: Truck },
      { id: 'mod', label: '1P (B2B) / 2P (Full)', icon: Package }
    ]
  },
  {
    category: 'Growth & Branding',
    color: 'border-brand-indigo/20 bg-brand-indigo/5 text-brand-indigo',
    items: [
      { id: 'crm', label: 'CRM & Fidelização', icon: Users2 },
      { id: 'bra', label: 'Posicionamento Marca', icon: PenTool },
      { id: 'inf', label: 'Estratégia Influência', icon: TrendingUp }
    ]
  },
  {
    category: 'Operação & Ativos',
    color: 'border-white/10 bg-white/[0.02] text-white/50',
    items: [
      { id: 'ops', label: 'Picking & Packing', icon: Settings },
      { id: 'sac', label: 'SAC & Reversão', icon: MessageSquare },
      { id: 'con', label: 'Conteúdo (Fotos/Vídeo)', icon: Camera }
    ]
  }
];

export function EcomFlowchart() {
  return (
    <div className="w-full relative py-8 md:py-12 px-4 md:px-8 bg-[#050505] rounded-3xl md:rounded-[3rem] border border-white/5 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-start">
        {PILLARS.map((pillar, pillarIdx) => (
          <motion.div
            key={pillar.category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: pillarIdx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 md:gap-6"
          >
            <div className="flex items-center gap-2 mb-2 md:mb-4">
               <div className={`w-1 h-4 rounded-full ${pillar.color.split(' ')[2].replace('text', 'bg')}`} />
               <span className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/20">
                 {pillar.category}
               </span>
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              {pillar.items.map((item, itemIdx) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all duration-300 ${pillar.color} hover:bg-white/[0.02]`}
                >
                  <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl bg-black/40 border border-white/5 group-hover:border-white/20 transition-all">
                    <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-[11px] font-bold text-white tracking-tight uppercase italic leading-none md:leading-normal">{item.label}</span>
                    <div className="w-0 group-hover:w-full h-px bg-white/20 transition-all duration-500 mt-1" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Connecting Arrow for Visual Flow */}
            {pillarIdx < PILLARS.length - 1 && (
               <div className="hidden lg:flex absolute top-1/2 -right-6 text-white/10">
                 <Zap className="w-4 h-4 animate-pulse" />
               </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* FOOTER LABEL */}
      <div className="mt-16 pt-8 border-t border-white/5 text-center">
         <p className="text-[9px] font-mono text-white/10 uppercase tracking-[0.4em] italic">
           Alicerce do Ecossistema Digital &bull; Operação Full-Commerce &bull; v2.0
         </p>
      </div>
    </div>
  )
}
