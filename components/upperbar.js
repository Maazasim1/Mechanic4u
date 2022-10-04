import React from 'react'
import Image from 'next/image'
import Youtube from '../public/images/youtube.webp'
import Facebook from '../public/images/facebook.webp'
import Instagram from '../public/images/instagram.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Upperbar() {
    return (
        <div className='flex bg-slate-800 h-12 items-center justify-between  overflow-hidden'>
            <div className='flex p-24'>

                <div className='px-2'>
                    <Image
                        src={Youtube}
                        width={25}
                        height={25} />
                </div>
                <div className='px-2'>

                    <Image
                        src={Instagram}
                        width={25}
                        height={25}
                    />
                </div>
                <div className='px-2'>

                    <Image
                        src={Facebook}
                        width={25}
                        height={25}
                    />
                </div>

            </div>
            <div className='font-Muli flex justify-center items-center text-sm text-white hover:bg-blue-700 px-10 py-10 bg-[#337ab7]'>
                <div className='w-6 h-6 mx-3' >
                    <FontAwesomeIcon className='text-white text-2xl' icon={faCircleArrowRight} />
                </div>
                <h1 className='font-extrabold'>
                    APPOINMENT
                </h1>
            </div>


        </div>
    )
}
