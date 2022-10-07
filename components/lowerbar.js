import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Lowerbar() {
  return (
    <div className='sticky top-0 z-30 flex h-28 bg-[#eda309] items-center justify-start'>
        <div className='px-20'>

        <Image
            alt="Logo"
            src='/images/mechanic4u.webp'
            height={120}
            width={120}
            />
            </div>
            <div>
                <ul className='navbar flex space-x-3 text-white font-sans font-semibold cursor-pointer'>
                  <Link href="/">
                    <li className=''>HOME</li>
                  </Link>
                  <Link href="/services">
                    <li className=''>SERVICES</li>
                  </Link>
                  <Link href="/book-mechanic">
                    <li className=''>BOOK MECHANIC</li>
                  </Link>
                  <Link href="/packages">
                    <li className=''>PACKAGES</li>
                  </Link>
                  <Link href="/parts">
                    <li className=''>PARTS</li>
                  </Link>
                  <Link href="/about-us">
                    <li className=''>ABOUT US</li>
                  </Link>
                  <Link href="/video">
                    <li className=''>VIDEO</li>
                  </Link>
                  <Link href="/contact">
                    <li className=''>CONTACTS</li>
                  </Link>
                </ul>
            </div>

    </div>
  )
}
