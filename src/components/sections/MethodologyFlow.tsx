'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Package, DollarSign, ArrowRight } from 'lucide-react'

export function MethodologyFlow() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            A Nossa Metodologia
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/70"
          >
            Passo a passo: Deixando o caos operacional para trás.
          </motion.p>
        </div>

        {/* Live Flowchart */}
        <div className="relative glass border border-white/10 rounded-3xl p-12 md:p-24 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
          
          {/* SVG Connecting Path Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" preserveAspectRatio="none">
            <path 
              d="M 20% 50% L 50% 50% L 80% 50%" 
              stroke="rgba(255,255,255,0.1)" 
              strokeWidth="3" 
              fill="none" 
              strokeDasharray="6 6" 
            />
            {/* The traveling glowing dot */}
            <motion.circle 
              r="8" 
              fill="#10B981" 
              style={{ filter: "drop-shadow(0px 0px 8px #10B981)" }}
              animate={{ 
                cx: ["20%", "50%", "80%"], 
                cy: ["50%", "50%", "50%"],
                opacity: [0, 1, 1, 1, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                times: [0, 0.1, 0.5, 0.9, 1],
                ease: "linear"
              }}
            />
          </svg>

          {/* Node 1: Vendas */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-24 h-24 rounded-full bg-[#080808] border-2 border-brand-blue flex items-center justify-center glow-blue mb-4 relative shadow-[0_0_20px_rgba(0,112,243,0.3)]"
            >
              <ShoppingCart className="w-8 h-8 text-brand-blue" />
            </motion.div>
            <h4 className="text-xl font-bold text-white">Vendas</h4>
            <p className="text-sm text-foreground/60 text-center max-w-[120px]">E-commerce / Marketplaces</p>
          </div>

          <ArrowRight className="md:hidden w-8 h-8 text-white/20 animate-pulse" />

          {/* Node 2: Estoque */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 rounded-full bg-[#080808] border-2 border-white/30 flex items-center justify-center mb-4 relative"
            >
              <Package className="w-8 h-8 text-white" />
            </motion.div>
            <h4 className="text-xl font-bold text-white">Operação</h4>
            <p className="text-sm text-foreground/60 text-center max-w-[120px]">Estoque & ERP</p>
          </div>

          <ArrowRight className="md:hidden w-8 h-8 text-white/20 animate-pulse" />

          {/* Node 3: Financeiro */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-24 h-24 rounded-full bg-[#080808] border-2 border-brand-emerald flex items-center justify-center glow-emerald mb-4 relative shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <DollarSign className="w-8 h-8 text-brand-emerald" />
            </motion.div>
            <h4 className="text-xl font-bold text-white">Financeiro</h4>
            <p className="text-sm text-foreground/60 text-center max-w-[120px]">Conciliação & Caixa</p>
          </div>

        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { step: '01', title: 'Raio-X', desc: 'Mapeamento de gargalos e vazamentos financeiros.' },
            { step: '02', title: 'Desenho do Fluxo', desc: 'Criação das regras e padronização das rotinas.' },
            { step: '03', title: 'Implantação', desc: 'Injeção de automações low-code e software escalável.' },
            { step: '04', title: 'Monitoramento', desc: 'Sua operação rodando de forma previsível e segura.' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <span className="text-white/30 text-xl font-bold font-mono mb-2 block">{item.step}</span>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-foreground/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
