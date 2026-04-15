'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  GraduationCap, Briefcase, Filter, 
  BarChart2, Workflow, Globe, 
  Eye, MessageSquare, Bot, Layout,
  Hash, Star
} from 'lucide-react'

const LINKS = [
  { label: 'Formação & Competências', shortLabel: 'Formação', icon: GraduationCap, href: '#formacao', featured: true },
  { label: 'Experiências',            shortLabel: 'Experiência', icon: Briefcase,    href: '#experiencia', featured: true },
  { label: 'Visão de Funil',          shortLabel: 'Funil',      icon: Filter,       href: '/ecommerce#funil', featured: true },
  { label: 'Análise de Dados',        shortLabel: 'Dados',      icon: BarChart2,    href: '/ecommerce#crescimento' },
  { label: 'Integração de ERPs',      shortLabel: 'ERP',        icon: Workflow,     href: '/ecommerce#logistica' },
  { label: 'Canais de Venda',         shortLabel: 'Canais',     icon: Globe,        href: '/ecommerce#estrategia' },
  { label: 'Operações (Vigilância)',  shortLabel: 'Vigilância', icon: Eye,          href: '/processos#pop-explorer' },
  { label: 'Processos (SAC)',         shortLabel: 'SAC',        icon: MessageSquare,href: '/processos#pop-explorer' },
  { label: 'Funil de Leads (IA)',     shortLabel: 'Leads IA',   icon: Bot,          href: '/processos#hub-automacao' },
  { label: 'Interfaces',              shortLabel: 'UI/UX',      icon: Layout,       href: '/interfaces' },
];

export function QuickNav() {
  return (
    <div className="container mx-auto px-6 mb-20 relative z-10">
      {/* Label/Header */}
      <div className="flex items-center gap-3 mb-6 ml-1">
        <Hash className="w-3.5 h-3.5 text-brand-primary" />
        <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-white/30 italic">
          Atalhos Estratégicos
        </span>
      </div>

      {/* ── MOBILE: Horizontal scroll strip ── */}
      <div className="md:hidden flex gap-3 overflow-x-auto pb-3 -mx-2 px-2 hide-scrollbar">
        {LINKS.map((link, idx) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <Link
                href={link.href}
                className={`group flex flex-col items-center justify-center gap-2 p-3.5 rounded-2xl border transition-all text-center relative overflow-hidden w-20 h-20 ${
                  link.featured
                    ? 'border-brand-primary/20 bg-brand-primary/[0.03] hover:bg-brand-primary/[0.08] hover:border-brand-primary/40'
                    : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/10'
                }`}
              >
                <div className={`p-1.5 rounded-lg border transition-all ${link.featured ? 'bg-brand-primary/10 border-brand-primary/20 text-brand-primary' : 'bg-white/[0.02] border-white/5 group-hover:text-brand-primary'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[8px] font-bold uppercase tracking-wide leading-tight transition-colors ${link.featured ? 'text-white/60 group-hover:text-white' : 'text-white/30 group-hover:text-white/70'}`}>
                  {link.shortLabel}
                </span>
                {link.featured && (
                  <div className="absolute top-1.5 right-1.5">
                    <Star className="w-2 h-2 text-brand-primary/60 fill-brand-primary/40" />
                  </div>
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* ── DESKTOP: Grid ── */}
      <div className="hidden md:grid grid-cols-5 gap-3">
        {LINKS.map((link, idx) => {
          const Icon = link.icon;
          return (
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
                className={`group h-full flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border transition-all text-center relative overflow-hidden ${
                  link.featured
                    ? 'border-brand-primary/15 bg-brand-primary/[0.02] hover:bg-brand-primary/[0.06] hover:border-brand-primary/30'
                    : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/10'
                }`}
              >
                <div className={`p-2.5 rounded-xl border transition-all ${link.featured ? 'bg-brand-primary/10 border-brand-primary/20 text-brand-primary' : 'bg-white/[0.02] border-white/5 group-hover:border-brand-primary/30 group-hover:text-brand-primary'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest leading-tight transition-colors ${link.featured ? 'text-white/60 group-hover:text-white' : 'text-white/30 group-hover:text-white'}`}>
                  {link.label}
                </span>
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-brand-primary/50 w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          );
        })}
      </div>
      
      {/* Visual Separation */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mt-10" />
    </div>
  )
}
