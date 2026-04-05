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
  ArrowRight
} from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Início', icon: House },
  { path: '/ecommerce', label: 'E-commerce', icon: ShoppingBag },
  { path: '/engenharia', label: 'Engenharia (Integrações e Automatizações)', icon: Cpu },
  { path: '/processos', label: 'Processos', icon: GitBranch },
  { path: '/interfaces', label: 'Interfaces', icon: LayoutTemplate }
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP PILL NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-[100] pointer-events-none hidden lg:flex justify-center pt-8">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border border-white/5 bg-[#080808]/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 ${isScrolled ? 'scale-95' : 'scale-100'}`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            const Icon = link.icon;
            
            return (
              <Link 
                key={link.path} 
                href={link.path} 
                className="relative"
              >
                <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all group ${isActive ? 'text-white' : 'text-white/40 hover:text-white'}`}>
                   {isActive && (
                      <motion.div 
                        layoutId="nav-glow-desktop"
                        className="absolute inset-0 bg-white/5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                   )}
                   <Icon className={`w-3.5 h-3.5 relative z-10 transition-transform group-hover:scale-110 ${isActive ? 'text-brand-primary drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]' : ''}`} />
                   <span className="relative z-10">{link.label}</span>
                </div>
              </Link>
            )
          })}
          
          <div className="w-px h-6 bg-white/10 mx-2" />
          
          <Link href="/contato" className="px-5 py-2.5 rounded-full bg-brand-primary text-black text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,215,0,0.2)]">
            Contato
          </Link>
        </motion.div>
      </nav>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="fixed bottom-0 left-0 right-0 z-[100] pb-6 px-4 lg:hidden pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="flex items-center justify-between p-1.5 rounded-[2.5rem] border border-white/10 bg-[#080808]/90 backdrop-blur-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            {/* Active Highlight Glow (Mobile) */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/5 to-transparent pointer-events-none opacity-50" />
            
            {navLinks.filter(l => l.path !== '/engenharia').map((link) => {
              const isActive = pathname === link.path;
              const Icon = link.icon;
              
              return (
                <Link 
                  key={link.path} 
                  href={link.path} 
                  className={`relative flex flex-col items-center justify-center w-12 h-12 transition-all active:scale-90 touch-none`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="nav-glow-mobile"
                      className="absolute inset-0 bg-white/5 rounded-2xl"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <div className={`relative z-10 p-2 rounded-xl transition-all ${isActive ? 'text-brand-primary' : 'text-white/30'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="active-dot"
                      className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(255,215,0,1)]"
                    />
                  )}
                </Link>
              )
            })}

            <div className="w-px h-6 bg-white/10 mx-1" />

            <Link 
              href="/contato" 
              className={`relative flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-primary text-black transition-all active:scale-90 shadow-[0_0_20px_rgba(255,215,0,0.2)]`}
            >
              <MessageCircle className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </nav>
    </>
  )
}
