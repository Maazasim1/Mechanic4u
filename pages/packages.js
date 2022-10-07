import React from 'react'
import Footer from '../components/footer'
import Lowerbar from '../components/lowerbar'
import Upperbar from '../components/upperbar'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import {Navigation} from "swiper";
import { Autoplay } from 'swiper';
import Cards from '../components/cards'

export default function Packages() {
  return (
    <div>

      <Upperbar />
      <Lowerbar />

      <div className="w-full h-[200px] sm:overflow-hidden">
        <Image
          src="/images/package_header.webp"
          height={578}
          width={1000}
          layout="responsive"
          placeholder="blur"
          blurDataURL="/images/package_header.webp"
          alt="packages banner"
          className='object-cover'
        />

      </div>
      <div className='text-left sm:w-[620px] px-10 text-white relative sm:bottom-64 bottom-40 sm:left-32'>
        <h2 className='sm:py-5 font-Muli font-bold text-2xl sm:text-5xl'>Car Packages</h2>
        <p className=' sm:text-lg text-sm'>
          Our mechanics are mobile. Not only do we have significantly lower overhead costs compared to the local shops, but as a national brand, we are able to negotiate better prices from the auto parts vendors. We pass these savings to you! The bigger the job, the more you save.
        </p>
      </div>

      <div className='sm:p-0 p-2'>
      <Swiper
          
          navigation={true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          modules={[Navigation,Autoplay]}
          className="mySwiper"
          >
            <SwiperSlide>

            <div className='flex sm:flex-row flex-col justify-center space-y-3 sm:space-x-5'>
              <Cards>
                
              </Cards>
              <Cards>

              </Cards>
              <Cards>

              </Cards>

            </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className='flex sm:flex-row flex-col justify-center space-y-3 sm:space-x-5'>
              <Cards>
                
              </Cards>
              <Cards>

              </Cards>
              <Cards>

              </Cards>

            </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className='flex sm:flex-row flex-col justify-center space-y-3 sm:space-x-5'>
              <Cards>
                
              </Cards>
              <Cards>

              </Cards>
              <Cards>

              </Cards>

            </div>
            </SwiperSlide>

          </Swiper>
      </div>
      <div className='w-full'>
        <h1 className='text-center p-16 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
          We Maintain All Makes of Automobiles        </h1>
        <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>
        <p className='text-center font-Muli font-extralight py-10 text-[#3a3a3a]'>
          Some of the popular makers</p>
      </div>
      <div className='sm:p-20 p-10 flex justify-evenly'>
        <div className='shadow-2xl'>
          <Image
            alt='car logo'
            src='/images/logo_1.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='shadow-2xl'>
          <Image
            alt='car logo'

            src='/images/logo_2.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='shadow-2xl'>
          <Image
            alt='car logo'


            src='/images/logo_3.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='sm:block hidden shadow-2xl'>
          <Image
            alt='car logo'


            src='/images/logo_4.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='sm:block hidden shadow-2xl'>
          <Image
            alt='car logo'


            src='/images/logo_5.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='sm:block hidden shadow-2xl'>
          <Image
            alt='car logo'


            src='/images/logo_6.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='sm:block hidden shadow-2xl'>
          <Image
            alt='car logo'


            src='/images/logo_7.webp'
            height={120}
            width={140}

          />

        </div>


      </div>
      <Footer />

    </div>
  )
}
