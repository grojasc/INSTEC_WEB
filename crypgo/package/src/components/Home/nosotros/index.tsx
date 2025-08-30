'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Nosotros = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
        </svg>
      ),
      title: 'Calidad',
      description: 'Comprometidos con los más altos estándares de calidad en todos nuestros procesos y servicios.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1M12 7A2 2 0 1 0 12 11A2 2 0 0 0 12 7M6 19C6 16.33 9 15 12 15S18 16.33 18 19"/>
        </svg>
      ),
      title: 'Experiencia',
      description: 'Más de 30 años de experiencia nos respaldan como líderes en inspecciones técnicas.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"/>
        </svg>
      ),
      title: 'Puntualidad',
      description: 'Cumplimos con los plazos establecidos sin comprometer la calidad de nuestros servicios.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
        </svg>
      ),
      title: 'Innovación',
      description: 'Utilizamos tecnología de vanguardia para ofrecer soluciones precisas y eficientes.'
    }
  ]

  const stats = [
    { number: '30+', label: 'Años de experiencia' },
    { number: '500+', label: 'Proyectos completados' },
    { number: '6', label: 'Métodos NDT' },
    { number: '100%', label: 'Certificaciones vigentes' }
  ]

  return (
    <section className="nicepage-section nicepage-bg-pattern" id="nosotros">
      <div className="nicepage-container">
        <div ref={ref} className="space-y-20">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg"
            >
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold" style={{color: 'var(--color-text-secondary)'}}>
                Conoce a <span style={{color: 'var(--color-primary)'}} className="font-bold">INSTEC</span>
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{color: 'var(--color-text-primary)'}}
            >
              Líderes en{' '}
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
              Somos una empresa chilena especializada en <strong style={{color: 'var(--color-text-primary)'}}>ensayos no destructivos</strong> y control de calidad, 
              comprometidos con la excelencia y la innovación en cada proyecto.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Company Story */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="nicepage-card">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="nicepage-icon-large flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                        <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
                      </svg>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold" style={{color: 'var(--color-text-primary)'}}>
                        Nuestra Historia
                      </h3>
                      <p className="nicepage-text text-lg leading-relaxed">
                        Fundada hace más de <strong style={{color: 'var(--color-primary)'}}>30 años</strong>, INSTEC ha sido pionera 
                        en el desarrollo de técnicas de inspección no destructiva en Chile. 
                        Comenzamos como un pequeño laboratorio y hemos crecido hasta convertirnos en 
                        referente nacional en control de calidad industrial.
                      </p>
                      <p className="nicepage-text">
                        Nuestro compromiso con la <strong style={{color: 'var(--color-text-primary)'}}>excelencia técnica</strong> y 
                        el <strong style={{color: 'var(--color-text-primary)'}}>servicio al cliente</strong> nos ha permitido 
                        trabajar con las principales empresas del sector metalmecánico, 
                        petroquímico y de construcción del país.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="nicepage-card-feature text-center"
                >
                  <div className="nicepage-icon mx-auto mb-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                      <path d="M12,2A2,2 0 0,1 14,4V5.5A2.5,2.5 0 0,0 16.5,8H18A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10A2,2 0 0,1 6,8H7.5A2.5,2.5 0 0,0 10,5.5V4A2,2 0 0,1 12,2M12,4V5.5A4.5,4.5 0 0,1 7.5,10H6V20H18V10H16.5A4.5,4.5 0 0,1 12,5.5V4M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11Z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--color-text-primary)'}}>Misión</h4>
                  <p className="nicepage-text">
                    Garantizar la integridad y seguridad de estructuras industriales 
                    mediante servicios de inspección técnica de la más alta calidad.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="nicepage-card-feature text-center"
                >
                  <div className="nicepage-icon mx-auto mb-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                      <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--color-text-primary)'}}>Visión</h4>
                  <p className="nicepage-text">
                    Ser la empresa líder en inspección técnica en Latinoamérica, 
                    reconocida por nuestra innovación y compromiso con la excelencia.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Values & Stats */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              {/* Company Values */}
              <div className="nicepage-card">
                <h3 className="text-2xl font-semibold mb-8 text-center" style={{color: 'var(--color-text-primary)'}}>
                  Nuestros Valores
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                      className="text-center space-y-3 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 mx-auto p-2.5 rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                        {value.icon}
                      </div>
                      <h4 className="font-semibold" style={{color: 'var(--color-text-primary)'}}>{value.title}</h4>
                      <p className="nicepage-text-small">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats Dashboard */}
              <div className="nicepage-card">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold" style={{color: 'var(--color-text-primary)'}}>
                    En Números
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ y: 30, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                      className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10"
                    >
                      <div className="text-3xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>
                        {stat.number}
                      </div>
                      <div className="nicepage-text-small font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="nicepage-card-feature text-center"
              >
                <h4 className="text-xl font-semibold mb-4" style={{color: 'var(--color-text-primary)'}}>
                  ¿Listo para trabajar con nosotros?
                </h4>
                <p className="nicepage-text mb-6">
                  Contáctanos para conocer cómo podemos ayudarte a garantizar 
                  la calidad y seguridad de tus proyectos industriales.
                </p>
                <a href="#contacto" className="nicepage-btn nicepage-btn-primary">
                  Solicitar Información
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros