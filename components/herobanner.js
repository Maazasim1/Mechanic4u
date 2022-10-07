import {motion} from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import Carousel_1 from '../public/images/carousel_1.webp'
import Carousel_2 from '../public/images/carousel_2.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import {Navigation} from "swiper";
import { Autoplay } from 'swiper';

export default function Herobanner() {
  return (
    <>
    <div className='flex sm:h-[70vh] sm:pb-0 pb-10 overflow-hidden'>

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


                    {({ isActive }) => (
                        <>
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.5, }}

                      transition={{delay: 0.2}}
                      
                      className='absolute top-11 w-full h-full sm:left-11  font-Muli z-20 text-center  text-white'>
                    <h1 className='sm:text-5xl text-sm sm:py-5'>
                        Multi-Point
                    </h1>
                    <h2 className='sm:text-8xl text-base font-bold sm:py-5'>
                        Vehicle Inspection
                    </h2>
                    <p className='text-xs sm:text-base sm:py-5'>
                        NO-CHARGE START, STOP AND STEERING CHECK
                    </p>

                </motion.div>
                
                <Image  src={Carousel_1} alt='hero image 1' priority={true}/>
                        </>
                )}
            </SwiperSlide>
            <SwiperSlide>
            {({ isActive }) => (
                        <>
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.5, }}

                      transition={{delay: 0.2}}
             className='absolute top-11 pl-10 sm:left-11 font-Muli z-20 text-white'>
                    <h1 className='sm:text-5xl text-sm sm:py-5'>
                        Offer Fast
                    </h1>
                    <h2 className='sm:text-8xl font-bold text-base sm:py-5'>
                        Reliable Service
                    </h2>
                    <p className='text-xs sm:text-base sm:py-5'>
                        OVER 10 YEARS OF QUALITY AUTO SERVICE
                    </p>

                </motion.div>
                <Image src={Carousel_2} alt='hero image 2' priority={true}/>
                </>)}
            </SwiperSlide>

        </Swiper>
    
</div>

    </>
  )
}
