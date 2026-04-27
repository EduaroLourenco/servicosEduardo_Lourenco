'use client';

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { House, Cpu, ShoppingBag, GitBranch, LayoutTemplate, MessageCircle, Database, GraduationCap, User, Terminal } from 'lucide-react'

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <Link href="/" className="px-4 py-2 text-xs font-black uppercase tracking-widest text-brand-primary mr-1">EL</Link>
          <div className="w-px h-5 bg-slate-800" />

          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
            const Icon = link.icon;
            return (
              <Link key={link.path} href={link.path} className="relative">
                <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all group ${isActive ? 'text-white' : 'text-[#D1D5DB] hover:text-white'}`}>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-desktop"
                      className="absolute inset-0 bg-brand-primary/10 rounded-full border border-brand-primary/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 relative z-10 flex-shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-brand-primary' : ''}`} />
                  <span className="relative z-10 whitespace-nowrap">{link.label}</span>
                </div>
              </Link>
            );
          })}

          <div className="w-px h-5 bg-slate-800 mx-1" />
          <Link href="/contato" className="px-5 py-2.5 rounded-full bg-brand-primary text-white text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_24px_rgba(37,99,235,0.3)] whitespace-nowrap hover:bg-brand-hover">
            Contato
          </Link>
        </motion.div>
      </nav>

      {/* ── MOBILE BOTTOM BAR ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden pointer-events-none" style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
        <div className="px-4 pointer-events-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="flex items-center justify-around p-2 rounded-[2rem] border border-slate-700 bg-slate-900/95 backdrop-blur-2xl shadow-[0_-8px_32px_rgba(0,0,0,0.6)]"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
              const Icon = link.icon;
              return (
                <Link
                  key={link.path} href={link.path}
                  className="relative flex flex-col items-center justify-center gap-1 py-1.5 px-2.5 min-w-[3rem] rounded-xl transition-all active:scale-90"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-mobile"
                      className="absolute inset-0 bg-brand-primary/10 rounded-xl"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <div className={`relative z-10 p-1.5 rounded-lg transition-all ${isActive ? 'text-brand-primary' : 'text-[#D1D5DB]'}`}>
                    <Icon className="w-[18px] h-[18px]" />
                  </div>
                  <span className={`relative z-10 text-[10px] font-bold uppercase tracking-tight leading-none ${isActive ? 'text-brand-primary' : 'text-[#D1D5DB]'}`}>
                    {link.shortLabel}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="active-dot-mobile"
                      className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-brand-primary shadow-[0_0_8px_var(--color-brand-glow)]"
                    />
                  )}
                </Link>
              );
            })}
            <Link href="/contato" className="relative flex flex-col items-center justify-center gap-1 py-1.5 px-2.5 min-w-[3rem] rounded-xl transition-all active:scale-90" style={{ WebkitTapHighlightColor: 'transparent' }}>
              <div className="relative z-10 p-1.5 rounded-lg bg-brand-primary text-white shadow-[0_0_16px_rgba(37,99,235,0.3)]">
                <MessageCircle className="w-[18px] h-[18px]" />
              </div>
              <span className="relative z-10 text-[10px] font-bold uppercase tracking-tight leading-none text-brand-primary">Contato</span>
            </Link>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
