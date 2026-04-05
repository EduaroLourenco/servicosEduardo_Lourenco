'use client';

import Link from 'next/link'
import { Menu, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navLinks = [
  { path: '/', label: 'Início' },
  { path: '/ecommerce', label: 'E-commerce' },
  { path: '/engenharia', label: 'Engenharia (Integrações e Automatizações)' },
  { path: '/processos', label: 'Processos' },
  { path: '/interfaces', label: 'Interfaces' }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          EDUARDO<span className="text-brand-primary">.</span>LOURENÇO
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.path} 
                href={link.path} 
                className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-colors ${
                  isActive ? 'text-white' : 'text-foreground/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contato" className="group hidden md:inline-flex items-center justify-center rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary px-6 py-2.5 text-sm font-bold transition-all hover:bg-brand-primary hover:text-background hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]">
            Iniciar Projeto
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="lg:hidden p-2 text-foreground/80 hover:text-white rounded-md bg-white/5 border border-white/10">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
