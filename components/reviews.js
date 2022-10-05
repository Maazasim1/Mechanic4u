import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { motion } from 'framer-motion'

export default function Reviews() {
    return (
        <div className='p-20'>
            <Swiper navigation={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            modules={[Navigation,Autoplay]}>
                <SwiperSlide>
                    {({ isActive }) => (
                        <div className='h-[80vh] w-full'>
                            <div className='flex justify-center items-center pt-20 pb-6'>
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <p className='font-Muli px-3'>Yasir Lakhani</p>
                                <p className='font-Muli px-3 text-gray-400'>Karachi, Pakistan</p>


                            </div>
                            <div className='flex justify-center'>
                                “Main thing is you guys are saving lots of our time so thankyou.”
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: "-100%" }}
                                animate={{

                                    x: isActive ? 1 : "100%",
                                    opacity: isActive ? 1 : 0
                                }}

                                transition={{ delay: 0.2 }}

                                className='flex justify-center p-20'>
                                <Image
                                    src='/images/car-2.webp'
                                    height={230}
                                    width={600}
                                    placeholder="blue"
                                    blurDataURL='/images/car-2.webp'
                                />

                            </motion.div>

                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => (
                        <div className='h-[80vh] w-full'>
                            <div className='flex justify-center items-center pt-20 pb-6'>
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <p className='font-Muli px-3'>Suleman Ahmed</p>
                                <p className='font-Muli px-3 text-gray-400'>Karachi, Pakistan</p>


                            </div>
                            <div className='flex justify-center'>
                                “I really like mechanic4u service , timely responded and visited our home.”
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: "-100%" }}
                                animate={{

                                    x: isActive ? 1 : "100%",
                                    opacity: isActive ? 1 : 0
                                }}

                                transition={{ delay: 0.2 }}

                                className='flex justify-center p-20'>
                                <Image
                                    src='/images/car-1.webp'
                                    height={230}
                                    width={600}
                                    placeholder="blue"
                                    blurDataURL='/images/car-1.webp'
                                />

                            </motion.div>

                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => (
                        <div className='h-[80vh] w-full'>
                            <div className='flex justify-center items-center pt-20 pb-6'>
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <FontAwesomeIcon icon={faStar} className='text-[#1d72b2] text-[10px] w-4' />
                                <p className='font-Muli px-3'>Nadeem Khan</p>
                                <p className='font-Muli px-3 text-gray-400'>Karachi, Pakistan</p>


                            </div>
                            <div className='flex justify-center'>
                                “Thank you for giving us a  convenient and hassel free way.”
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: "-100%" }}
                                animate={{

                                    x: isActive ? 1 : "100%",
                                    opacity: isActive ? 1 : 0
                                }}

                                transition={{ delay: 0.2 }}

                                className='flex justify-center p-20'>
                                <Image
                                    src='/images/car-3.webp'
                                    height={230}
                                    width={600}
                                    placeholder="blue"
                                    blurDataURL='/images/car-3.webp'
                                />

                            </motion.div>

                        </div>
                    )}
                </SwiperSlide>
            </Swiper>

        </div>
    )
}
