'use client'

import React from 'react'
import { Mail, Phone, ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] py-24 mt-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase italic tracking-tight">Contato Direto</h3>
            <p className="text-sm text-foreground/40 max-w-xs leading-relaxed">
              Aberto a novos desafios em posições de liderança e coordenação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            <a 
              href="mailto:eduhlourenco2004@gmail.com" 
              className="group flex items-center gap-3 text-sm text-foreground/60 hover:text-white transition-colors"
            >
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-brand-primary/30 group-hover:text-brand-primary transition-all">
                <Mail className="w-4 h-4" />
              </div>
              eduhlourenco2004@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/eduardo-louren%C3%A7o-7a5739260/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 text-sm text-foreground/60 hover:text-white transition-colors"
            >
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-brand-primary/30 group-hover:text-brand-primary transition-all">
                <ExternalLink className="w-4 h-4" />
              </div>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Eduardo Lourenço — Portfólio Executivo
          </p>
          <div className="flex gap-6 text-[10px] font-mono text-white/10 uppercase tracking-widest">
            <span>Arquiteto de Operações</span>
            <span>Head de E-commerce</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
