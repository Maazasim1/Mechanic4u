import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <footer className='w-full h-[60vh] bg-[#081019] '>
                <div className='flex justify-around py-14'>

                    <div className='flex '>
                        <div className='w-72'>
                            <Image
                                src="/images/mechanic4u.webp"
                                height={170}
                                width={170}

                            />
                            <p className='text-[#818282]'>
                                If you are looking for a trustworthy, reliable company for your automobile repair needs, look no further. We are established in 2010.
                            </p>

                        </div>
                        <div className='pl-20'>
                            <h4 className='text-[#CCCCCC] text-lg pb-3x'>Services</h4>
                            <ul className='text-[#818282]'>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Video</li>
                                <li>Services</li>
                                <li>Contacts</li>
                            </ul>

                        </div>
                    </div>

                    <div className=''>
                        <h4 className='text-[#CCCCCC] text-lg pb-3'>Follow Us</h4>
                        <div className='flex'>
                            <div className='px-2'>
                            <a href='https://www.youtube.com/channel/UCBYxLcBvMh36LZlllL5wDQw' target='_blank'>

                                <Image
                                    src='/images/youtube.webp'
                                    width={25}
                                    height={25} />
                                    </a>
                            </div>
                            <div className='px-2'>
                            <a href='https://www.instagram.com/mechanic4u.pk/' target='_blank'>


                                <Image
                                    src="/images/instagram.webp"
                                    width={25}
                                    height={25}
                                />
                                </a>
                            </div>
                            <div className='px-2'>
                            <a href='https://www.facebook.com/mechanic4u.pk' target='_blank'>

                                <Image
                                    src="/images/facebook.webp"
                                    width={25}
                                    height={25}
                                />
                                </a>
                            </div>

                        </div>
                        <div className='text-[#CCCCCC] py-10'>
                            Mobile Apps Coming Soon
                        </div>
                        <div className='flex'>
                            <div>
                                

                                <Image
                                    src="/images/ios.webp"
                                    height={40}
                                    width={170}
                                />

                            </div>
                            <div>

                                <Image
                                    src="/images/android.webp"
                                    height={40}
                                    width={100}
                                />

                            </div>
                        </div>


                    </div>


                </div>
            </footer>
            <div className='w-full h-14 bg-black text-[#cccccc] px-24 py-5'>
            © 2020 Mechanic4U, All Rights Reserved

            </div>
        </>
    )
}
