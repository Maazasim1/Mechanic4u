import React,{useState} from 'react'
import Image from 'next/image'
import Youtube from '../public/images/youtube.webp'
import Facebook from '../public/images/facebook.webp'
import Instagram from '../public/images/instagram.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Modal from './modal'
export default function Upperbar() {
    const [show,setShow]=useState(false);

    return (
        <>
        <Modal show={show} setShow={setShow} />
        <div className='sticky top-0 sm:z-30 z-50'>
            
        <div className='flex  bg-slate-800 h-12 items-center justify-between  overflow-hidden'>
            <div className='sm:flex hidden p-24'>

                <div className='px-2'>
                    <a href='https://www.youtube.com/channel/UCBYxLcBvMh36LZlllL5wDQw' rel="noreferrer" target='_blank'>
                    <Image
                        alt="youtube"
                        src={Youtube}
                        width={25}
                        height={25} />
                        </a>
                </div>
                <div className='px-2'>
                <a href='https://www.instagram.com/mechanic4u.pk/' rel="noreferrer" target='_blank'>

                    <Image
                        alt="instagram"
                        src={Instagram}
                        width={25}
                        height={25}
                    />
                    </a>
                </div>
                <div className='px-2'>
                <a href='https://www.facebook.com/mechanic4u.pk' rel="noreferrer" target='_blank'>


                    <Image
                        alt="facebook"
                        src={Facebook}
                        width={25}
                        height={25}
                    />
                    </a>
                </div>

            </div>

            <div onClick={()=>setShow(!show)} className='sm:w-auto w-full cursor-pointer font-Muli flex justify-center items-center text-sm text-white hover:bg-blue-700 px-10 py-10 bg-[#337ab7]'>
                <div className='w-6 h-6 mx-3' >
                    <FontAwesomeIcon className='text-white text-2xl' icon={faCircleArrowRight} />
                </div>
                <h1 className='font-extrabold'>
                    BOOK APPOINMENT
                </h1>
            </div>


        </div>
        </div>
        </>
    )
}
