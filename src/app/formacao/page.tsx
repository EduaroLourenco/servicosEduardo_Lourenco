'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Code2, LineChart, Briefcase, CheckCircle2 } from 'lucide-react'
import { SpotlightCard } from '@/components/ui/SpotlightCard'

const credentials = [
  {
    category: "Base Acadêmica",
    icon: GraduationCap,
    items: [
      { name: "Engenharia de Software", entity: "UNAERP", period: "2024 — Presente", detail: "Foco em Arquitetura e Sistemas Escaláveis" },
      { name: "Administração Estratégica", entity: "ETEC Polivalente", period: "Curso Técnico", detail: "Lógica de Negócios & Operações" }
    ],
    color: "rgba(255, 255, 255, 0.05)"
  },
  {
     category: "Tecnologia & Dados",
     icon: Code2,
     items: [
       { name: "Integrações via APIs & Webhooks", entity: "Arquitetura de Sistemas", period: "Especialista", detail: "Conexão entre plataformas via APIs REST e automações por webhook para sincronização em tempo real." },
       { name: "Bancos de Dados (MongoDB)", entity: "NoSQL", period: "Avançado", detail: "Modelagem e consulta de dados em ambientes NoSQL com foco em alta flexibilidade estrutural." },
       { name: "Excel Avançado & Dashboards", entity: "BI Executivo", period: "Expert", detail: "Planilhas complexas e dashboards de performance para tomada de decisão gerencial." },
       { name: "Design de Interfaces — UX/UI", entity: "Product Design", period: "Design", detail: "Prototipação centrada no usuário com foco em conversão e consistência visual." },
       { name: "Full-Stack (Next.js / Python)", entity: "Engenharia", period: "Dev", detail: "Aplicações web completas, incluindo APIs, automações e interfaces funcionais." }
     ],
     color: "rgba(255, 215, 0, 0.1)"
  },
  {
    category: "Comercial & Marketing",
    icon: LineChart,
    items: [
      { name: "Consultor de Canais Digitais", entity: "Marketplaces", period: "Estratégia", detail: "Gestão em Mercado Livre, Magalu, Amazon, Shopee: arquitetura de catálogo e precificação." },
      { name: "SEO Orientado a Conversão", entity: "Search Intelligence", period: "SEO", detail: "Otimização de fichas de produto para ranqueamento orgânico e alta taxa de conversão." },
      { name: "Marketing Digital — Google Ads", entity: "Performance", period: "Ads", detail: "Gestão de campanhas pagas com foco em intenção de compra, controle de CPC e ROAS." },
      { name: "Gestão de Funis & CRM / LTV", entity: "Growth", period: "CRM", detail: "Estruturação de jornadas B2B e B2C com segmentação por valor de ciclo de vida." },
      { name: "Gestão de Tráfego (Meta & ML)", entity: "Paid Media", period: "Traffic", detail: "Operação de campanhas com foco em eficiência de verba e proteção de margem bruta." }
    ],
    color: "rgba(0, 217, 142, 0.1)"
  },
  {
    category: "Gestão & Processos",
    icon: Briefcase,
    items: [
      { name: "Escola de Inovadores", entity: "Inova CPS", period: "2022", detail: "Formação em inovação e empreendedorismo com ênfase em metodologias ágeis." },
      { name: "Liderança e Gestão de Pessoas", entity: "Executive", period: "Liderança", detail: "Desenvolvimento de equipes multidisciplinares e cultura orientada a resultados." },
      { name: "Gestão de Conflitos (CPS)", entity: "Mediação", period: "CPS", detail: "Técnicas de mediação e negociação aplicada a contextos organizacionais." },
      { name: "Mapeamento (BPMN / Fluxos)", entity: "Processos", period: "BPMN", detail: "Modelagem de processos operacionais com identificação de gargalos e melhoria contínua." },
      { name: "Gestão de Stakeholders", entity: "C-Level", period: "Strategic", detail: "Comunicação estratégica e influência com lideranças executivas e alinhamento de expectativas." }
    ],
    color: "rgba(0, 112, 243, 0.1)"
  }
]

export default function FormacaoPage() {
  return (
    <div className="flex flex-col gap-24 pb-32">
      
      {/* ── BACKGROUND: EXECUTIVE OLED DARK MODE ── */}
      <div className="fixed inset-0 -z-50 pointer-events-none bg-[#050505]" />
      <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute w-[800px] h-[800px] bg-brand-primary/5 blur-[160px] rounded-full -top-1/4 -right-1/4" />
      </div>

      {/* HERO SECTION */}
      <section className="pt-32 container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-foreground/60 font-mono tracking-widest uppercase mb-6 text-[10px]">
            HISTÓRICO TÉCNICO
          </span>
          <h1 className="text-4xl md:text-[3.5rem] font-bold tracking-tight mb-8 text-white leading-tight">
            Credenciais Acadêmicas & <br />
            <span className="text-foreground/40">Técnicas Estratégicas.</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
            Uma base combinada de Engenharia de Software e Administração Estratégica, aplicada a ecossistemas B2B e operações industriais de alta escala.
          </p>
        </motion.div>
      </section>

      {/* CREDENTIALS GRID */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {credentials.map((group, idx) => (
            <SpotlightCard 
              key={idx} 
              className="p-10 border-white/[0.05] bg-white/[0.01] backdrop-blur-xl rounded-3xl"
              spotlightColor={group.color}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-2xl bg-white/5">
                  <group.icon className="w-6 h-6 text-white/70" />
                </div>
                <h3 className="text-xl font-semibold text-white/90 tracking-tight">{group.category}</h3>
              </div>

              <div className="space-y-8">
                {group.items.map((item, iIdx) => (
                  <div key={iIdx} className="group relative">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[10px] font-mono text-white/20 whitespace-nowrap pt-1">
                        {item.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-[11px] text-brand-primary/70 font-semibold">{item.entity}</span>
                       <span className="w-1 h-1 rounded-full bg-white/10" />
                       <p className="text-[11px] text-white/30 font-light italic">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* FOOTNOTE SECRECY/COMPLETION */}
      <section className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/[0.03] bg-white/[0.01] text-white/20 text-xs">
          <CheckCircle2 className="w-4 h-4 text-brand-success/40" />
          Validado contra documentação oficial e certificações corporativas.
        </div>
      </section>

    </div>
  )
}
