'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Database, LineChart, Package, LayoutTemplate, X, Zap, ArrowRight, Cog } from 'lucide-react'

// Content for each node based on user's professional profile
const nodesData = [
  {
    id: 'mkt',
    label: 'Gestão Comercial & Ads',
    icon: LineChart,
    color: 'brand-primary',
    textColor: 'text-[#FFD700]',
    bgColor: 'bg-[#FFD700]',
    shadowColor: 'rgba(255, 215, 0, 0.4)',
    content: 'Escala de vendas, gestão de tráfego (ROAS 22.4x) e precificação dinâmica.'
  },
  {
    id: 'erp',
    label: 'Integração de Sistemas',
    icon: Database,
    color: 'brand-success',
    textColor: 'text-[#00D98E]',
    bgColor: 'bg-[#00D98E]',
    shadowColor: 'rgba(0, 217, 142, 0.4)',
    content: 'Conexão via APIs/Webhooks entre Hubs (Bling) e ERPs Industriais (Dynamics).'
  },
  {
    id: 'tms',
    label: 'Logística Pesada (TMS)',
    icon: Package,
    color: 'brand-primary',
    textColor: 'text-[#FFD700]',
    bgColor: 'bg-[#FFD700]',
    shadowColor: 'rgba(255, 215, 0, 0.4)',
    content: 'Automação de rastreio e faturamento para cargas >40kg.'
  },
  {
    id: 'ux',
    label: 'Engenharia de Processos',
    icon: Cog,
    color: 'brand-success',
    textColor: 'text-[#00D98E]',
    bgColor: 'bg-[#00D98E]',
    shadowColor: 'rgba(0, 217, 142, 0.4)',
    content: 'Mapeamento de tarefas e travas fiscais sistêmicas (Sefaz) para estancar vazamento de caixa.'
  }
];

