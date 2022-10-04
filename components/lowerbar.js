import React from 'react'
import Image from 'next/image'
export default function Lowerbar() {
  return (
    <div className='sticky top-0 z-30 flex h-28 bg-[#eda309] items-center justify-start'>
        <div className='px-20'>

        <Image
            src='/images/mechanic4u.webp'
            height={120}
            width={120}
            />
            </div>
            <div>
                <ul className='flex space-x-3 text-white font-sans font-semibold cursor-pointer'>
                    <li className='hover:animate-bounce'>HOME</li>
                    <li className='hover:animate-bounce'>SERVICES</li>
                    <li className='hover:animate-bounce'>BOOK MECHANIC</li>
                    <li className='hover:animate-bounce'>PACKAGES</li>
                    <li className='hover:animate-bounce'>PARTS</li>
                    <li className='hover:animate-bounce'>ABOUT US</li>
                    <li className='hover:animate-bounce'>VIDEO</li>
                    <li className='hover:animate-bounce'>CONTACTS</li>
                </ul>
            </div>

    </div>
  )
}
