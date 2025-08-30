import React from 'react'
import Hero from '@/components/Home/Hero'
import Nosotros from '@/components/Home/nosotros'
import Work from '@/components/Home/work'
import TimeLine from '@/components/Home/timeline'
import Trabajos from '@/components/Home/trabajos'
import Clientes from '@/components/Home/clientes'
import Contacto from '@/components/Home/contacto'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'INSTEC - Ingeniería e Inspecciones Técnicas | Ensayos No Destructivos',
  description: 'Más de 30 años ofreciendo servicios de inspección técnica, ensayos no destructivos y control de calidad en Chile. Ultrasonido, radiografía, partículas magnéticas y más.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Nosotros />
      <Work />
      <TimeLine />
      <Trabajos />
      <Clientes />
      <Contacto />
    </main>
  )
}
