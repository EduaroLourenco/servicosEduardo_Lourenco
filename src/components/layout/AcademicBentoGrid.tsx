'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Cpu, Users, ArrowRight } from 'lucide-react'
import { SpotlightCard } from '@/components/ui/SpotlightCard'

export function AcademicBentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr max-w-7xl mx-auto px-4 lg:px-6">
      
      {/* Card 1: Formação Acadêmica (Large Card) */}
      <div className="md:col-span-2 md:row-span-1 min-h-[280px]">
        <SpotlightCard className="h-full p-10 border-white/10 bg-[#0A0E27]/40 flex flex-col justify-between" spotlightColor="rgba(255, 215, 0, 0.05)">
           <div>
              <GraduationCap className="w-12 h-12 text-brand-primary mb-8" />
              <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-6">Formação Acadêmica</h3>
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <p className="text-sm text-foreground/60 leading-relaxed font-light">
                      <strong className="text-white">Engenharia de Software</strong> — UNAERP (2023-2027)
                    </p>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/40" />
                    <p className="text-sm text-foreground/40 leading-relaxed font-light">
                      <strong className="text-white/60">Técnico em Administração</strong> — ETEC (2020-2022)
                    </p>
                 </div>
              </div>
           </div>
           <div className="mt-8 flex gap-3">
              {['Bacharelado', 'Técnico'].map(tag => (
                <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-white/30 border border-white/5 bg-white/5 px-2 py-1 rounded">
                   {tag}
                </span>
              ))}
           </div>
        </SpotlightCard>
      </div>

      {/* Card 2: Comercial & Marketing (Tall or Small Card) */}
      <div className="md:col-span-1 md:row-span-1">
        <SpotlightCard className="h-full p-10 border-brand-primary/20 bg-brand-primary/5 flex flex-col justify-between" spotlightColor="rgba(255, 215, 0, 0.15)">
           <Award className="w-12 h-12 text-brand-primary mb-8" />
           <div>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-4">Comercial & Marketing</h3>
              <ul className="space-y-2">
                 {['Consultor ML Platinum', 'Curso E-commerce (IFRS)', 'SEO (Conversion)', 'Mkt Digital (Google)', 'Vendas (CPS)'].map(item => (
                   <li key={item} className="text-[10px] text-white/50 flex items-center gap-2 font-mono uppercase tracking-widest">
                      <span className="w-1 h-1 bg-brand-primary rounded-full shrink-0" />
                      {item}
                   </li>
                 ))}
              </ul>
           </div>
        </SpotlightCard>
      </div>

      {/* Card 3: Engenharia & Dados */}
      <div className="md:col-span-1 md:row-span-1">
        <SpotlightCard className="h-full p-10 border-brand-success/20 bg-brand-success/5 flex flex-col justify-between" spotlightColor="rgba(0, 217, 142, 0.15)">
           <Cpu className="w-12 h-12 text-brand-success mb-8" />
           <div>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-4">Engenharia & Dados</h3>
              <ul className="space-y-2">
                 {['MongoDB', 'Excel Avançado', 'Lógica Programação', 'APIs & Webhooks'].map(item => (
                   <li key={item} className="text-[10px] text-white/50 flex items-center gap-2 font-mono uppercase tracking-widest">
                      <span className="w-1 h-1 bg-brand-success rounded-full shrink-0" />
                      {item}
                   </li>
                 ))}
              </ul>
           </div>
        </SpotlightCard>
      </div>

      {/* Card 4: Gestão & Liderança (Wide Bottom) */}
      <div className="md:col-span-4">
        <SpotlightCard className="h-full p-10 border-white/5 bg-gradient-to-r from-[#0A0E27]/60 via-transparent to-[#0A0E27]/60 backdrop-blur-2xl" spotlightColor="rgba(255,255,255,0.03)">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                       <Users className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter leading-none">Gestão &<br/>Liderança</h3>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                       <p className="text-[10px] font-black uppercase text-brand-primary tracking-widest mb-1 italic">Escola de Inovadores</p>
                       <p className="text-xs text-white/40 font-light">Inova CPS (Empreendedorismo e Inovação Serial)</p>
                    </div>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                       <p className="text-[10px] font-black uppercase text-brand-success tracking-widest mb-1 italic">Liderança de Conflitos</p>
                       <p className="text-xs text-white/40 font-light">Gestão de Pessoas e Conflitos (CPS)</p>
                    </div>
                 </div>
              </div>
              <div className="w-full md:w-auto shrink-0 flex flex-col items-center">
                 <div className="mb-4 text-[10px] font-mono text-white/10 uppercase tracking-[0.5em] hidden lg:block">System_Access</div>
                 <button className="haptic-touch group bg-white text-black px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-tighter flex items-center gap-4 shadow-[0_20px_50px_rgba(255,255,255,0.15)] transition-all">
                    Ver Currículo <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>
        </SpotlightCard>
      </div>

    </div>
  )
}