export function EcosystemVisualizer() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="relative w-full min-h-[600px] flex flex-col md:flex-row items-center justify-center p-8 bg-[#000510]/40 rounded-[3rem] border border-white/5 overflow-hidden">
      
      {/* Background Animated SVG Paths (Glowing Connections) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="glow-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="glow-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D98E" stopOpacity="1" />
            <stop offset="100%" stopColor="#00D98E" stopOpacity="0" />
          </linearGradient>
        </defs>

        {activeNode && (
           <motion.g
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5 }}
           >
             {/* Data flow lines */}
             {activeNode === 'mkt' && <path d="M 50% 50% Q 20% 20% 25% 25%" stroke="url(#glow-gold)" strokeWidth="3" fill="none" className="stroke-dasharray-anim" />}
             {activeNode === 'erp' && <path d="M 50% 50% Q 80% 20% 75% 25%" stroke="url(#glow-emerald)" strokeWidth="3" fill="none" className="stroke-dasharray-anim" />}
             {activeNode === 'tms' && <path d="M 50% 50% Q 20% 80% 25% 75%" stroke="url(#glow-gold)" strokeWidth="3" fill="none" className="stroke-dasharray-anim" />}
             {activeNode === 'ux'  && <path d="M 50% 50% Q 80% 80% 75% 75%" stroke="url(#glow-emerald)" strokeWidth="3" fill="none" className="stroke-dasharray-anim" />}
           </motion.g>
        )}
      </svg>

      {/* Map Content */}
      <div className={`relative flex-1 flex items-center justify-center transition-all duration-700 ${activeNode ? 'md:-translate-x-24 scale-90' : 'scale-100'}`}>
        
        {/* Central Core */}
        <motion.div 
          className="relative z-10 w-44 h-44 rounded-full bg-[#050A1A] border-4 border-white/10 flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(255,215,0,0.1)] shrink-0"
          animate={{
            boxShadow: activeNode ? `0 0 80px ${nodesData.find(n => n.id === activeNode)?.shadowColor}` : "0 0 50px rgba(255,215,0,0.1)",
            borderColor: activeNode ? nodesData.find(n => n.id === activeNode)?.shadowColor : "rgba(255,255,255,0.1)"
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-brand-primary/5 rounded-full animate-ping opacity-20 pointer-events-none" style={{ animationDuration: '3.5s' }} />
          <Zap className="w-8 h-8 text-brand-primary mb-2" />
          <span className="text-white font-black text-[11px] leading-tight px-4 uppercase tracking-tighter italic">Ecossistema de<br/>Operações (B2B/B2C)</span>
        </motion.div>

        {/* Orbiting Nodes */}
        {nodesData.map((node, i) => {
          const Icon = node.icon;
          const posStyles = [
            { top: '-25%', left: '-25%' },
            { top: '-25%', right: '-25%' },
            { bottom: '-25%', left: '-25%' },
            { bottom: '-25%', right: '-25%' }
          ][i];

          const isActive = activeNode === node.id;
          const isFaded = activeNode && !isActive;

          return (
            <motion.div
              key={node.id}
              className={`absolute cursor-pointer flex flex-col items-center gap-3 transition-opacity duration-300 ${isFaded ? 'opacity-30' : 'opacity-100'}`}
              style={posStyles}
              onClick={() => setActiveNode(isActive ? null : node.id)}
              whileHover={{ scale: 1.1 }}
              layout
            >
              <div className={`
                w-20 h-20 rounded-2xl flex items-center justify-center border-2 
                ${isActive ? node.bgColor + ' border-transparent text-black' : 'bg-[#050A1A] text-white/80'}
              `}
              style={{
                borderColor: !isActive ? node.shadowColor : 'transparent',
                boxShadow: isActive ? `0 0 40px ${node.shadowColor}` : `0 0 15px ${node.shadowColor}`
              }}>
                <Icon className="w-8 h-8" />
              </div>
              <div className="bg-black/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full whitespace-nowrap text-[9px] font-black uppercase tracking-[0.2em] text-center shadow-2xl">
                <span className={node.textColor}>{node.label}</span>
              </div>
            </motion.div>
          )
        })}

        {/* Orbit Path Circles */}
        <div className="absolute inset-0 w-[400px] h-[400px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full pointer-events-none" />
        <div className="absolute inset-0 w-[550px] h-[550px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full border-dashed pointer-events-none opacity-20 animate-[spin_60s_linear_infinite]" />
      </div>

      {/* Detail Panel */}
      <AnimatePresence>
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.95 }}
            className="w-full md:w-[380px] shrink-0 bg-[#050A1A]/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl relative z-20 mt-12 md:mt-0"
          >
            <button 
              onClick={() => setActiveNode(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-white/30 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {nodesData.filter(n => n.id === activeNode).map(node => (
              <div key={node.id}>
                <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center ${node.bgColor} text-black shadow-lg shadow-black/20`}>
                  <node.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight uppercase italic tracking-tighter">{node.label}</h3>
                <p className="text-foreground/60 leading-relaxed font-light mb-10 text-sm">
                  {node.content}
                </p>

                <div className="pt-8 border-t border-white/5">
                   <div className="flex items-center justify-between mb-2">
                       <span className={`text-[10px] font-mono uppercase tracking-[0.3em] font-black ${node.textColor}`}>Log_Protocol</span>
                       <div className="flex gap-1">
                          <div className={`w-1 h-1 rounded-full ${node.bgColor} animate-pulse`} />
                          <div className={`w-1 h-1 rounded-full ${node.bgColor} opacity-40`} />
                       </div>
                   </div>
                   <div className="flex items-center gap-3 bg-white/[0.03] p-4 rounded-xl border border-white/5">
                     <ArrowRight className={`w-4 h-4 ${node.textColor}`} />
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">Executar Automação</span>
                   </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Global styles for the SVG glowing path animation */}
      <style dangerouslySetInnerHTML={{__html: `
        .stroke-dasharray-anim {
          stroke-dasharray: 12, 12;
          animation: dash-flow 15s linear infinite;
        }
        @keyframes dash-flow {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}} />
    </div>
  )
}
