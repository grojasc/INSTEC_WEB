'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TimeLine = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const processSteps = [
    {
      number: "01",
      title: "Visita Previa",
      description: "Evaluación in-situ, análisis de necesidades y definición del alcance del proyecto.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
        </svg>
      ),
      details: ["Inspección visual inicial", "Evaluación de accesibilidad", "Definición de métodos NDT"]
    },
    {
      number: "02", 
      title: "Ejecución NDT",
      description: "Aplicación de métodos de ensayos no destructivos según normas ASTM/ASME.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M19.14,12.94C19.73,12.94 20.2,12.47 20.2,11.88C20.2,11.29 19.73,10.82 19.14,10.82C18.55,10.82 18.08,11.29 18.08,11.88C18.08,12.47 18.55,12.94 19.14,12.94ZM19.14,9.94C20.18,9.94 21.03,10.79 21.03,11.83C21.03,12.87 20.18,13.72 19.14,13.72C18.1,13.72 17.25,12.87 17.25,11.83C17.25,10.79 18.1,9.94 19.14,9.94ZM12,2L13.09,8.26L12,14L10.91,8.26L12,2ZM12,22L10.91,15.74L12,10L13.09,15.74L12,22Z"/>
        </svg>
      ),
      details: ["Calibración de equipos", "Ejecución según procedimiento", "Documentación en tiempo real"]
    },
    {
      number: "03",
      title: "Análisis e Interpretación", 
      description: "Análisis detallado de resultados y evaluación según códigos aplicables.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z"/>
          <path d="M7 10L12 15L17 10H7Z"/>
        </svg>
      ),
      details: ["Interpretación de indicaciones", "Evaluación según normas", "Determinación de aceptabilidad"]
    },
    {
      number: "04",
      title: "Informe y Entrega",
      description: "Elaboración del informe técnico final y entrega con soporte técnico completo.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      ),
      details: ["Informe técnico detallado", "Recomendaciones específicas", "Soporte post-entrega"]
    }
  ]

  return (
    <section className="nicepage-section nicepage-bg-pattern" id="timeline">
      <div className="nicepage-container">
        <div ref={ref} className="space-y-20">
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
                Nuestro <span style={{color: 'var(--color-primary)'}} className="font-bold">proceso</span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{color: 'var(--color-text-primary)'}}
            >
              Metodología probada en{' '}
              <span className="relative">
                <span style={{color: 'var(--color-primary)'}}>
                  Inspección Técnica
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
              Te acompañamos en cada etapa del <strong style={{color: 'var(--color-text-primary)'}}>control de calidad</strong> e 
              <strong style={{color: 'var(--color-text-primary)'}}> inspecciones técnicas</strong> con un proceso estructurado y eficiente.
            </motion.p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Desktop Version - Horizontal Timeline */}
            <div className="hidden lg:block">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary origin-left"
                ></motion.div>
              </div>

              {/* Process Steps */}
              <div className="grid grid-cols-4 gap-8 relative z-10">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ y: index % 2 === 0 ? -80 : 80, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: index % 2 === 0 ? -80 : 80, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + (index * 0.2) }}
                    className={`${index % 2 === 0 ? 'mb-32' : 'mt-32'}`}
                  >
                    {/* Step Card */}
                    <div className="nicepage-card text-center space-y-4 relative group hover:scale-105 transition-all duration-300">
                      {/* Connector Line */}
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-primary to-secondary ${index % 2 === 0 ? 'bottom-full' : 'top-full'}`}></div>
                      
                      {/* Step Number Badge */}
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 mx-auto p-2 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                        {step.icon}
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold" style={{color: 'var(--color-text-primary)'}}>{step.title}</h3>
                        <p className="nicepage-text text-sm">{step.description}</p>
                        
                        {/* Details List */}
                        <div className="space-y-2 pt-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center gap-2 justify-center">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              <span className="nicepage-text-small">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Version - Vertical Timeline */}
            <div className="lg:hidden space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ x: index % 2 === 0 ? -60 : 60, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -60 : 60, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.15) }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-1 h-16 bg-gradient-to-b from-primary to-secondary"></div>
                  )}

                  <div className="flex items-start gap-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                      {step.number}
                    </div>

                    {/* Step Content */}
                    <div className="nicepage-card flex-1">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 p-2 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary flex-shrink-0">
                          {step.icon}
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold" style={{color: 'var(--color-text-primary)'}}>{step.title}</h3>
                          <p className="nicepage-text text-sm">{step.description}</p>
                          
                          {/* Details */}
                          <div className="grid gap-1">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full"></div>
                                <span className="nicepage-text-small">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <div className="nicepage-card-feature max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-2 text-sm" style={{color: 'var(--color-text-muted)'}}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Proceso certificado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Normas ASME/ASTM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Informes detallados</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold" style={{color: 'var(--color-text-primary)'}}>
                  ¿Listo para iniciar tu proyecto de inspección?
                </h3>
                
                <p className="nicepage-text">
                  Nuestro equipo de especialistas está preparado para ejecutar cada fase 
                  del proceso con la máxima precisión y profesionalismo.
                </p>
                
                <a href="#contacto" className="nicepage-btn nicepage-btn-primary nicepage-btn-large">
                  Iniciar Proyecto
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TimeLine