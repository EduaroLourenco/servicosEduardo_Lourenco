'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  GraduationCap, Briefcase, Filter, 
  BarChart2, Workflow, Globe, 
  Eye, MessageSquare, Bot, Layout,
  Hash
} from 'lucide-react'

const LINKS = [
  { label: 'Formação & Competências', icon: GraduationCap, href: '#formacao' },
  { label: 'Experiências', icon: Briefcase, href: '#experiencia' },
  { label: 'Visão de Funil', icon: Filter, href: '/ecommerce#funil' },
  { label: 'Análise de Dados', icon: BarChart2, href: '/ecommerce#crescimento' },
  { label: 'Integração de ERPs', icon: Workflow, href: '/ecommerce#logistica' },
  { label: 'Canais de Venda', icon: Globe, href: '/ecommerce#estrategia' },
  { label: 'Operações (Vigilância)', icon: Eye, href: '/processos#pop-explorer' },
  { label: 'Processos (SAC)', icon: MessageSquare, href: '/processos#pop-explorer' },
  { label: 'Funil de Leads (IA)', icon: Bot, href: '/processos#hub-automacao' },
  { label: 'Interfaces', icon: Layout, href: '/interfaces' },
];

export function QuickNav() {
  return (
    <div className="container mx-auto px-6 mb-24 relative z-10">
      {/* Label/Header */}
      <div className="flex items-center gap-3 mb-8 ml-4">
         <Hash className="w-4 h-4 text-brand-primary" />
         <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-white/40 italic">Atalhos Estrategicos</span>
      </div>

      {/* Grid of Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
        {LINKS.map((link, idx) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Link
              href={link.href}
              className="group h-full flex flex-col items-center justify-center gap-2 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/10 transition-all text-center relative overflow-hidden"
            >
              <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-brand-primary/30 group-hover:text-brand-primary transition-all">
                <link.icon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="text-[8px] md:text-[10px] font-bold text-white/40 group-hover:text-white uppercase tracking-[0.1em] md:tracking-widest leading-tight transition-colors">
                {link.label}
              </span>

              {/* Decorative line on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-brand-primary/50 w-0 group-hover:w-full transition-all duration-300" />
            </Link>
          </motion.div>
        ))}
      </div>
      
      {/* Visual Separation Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mt-12" />
    </div>
  )
}
