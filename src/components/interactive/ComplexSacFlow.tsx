'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react'

const SOP_DATA = [
  {
    id: 'etiqueta',
    category: 'Marketplace',
    title: 'Resolução de Falha na Etiqueta',
    priority: 'Alta',
    sla: '24 horas',
    steps: [
      'Localizar o pedido no Hub de Integração (Bling/Dynamics).',
      'Verificar se há inconsistência de peso ou dimensões no cadastro do produto.',
      'Realizar a emissão manual da etiqueta diretamente no painel do Marketplace.',
      'Notificar o cliente sobre a atualização do envio via chat oficial.',
      'Registrar a causa-raiz para melhoria do processo de expedição.'
    ]
  },
  {
    id: 'coleta',
    category: 'Logística',
    title: 'Protocolo de Atraso na Coleta',
    priority: 'Crítica',
    sla: '12 horas',
    steps: [
      'Identificar pedidos que foram bipados mas não constam como coletados.',
      'Consultar o status da carga no portal da transportadora (TMS).',
      'Abrir chamado de priorização no suporte B2B da transportadora.',
      'Atualizar a previsão de entrega no ERP para manter o cliente informado.',
      'Escalar para a gerência logística caso o atraso supere 24h.'
    ]
  },
  {
    id: 'financeiro',
    category: 'Financeiro',
    title: 'Conciliação de Repasses Mensais',
    priority: 'Moderada',
    sla: 'Diário',
    steps: [
      'Extrair relatório de repasses brutos do painel do Marketplace.',
      'Cruzar os valores com as Notas Fiscais emitidas no ERP.',
      'Identificar divergências em taxas de comissão ou cobranças de frete.',
      'Abrir protocolo de contestação financeira junto ao canal de venda.',
      'Validar o recebimento do crédito na próxima janela de repasse.'
    ]
  }
]

export function ComplexSacFlow() {
  const [openId, setOpenId] = useState<string | null>('etiqueta')

  const activeSop = SOP_DATA.find(s => s.id === openId) || SOP_DATA[0]

  return (
    <div className="w-full glass-card rounded-[2.5rem] p-6 md:p-10 shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col font-sans">
      
      <div className="mb-10">
        <h3 className="text-xl font-bold text-white mb-2 italic uppercase tracking-tighter">EXPLORADOR DE PROCESSOS (EXEMPLOS)</h3>
        <p className="text-white/30 text-[10px] font-mono uppercase tracking-[0.3em]">Protocolos de Execução Industrial</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: LIST */}
        <div className="lg:col-span-5 space-y-2">
          {SOP_DATA.map((sop) => {
            const isActive = openId === sop.id
            return (
              <button 
                key={sop.id}
                onClick={() => setOpenId(sop.id)}
                className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group
                  ${isActive ? 'bg-white/10 border-white/20' : 'bg-white/[0.02] border-white/5 hover:bg-white/5'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl transition-colors
                    ${isActive ? 'bg-brand-primary text-black' : 'bg-white/5 text-white/40'}`}>
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest block">{sop.category}</span>
                    <h4 className={`text-sm font-bold tracking-tight ${isActive ? 'text-white' : 'text-white/40'}`}>{sop.title}</h4>
                  </div>
                </div>
                <ArrowRight className={`w-3 h-3 transition-transform ${isActive ? 'text-white opacity-100 translate-x-1' : 'text-white/10 opacity-0'}`} />
              </button>
            )
          })}
        </div>

        {/* RIGHT COLUMN: CONTENT */}
        <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 rounded-3xl p-8 min-h-[400px] relative overflow-hidden">
           <AnimatePresence mode="wait">
             <motion.div
               key={openId}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
               className="space-y-6"
             >
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                   <div className="flex items-center gap-4 text-[9px] font-mono text-white/40 uppercase tracking-[0.2em]">
                      <div className="flex items-center gap-2"><AlertCircle className="w-3 h-3 text-red-500" /> {activeSop.priority}</div>
                      <div className="flex items-center gap-2"><Clock className="w-3 h-3 text-brand-blue" /> {activeSop.sla}</div>
                   </div>
                </div>

                <div className="space-y-6">
                  {activeSop.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[9px] font-black text-white/40 group-hover:bg-brand-primary group-hover:text-black transition-all">
                          {idx + 1}
                        </div>
                        {idx < activeSop.steps.length - 1 && (
                          <div className="w-px flex-1 bg-white/5 mt-2" />
                        )}
                      </div>
                      <p className="text-white/60 text-xs leading-relaxed pb-2 group-hover:text-white transition-colors">{step}</p>
                    </div>
                  ))}
                </div>
             </motion.div>
           </AnimatePresence>
           
           {/* Decorative element */}
           <div className="absolute bottom-4 right-8 opacity-[0.03] select-none pointer-events-none">
              <ShieldCheck className="w-40 h-40" />
           </div>
        </div>
      </div>

    </div>
  )
}
