import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { pricedeta } from '@/app/api/data'
import Image from 'next/image'

const CardSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // xl breakpoint
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className='lg:-mt-16 sm:mt-12 mt-8 px-2'>
      <div className='overflow-hidden'>
        <Slider {...settings}>
          {pricedeta.map((item, index) => (
            <div key={index} className='px-2 sm:px-3'>
              <div className='mx-1 px-4 sm:px-5 py-4 sm:py-6 bg-dark_grey/80 rounded-xl min-h-[120px] sm:min-h-[140px]'>
                <div className='flex items-center gap-3 sm:gap-5 mb-4'>
                  <div
                    className={`${item.background} ${item.padding} rounded-full flex-shrink-0`}>
                    <Image
                      src={item.icon}
                      alt='icon'
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='text-white text-xs sm:text-sm font-normal break-words'>
                      <span className='text-sm sm:text-16 font-bold block sm:inline sm:mr-2'>{item.title}</span>
                      <span className='block sm:inline text-xs opacity-80'>{item.short}</span>
                    </p>
                  </div>
                </div>
                <div className='flex justify-between items-end'>
                  <div className=''>
                    <p className='text-sm sm:text-16 font-bold text-white mb-0 leading-none'>
                      {item.price}
                    </p>
                  </div>
                  <div className='min-w-0 flex-1 text-right'>
                    <span className='text-green-400 text-xs break-words'>{item.mark}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CardSlider
