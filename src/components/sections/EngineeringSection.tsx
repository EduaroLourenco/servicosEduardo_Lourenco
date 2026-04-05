'use client'

import { motion } from 'framer-motion'
import { Server, Database, Code, CheckCircle, MousePointer2 } from 'lucide-react'
import { useEffect, useState } from 'react'

export function EngineeringSection() {
  const [key, setKey] = useState(0)

  // Loop the animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="engenharia" className="py-24 relative overflow-hidden bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content side */}
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Engenharia de Software para <span className="text-brand-blue">Operações Complexas</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-foreground/70 mb-10"
            >
              Sistemas de Ordem de Serviço, Dashboards e Plataformas Web que não quebram quando a sua empresa cresce. Para indústrias e e-commerces que o software de prateleira não atende mais.
            </motion.p>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Desenvolvimento Customizado (OS)</h4>
                  <p className="text-foreground/70">Portais Web, BDs e integrações API REST (SAP, TOTVS, Bling). Sistemas de Ordem de Serviço dinâmicos sem mensalidades abusivas.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Performance E-commerce (CRO)</h4>
                  <p className="text-foreground/70">Refatoração Next.js, Headless Checkout e tagueamento avançado focados em Core Web Vitals e aumento de margem.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Canais Digitais & Marketplaces</h4>
                  <p className="text-foreground/70">Ecossistema de integrações para Mercado Livre/Amazon com controle simultâneo de 200+ SKUs.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Interactive Kanban Simulator */}
          <div className="lg:w-1/2 w-full perspective-1000">
            <motion.div 
              initial={{ opacity: 0, rotateY: 20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-2xl p-8 border border-brand-blue/20 relative overflow-hidden glow-blue" 
              key={key}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Case: Chopeiras Memo</h3>
                <p className="text-sm text-brand-blue/80">O Motor da Maior Indústria da América Latina</p>
              </div>

              <div className="grid grid-cols-2 gap-6 h-[280px]">
                {/* Column 1 */}
                <div className="bg-black/50 rounded-xl p-4 border border-white/5 relative">
                  <h4 className="text-sm font-semibold text-foreground/50 mb-4 tracking-wider">AGUARDANDO LAUDO</h4>
                  
                  {/* The moving card */}
                  <motion.div 
                    initial={{ x: 0, y: 0, scale: 1 }}
                    animate={{ 
                      x: [0, 0, "115%", "115%"], // Wait, grab, move right to next column, drop
                      y: [0, -10, -10, 0],
                      scale: [1, 1.05, 1.05, 1],
                      boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 20px 25px -5px rgba(0, 112, 243, 0.4)", "0 20px 25px -5px rgba(0, 112, 243, 0.4)", "0 0 0 rgba(0,0,0,0)"]
                    }}
                    transition={{ duration: 2, times: [0, 0.2, 0.7, 0.9], delay: 1 }}
                    className="bg-[#141414] border border-white/10 rounded-lg p-4 cursor-grab relative z-10 w-full"
                  >
                    <div className="text-xs text-brand-blue font-mono mb-3">OT #1042</div>
                    <div className="h-2 bg-white/10 rounded w-3/4 mb-3"></div>
                    <div className="h-2 bg-white/10 rounded w-1/2"></div>
                  </motion.div>

                  {/* Placeholder under the moving card */}
                  <div className="absolute top-[48px] left-4 right-4 bg-white/5 border border-white/5 border-dashed rounded-lg h-[88px] -z-10"></div>
                </div>

                {/* Column 2 */}
                <div className="bg-black/50 rounded-xl p-4 border border-brand-blue/30 relative flex flex-col items-center">
                  <h4 className="text-sm font-semibold text-brand-blue mb-4 tracking-wider w-full text-left">FATURADO</h4>
                  
                  {/* NF Vinculada Badge (Animated popup) */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3 }}
                    className="absolute top-[80px] z-20 flex items-center justify-center gap-2 bg-brand-emerald text-black px-4 py-2 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                  >
                    <CheckCircle className="w-5 h-5" />
                    NF Vinculada
                  </motion.div>
                </div>
              </div>

              {/* Fake Cursor */}
              <motion.div
                initial={{ x: 60, y: 180, opacity: 0 }}
                animate={{ 
                  x: [60, 60, "160%", "160%", 60], 
                  y: [180, 130, 130, 180, 180],
                  opacity: [0, 1, 1, 0, 0]
                }}
                transition={{ duration: 3.5, times: [0, 0.2, 0.6, 0.8, 1], delay: 0.5 }}
                className="absolute z-30 pointer-events-none text-white drop-shadow-2xl"
              >
                <MousePointer2 fill="white" className="w-8 h-8 rotate-[-15deg]" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
