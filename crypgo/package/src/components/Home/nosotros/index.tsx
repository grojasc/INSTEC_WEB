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

          {/* Main Content - Redesigned */}
          <div className="space-y-20">
            
            {/* Company Story - Hero Style */}
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative overflow-hidden"
            >
              <div className="nicepage-card bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-50"></div>
                <div className="relative z-10 lg:flex items-center gap-8">
                  <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="relative"
                    >
                      <div className="w-32 h-32 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 shadow-2xl">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
                        </svg>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                    </motion.div>
                  </div>
                  
                  <div className="lg:w-2/3 text-center lg:text-left">
                    <motion.h3 
                      initial={{ x: -50, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="text-3xl lg:text-4xl font-bold mb-6 text-white"
                    >
                      Nuestra Historia
                    </motion.h3>
                    
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="space-y-4 text-gray-200"
                    >
                      <p className="text-lg leading-relaxed">
                        Fundada hace más de <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">30 años</span>, INSTEC ha sido pionera 
                        en el desarrollo de técnicas de inspección no destructiva en Chile.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Comenzamos como un pequeño laboratorio y hemos crecido hasta convertirnos en 
                        <span className="font-semibold text-primary"> referente nacional</span> en control de calidad industrial.
                      </p>
                      <p>
                        Nuestro compromiso con la <span className="font-semibold text-white">excelencia técnica</span> y 
                        el <span className="font-semibold text-white">servicio al cliente</span> nos ha permitido 
                        trabajar con las principales empresas del país.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission & Vision - Enhanced Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="group"
              >
                <div className="nicepage-card-feature text-center h-full relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 hover:border-blue-400 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="nicepage-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                        <path d="M12,2A2,2 0 0,1 14,4V5.5A2.5,2.5 0 0,0 16.5,8H18A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10A2,2 0 0,1 6,8H7.5A2.5,2.5 0 0,0 10,5.5V4A2,2 0 0,1 12,2M12,4V5.5A4.5,4.5 0 0,1 7.5,10H6V20H18V10H16.5A4.5,4.5 0 0,1 12,5.5V4M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11Z"/>
                      </svg>
                    </motion.div>
                    <h4 className="text-2xl font-bold mb-4 text-blue-800">Misión</h4>
                    <p className="nicepage-text text-blue-700 leading-relaxed">
                      Garantizar la integridad y seguridad de estructuras industriales 
                      mediante servicios de inspección técnica de la más alta calidad.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="group"
              >
                <div className="nicepage-card-feature text-center h-full relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200 hover:border-purple-400 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="nicepage-icon mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                        <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                      </svg>
                    </motion.div>
                    <h4 className="text-2xl font-bold mb-4 text-purple-800">Visión</h4>
                    <p className="nicepage-text text-purple-700 leading-relaxed">
                      Ser la empresa líder en inspección técnica en Latinoamérica, 
                      reconocida por nuestra innovación y compromiso con la excelencia.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Company Values - Interactive Grid */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="text-center mb-12">
                <motion.h3 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >
                  Nuestros Valores
                </motion.h3>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100px' } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
                ></motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: 1.4 + (index * 0.1), type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group cursor-pointer"
                  >
                    <div className="nicepage-card text-center h-full relative overflow-hidden bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-secondary/5 transition-all duration-500 border-2 border-transparent hover:border-primary/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 p-6">
                        <motion.div 
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="w-16 h-16 mx-auto p-3 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        >
                          {value.icon}
                        </motion.div>
                        <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300" style={{color: 'var(--color-text-primary)'}}>{value.title}</h4>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">{value.description}</p>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Dashboard - Enhanced */}
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="relative"
            >
              <div className="nicepage-card bg-gradient-to-r from-slate-50 to-gray-100 border-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <motion.h3 
                      initial={{ y: 20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                      className="text-3xl font-bold mb-2 text-gray-800"
                    >
                      En Números
                    </motion.h3>
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 1.7 }}
                      className="text-gray-600"
                    >
                      Nuestra trayectoria habla por sí sola
                    </motion.p>
                  </div>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ scale: 0, y: 50 }}
                        animate={inView ? { scale: 1, y: 0 } : { scale: 0, y: 50 }}
                        transition={{ duration: 0.6, delay: 1.8 + (index * 0.1), type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        className="group"
                      >
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10">
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={inView ? { scale: 1 } : { scale: 0 }}
                              transition={{ duration: 0.8, delay: 1.9 + (index * 0.1) }}
                              className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                            >
                              {stat.number}
                            </motion.div>
                            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section - Enhanced */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="text-center"
            >
              <div className="nicepage-card-feature relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 p-8">
                  <motion.h4 
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 2.1 }}
                    className="text-2xl lg:text-3xl font-bold mb-4"
                  >
                    ¿Listo para trabajar con nosotros?
                  </motion.h4>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="text-lg mb-8 opacity-90"
                  >
                    Contáctanos para conocer cómo podemos ayudarte a garantizar 
                    la calidad y seguridad de tus proyectos industriales.
                  </motion.p>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: 2.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="#contacto" className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
                      Solicitar Información
                    </a>
                  </motion.div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros