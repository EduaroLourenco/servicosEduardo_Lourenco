'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  TrendingUp, 
  Users, 
  BarChart3, 
  Layers, 
  Layout as LayoutIcon, 
  ShoppingCart, 
  Database, 
  Zap,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Globe,
  Mail,
  ExternalLink as LinkedinIcon,
  Rocket,
  Code2,
  Box,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'
import { InstitutionalMiniApp } from '@/components/interactive/InstitutionalMiniApp'
import { EcommerceMiniApp } from '@/components/interactive/EcommerceMiniApp'
import { BookingMiniApp } from '@/components/interactive/BookingMiniApp'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-blue-500/30">
      
      {/* ── AMBIENT GLOWS ── */}
      <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden">
        <div className="absolute w-[1000px] h-[700px] bg-blue-600/10 blur-[150px] rounded-full -top-1/4 -right-1/4" />
        <div className="absolute w-[800px] h-[500px] bg-slate-800/20 blur-[120px] rounded-full bottom-0 -left-1/4" />
      </div>

      {/* ── HERO SECTION: APRESENTAÇÃO PESSOAL ── */}
      <section className="relative pt-24 pb-16 md:pt-56 md:pb-40 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 md:space-y-10 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em]">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 animate-pulse" />
              Engenharia de Software & Operações
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1] md:leading-[0.95] text-slate-50">
              Eduardo <br className="md:hidden" /><span className="text-blue-600">Lourenço.</span>
            </h1>

            {/* LISTA DE SERVIÇOS - MOBILE OPTIMIZED */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 py-4 md:py-6">
              {[
                { label: "E-commerce Full-Stack", icon: <ShoppingCart className="w-4 h-4" /> },
                { label: "Dados & Analytics (GA4)", icon: <BarChart3 className="w-4 h-4" /> },
                { label: "Automação & ERPs", icon: <Zap className="w-4 h-4" /> },
                { label: "Interfaces (UI/UX)", icon: <LayoutIcon className="w-4 h-4" /> },
                { label: "Arquitetura de Software", icon: <Code2 className="w-4 h-4" /> },
                { label: "Consultoria Estratégica", icon: <Layers className="w-4 h-4" /> }
              ].map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                   <div className="flex-shrink-0 p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      {service.icon}
                   </div>
                   <span className="text-[10px] md:text-[11px] font-bold text-slate-300 uppercase tracking-widest">{service.label}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/contato"
                className="haptic-touch bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-2xl shadow-blue-600/30"
              >
                Solicitar Serviço <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="https://wa.me/5516994447044?text=ol%C3%A1%20vim%20pelo%20site%20de%20servi%C3%A7os"
                target="_blank"
                rel="noopener noreferrer"
                className="haptic-touch bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-500 border border-emerald-500/30 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative order-1 lg:order-2 px-4 md:px-0"
          >
            {/* PHOTO SECTION - MOBILE SCALING */}
            <div className="relative z-10 w-full max-w-[320px] md:max-w-none mx-auto aspect-[4/5] bg-slate-800 rounded-[2.5rem] md:rounded-[3rem] border border-slate-700 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60" />
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
              
              <Image 
                src="/eduardo.jpeg" 
                alt="Eduardo Lourenço"
                fill
                className="object-cover object-top grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                priority
              />
              
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20">
                <div className="p-4 md:p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 space-y-1 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
                   <p className="text-[9px] md:text-[10px] font-black text-blue-500 uppercase tracking-widest">Eduardo Lourenço</p>
                   <p className="text-xs md:text-sm font-bold text-white leading-tight">Coordenador de E-commerce e Operações Digitais</p>
                </div>
              </div>
            </div>
            
            {/* Ambient Decorations */}
            <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-48 md:w-64 h-48 md:h-64 bg-blue-600/20 blur-[80px] md:blur-[100px] rounded-full -z-10 animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-slate-700/30 blur-[80px] rounded-full -z-10" />
          </motion.div>

        </div>
      </section>

      {/* ── PORTFOLIO BRIDGE: DORES & SOLUÇÕES ── */}
      <section className="py-20 md:py-32 bg-slate-900/50 border-y border-slate-800 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-50 tracking-tight mb-4 md:mb-6">
               Arquitetura que Resolve <span className="text-blue-600">Dores Reais.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-300 font-light px-4">
               Sua empresa não precisa de mais um site. Ela precisa de uma máquina de vendas e eficiência.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Vendas Travadas?", pain: "Checkout complexo e baixa conversão.", link: "/ecommerce", icon: <ShoppingCart className="w-6 h-6" />, color: "text-orange-500", bg: "bg-orange-500/10" },
              { title: "Decisões no Escuro?", pain: "Falta de dados precisos e trackings GA4.", link: "/dados", icon: <TrendingUp className="w-6 h-6" />, color: "text-cyan-500", bg: "bg-cyan-500/10" },
              { title: "Infra instável?", pain: "Sistemas lentos que não suportam escala.", link: "/engenharia", icon: <Code2 className="w-6 h-6" />, color: "text-blue-500", bg: "bg-blue-500/10" },
              { title: "Gargalos Manuais?", pain: "Processos lentos que impedem o crescimento.", link: "/processos", icon: <Zap className="w-6 h-6" />, color: "text-emerald-500", bg: "bg-emerald-500/10" },
            ].map((card, i) => (
              <Link 
                key={i}
                href={card.link}
                className="group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all active:scale-[0.98] md:hover:-translate-y-2 flex flex-col h-full shadow-xl"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 ${card.bg} ${card.color} rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h4 className="text-lg md:text-xl font-black text-slate-50 mb-2 md:mb-3">{card.title}</h4>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light mb-6 md:mb-8 flex-1">
                  {card.pain}
                </p>
                <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-blue-500 group-hover:gap-4 transition-all">
                  Ver Solução <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE LABS: MINI-APPS INTERATIVOS ── */}
      <section className="py-20 md:py-32 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 md:gap-8 mb-12 md:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-6xl font-black text-slate-50 tracking-tighter mb-4 md:mb-6 leading-tight">
               Ecossistema Digital <br className="hidden md:block" /><span className="text-blue-600">em Tempo Real.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 font-light">
               Interfaces de alta performance. Toque ou interaja para ver a engenharia em movimento.
            </p>
          </div>
          <div className="flex gap-4 pb-0 md:pb-4 border-l-2 border-blue-600 pl-4">
             <div className="flex flex-col items-start lg:items-end">
                <span className="text-[8px] md:text-[10px] font-mono text-slate-500 uppercase tracking-widest">Stack</span>
                <span className="text-xs md:text-sm font-bold text-white">Next.js + Tailwind + Motion</span>
             </div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          
          {/* Item 1: Institucional B2B */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
             <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3">
                   <div className="w-8 md:w-12 h-px bg-blue-600" />
                   <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-blue-500">01. Institucional B2B</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">Autoridade Digital Corporativa</h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed text-container">
                   Interfaces que traduzem solidez. Foco em SEO técnico e menus inteligentes para navegação fluida.
                </p>
                <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2">
                   {['SEO Estruturado', 'Menu Inteligente', 'Performance <1s'].map(t => (
                     <div key={t} className="flex items-center gap-2 text-[10px] md:text-xs text-slate-400 font-bold">
                        <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-emerald-500" /> {t}
                     </div>
                   ))}
                </div>
             </div>
             <motion.div 
               whileHover={{ scale: 1.01 }}
               className="relative rounded-2xl overflow-hidden shadow-2xl"
             >
                <InstitutionalMiniApp />
                <div className="absolute -z-10 -inset-4 bg-blue-600/5 blur-2xl rounded-full" />
             </motion.div>
          </div>

          {/* Item 2: Ecommerce Ecosystem */}
          <div className="lg:col-span-12 grid lg:grid-cols-2 gap-12 items-center pt-20">
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="order-2 lg:order-1 relative"
             >
                <EcommerceMiniApp />
                <div className="absolute -z-10 -inset-4 bg-orange-600/5 blur-2xl rounded-full" />
             </motion.div>
             <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-px bg-orange-500" />
                   <span className="text-xs font-black uppercase tracking-widest text-orange-500">02. E-commerce Full</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Ecossistema de Vendas Industrial</h3>
                <p className="text-slate-200 text-lg leading-relaxed text-container">
                   Experiência de compra otimizada para produtos complexos. Grids de alta densidade de informação, filtros paramétricos e fluxos de checkout simplificados que reduzem a fricção no momento da compra.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                   {['Grid Paramétrico', 'Carrinho Atômico', 'Filtros Dinâmicos', 'Checkout One-Step'].map(t => (
                     <div key={t} className="flex items-center gap-2 text-xs text-slate-400 font-bold">
                        <ShieldCheck className="w-4 h-4 text-orange-500" /> {t}
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Item 3: Booking/Service Flow */}
          <div className="lg:col-span-12 grid lg:grid-cols-2 gap-12 items-center pt-20">
             <div className="space-y-6">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-px bg-emerald-500" />
                   <span className="text-xs font-black uppercase tracking-widest text-emerald-500">03. Booking SaaS</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Fluxo de Agendamento de Serviços</h3>
                <p className="text-slate-200 text-lg leading-relaxed text-container">
                   Simulador de agendamento mobile-first. Ideal para empresas de assistência técnica ou serviços especializados que exigem coleta de dados e seleção de data em poucos cliques.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                   {['Calendário Live', 'Coleta de Leads', 'Feedback de Sucesso', 'Mobile Optimized'].map(t => (
                     <div key={t} className="flex items-center gap-2 text-xs text-slate-400 font-bold">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" /> {t}
                     </div>
                   ))}
                </div>
             </div>
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="relative"
             >
                <BookingMiniApp />
                <div className="absolute -z-10 -inset-4 bg-emerald-600/5 blur-2xl rounded-full" />
             </motion.div>
          </div>

        </div>
      </section>

      {/* ── PERFORMANCE & SALES CTAs ── */}
      <section className="py-24 md:py-40 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="max-w-4xl mx-auto space-y-6 md:space-y-10"
           >
              <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase">
                 Performance <br />é Venda.
              </h2>
              <div className="h-1.5 md:h-2 w-20 md:w-32 bg-white/30 mx-auto rounded-full" />
              <p className="text-lg md:text-3xl text-blue-100 font-light leading-relaxed px-4">
                 Vamos construir o próximo nível da sua operação digital hoje.
              </p>
              
              <div className="pt-6 md:pt-10">
                 <Link 
                   href="/contato"
                   className="inline-flex items-center gap-4 px-8 py-4 md:px-12 md:py-6 bg-white text-blue-600 rounded-[1.5rem] md:rounded-[2rem] font-black text-lg md:text-xl uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl"
                 >
                    Começar Agora <ArrowRight className="w-6 h-6" />
                 </Link>
              </div>
           </motion.div>
        </div>

        {/* Ambient Large Stats */}
        <div className="absolute -bottom-10 md:-bottom-20 -left-10 md:-left-20 text-[100px] md:text-[200px] font-black text-white/5 pointer-events-none select-none">
           99.9%
        </div>
      </section>

      {/* ── FINAL FOOTER ── */}
      <footer className="py-12 md:py-20 container mx-auto px-6 border-t border-slate-800 text-center space-y-6 md:space-y-8">
        <div className="flex justify-center gap-8 text-slate-500">
           <a href="#" className="hover:text-blue-500 transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
           <a href="#" className="hover:text-blue-500 transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
        <p className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em] md:tracking-[0.5em] leading-relaxed">
          Eduardo Lourenço • Arquiteto de Operações Digital • {new Date().getFullYear()}
        </p>
      </footer>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <motion.a
        href="https://wa.me/5516994447044?text=ol%C3%A1%20vim%20pelo%20site%20de%20servi%C3%A7os"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[100] w-14 h-14 md:w-16 md:h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-600/40 border-2 border-white/20 group"
      >
        <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
        <div className="hidden md:block absolute right-full mr-4 py-2 px-4 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-2xl">
           Falar com Eduardo
        </div>
      </motion.a>

    </div>
  )
}
