'use client'

import { motion } from 'framer-motion'
import { Calculator, FileSpreadsheet, GraduationCap, MousePointer2, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ManagementSection() {
  const [macroExecuted, setMacroExecuted] = useState(false)
  const [key, setKey] = useState(0)

  // Loop the spreadsheet animation
  useEffect(() => {
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;

    const runCycle = () => {
      setMacroExecuted(false)
      
      // Cursor clicks after 1.5s
      timeout1 = setTimeout(() => {
        setMacroExecuted(true)
      }, 1500)

      // Reset after 6s to loop
      timeout2 = setTimeout(() => {
        setKey(prev => prev + 1)
        runCycle()
      }, 6000)
    }

    runCycle()

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [key])

  // Mock data for grid
  const initialChaos = [
    "-R$ 8.432,10", "PENDENTE", "ERRO", "N/A",
    "-R$ 1.200,50", "DESCONHECIDO", "N/A", "PENDENTE",
    "-R$ 45.900,00", "ATRASO", "N/A", "ERRO",
    "-R$ 3.320,00", "PENDENTE", "N/A", "ERRO"
  ]

  const organizedData = [
    "R$ +12.500,00", "CONCILIADO", "OK", "Bancário",
    "R$ +4.200,50", "CONCILIADO", "OK", "Estoque",
    "R$ +55.900,00", "CONCILIADO", "OK", "Checkout",
    "R$ +8.320,00", "CONCILIADO", "OK", "Pix"
  ]

  return (
    <section id="gestao" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-brand-emerald/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          
          {/* Content side */}
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              O Fim do Caos <span className="text-brand-emerald">Operacional e Financeiro</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-foreground/70 mb-10"
            >
              Estruturamos processos internos, assumimos a gestão do seu fluxo de caixa e automatizamos o seu dia a dia. Para gestores que perdem dinheiro pela falta de visão clara dos números.
            </motion.p>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-emerald/10 flex items-center justify-center text-brand-emerald border border-brand-emerald/20">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Gestão Financeira Multicompany (BPO)</h4>
                  <p className="text-foreground/70">Conciliação bancária diária, auditoria de contas e clareza para múltiplos CNPJs simultaneamente.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-emerald/10 flex items-center justify-center text-brand-emerald border border-brand-emerald/20">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Automação de Backoffice</h4>
                  <p className="text-foreground/70">Inteligência low-code (Google Workspace) para criar sistemas de controle invisíveis e sem custo de licenças.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-brand-emerald/10 flex items-center justify-center text-brand-emerald border border-brand-emerald/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Arquitetura de Treinamento (SOPs)</h4>
                  <p className="text-foreground/70">Mapeamento de rotinas e criação de Universidades Corporativas para zerar o impacto do turnover.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Interactive Spreadsheet Automator */}
          <div className="lg:w-1/2 w-full perspective-1000">
            <motion.div 
              initial={{ opacity: 0, rotateY: -20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-2xl p-6 md:p-8 border border-brand-emerald/20 relative overflow-hidden glow-emerald"
            >
              <div className="mb-6 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Base Desestruturada / ERP</h3>
                  <p className="text-sm text-brand-emerald/80">Automação Low-Code Ativa</p>
                </div>
                
                {/* Execute Macro Button */}
                <div className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md font-bold text-sm transition-all duration-300 z-10",
                  macroExecuted ? "bg-brand-emerald text-black shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-95" : "bg-white/10 text-white/50 border border-white/10"
                )}>
                  <Play className="w-4 h-4" />
                  <span className="hidden md:inline">Executar</span> Macro
                </div>
              </div>

              {/* Spreadsheet Grid */}
              <div className="relative rounded-lg border border-white/10 overflow-hidden bg-[#141414]">
                
                {/* Scanning Light sweep effect */}
                {macroExecuted && (
                  <motion.div 
                    initial={{ top: "-10%" }}
                    animate={{ top: "110%" }}
                    transition={{ duration: 1.5, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-brand-emerald shadow-[0_0_30px_10px_rgba(16,185,129,0.3)] z-20 pointer-events-none"
                  />
                )}

                <div className="grid grid-cols-4 gap-[1px] bg-white/10">
                  <div className="bg-black/80 p-2 text-[10px] md:text-xs font-semibold text-foreground/50 text-center tracking-wider">VALOR</div>
                  <div className="bg-black/80 p-2 text-[10px] md:text-xs font-semibold text-foreground/50 text-center tracking-wider">STATUS</div>
                  <div className="bg-black/80 p-2 text-[10px] md:text-xs font-semibold text-foreground/50 text-center tracking-wider">AUDITORIA</div>
                  <div className="bg-black/80 p-2 text-[10px] md:text-xs font-semibold text-foreground/50 text-center tracking-wider">ORIGEM</div>

                  {Array.from({ length: 16 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-[#141414] p-3 text-[10px] md:text-xs text-center font-mono flex items-center justify-center relative overflow-hidden"
                    >
                      <motion.span
                        initial={false}
                        animate={{ 
                          color: macroExecuted ? "#10B981" : "#EF4444",
                          opacity: macroExecuted ? 1 : 0.7
                        }}
                        transition={{ duration: 0.3, delay: macroExecuted ? (Math.floor(i/4) * 0.1) : 0 }}
                        className="relative z-10"
                      >
                        {macroExecuted ? organizedData[i] : initialChaos[i]}
                      </motion.span>
                      
                      {/* Cell flash effect during scan */}
                      {macroExecuted && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.3, 0] }}
                          transition={{ duration: 0.5, delay: Math.floor(i/4) * 0.1 }}
                          className="absolute inset-0 bg-brand-emerald/20 pointer-events-none"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Fake Cursor */}
              <motion.div
                key={`cursor-${key}`}
                initial={{ left: "10%", top: "80%", opacity: 0 }}
                animate={{ 
                  left: ["10%", "10%", "85%", "85%", "10%"], 
                  top: ["80%", "80%", "8%", "8%", "80%"],
                  opacity: [0, 1, 1, 0, 0],
                  scale: [1, 1, 0.8, 1, 1]
                }}
                transition={{ duration: 4, times: [0, 0.1, 0.35, 0.5, 1] }}
                className="absolute z-30 pointer-events-none drop-shadow-2xl"
              >
                <MousePointer2 fill="white" className="text-white w-8 h-8 rotate-[-15deg]" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
