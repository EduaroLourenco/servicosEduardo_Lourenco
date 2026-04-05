'use client'

import { motion } from 'framer-motion'
import { Code2, Settings, Terminal, Database, FileSpreadsheet, Key, Network, Users } from 'lucide-react'

export function Founders() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Mentes de grande agência.<br/><span className="text-foreground/50">Velocidade de uma consultoria boutique.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Eduardo Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative glass rounded-3xl p-8 md:p-12 border border-white/5 hover:border-brand-blue/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-brand-blue/10 flex items-center justify-center mb-8 text-brand-blue border border-brand-blue/20 group-hover:glow-blue transition-all">
                <Code2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">Eduardo Lourenço</h3>
              <p className="text-brand-blue font-medium mb-6">Arquiteto de Software & Estratégia Digital</p>
              
              <p className="text-foreground/70 mb-10 min-h-[100px]">
                Focado em resolver gargalos tecnológicos e criar caminhos práticos para o crescimento através de código escalável. Acredita que software bom é aquele que reduz custo operacional.
              </p>

              {/* Tech Stack Reveal */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-foreground/50 uppercase tracking-widest">Stack Técnico</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'React / Next.js', icon: <Terminal className="w-4 h-4"/> },
                    { name: 'NestJS / Node', icon: <Settings className="w-4 h-4"/> },
                    { name: 'Prisma DB', icon: <Database className="w-4 h-4"/> },
                    { name: 'AWS Cloud', icon: <Network className="w-4 h-4"/> },
                  ].map((tech, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0.6, y: 0 }}
                      whileHover={{ scale: 1.05, opacity: 1 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-white/10 text-sm font-medium hover:bg-brand-blue/20 hover:border-brand-blue/50 hover:text-brand-blue transition-all cursor-default"
                    >
                      {tech.icon}
                      {tech.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Paloma Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative glass rounded-3xl p-8 md:p-12 border border-white/5 hover:border-brand-emerald/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-brand-emerald/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-brand-emerald/10 flex items-center justify-center mb-8 text-brand-emerald border border-brand-emerald/20 group-hover:glow-emerald transition-all">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">Paloma Amaral</h3>
              <p className="text-brand-emerald font-medium mb-6">Engenharia de Processos & BPO Financeiro</p>
              
              <p className="text-foreground/70 mb-10 min-h-[100px]">
                Une o rigor técnico da tecnologia à visão administrativa. Transforma processos manuais em inteligência operacional e caixa previsível, acabando com a dependência de pessoas.
              </p>

              {/* Stack Reveal */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-foreground/50 uppercase tracking-widest">Arsenal</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Looker Studio', icon: <FileSpreadsheet className="w-4 h-4"/> },
                    { name: 'Multicompany BPO', icon: <Key className="w-4 h-4"/> },
                    { name: 'Apps Script', icon: <Terminal className="w-4 h-4"/> },
                    { name: 'SOPs & Manuais', icon: <Settings className="w-4 h-4"/> },
                  ].map((tech, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0.6, y: 0 }}
                      whileHover={{ scale: 1.05, opacity: 1 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-white/10 text-sm font-medium hover:bg-brand-emerald/20 hover:border-brand-emerald/50 hover:text-brand-emerald transition-all cursor-default"
                    >
                      {tech.icon}
                      {tech.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
