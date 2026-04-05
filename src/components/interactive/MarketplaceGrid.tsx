'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Zap, Globe, Package, ShoppingCart } from 'lucide-react'

const MARKETPLACES = [
  {
    name: 'Flagship Store',
    role: 'D2C / Brand Experience',
    color: 'from-zinc-900 to-black',
    borderColor: 'border-white/10',
    icon: Globe,
    features: ['Venda Direta', 'Omnichannel', 'Experiência de Marca']
  },
  {
    name: 'Mercado Livre',
    role: 'Full / Flex / ME2',
    color: 'from-[#FFE600]/10 to-[#FFE600]/5',
    borderColor: 'border-[#FFE600]/20',
    icon: ShoppingBag,
    features: ['Logística Full', 'Entrega Flex', 'Reputação Platinum']
  },
  {
    name: 'Amazon',
    role: 'FBA / Merchant / BuyBox',
    color: 'from-[#FF9900]/10 to-[#FF9900]/5',
    borderColor: 'border-[#FF9900]/20',
    icon: Zap,
    features: ['Amazon FBA', 'BuyBox Strategy', 'Prime Shipping']
  },
  {
    name: 'Magalu',
    role: 'Crossdocking / Entregue por',
    color: 'from-[#0086FF]/10 to-[#0086FF]/5',
    borderColor: 'border-[#0086FF]/20',
    icon: Package,
    features: ['Magalu Entregas', 'Retira em Loja', 'Ads Magalu']
  },
  {
    name: 'Shopee',
    role: 'Marketplace / Logística SXP',
    color: 'from-[#EE4D2D]/10 to-[#EE4D2D]/5',
    borderColor: 'border-[#EE4D2D]/20',
    icon: ShoppingCart,
    features: ['SXP Logística', 'Flash Sales', 'Social Commerce']
  }
];

export function MarketplaceGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
      {MARKETPLACES.map((mp, idx) => (
        <motion.div
          key={mp.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="group relative p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all overflow-hidden"
        >
          {/* Accent Glow */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 blur-[40px] rounded-full group-hover:bg-white/10 transition-all" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
               <span className="text-xl md:text-2xl font-black text-white italic">{mp.name[0]}</span>
            </div>
            
            <h4 className="text-sm md:text-base font-bold text-white mb-2 uppercase tracking-tighter italic">{mp.name}</h4>
            <p className="text-[10px] md:text-xs text-white/30 font-mono tracking-widest mb-4 md:mb-6 uppercase">{mp.role}</p>
            
            <div className="w-full space-y-1.5 md:space-y-2">
               {mp.features.map(feat => (
                 <div key={feat} className="text-[8px] md:text-[9px] font-mono text-brand-success/60 uppercase border-b border-white/5 pb-1 last:border-0">{feat}</div>
               ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
