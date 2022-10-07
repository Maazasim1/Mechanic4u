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
                    alt="banner of services page"
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
            <div className='grid grid-cols-3 gap-7 p-20'>
                <div className=''>
                    <div className='h-[260px] overflow-hidden'>
                        <Image
                            src='/images/s-1.webp'
                            height={726}
                            width={1071}
                            placeholder="blur"
                            blurDataURL='/images/s-1.webp'
                        />
                    </div>
                    <div className='h-[260px] bg-[#f5f5f5]'>
                        <h6 className='text-center p-10 font-Muli text-3xl text-[#3a3a3a]'>PREVENTATIVE<br />MAINTENANCE</h6>
                        <p className='text-center px-8 font-Muli text-sm text-[#3a3a3a]'>The best way to minimize breakdowns is doing routine maintenance</p>

                    </div>



                </div>
                <div className=''>
                    <div className='h-[260px] overflow-hidden'>
                        <Image
                            src='/images/s-1.webp'
                            height={726}
                            width={1071}
                            placeholder="blur"
                            blurDataURL='/images/s-1.webp'
                        />
                    </div>
                    <div className='h-[260px] bg-[#f5f5f5]'>
                        <h6 className='text-center p-10 font-Muli text-3xl text-[#3a3a3a]'>PREVENTATIVE<br />MAINTENANCE</h6>
                        <p className='text-center px-8 font-Muli text-sm text-[#3a3a3a]'>The best way to minimize breakdowns is doing routine maintenance</p>

                    </div>



                </div>
                <div className=''>
                    <div className='h-[260px] overflow-hidden'>
                        <Image
                            src='/images/s-1.webp'
                            height={726}
                            width={1071}
                            placeholder="blur"
                            blurDataURL='/images/s-1.webp'
                        />
                    </div>
                    <div className='h-[260px] bg-[#f5f5f5]'>
                        <h6 className='text-center p-10 font-Muli text-3xl text-[#3a3a3a]'>PREVENTATIVE<br />MAINTENANCE</h6>
                        <p className='text-center px-8 font-Muli text-sm text-[#3a3a3a]'>The best way to minimize breakdowns is doing routine maintenance</p>

                    </div>



                </div>
                <div className=''>
                    <div className='h-[260px] overflow-hidden'>
                        <Image
                            src='/images/s-1.webp'
                            height={726}
                            width={1071}
                            placeholder="blur"
                            blurDataURL='/images/s-1.webp'
                        />
                    </div>
                    <div className='h-[260px] bg-[#f5f5f5]'>
                        <h6 className='text-center p-10 font-Muli text-3xl text-[#3a3a3a]'>PREVENTATIVE<br />MAINTENANCE</h6>
                        <p className='text-center px-8 font-Muli text-sm text-[#3a3a3a]'>The best way to minimize breakdowns is doing routine maintenance</p>

                    </div>



                </div>
                <div className=''>
                    <div className='h-[260px] overflow-hidden'>
                        <Image
                            src='/images/s-1.webp'
                            height={726}
                            width={1071}
                            placeholder="blur"
                            blurDataURL='/images/s-1.webp'
                        />
                    </div>
                    <div className='h-[260px] bg-[#f5f5f5]'>
                        <h6 className='text-center p-10 font-Muli text-3xl text-[#3a3a3a]'>PREVENTATIVE<br />MAINTENANCE</h6>
                        <p className='text-center px-8 font-Muli text-sm text-[#3a3a3a]'>The best way to minimize breakdowns is doing routine maintenance</p>

                    </div>



                </div>
                <div className=''>
                    <div className='h-[260px] overflow-hidden'>
                        <Image
                            src='/images/s-1.webp'
                            height={726}
                            width={1071}
                            placeholder="blur"
                            blurDataURL='/images/s-1.webp'
                        />
                    </div>
                    <div className='h-[260px] bg-[#f5f5f5]'>
                        <h6 className='text-center p-10 font-Muli text-3xl text-[#3a3a3a]'>PREVENTATIVE<br />MAINTENANCE</h6>
                        <p className='text-center px-8 font-Muli text-sm text-[#3a3a3a]'>The best way to minimize breakdowns is doing routine maintenance</p>

                    </div>



                </div>

            </div>
            <div className='w-full'>
                <h1 className='text-center p-16 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
                    Our Services
                </h1>
                <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>
                <p className='text-center font-Muli font-extralight py-10 text-[#3a3a3a]'>
                    Below are some of the many auto repair services we offer:
                </p>
            </div>
            <div className='flex p-20 justify-evenly space-x-10 items-center'>
                <ul className="parts font-Muli space-y-2 p-10">
                    <li>General Auto Repair & Maintenance</li>
                    <li>Transmission Repair & Replacement</li>
                    <li>Manufacturer Recommended Service</li>
                    <li>Brake Service or Replacements</li>
                    <li>Air Conditioning A/C Repair And maintenance</li>
                    <li>Tire Repair and Replacement</li>
                </ul>
                <div className=''>
                    <Image
                        alt='how booking works at mechanic4u'
                        src="/images/services.webp"
                        height={350}
                        width={500}
                        placeholder='blur'
                        blurDataURL='/images/services.webp'
                    />
                </div>
            </div>
            <div className='w-full'>
                <h1 className='text-center p-16 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
                    Want to Get Quality Car Repair or Maintenance
                </h1>

                <p className='text-center font-Muli font-extralight text-[#3a3a3a]'>
                    Wanna know the repair cost ? Click on appointment
                </p>
                <div className='flex justify-center space-x-10 p-10'>
                    <button className='bg-[#2f63b6] text-white w-44 h-14 font-Muli transition-colors ease-in  hover:bg-black'>APPOINTMENT</button>
                    <button className=' border-2 border-[#2f63b6] text-[#3c3c3c] w-44 h-14 font-Muli transition-colors ease-in hover:text-white  hover:bg-[#2f63b6]'>GET QUOTE</button>

                </div>
            </div>
            <Footer />
        </div>
    )
}
