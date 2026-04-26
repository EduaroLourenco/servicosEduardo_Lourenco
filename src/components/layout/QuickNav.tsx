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
  { label: 'Formação & Competências', shortLabel: 'Formação',   icon: GraduationCap, href: '#formacao',              featured: true },
  { label: 'Experiências',            shortLabel: 'Experiência', icon: Briefcase,     href: '#experiencia',           featured: true },
  { label: 'Visão de Funil',          shortLabel: 'Funil',       icon: Filter,        href: '/ecommerce#funil',       featured: true },
  { label: 'Análise de Dados',        shortLabel: 'Dados',       icon: BarChart2,     href: '/ecommerce#crescimento' },
  { label: 'Integração de ERPs',      shortLabel: 'ERP',         icon: Workflow,      href: '/ecommerce#logistica' },
  { label: 'Canais de Venda',         shortLabel: 'Canais',      icon: Globe,         href: '/ecommerce#estrategia' },
  { label: 'Operações',               shortLabel: 'Operações',   icon: Eye,           href: '/processos#pop-explorer' },
  { label: 'Processos (SAC)',         shortLabel: 'SAC',         icon: MessageSquare, href: '/processos#pop-explorer' },
  { label: 'Funil de Leads (IA)',     shortLabel: 'Leads IA',    icon: Bot,           href: '/processos#hub-automacao' },
  { label: 'Interfaces',              shortLabel: 'UI/UX',       icon: Layout,        href: '/interfaces' },
];

export function QuickNav() {
  return (
    <div className="container mx-auto px-5 sm:px-8 mb-8">
      <div className="flex items-center gap-2 mb-5 ml-1">
        <Hash className="w-3.5 h-3.5 text-brand-primary/80" />
        <span className="section-label">Atalhos Estratégicos</span>
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex gap-3 overflow-x-auto pb-3 -mx-2 px-2 hide-scrollbar">
        {LINKS.map((link, idx) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              viewport={{ once: true }}
              className="flex-shrink-0 relative"
            >
              <Link
                href={link.href}
                className={`group flex flex-col items-center justify-center gap-2 p-3.5 rounded-2xl border transition-all text-center w-20 h-20 ${
                  link.featured
                    ? 'border-brand-primary/30 bg-brand-primary/[0.08] hover:bg-brand-primary/[0.15] hover:border-brand-primary/60'
                    : 'border-[#222222] bg-[#1C1C1C] hover:bg-[#222222] hover:border-[#333333]'
                }`}
              >
                <div className={`p-1.5 rounded-lg border transition-all ${link.featured ? 'bg-brand-primary/20 border-brand-primary/40 text-brand-primary' : 'bg-[#2A2A2A] border-[#333333] text-[#D1D5DB] group-hover:text-brand-primary group-hover:border-brand-primary/40'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-wide leading-tight transition-colors ${link.featured ? 'text-[#FFFFFF]' : 'text-[#D1D5DB] group-hover:text-[#FFFFFF]'}`}>
                  {link.shortLabel}
                </span>
                {link.featured && (
                  <div className="absolute top-1.5 right-1.5">
                    <Star className="w-2 h-2 text-brand-primary/80 fill-brand-primary/50" />
                  </div>
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-5 gap-3">
        {LINKS.map((link, idx) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Link
                href={link.href}
                className={`group h-full flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border transition-all text-center relative overflow-hidden ${
                  link.featured
                    ? 'border-brand-primary/30 bg-brand-primary/[0.08] hover:bg-brand-primary/[0.15] hover:border-brand-primary/60'
                    : 'border-[#222222] bg-[#1C1C1C] hover:bg-[#222222] hover:border-[#333333]'
                }`}
              >
                <div className={`p-2.5 rounded-xl border transition-all ${link.featured ? 'bg-brand-primary/20 border-brand-primary/40 text-brand-primary' : 'bg-[#2A2A2A] border-[#333333] text-[#D1D5DB] group-hover:border-brand-primary/40 group-hover:text-brand-primary'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest leading-tight transition-colors ${link.featured ? 'text-[#FFFFFF]' : 'text-[#D1D5DB] group-hover:text-[#FFFFFF]'}`}>
                  {link.label}
                </span>
                <div className="absolute bottom-0 left-0 h-0.5 bg-brand-primary w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="section-divider mt-10" />
    </div>
  )
}
