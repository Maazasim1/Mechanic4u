import React from 'react'
import Lowerbar from '../components/lowerbar'
import Upperbar from '../components/upperbar'
import Footer from '../components/footer'
import Image from 'next/image'

export default function Aboutus() {
  return (
    <div>
        <Upperbar />
        <Lowerbar />
        <div className='p-20'>
          <Image
            src="/images/aboutus_banner.webp"
            width={1335}
            height={485}
            placeholder="blur"
            blurDataURL='/images/aboutus_banner.webp'
          />

        </div>

        <div className='w-full'>
        <h1 className='text-center p-8 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
        About Company        </h1>
        <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>
      
      </div>
      <div className='flex justify-around p-20 items-center space-x-6'>
          <div className='flex-shrink-0'>
            <Image alt="picure showing a person doing maintenance on a car" src='/images/image_1.webp' height={430} width={450} placeholder="blur" blurDataURL='/images/image_1.webp' />

          </div>
          <div className='w-full'>
            <h2 className='text-2xl pb-10'>
            A Reputation 10 Years in the Making
            </h2>
            <p className='text-lg text-[#3a3a3a]'>
              Mechanic4u is a full-service preventive maintenance center. We perform high quality, guaranteed service you can trust at a fair price. We work on domestic and foreign vehicles and are your best choice for scheduled maintenance of your car, SUV, truck and fleet vehicles.
            </p>
          </div>


        </div>
        <Footer />

    </div>
  )
}
