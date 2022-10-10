import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Lowerbar() {

  const [hide, setHide] = useState(false)

  const size = useWindowSize();





  return (
    <div className='sticky top-0 z-30 block'>

      {/*
      <nav className='sticky top-0 z-30 flex justify-between h-28 bg-[#eda309] items-center '>
        <div className='sm:px-20'>

          <Image
            alt="Logo"
            src='/images/mechanic4u.webp'
            height={120}
            width={120}
          />
        </div>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>

        <div className=' w-full md:block md:w-auto" id="navbar-default'>
          <ul className='font-Muli flex flex-col p-4 mt-4 bg-[#eda309] rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#eda309]'>
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
      </nav>
            */}

      <nav className="bg-[#eda309] border-gray-200 px-2 sm:px-4 py-2.5 rounded sticky top-0 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a className="flex items-center">


            <Image
              alt="Logo"
              src='/images/mechanic4u.webp'
              height={120}
              width={120}
            />
          </a>
          <button onClick={() => setHide(!hide)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          {hide || size.width > 600 ?

            <div className=" w-full md:block md:w-auto cursor-pointer" id="navbar-default">
              <ul className='text-white font-Muli flex flex-col p-4 mt-4 bg-[#eda309] rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#eda309]'>
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
                  <li className=''>CONTACT US</li>
                </Link>
              </ul>

            </div> : <></>
          }
        </div>
      </nav>

    </div>
  )
}


function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}