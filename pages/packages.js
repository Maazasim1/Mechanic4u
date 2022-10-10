import React, { useState } from 'react'
import Footer from '../components/footer'
import Lowerbar from '../components/lowerbar'
import Upperbar from '../components/upperbar'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { Autoplay } from 'swiper';
import Cards from '../components/cards'
import Modal from '../components/modal'

export default function Packages() {
  const [show, setShow] = useState(false)
  return (

    <div>
      <Modal show={show} setShow={setShow} />

      <Upperbar />
      <Lowerbar />

      <div className="w-full sm:h-[350px] h-[500px] sm:overflow-hidden">
        <Image
          src="/images/package_header.webp"
          height={578}
          width={1000}
          layout="responsive"
          placeholder="blur"
          blurDataURL="/images/package_header.webp"
          alt="packages banner"
          className='object-center'
        />

      </div>
      <div className='text-left sm:w-[620px] px-10 text-white relative sm:bottom-64 bottom-40 sm:left-32'>
        <h2 className='sm:py-5 font-Muli font-bold text-2xl sm:text-5xl'>Car Packages</h2>
        <p className=' sm:text-lg text-sm'>
          Our mechanics are mobile. Not only do we have significantly lower overhead costs compared to the local shops, but as a national brand, we are able to negotiate better prices from the auto parts vendors. We pass these savings to you! The bigger the job, the more you save.
        </p>
      </div>

      <div className='sm:p-0 p-2'>
        <Swiper

          navigation={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>

            <div className='flex sm:flex-row flex-col justify-center sm:items-end space-y-3 sm:space-x-5'>
              {/* <Cards name='Inspection Checkup' price="4000">
                <div class="marquee">
                  <div>
                    <p>Non EFI Cars <b>(Rs:4000)</b></p>
                    <p>EFI Cars <b>(Rs:5000)</b></p>
                    <p>Hatchback / Sedan Cars <b>(Rs:5000)</b></p>
                    <p>Suv Cars <b>(Rs:6000)</b></p>
                    <p>Hybrid Cars<b> (Rs:6000)</b></p>
                  </div>
                </div>
                <ul className="parts  space-y-2 p-10">
                  <li>Diagnostic Survey</li>
                  <li>Body Inspection</li>
                  <li>Interior Check</li>
                  <li>Electrical Lookup</li>
                  <li>Tires Treads Checking</li>
                  <li>Suspension &amp; Trans-axles Check</li>
                  <li>Radiator Check</li>
                  <li>Engine Condition/ Sound Test</li>
                  <li>For Hybrid: Battery health Checkup</li>
                </ul>

              </Cards>
                */}


              <Cards name='Hybrid Premium Tuning' price='6000'>
                <ul className="parts  space-y-2 p-10">
                  <li>7 DAYS WORKMANSHIP WARRANTY</li>
                  <li>HYBRID Battery Health Test</li>
                  <li>HYBRID Battery Fan Cleaning</li>
                  <li>Catalytic Cleaning by Machine</li>
                  <li>Brakes service ( RUST REMOVING &amp; GREASING )</li>
                  <li>Brake pad change if required (PARTS WILL BE CHARGED SEPARATELY )</li>
                  <li>Engine Tuning</li>
                  <li>Throttle body Cleaning</li>
                  <li>Air intake Cleaning</li>
                  <li>MAP, MAF, TPS &amp; oxygen ensor Cleaning</li>
                  <li>Plug cleaning</li>
                  <li>Spark coils Cleaning</li>
                  <li>Filters Cleaning</li>
                  <li>Computerized Scanning</li>
                  <li>Complimentary oil change ( PARTS WILL BE CHARGED SEPARATELY)</li>
                  <li>Complete car inspection by DAE engineer through our inspection sheet</li>
                  <li>Pre &amp; Post inspection</li>
                </ul>
              </Cards>

              <Cards name='SUPRA' price='5999'>
                <ul className="parts  space-y-2 p-10">
                  <li>Catalytic Cleaning by Machine</li>
                  <li>Brakes Service (RUST REMOVING &amp; GREASING)</li>
                  <li>Brake Pad Change if Required (PARTS WILL BE CHARGED SEPARATELY)</li>
                  <li>Throttle Body Cleaning</li>
                  <li>Air Intake Cleaning</li>
                  <li>MAP, MAF, TPS &amp; Oxygen Sensor Cleaning</li>
                  <li>Spark Plug Cleaning</li>
                  <li>Spark Coils Cleaning</li>
                  <li>Filters Cleaning</li>
                  <li>Computerized Scanning</li>
                  <li>Computerized Throttle Body Calibration</li>
                  <li>Complimentary Oil Change (OIL WILL BE CHARGED SEPARATELY) </li>
                  <li>Pre &amp; Post Inspection 🧐 </li>
                  <li>Complete Car Inspection By DAE Engineer Through Our Inspection Sheet</li>
                  <li>MECHANIC4U CERTIFICATION STICKER</li>
                </ul>

              </Cards>

              <Cards name='PRO MAX' price='7999'>
                <div class="marquee">
                  <div>
                    <p>Hatchback Cars <b>(Rs:8000)</b></p>
                    <p>Sedan / Crossover Cars <b>(Rs:8500)</b></p>
                    <p>Suv Cars <b>(Rs:10000)</b></p>
                  </div>
                </div>
                <ul className="parts  space-y-2 p-10">
                  <li>7 DAYS WORKMANSHIP WARRANTY</li>
                  <li>Catalytic Cleaning by Machine</li>
                  <li>Brakes service all 4 wheels ( RUST REMOVING &amp; GREASING )</li>
                  <li>Computerized Tuning</li>
                  <li>Throttle body Cleaning</li>
                  <li>MAP, MAF, TPS &amp; oxygen ensor Cleaning</li>
                  <li>Computerised Scanning/Calibration</li>
                  <li>Complimentary oil change N Filter change ( SPARE PARTS WILL BE CHARGED SEPARATELY)</li>
                  <li>Complete car inspection by DAE engineer through our inspection sheet</li>
                  <li>Pre &amp; Post inspection</li>
                  <li>CAR DETAILING:</li>
                  <li>Ceramic Wax Compounding outer body( 2 MONTHS WARRANTY )</li>
                  <li>Carpet vacuum</li>
                  <li>Car mats cleaning</li>
                  <li>Dashboard, A/C Vents , Steering , Door Panels, Gear panel clean though ( APC )</li>
                  <li>Polished in fixed position</li>
                  <li>Trunk Cleaning</li>
                  <li>Engine Room cleaning</li>
                  <li>Complete Exterior Wash</li>
                  <li>Foam wash with Premium quality shampoo</li>
                  <li>Tyre wash and polished</li>
                </ul>


              </Cards>

            </div>
          </SwiperSlide>


          <SwiperSlide>

            <div className='flex sm:flex-row sm:items-end flex-col justify-center space-y-3 sm:space-x-5'>
              <Cards name='TURBO TUNING' price='4500'>

                <div class="marquee">
                  <div>
                    <p>600cc - 1000cc <b>(Rs:3000)</b></p>
                    <p>1300cc <b>(Rs:3500)</b></p>
                    <p>1500cc - 1800cc <b>(Rs:4000)</b></p>
                    <p>2000cc - 3000cc <b>(Rs:4500)</b></p>
                  </div>
                </div>
                <ul class="parts  space-y-2 p-10">
                  <li>Carburetor Settings</li>
                  <li>Tappets Adjustment</li>
                  <li>Engine Oil Replacement</li>
                  <li>Spark Plugs Servicing</li>
                  <li>Plugs wires cleaning/ replacement</li>
                  <li>TP Sensor Cleaning (EFI)</li>
                  <li>Throttle body cleaning (EFI)</li>
                  <li>Performance Inspection</li>
                  <li>Caliper Cleaning</li>
                  <li>Coolant change</li>
                  <li>Rust removing &amp; Greasing</li>
                  <li>Brake Pad/ Shoe Service</li>
                </ul>
              </Cards>




            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      <div className='w-full'>
        <h1 className='text-center p-16 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
          We Maintain All Makes of Automobiles        </h1>
        <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>
        <p className='text-center font-Muli font-extralight py-10 text-[#3a3a3a]'>
          Some of the popular makers</p>
      </div>
      <div className='sm:p-20 p-10 flex justify-evenly'>
        <div className='shadow-2xl'>
          <Image
            alt='car logo'
            src='/images/logo_1.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='shadow-2xl'>
          <Image
            alt='car logo'

            src='/images/logo_2.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='shadow-2xl'>
          <Image
            alt='car logo'


            src='/images/logo_3.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='sm:block hidden shadow-2xl'>
          <Image
            alt='car logo'


            src='/images/logo_4.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='sm:block hidden shadow-2xl'>
          <Image
            alt='car logo'


            src='/images/logo_5.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='sm:block hidden shadow-2xl'>
          <Image
            alt='car logo'


            src='/images/logo_6.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='sm:block hidden shadow-2xl'>
          <Image
            alt='car logo'


            src='/images/logo_7.webp'
            height={120}
            width={140}

          />

        </div>


      </div>
      <Footer />

    </div >
  )
}
