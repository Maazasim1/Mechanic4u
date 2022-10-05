import React from 'react'
import Lowerbar from '../components/lowerbar'
import Upperbar from '../components/upperbar'
import Image from 'next/image'
import Footer from '../components/footer'

export default function Services() {
    return (
        <div>
            <Upperbar />
            <Lowerbar />
            <div className='p-20'>

                <Image
                    src="/images/banner.webp"
                    width={1536}
                    height={558}
                    placeholder="blur"
                    blurDataURL='/images/banner.webp'
                />
            </div>

            <div className='w-full'>
                <h1 className='text-center p-16 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
                    What We Do
                </h1>
                <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>
                <p className='text-center font-Muli font-extralight py-10 text-[#3a3a3a]'>
                    We offer full service auto repair & maintenance
                </p>
            </div>
            <Footer/>
        </div>
    )
}
