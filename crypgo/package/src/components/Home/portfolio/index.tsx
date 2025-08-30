'use client'
import Image from 'next/image'
import { portfolioData } from '@/app/api/data'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <section className='md:pt-48 sm:pt-28 pt-12' id='portfolio'>
      <div className='container px-4 sm:px-6'>
        <div className='grid lg:grid-cols-2 items-center gap-20'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
            className='lg:-ml-32'>
            <Image
              src='/images/portfolio/instec-experience.svg'
              alt='INSTEC - 30 años de experiencia en NDT'
              width={780}
              height={700}
            />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.6 }}>
            {/* Updated subheading and heading to focus on company experience */}
            <p className='sm:text-28 text-18 text-muted mb-4'>
              Nuestra <span className='text-primary'>experiencia</span>
            </p>
            <h2 className='text-white sm:text-40 text-30 mb-4 font-medium'>
              Más de 30 años de experiencia en inspecciones técnicas
            </h2>
            <p className='text-muted/60 text-18'>
              Hemos participado en proyectos para la gran minería, centrales
              hidroeléctricas y manufacturas nacionales e internacionales.
            </p>

            <table className='w-full sm:w-[80%]'>
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr key={index} className='border-b border-dark_border/10'>
                    <td className='py-5'>
                      <div className='bg-primary/20 p-4 rounded-full w-fit'>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={35}
                          height={35}
                        />
                      </div>
                    </td>
                    <td className='py-5'>
                      <h4 className='text-muted sm:text-28 text-22 ml-5'>
                        {item.title}
                      </h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
