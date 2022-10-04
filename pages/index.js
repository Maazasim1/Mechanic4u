import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Upperbar from '../components/upperbar'
import Lowerbar from '../components/lowerbar'
import Herobanner from '../components/herobanner'
import Estimator from '../components/estimator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@700&display=swap" rel="stylesheet"/>
            </Head>
            <Upperbar />
            <Lowerbar />
            <Herobanner />
            <Estimator />
            <div className='w-full'>
              <h1 className='text-center p-16 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
              WELCOME TO CAR MAINTENANCE SERVICES
              </h1>
              <div className='bg-[#1d72b2] relative left-[50%] w-[55px] h-[2px]'></div>
              <p className='text-center font-Muli font-extralight py-10 text-[#3a3a3a]'>
              More Than 10 Years of Experience
              </p>
              <div className='flex justify-around p-20 items-center space-x-6'>
                <div className='flex-shrink-0'>
                <Image src='/images/image_1.webp' height={430} width={450} placeholder="blur" blurDataURL='/images/image_1/webp'/>

                </div>
                <div className='w-full'>
                  <p className='text-lg text-[#3a3a3a]'>
                  Mechanic4u is a full-service preventive maintenance center. We perform high quality, guaranteed service you can trust at a fair price. We work on domestic and foreign vehicles and are your best choice for scheduled maintenance of your car, SUV, truck and fleet vehicles.
                  </p>
                  <p className='py-5'>
                  <div className='w-5 inline-block px-[2px] mx-2'>  <FontAwesomeIcon className='text-[1px] text-[#1d72b2]' icon={faCheck}/></div>Same day service is provided in many instances<br/>
                  <div className='w-5 inline-block px-[2px] mx-2'>  <FontAwesomeIcon className='text-[1px] text-[#1d72b2]' icon={faCheck}/></div>Our work is warrantied for a full year
                  </p>
                <button className='px-8 py-4 border-2 hover:bg-[#1d72b2] hover:text-white font-Muli border-[#1d72b2]'>+ MORE INFO</button>
                </div>


              </div>

            </div>
          </div>
          )
}
