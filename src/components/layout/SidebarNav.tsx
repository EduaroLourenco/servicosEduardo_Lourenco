'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hash } from 'lucide-react'

interface SidebarSection {
  id: string
  label: string
  sublabel?: string
}

interface SidebarNavProps {
  sections: SidebarSection[]
  title?: string
}

export function SidebarNav({ sections, title = 'Nesta Página' }: SidebarNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const opts: IntersectionObserverInit = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, opts);

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Only visible on lg+ screens, fixed on the left side
    <aside className="hidden lg:flex flex-col fixed left-4 xl:left-8 2xl:left-12 top-1/2 -translate-y-1/2 z-50 w-44 gap-1">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3 px-2">
        <Hash className="w-3 h-3 text-brand-primary flex-shrink-0" />
        <span className="text-[9px] font-mono font-black uppercase tracking-[0.3em] text-white/25">
          {title}
        </span>
      </div>

      {/* Progress line */}
      <div className="relative ml-3 mb-1">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/8" />
        
        <div className="flex flex-col gap-0.5 pl-4">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`group relative text-left py-2 px-2 rounded-lg transition-all duration-200 ${
                  isActive ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                }`}
              >
                {/* Active indicator dot on the line */}
                <div className={`absolute -left-4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-primary shadow-[0_0_8px_rgba(37,99,235,0.8)] scale-100'
                    : 'bg-white/15 scale-75 group-hover:bg-white/30'
                }`} />

                <span className={`block text-[10px] font-bold uppercase tracking-wider leading-tight transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-white/30 group-hover:text-white/60'
                }`}>
                  {section.label}
                </span>

                {section.sublabel && (
                  <span className={`block text-[9px] font-mono mt-0.5 leading-tight transition-colors ${
                    isActive ? 'text-brand-primary/70' : 'text-white/15 group-hover:text-white/30'
                  }`}>
                    {section.sublabel}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  )
}
