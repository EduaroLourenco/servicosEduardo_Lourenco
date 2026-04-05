'use client'

import { motion } from 'framer-motion'
import { Users, Database, ShoppingCart, RefreshCcw } from 'lucide-react'

export function LiveSvgFlowchart() {
  return (
    <div className="w-full bg-[#0A0E27] rounded-3xl p-8 lg:p-12 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue via-transparent to-transparent" />
      
      <div className="w-full mb-12 relative z-10 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Projeto Edusen & Bom de Compras</h3>
        <p className="text-foreground/60 text-sm max-w-lg mx-auto">
          Transição B2B/B2C: Do fluxo físico para E-commerce e Plataforma LMS.
        </p>
      </div>

      <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-between z-10 px-4">
        
        {/* Animated Background Path connecting all nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          {/* Path 1: Lead -> CRM */}
          <path 
            d="M 12%,50% Q 25%,50% 36%,50%" 
            stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5 5" fill="none" 
          />
          {/* Mapped Flow Lead -> CRM */}
          <motion.circle
            cx="0" cy="0" r="4" fill="#2196F3"
            animate={{
              offsetDistance: ["0%", "100%"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ offsetPath: "path('M 12%,50% Q 25%,50% 36%,50%')" }}
          />

          {/* Path 2: CRM -> Venda */}
          <path 
            d="M 64%,50% Q 75%,50% 88%,50%" 
            stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5 5" fill="none" 
          />
          <motion.circle
            cx="0" cy="0" r="4" fill="#00D98E"
            animate={{
              offsetDistance: ["0%", "100%"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
            style={{ offsetPath: "path('M 64%,50% Q 75%,50% 88%,50%')" }}
          />
          
          {/* Path 3: Retenção Return */}
          <path 
            d="M 88%,65% C 70%,90% 30%,90% 12%,65%" 
            stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="5 5" fill="none" 
            id="retention-path"
          />
           <motion.circle
            cx="0" cy="0" r="3" fill="#FFD700"
            animate={{
              offsetDistance: ["100%", "0%"]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
            style={{ offsetPath: "path('M 88%,65% C 70%,90% 30%,90% 12%,65%')" }}
          />
        </svg>

        {/* Node 1: Capture / Lead */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center w-32 left-[4%]"
        >
          <div className="w-20 h-20 rounded-2xl bg-brand-blue/20 border-2 border-brand-blue flex items-center justify-center shadow-[0_0_20px_rgba(33,150,243,0.3)] z-10 mb-4">
            <Users className="w-8 h-8 text-brand-blue" />
          </div>
          <h4 className="font-bold text-white text-center">Captura B2C/B2B</h4>
          <span className="text-[10px] text-brand-blue font-bold px-2 py-1 bg-brand-blue/10 rounded-full mt-2 uppercase tracking-wide">Físico & Digital</span>
        </motion.div>

        {/* Node 2: CRM / Gestão */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative flex flex-col items-center w-40"
        >
          <div className="w-24 h-24 rounded-full bg-secondary border-2 border-white/20 flex items-center justify-center z-10 mb-4 shadow-xl">
            <Database className="w-10 h-10 text-white" />
          </div>
          <h4 className="font-bold text-white text-center">Hub CRM Corp</h4>
          <span className="text-xs text-foreground/60 text-center mt-1">Integração Dynamics<br/>& Automação n8n</span>
        </motion.div>

        {/* Node 3: Venda & Retenção */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="relative flex flex-col items-center w-32 right-[4%]"
        >
          <div className="w-20 h-20 rounded-2xl bg-accent-green/20 border-2 border-accent-green flex items-center justify-center shadow-[0_0_20px_rgba(0,217,142,0.3)] z-10 mb-4">
            <ShoppingCart className="w-8 h-8 text-accent-green" />
          </div>
          <h4 className="font-bold text-white text-center">LMS / E-com</h4>
          <div className="flex items-center gap-1 text-[10px] text-accent-gold font-bold px-2 py-1 bg-accent-gold/10 rounded-full mt-2 uppercase tracking-wide">
            <RefreshCcw className="w-3 h-3" />
            LTV Loop
          </div>
        </motion.div>

      </div>
    </div>
  )
}
