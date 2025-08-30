'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Contacto = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  })

  const servicios = [
    'Ultrasonido (UT)',
    'Radiografía (RT)',
    'Partículas Magnéticas (MT)',
    'Líquidos Penetrantes (PT)',
    'Corrientes Eddy (ET)',
    'Inspección Visual (VT)',
    'Control de Calidad',
    'Consultoría Técnica'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Crear el cuerpo del email
    const emailBody = `
Nombre: ${formData.nombre}
Empresa: ${formData.empresa}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Servicio: ${formData.servicio}
Mensaje: ${formData.mensaje}
    `;

    // Crear enlaces de mailto para ambos emails
    const email1 = `mailto:instec@instec.cl?subject=Solicitud de Cotización - ${formData.servicio}&body=${encodeURIComponent(emailBody)}`;
    // Solo usar el email principal de INSTEC
    
    // Abrir email
    window.open(email1, '_blank');
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: ''
    });
    
    alert('Solicitud enviada. Se abrirán los clientes de email para completar el envío.');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="nicepage-section nicepage-bg-pattern" id="contacto">
      <div className="nicepage-container">
        <div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="nicepage-card-minimal inline-flex items-center gap-3 px-6 py-3 mb-6">
              <div className="nicepage-icon w-8 h-8 p-1.5">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                </svg>
              </div>
              <span className="nicepage-text-small font-semibold">
                Contáctanos
              </span>
            </div>
            <h2 className="nicepage-heading-lg mb-6">
              ¿Necesitas servicios de <span style={{color: 'var(--color-primary)'}}>inspección técnica</span>?
            </h2>
            <p className="nicepage-text text-lg max-w-3xl mx-auto">
              Solicita tu cotización personalizada. Nuestro equipo de expertos te contactará para
              evaluar tus necesidades específicas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Formulario de Contacto */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="nicepage-card">
                <h3 className="nicepage-heading-md mb-6">Solicitar Cotización</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block nicepage-text-small font-medium mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white focus:border-primary focus:outline-none transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block nicepage-text-small font-medium mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white focus:border-primary focus:outline-none transition-colors"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block nicepage-text-small font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white focus:border-primary focus:outline-none transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block nicepage-text-small font-medium mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white focus:border-primary focus:outline-none transition-colors"
                        placeholder="+56 9 xxxx xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block nicepage-text-small font-medium mb-2">
                      Servicio Requerido *
                    </label>
                    <select
                      name="servicio"
                      required
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Selecciona un servicio</option>
                      {servicios.map((servicio) => (
                        <option key={servicio} value={servicio}>
                          {servicio}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block nicepage-text-small font-medium mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Describe tu proyecto y requerimientos específicos..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="nicepage-btn nicepage-btn-primary w-full text-lg py-4"
                  >
                    Enviar Solicitud
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Información de Contacto */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Información General */}
              <div className="nicepage-card">
                <h3 className="nicepage-heading-md mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="nicepage-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="nicepage-subheading font-semibold mb-1">Dirección</h4>
                      <p className="nicepage-text">
                        Santiago, Región Metropolitana<br />
                        Chile
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="nicepage-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="nicepage-subheading font-semibold mb-1">Email</h4>
                      <p className="nicepage-text">
                        instec@instec.cl
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="nicepage-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="nicepage-subheading font-semibold mb-1">Teléfono</h4>
                      <p className="nicepage-text">
                        +569 99972647<br />
                        +569 57589575
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horario de Atención */}
              <div className="nicepage-card">
                <h3 className="nicepage-heading-md mb-6">Horario de Atención</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="nicepage-text font-medium">Lunes - Viernes</span>
                    <span className="nicepage-text">7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="nicepage-text font-medium">Sábados</span>
                    <span className="nicepage-text">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="nicepage-text font-medium">Domingos</span>
                    <span className="nicepage-text text-red-400">Cerrado</span>
                  </div>
                </div>
              </div>

              {/* Emergencias */}
              <div className="nicepage-card bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-500/30">
                <h3 className="nicepage-heading-md mb-4 text-red-400">Servicios de Emergencia</h3>
                <p className="nicepage-text mb-4">
                  Para inspecciones urgentes y servicios fuera del horario normal, contáctanos:
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-400">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-red-400 font-semibold">+569 99972647</p>
                    <p className="nicepage-text-small">24 horas / 7 días</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto