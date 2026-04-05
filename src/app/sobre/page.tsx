'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Terminal, Database, Code, Briefcase, Globe } from 'lucide-react'

export default function SobrePage() {
  return (
    <div className="flex flex-col gap-24 pb-32">
      
      {/* ── BACKGROUND: EXECUTIVE OLED DARK MODE ── */}
      <div className="fixed inset-0 -z-50 pointer-events-none bg-[#050505]" />
      <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute w-[800px] h-[800px] bg-brand-primary/5 blur-[160px] rounded-full -top-1/4 -right-1/4" />
      </div>

      {/* ── HERO: THE BRIDGE ── */}
      <section className="pt-32 container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-foreground/50 font-mono tracking-tighter uppercase mb-8 text-[10px]">
            <Terminal className="w-3 h-3" />
            Arquiteto de Operações & Engenheiro
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12 text-white leading-[1.1]">
            A ponte exata entre o <br />
            <span className="text-foreground/30 italic">Código e o Fluxo de Caixa.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
             <div className="space-y-4">
               <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10">
                 <Briefcase className="w-5 h-5 text-brand-primary" />
               </div>
               <h3 className="text-white font-semibold">Estratégia</h3>
               <p className="text-sm text-foreground/50 leading-relaxed font-light">
                 Formação em Administração Estratégica pela ETEC, focada em viabilidade econômica e processos industriais.
               </p>
             </div>
             <div className="space-y-4">
               <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10">
                 <Globe className="w-5 h-5 text-brand-success" />
               </div>
               <h3 className="text-white font-semibold">Operações</h3>
               <p className="text-sm text-foreground/50 leading-relaxed font-light">
                 Anos de consultoria escalando e-commerces complexos e integrando malhas logísticas pesadas (+40kg).
               </p>
             </div>
             <div className="space-y-4">
               <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10">
                 <Code className="w-5 h-5 text-brand-blue" />
               </div>
               <h3 className="text-white font-semibold">Engenharia</h3>
               <p className="text-sm text-foreground/50 leading-relaxed font-light">
                 Graduando em Engenharia de Software pela UNAERP, arquitetando sistemas escaláveis (NestJS, Prisma, API Dynamics).
               </p>
             </div>
          </div>
        </motion.div>
      </section>

      {/* ── THE NARRATIVE ── */}
      <section className="container mx-auto px-6">
        <div className="max-w-5xl bg-white/[0.01] border border-white/5 p-10 md:p-16 rounded-[2.5rem] backdrop-blur-3xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                 <h2 className="text-2xl font-bold text-white tracking-tight">O Fim da Desconexão Digital</h2>
                 <p className="text-base text-foreground/60 leading-relaxed font-light">
                    A maior falha das operações digitais atuais é o abismo entre o marketing e o estoque. O marketing gera demanda, mas a infraestrutura não suporta o faturamento.
                 </p>
                 <p className="text-base text-foreground/60 leading-relaxed font-light">
                    Minha trajetória foi desenhada para preencher esse espaço. Eu não apenas desenho a estratégia de marketplace; eu desenvolvo a arquitetura que permite ao ERP industrial &quot;conversar&quot; com o TMS de logística em tempo real.
                 </p>
              </div>
              <div className="space-y-6">
                 <div className="p-8 rounded-3xl bg-brand-primary/5 border border-brand-primary/10">
                    <p className="text-brand-primary font-mono text-xs uppercase mb-4 tracking-widest">Philosophy</p>
                    <p className="text-xl text-white/90 font-light italic leading-snug">
                      &quot;Tecnologia sem margem de lucro é apenas custo. Estratégia sem infraestrutura é apenas promessa.&quot;
                    </p>
                 </div>
                 <p className="text-sm text-foreground/40 leading-relaxed font-light">
                    Como Arquiteto de Operações, meu objetivo é construir ecossistemas que funcionem autonomamente, permitindo que a empresa cresça sem a necessidade de intervenção humana em tarefas repetitivas.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container mx-auto px-6 pt-12">
        <div className="border shadow-2xl border-white/5 p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[#0A0A0A]/80 mix-blend-multiply" />
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
                Sua infraestrutura suporta a sua escala?
              </h2>
              <p className="text-base text-foreground/50 mb-10 font-light">
                Avalie a viabilidade técnica da sua integração e logística. 
              </p>
              <Link href="/contato" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:scale-105 transition-all">
                Diagnóstico de Viabilidade <ArrowRight className="w-4 h-4" />
              </Link>
           </div>
        </div>
      </section>

    </div>
  )
}
