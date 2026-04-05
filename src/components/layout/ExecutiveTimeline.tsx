'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, GitCommit } from 'lucide-react'

const EXPERIENCE_DATA = [
  {
    company: 'Chopeiras Memo',
    role: 'Coordenador de E-commerce & Estratégia de Marketplace',
    date: 'Out/2024 – Atualmente',
    desc: 'Responsável pela operação digital da indústria nacional do setor de bebidas e equipamentos. Gerencia estratégia de presença nos principais marketplaces, posicionamento de marca nos canais digitais e interface entre Comercial, Logística, TI e Diretoria. Crescimento de Vendas & Estratégia Comercial: Definição e execução da estratégia de crescimento nos canais digitais, com foco em aumento consistente de faturamento, expansão de presença nos marketplaces e posicionamento competitivo da marca por canal e público-alvo. Tráfego Pago & Conversão: Gestão de campanhas de Ads com foco em eficiência de verba e proteção de margem bruta. Otimização contínua de fichas de produto, precificação dinâmica e posicionamento de anúncios para elevar a taxa de conversão orgânica e paga. Posicionamento de Marca & Catálogo: Definição do posicionamento digital da marca Memo: arquitetura de catálogo, copywriting de fichas técnicas orientado a conversão, identidade visual aplicada a anúncios e proposta de valor diferenciada por canal e público-alvo. Automação Operacional: Liderou a automação do processamento de pedidos, rastreio de envios e integração logística — processos antes executados manualmente — reduzindo falhas operacionais e liberando capacidade da equipe para atividades de maior valor estratégico. Integração de Sistemas & Dados: Conduziu a integração do ERP corporativo (Microsoft Dynamics) aos canais via Hubs de E-commerce, eliminando lançamentos manuais e centralizando o controle de estoque e faturamento. Estruturou logística para cargas pesadas com automação de rastreio e faturamento via TMS — processo inédito na operação. Governança Fiscal: Reestruturou o fluxo de assistência técnica com validação fiscal obrigatória por fases (XML/NFe), bloqueando vazamentos de receita não rastreados e fortalecendo o controle de margem operacional.'
  },
  {
    company: 'Dufthare — Consultoria Estratégica B2B/B2C',
    role: 'Consultor de Estratégia Digital & Operações',
    date: 'Fev/2024 – Atualmente',
    desc: 'Consultoria independente voltada à transformação digital de empresas de médio porte. Atende C-Level e fundadores com diagnóstico de operação, redesenho de processos e estruturação de canais de aquisição. Digitalização de Operações: Mapeamento de processos analógicos e modelagem em fluxogramas digitais (BPMN), com identificação de gargalos e proposta de automação por etapa. Canais de Aquisição & CRM: Estruturação de funis de vendas B2B — da captação ao pós-venda — com réguas de relacionamento, segmentação de leads por LTV e interfaces de conversão (UX/UI) orientadas a resultado.'
  },
  {
    company: "Perlavita — Distribuidor Eko'7",
    role: 'Líder de Projeto — Canais Digitais e Operações',
    date: 'Ago/2024 – Out/2024',
    desc: "Liderou a criação do ecossistema digital da marca: ativação de canais de venda, inteligência competitiva e modelagem de processos para controle integrado de estoque, fiscal e expedição."
  },
  {
    company: 'Goprec Capital LTDA',
    role: 'Especialista em Processos & Aquisição B2B',
    date: 'Jun/2024 – Ago/2024',
    desc: 'Estruturação de processos comerciais para captação de clientes institucionais de alto valor. Funis de venda para o mercado financeiro com qualificação de leads, réguas de nutrição e CRM.'
  },
  {
    company: 'Universidade Marketplace',
    role: 'Analista de Dados & Performance — E-commerce',
    date: 'Mai/2023 – Fev/2024',
    desc: 'Análise de performance de vendas para sellers de Mercado Livre e Amazon. Gestão de portfólio por curva ABC, otimização de Ads e criação de dashboards executivos de receita, faturamento e margem.'
  }
];

export function ExecutiveTimeline() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6">
      <div className="relative">
        {/* Continuous Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
        
        <div className="space-y-16 md:space-y-24">
          {EXPERIENCE_DATA.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-10%" }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-6 md:gap-16 relative`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[20px] md:left-1/2 top-4 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#050505] border border-white/20 z-10 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                   <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-brand-primary animate-pulse" />
                </div>

                <div className={`w-full md:w-[45%] flex flex-col ${isEven ? 'items-start text-left' : 'items-start md:items-end md:text-right'} pl-12 md:pl-0 mt-2 md:mt-0`}>
                  <div className={`flex items-center gap-2 mb-2 ${!isEven && 'md:flex-row-reverse'}`}>
                     <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/30" />
                     <span className="text-[9px] md:text-[10px] font-mono font-black uppercase text-brand-primary spacing tracking-widest">{item.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight uppercase italic">{item.company}</h3>
                  <div className={`flex items-center gap-2 mb-4 text-white/50 text-[9px] md:text-[10px] uppercase font-bold tracking-widest ${!isEven && 'md:flex-row-reverse'}`}>
                     <GitCommit className="w-2.5 h-2.5 md:w-3 md:h-3" />
                     <span>{item.role}</span>
                  </div>
                  <p className="text-xs md:text-sm text-foreground/40 leading-relaxed font-light italic">
                    {item.desc}
                  </p>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
