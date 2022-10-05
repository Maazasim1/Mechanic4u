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
                    <a href='https://www.youtube.com/channel/UCBYxLcBvMh36LZlllL5wDQw' target='_blank'>
                    <Image
                        src={Youtube}
                        width={25}
                        height={25} />
                        </a>
                </div>
                <div className='px-2'>
                <a href='https://www.instagram.com/mechanic4u.pk/' target='_blank'>

                    <Image
                        src={Instagram}
                        width={25}
                        height={25}
                    />
                    </a>
                </div>
                <div className='px-2'>
                <a href='https://www.facebook.com/mechanic4u.pk' target='_blank'>


                    <Image
                        src={Facebook}
                        width={25}
                        height={25}
                    />
                    </a>
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
