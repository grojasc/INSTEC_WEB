'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center nicepage-bg-pattern overflow-hidden pt-24 md:pt-28 lg:pt-32" id="main-banner">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large geometric shape - top right */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        {/* Medium geometric shape - bottom left */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-secondary/10 to-accent/10 rounded-full blur-2xl"></div>
        {/* Small floating elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="nicepage-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-8"
            >
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold" style={{color: 'var(--color-text-secondary)'}}>
                30+ años de experiencia técnica
              </span>
            </motion.div>

            {/* Main heading with logo */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-shrink-0"
              >
                {/* Technical NDT Logo Icon */}
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white">
                    <path d="M12,2A2,2 0 0,1 14,4V8A2,2 0 0,1 12,10A2,2 0 0,1 10,8V4A2,2 0 0,1 12,2M21,11H20A8,8 0 0,0 12,3A8,8 0 0,0 4,11H3A1,1 0 0,0 2,12A1,1 0 0,0 3,13H4A8,8 0 0,0 12,21A8,8 0 0,0 20,13H21A1,1 0 0,0 22,12A1,1 0 0,0 21,11Z"/>
                    <circle cx="12" cy="12" r="2" fill="rgba(255,255,255,0.3)"/>
                  </svg>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{color: 'var(--color-text-primary)'}}
              >
                Especialistas en{' '}
                <span className="relative block lg:inline">
                  <span style={{color: 'var(--color-primary)'}}>
                    Ensayos No Destructivos
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 12" fill="none">
                    <path d="M5 6C50 1 150 1 295 6" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/30"/>
                  </svg>
                </span>
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl mb-10 leading-relaxed max-w-xl"
              style={{color: 'var(--color-text-secondary)'}}
            >
              Garantizamos la <strong style={{color: 'var(--color-text-primary)'}}>calidad</strong> y <strong style={{color: 'var(--color-text-primary)'}}>seguridad</strong> de tus proyectos industriales con tecnología avanzada y personal certificado.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link 
                href="/#work" 
                className="nicepage-btn nicepage-btn-primary text-lg px-8 py-4 group"
              >
                Ver Nuestros Servicios
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/#contacto" 
                className="nicepage-btn nicepage-btn-secondary text-lg px-8 py-4"
              >
                Solicitar Cotización
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 max-w-lg"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>30+</div>
                <div className="text-sm font-medium" style={{color: 'var(--color-text-muted)'}}>Años de experiencia</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold" style={{color: 'var(--color-secondary)'}}>6</div>
                <div className="text-sm font-medium" style={{color: 'var(--color-text-muted)'}}>Métodos NDT</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold" style={{color: 'var(--color-accent)'}}>100%</div>
                <div className="text-sm font-medium" style={{color: 'var(--color-text-muted)'}}>Certificado</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Photo Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Photo Carousel Container */}
            <div className="relative">
              {/* Background card */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium" style={{color: 'var(--color-text-muted)'}}>INSTEC Galería</div>
                </div>

                {/* Photo Carousel */}
                <ImageCarousel />
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="absolute -top-6 -right-6 bg-primary text-white p-4 rounded-2xl shadow-lg"
            >
              <div className="text-2xl font-bold">✓</div>
              <div className="text-xs font-medium">Certificado</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="absolute -bottom-6 -left-6 bg-secondary text-white p-4 rounded-2xl shadow-lg"
            >
              <div className="text-2xl font-bold">30+</div>
              <div className="text-xs font-medium">Años</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero