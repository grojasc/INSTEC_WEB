'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { clientesData } from '@/app/api/data'
import Image from 'next/image'

const Clientes = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!autoplay) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === clientesData.length - 1 ? 0 : prev + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [autoplay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoplay(false)
    // Resume autoplay after 10 seconds
    setTimeout(() => setAutoplay(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide(prev => prev === clientesData.length - 1 ? 0 : prev + 1)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? clientesData.length - 1 : prev - 1)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 10000)
  }

  // Calculate visible clients for the carousel (show 3 at a time)
  const getVisibleClients = () => {
    const clientsToShow = 3
    const clients = []
    
    for (let i = 0; i < clientsToShow; i++) {
      const index = (currentSlide + i) % clientesData.length
      clients.push(clientesData[index])
    }
    
    return clients
  }

  return (
    <section className='nicepage-section nicepage-bg-pattern' id='clientes'>
      <div className='nicepage-container'>
        <div ref={ref} className='space-y-16'>
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg"
            >
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold" style={{color: 'var(--color-text-secondary)'}}>
                Confianza <span style={{color: 'var(--color-primary)'}} className="font-bold">Industrial</span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{color: 'var(--color-text-primary)'}}
            >
              Nuestros{' '}
              <span className="relative">
                <span style={{color: 'var(--color-primary)'}}>
                  Clientes
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 12" fill="none">
                  <path d="M5 6C50 1 150 1 295 6" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/30"/>
                </svg>
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
              style={{color: 'var(--color-text-secondary)'}}
            >
              Empresas líderes de la <strong style={{color: 'var(--color-text-primary)'}}>industria chilena</strong> confían 
              en nuestros servicios de ensayos no destructivos y control de calidad.
            </motion.p>
          </div>

          {/* Interactive Carousel */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Carousel */}
            <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold" style={{color: 'var(--color-text-primary)'}}>
                  Empresas que Confían en Nosotros
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Carousel Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getVisibleClients().map((cliente, index) => (
                  <motion.div
                    key={`${currentSlide}-${index}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center space-y-6 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Logo Container */}
                    {cliente.logo && (
                      <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                          <Image 
                            src={cliente.logo} 
                            alt={`Logo ${cliente.nombre}`}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 768px) 100vw, 96px"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Client Info */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold" style={{color: 'var(--color-text-primary)'}}>
                        {cliente.nombre}
                      </h4>
                      
                      <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full px-4 py-2 text-sm font-medium border border-primary/20">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {cliente.sector}
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm font-medium" style={{color: 'var(--color-text-secondary)'}}>
                            <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {cliente.años}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm font-medium" style={{color: 'var(--color-text-secondary)'}}>Servicios:</p>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {cliente.servicios.slice(0, 2).map((servicio, serviceIndex) => (
                              <span
                                key={serviceIndex}
                                className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full border border-blue-100"
                              >
                                {servicio}
                              </span>
                            ))}
                            {cliente.servicios.length > 2 && (
                              <span className="bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-100">
                                +{cliente.servicios.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center mt-8 gap-2">
                {clientesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-gradient-to-r from-primary to-secondary scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Client Stats */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>
                  {clientesData.length}+
                </div>
                <p className="text-sm font-medium" style={{color: 'var(--color-text-secondary)'}}>
                  Clientes Activos
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>
                  95%
                </div>
                <p className="text-sm font-medium" style={{color: 'var(--color-text-secondary)'}}>
                  Satisfacción
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>
                  6+
                </div>
                <p className="text-sm font-medium" style={{color: 'var(--color-text-secondary)'}}>
                  Sectores
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>
                  100%
                </div>
                <p className="text-sm font-medium" style={{color: 'var(--color-text-secondary)'}}>
                  Confiabilidad
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="nicepage-card-feature max-w-4xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold" style={{color: 'var(--color-text-primary)'}}>
                  Únete a nuestros clientes satisfechos
                </h3>
                <p className="nicepage-text text-lg">
                  Más de 30 años de experiencia respaldando la industria chilena 
                  con servicios de inspección técnica de la más alta calidad.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <a href="#contacto" className='nicepage-btn nicepage-btn-primary'>
                    Contactar Ahora
                  </a>
                  <a href="#nosotros" className='nicepage-btn nicepage-btn-secondary'>
                    Ver Certificaciones
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Clientes