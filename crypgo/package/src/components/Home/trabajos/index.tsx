'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { trabajosData } from '@/app/api/data'

const Trabajos = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className='nicepage-section nicepage-bg-pattern' id='trabajos'>
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
                Proyectos <span style={{color: 'var(--color-primary)'}} className="font-bold">realizados</span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{color: 'var(--color-text-primary)'}}
            >
              Trabajos{' '}
              <span className="relative">
                <span style={{color: 'var(--color-primary)'}}>
                  Realizados
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
              Más de <strong style={{color: 'var(--color-text-primary)'}}>tres décadas de experiencia</strong> respaldando a las principales empresas 
              industriales de Chile con <strong style={{color: 'var(--color-text-primary)'}}>ensayos no destructivos</strong> de alta calidad.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {trabajosData.map((trabajo, index) => (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                className='nicepage-card group hover:scale-[1.02] transition-all duration-300'
              >
                <div className='space-y-4'>
                  <div className='flex justify-between items-start'>
                    <div className='flex-1'>
                      <h3 className='text-xl font-semibold mb-2' style={{color: 'var(--color-text-primary)'}}>
                        {trabajo.proyecto}
                      </h3>
                      <p className='font-medium mb-1' style={{color: 'var(--color-primary)'}}>{trabajo.cliente}</p>
                    </div>
                    <div className='text-right'>
                      <span className='bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20'>
                        {trabajo.año}
                      </span>
                    </div>
                  </div>
                  
                  <p className='nicepage-text leading-relaxed'>
                    {trabajo.descripcion}
                  </p>
                  
                  <div className='flex items-center justify-between pt-2'>
                    <div className='flex items-center gap-2'>
                      <span className='text-xs font-medium' style={{color: 'var(--color-text-muted)'}}>Ensayos:</span>
                      <span className='bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/20'>
                        {trabajo.ensayo}
                      </span>
                    </div>
                    <div className='w-3 h-3 bg-green-400 rounded-full shadow-sm'></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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
                  ¿Necesitas inspecciones técnicas confiables?
                </h3>
                <p className="nicepage-text text-lg">
                  Contacta con nuestro equipo de especialistas para evaluar tu proyecto 
                  y ofrecerte la mejor solución de inspección técnica.
                </p>
                <a href="#contacto" className='nicepage-btn nicepage-btn-primary nicepage-btn-large'>
                  Solicitar Cotización
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Trabajos