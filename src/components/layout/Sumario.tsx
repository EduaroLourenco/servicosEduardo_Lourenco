'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Hash, ChevronRight } from 'lucide-react'

const SECTIONS = [
  { id: 'perfil', label: 'Perfil & Estratégia', target: '#perfil' },
  { id: 'expertise', label: 'Ecosistema de Expertise', target: '#expertise' },
  { id: 'experiencia', label: 'Trajetória Profissional', target: '#experiencia' },
  { id: 'formacao', label: 'Formação & Especialidades', target: '#formacao' },
  { id: 'contato', label: 'Contato & Desafios', target: '#contato' },
]

export function Sumario() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="container mx-auto px-6 mb-32 relative z-10">
      <div className="glass-card rounded-3xl p-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
           <Hash className="w-4 h-4 text-brand-primary" />
           <span className="text-[10px] font-mono font-black uppercase tracking-widest text-white/40">Sumário Executivo</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTIONS.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.target)}
              className="group flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all text-left"
            >
              <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors">
                {section.label}
              </span>
              <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
