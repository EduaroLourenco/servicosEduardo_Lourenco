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
  Database, 
  GraduationCap, 
  User, 
  Terminal,
  Menu,
  X,
  ArrowRight
} from 'lucide-react'

const navLinks = [
  { path: '/',           label: 'Início',     shortLabel: 'Início',  icon: House },
  { path: '/ecommerce',  label: 'E-commerce', shortLabel: 'E-comm',  icon: ShoppingBag },
  { path: '/engenharia', label: 'Engenharia', shortLabel: 'Eng.',    icon: Cpu },
  { path: '/processos',  label: 'Processos',  shortLabel: 'Proc.',   icon: GitBranch },
  { path: '/interfaces', label: 'Interfaces', shortLabel: 'UI/UX',  icon: LayoutTemplate },
  { path: '/dados',      label: 'Dados',      shortLabel: 'Dados',   icon: Database },
  { path: '/plataformas', label: 'Plataformas', shortLabel: 'Plat.', icon: Terminal },
  { path: '/formacao',   label: 'Formação',   shortLabel: 'Form.',   icon: GraduationCap },
  { path: '/sobre',      label: 'Sobre',      shortLabel: 'Sobre',   icon: User },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu ao mudar de rota
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── DESKTOP PILL ── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] pointer-events-none hidden lg:flex justify-center pt-6">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border border-slate-700 bg-slate-900/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 ${isScrolled ? 'scale-[0.97] bg-slate-900/95' : ''}`}
        >
          <Link href="/" className="px-4 py-2 text-xs font-black uppercase tracking-widest text-blue-500 mr-1">EL</Link>
          <div className="w-px h-5 bg-slate-800" />

          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
            const Icon = link.icon;
            return (
              <Link key={link.path} href={link.path} className="relative">
                <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all group ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-desktop"
                      className="absolute inset-0 bg-blue-500/10 rounded-full border border-blue-500/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 relative z-10 flex-shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-blue-500' : ''}`} />
                  <span className="relative z-10 whitespace-nowrap">{link.label}</span>
                </div>
              </Link>
            );
          })}

          <div className="w-px h-5 bg-slate-800 mx-1" />
          <Link href="/contato" className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_24px_rgba(37,99,235,0.3)] whitespace-nowrap hover:bg-blue-700">
            Contato
          </Link>
        </motion.div>
      </nav>

      {/* ── MOBILE HEADER + HAMBURGER ── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] lg:hidden p-4">
        <div className="flex items-center justify-between bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-3 rounded-2xl shadow-2xl">
          <Link href="/" className="text-sm font-black uppercase tracking-widest text-blue-500 pl-2">
            Eduardo<span className="text-white">.</span>L
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white active:scale-90 transition-all"
            aria-label="Abrir Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] lg:hidden bg-slate-900 flex flex-col p-8 pt-24"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col gap-2 overflow-y-auto pb-10">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.path}
                      className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${isActive ? 'bg-blue-600/10 border-blue-500/50 text-white' : 'bg-slate-800/50 border-slate-700 text-slate-400'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-xl ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-500'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-lg font-bold tracking-tight">{link.label}</span>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6 mt-6 border-t border-slate-800"
              >
                <Link
                  href="/contato"
                  className="flex items-center justify-center gap-3 w-full p-5 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-blue-600/30 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-5 h-5" /> Falar com Eduardo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
