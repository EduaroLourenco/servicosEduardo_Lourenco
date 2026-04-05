'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Trophy, Truck, Star, AlertCircle } from 'lucide-react'

const sellers = [
  {
    id: 1,
    name: 'Sua Operação Estruturada',
    reputation: 'green',
    fulfillment: true,
    price: 149.90,
    isWinner: true
  },
  {
    id: 2,
    name: 'Concorrente A (Amador)',
    reputation: 'yellow',
    fulfillment: false,
    price: 145.00,
    isWinner: false
  },
  {
    id: 3,
    name: 'Concorrente B (Saturado)',
    reputation: 'red',
    fulfillment: false,
    price: 139.90,
    isWinner: false
  }
]

export function BuyBoxSimulator() {
  const [activeStrategy, setActiveStrategy] = useState<'price' | 'logistics' | 'reputation'>('logistics')

  return (
    <div className="w-full bg-[#0A0E27] rounded-3xl p-8 border border-brand-blue/30 shadow-[0_0_40px_rgba(33,150,243,0.1)] relative">
      <div className="absolute top-0 right-0 p-4">
        <span className="bg-brand-blue/20 text-brand-blue text-xs font-bold px-3 py-1 rounded-full border border-brand-blue/30 uppercase">
          Simulador em Tempo Real
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-2">Domínio de Buy Box</h3>
      <p className="text-foreground/60 mb-8 max-w-lg">
        Veja como o algoritmo prioriza vendedores. Estruture a logística e a reputação para ganhar a Buy Box mesmo cobrando mais caro.
      </p>

      {/* Strategy Controls */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button 
          onClick={() => setActiveStrategy('price')}
          className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${activeStrategy === 'price' ? 'bg-white text-black border-white' : 'bg-transparent text-white/60 border-white/20 hover:border-white/50'}`}
        >
          Estratégia: Guerra de Preço
        </button>
        <button 
          onClick={() => setActiveStrategy('logistics')}
          className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${activeStrategy === 'logistics' ? 'bg-brand-blue text-white border-brand-blue' : 'bg-transparent text-white/60 border-white/20 hover:border-white/50'}`}
        >
          Estratégia: Full/Logística
        </button>
      </div>

      <div className="grid gap-4">
        {sellers.map((seller) => {
          // Calculate if they win the buy box based on the selected strategy
          let isWinning = false;
          if (activeStrategy === 'price' && seller.price === 139.90) isWinning = true;
          if (activeStrategy === 'logistics' && seller.fulfillment === true) isWinning = true;

          return (
            <motion.div
              key={seller.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border transition-all duration-500 ${isWinning ? 'bg-gradient-to-r from-accent-green/10 to-transparent border-accent-green/50 scale-[1.02] shadow-[0_0_20px_rgba(0,217,142,0.1)]' : 'bg-secondary/50 border-white/5'}`}
            >
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className={`w-3 h-12 rounded-full ${seller.reputation === 'green' ? 'bg-accent-green' : seller.reputation === 'yellow' ? 'bg-accent-gold' : 'bg-accent-red'}`} />
                <div>
                  <h4 className="font-bold text-white text-lg flex items-center gap-2">
                    {seller.name}
                    {isWinning && <Trophy className="w-5 h-5 text-accent-gold" />}
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-xs text-foreground/60">
                      <Star className="w-3 h-3 text-accent-gold fill-accent-gold" />
                      Reputação {seller.reputation === 'green' ? 'Verde' : seller.reputation === 'yellow' ? 'Amarela' : 'Laranja'}
                    </span>
                    {seller.fulfillment && (
                      <span className="flex items-center gap-1 text-xs text-brand-blue font-bold tracking-wide">
                        <Truck className="w-4 h-4" /> FULL
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-xs text-foreground/50 line-through">R$ {(seller.price * 1.2).toFixed(2)}</p>
                  <p className={`text-2xl font-bold ${isWinning ? 'text-white' : 'text-foreground/80'}`}>
                    R$ {seller.price.toFixed(2)}
                  </p>
                </div>
                
                {isWinning && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="hidden md:flex bg-accent-green text-black px-4 py-2 rounded-lg font-bold text-sm items-center gap-2"
                  >
                    Buy Box Winner
                  </motion.div>
                )}
              </div>

              {/* Warnings based on strategy */}
              {isWinning && activeStrategy === 'price' && seller.price === 139.90 && (
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-red/90 text-white text-[10px] px-3 py-1 rounded-full font-bold flex items-center gap-1">
                   <AlertCircle className="w-3 h-3" /> MARGEM DESTRUÍDA
                 </div>
              )}
              {isWinning && activeStrategy === 'logistics' && seller.fulfillment && (
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-green text-black text-[10px] px-3 py-1 rounded-full font-bold flex items-center gap-1">
                   <Trophy className="w-3 h-3" /> LÍDER COM MARGEM ALTA
                 </div>
              )}

            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
