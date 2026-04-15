'use client';

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  House, 
  Cpu, 
  ShoppingBag, 
  GitBranch, 
  LayoutTemplate,
  MessageCircle,
  Database
} from 'lucide-react'

const navLinks = [
  { path: '/',           label: 'Início',      shortLabel: 'Início',      icon: House },
  { path: '/ecommerce',  label: 'E-commerce',  shortLabel: 'E-commerce',  icon: ShoppingBag },
  { path: '/engenharia', label: 'Engenharia',  shortLabel: 'Eng.',        icon: Cpu },
  { path: '/processos',  label: 'Processos',   shortLabel: 'Processos',   icon: GitBranch },
  { path: '/interfaces', label: 'Interfaces',  shortLabel: 'UI/UX',      icon: LayoutTemplate },
  { path: '/dados',      label: 'Dados',       shortLabel: 'Dados',       icon: Database },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── DESKTOP PILL NAVIGATION ── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] pointer-events-none hidden lg:flex justify-center pt-6">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border border-white/5 bg-[#080808]/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all duration-500 ${isScrolled ? 'scale-[0.97] bg-[#080808]/80' : 'scale-100'}`}
        >
          {/* Logo mark */}
          <Link href="/" className="px-4 py-2 text-xs font-black uppercase tracking-widest text-brand-primary mr-1">
            EL
          </Link>

          <div className="w-px h-5 bg-white/10" />

          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
            const Icon = link.icon;
            
            return (
              <Link 
                key={link.path} 
                href={link.path} 
                className="relative"
              >
                <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all group ${isActive ? 'text-white' : 'text-white/40 hover:text-white'}`}>
                   {isActive && (
                      <motion.div 
                        layoutId="nav-glow-desktop"
                        className="absolute inset-0 bg-white/5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                   )}
                   <Icon className={`w-3.5 h-3.5 relative z-10 transition-transform group-hover:scale-110 flex-shrink-0 ${isActive ? 'text-brand-primary drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]' : ''}`} />
                   <span className="relative z-10 whitespace-nowrap">{link.label}</span>
                </div>
              </Link>
            )
          })}
          
          <div className="w-px h-5 bg-white/10 mx-1" />
          
          <Link 
            href="/contato" 
            className="px-5 py-2.5 rounded-full bg-brand-primary text-black text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,215,0,0.2)] whitespace-nowrap"
          >
            Contato
          </Link>
        </motion.div>
      </nav>

      {/* ── MOBILE BOTTOM NAVIGATION BAR ── */}
      <nav 
        className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden pointer-events-none"
        style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
      >
        <div className="px-4 pointer-events-auto">
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="flex items-center justify-around p-2 rounded-[2rem] border border-white/10 bg-[#080808]/95 backdrop-blur-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/3 to-transparent pointer-events-none" />
            
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
              const Icon = link.icon;
              
              return (
                <Link 
                  key={link.path} 
                  href={link.path} 
                  className="relative flex flex-col items-center justify-center gap-0.5 py-1 px-2 min-w-[3rem] rounded-xl transition-all active:scale-90"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="nav-glow-mobile"
                      className="absolute inset-0 bg-white/5 rounded-xl"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  <div className={`relative z-10 p-1.5 rounded-lg transition-all ${isActive ? 'text-brand-primary' : 'text-white/30'}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className={`relative z-10 text-[9px] font-bold uppercase tracking-wide leading-none transition-colors ${isActive ? 'text-brand-primary' : 'text-white/25'}`}>
                    {link.shortLabel}
                  </span>

                  {isActive && (
                    <motion.div 
                      layoutId="active-dot-mobile"
                      className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(255,215,0,1)]"
                    />
                  )}
                </Link>
              )
            })}

            {/* Contato CTA */}
            <Link 
              href="/contato" 
              className="relative flex flex-col items-center justify-center gap-0.5 py-1 px-2 min-w-[3rem] rounded-xl transition-all active:scale-90"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <div className="relative z-10 p-1.5 rounded-lg bg-brand-primary text-black transition-all shadow-[0_0_16px_rgba(255,215,0,0.25)]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="relative z-10 text-[9px] font-bold uppercase tracking-wide leading-none text-brand-primary/70">
                Contato
              </span>
            </Link>
          </motion.div>
        </div>
      </nav>
    </>
  )
}
