'use client'
import React, { FC } from 'react'

interface HeroSubProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

const HeroSub: FC<HeroSubProps> = ({ title, subtitle, breadcrumb }) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/90 to-secondary/90 overflow-hidden pt-24 md:pt-28 lg:pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/work/servicios-ndt.svg')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="nicepage-container relative z-10 text-center">
        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 text-white/80 animate-fade-in">
            <span className="text-sm">Inicio</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"/>
            </svg>
            <span className="text-sm font-semibold">{breadcrumb}</span>
          </div>
        )}

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200">
            {subtitle}
          </p>
        )}

        {/* Decorative Element */}
        <div className="mt-12 flex justify-center animate-scale-in delay-500">
          <div className="w-20 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSub
