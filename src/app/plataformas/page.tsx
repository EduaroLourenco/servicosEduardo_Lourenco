'use client'

import { motion } from 'framer-motion'
import { Server, Grid, Database, Cloud, Zap, Box, ShoppingCart, BarChart } from 'lucide-react'
import { SpotlightCard } from '@/components/ui/SpotlightCard'

const stack = [
  { 
    category: "Engenharia de Software", 
    icon: <Grid className="w-5 h-5 text-brand-indigo" />, 
    color: "brand-indigo",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] 
  },
  { 
    category: "Arquitetura de Backend", 
    icon: <Server className="w-5 h-5 text-brand-primary" />,
    color: "brand-primary", 
    items: ["Node.js", "NestJS", "Prisma ORM", "PostgreSQL", "Supabase"] 
  },
  { 
    category: "Fundação ERP & Hubs", 
    icon: <Zap className="w-5 h-5 text-brand-success" />, 
    color: "brand-success",
    items: ["Microsoft Dynamics", "Bling ERP", "Tiny ERP", "Plugg.to", "Magis5", "Anymarket"] 
  },
  { 
    category: "Motores de E-commerce", 
    icon: <ShoppingCart className="w-5 h-5 text-brand-blue" />, 
    color: "brand-blue",
    items: ["Vtex", "Shopify", "Wake Commerce", "Nuvemshop", "Shoppub", "Magento"] 
  },
  { 
    category: "Logística & TMS", 
    icon: <Box className="w-5 h-5 text-white" />, 
    color: "white",
    items: ["Kangu", "Melhor Envio", "Intelipost", "Frenet", "Jive / Protocolos Loggi"] 
  },
  { 
    category: "BI Operacional", 
    icon: <BarChart className="w-5 h-5 text-brand-primary" />, 
    color: "brand-primary",
    items: ["Nubmetrics", "Jonnpulse", "Avant Pro", "Google Trends / Analytics"] 
  }
]

export default function PlataformasPage() {
  return (
    <div className="flex flex-col gap-24 pb-32">
      
      {/* ── BACKGROUND: EXECUTIVE OLED DARK MODE ── */}
      <div className="fixed inset-0 -z-50 pointer-events-none bg-[#050505]" />
      <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute w-[800px] h-[800px] bg-brand-blue/5 blur-[160px] rounded-full -top-1/4 -right-1/4" />
      </div>

      {/* HERO SECTION */}
      <section className="pt-40 container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-foreground/50 font-mono tracking-tighter uppercase mb-8 text-[10px]">
             Stack_Infraestrutura_v5.0
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white leading-tight">
            Stack Técnica &<br />
            <span className="text-foreground/40">Infraestrutura de Ecossistema.</span>
          </h1>
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto font-light leading-relaxed">
            Uma arquitetura combinada de ERPs industriais, motores de checkout de alta conversão e frameworks modernos de engenharia de software.
          </p>
        </motion.div>
      </section>

      {/* STACK GRID */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {stack.map((group, idx) => (
            <SpotlightCard 
              key={idx} 
              className="p-10 border-white/5 bg-white/[0.01] backdrop-blur-3xl"
              spotlightColor={`rgba(255, 255, 255, 0.02)`}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-white/5 rounded-2xl">
                  {group.icon}
                </div>
                <h3 className="text-lg font-semibold text-white/90 tracking-tight">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span 
                    key={item} 
                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] font-medium text-white/40 hover:text-white/80 hover:bg-white/[0.05] transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* FOOTNOTE SECRECY/COMPLETION */}
      <section className="container mx-auto px-6 text-center mt-12">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/[0.03] bg-white/[0.01] text-white/10 text-[10px] font-mono uppercase tracking-[0.2em]">
          Protocolo_de_Interoperabilidade_Ativo
        </div>
      </section>

    </div>
  )
}
