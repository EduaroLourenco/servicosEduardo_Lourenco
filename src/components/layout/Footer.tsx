'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, ExternalLink, ArrowUp, Linkedin } from 'lucide-react'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] py-12 md:py-16 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-brand-primary/3 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Main row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-10">
          
          {/* Brand + tagline */}
          <div className="space-y-2">
            <Link href="/" className="block text-lg font-black uppercase tracking-tighter text-white hover:text-brand-primary transition-colors">
              Eduardo<span className="text-brand-primary">.</span>Lourenço
            </Link>
            <p className="text-xs text-foreground/30 font-light leading-relaxed max-w-xs">
              Aberto a novos desafios em posições de liderança e coordenação.
            </p>
          </div>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:eduhlourenco2004@gmail.com" 
              className="group flex items-center gap-3 text-sm text-foreground/50 hover:text-white transition-colors"
            >
              <div className="p-2 rounded-lg bg-white/5 border border-white/8 group-hover:border-brand-primary/30 group-hover:text-brand-primary transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-xs">eduhlourenco2004@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/eduardo-louren%C3%A7o-7a5739260/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 text-sm text-foreground/50 hover:text-white transition-colors"
            >
              <div className="p-2 rounded-lg bg-white/5 border border-white/8 group-hover:border-brand-primary/30 group-hover:text-brand-primary transition-all">
                <ExternalLink className="w-4 h-4" />
              </div>
              <span className="text-xs">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-white/15 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Eduardo Lourenço — Portfólio Executivo
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-5 text-[9px] font-mono text-white/10 uppercase tracking-widest">
              <span>Arquiteto de Operações</span>
              <span>Head de E-commerce</span>
            </div>
            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group p-2 rounded-lg border border-white/8 bg-white/[0.02] hover:border-brand-primary/30 hover:text-brand-primary text-white/30 transition-all"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
