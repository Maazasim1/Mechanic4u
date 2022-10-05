import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Upperbar from '../components/upperbar'
import Lowerbar from '../components/lowerbar'
import Herobanner from '../components/herobanner'
import Estimator from '../components/estimator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Cards from '../components/cards'
import ServiceCell from '../components/servicecell'
import Reviews from '../components/reviews'

export default function Home() {
  const serviceGrid = [
    { src: "/images/service-1.webp", name: "DIAGNOSTICS" },
    { src: "/images/service-2.webp", name: "CATALYTIC CONVERTER CLEANING" },
    { src: "/images/service-3.webp", name: "OIL, LUBE, FILTERS" },
    { src: "/images/service-4.webp", name: "TRANSMISION" },
    { src: "/images/service-5.webp", name: "BATTERIES" },
    { src: "/images/service-6.webp", name: "TUNE UP" },
  ]


  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <Upperbar />
      <Lowerbar />
      <Herobanner />
      <Estimator />
      <div className='w-full'>
        <h1 className='text-center p-16 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
          WELCOME TO CAR MAINTENANCE SERVICES
        </h1>
        <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>
        <p className='text-center font-Muli font-extralight py-10 text-[#3a3a3a]'>
          More Than 10 Years of Experience
        </p>
        <div className='flex justify-around p-20 items-center space-x-6'>
          <div className='flex-shrink-0'>
            <Image src='/images/image_1.webp' height={430} width={450} placeholder="blur" blurDataURL='/images/image_1.webp' />

          </div>
          <div className='w-full'>
            <p className='text-lg text-[#3a3a3a]'>
              Mechanic4u is a full-service preventive maintenance center. We perform high quality, guaranteed service you can trust at a fair price. We work on domestic and foreign vehicles and are your best choice for scheduled maintenance of your car, SUV, truck and fleet vehicles.
            </p>
            <div className='py-5'>
              <div className='w-5 inline-block px-[2px] mx-2'>  <FontAwesomeIcon className='text-[1px] text-[#1d72b2]' icon={faCheck} /></div>Same day service is provided in many instances<br />
              <div className='w-5 inline-block px-[2px] mx-2'>  <FontAwesomeIcon className='text-[1px] text-[#1d72b2]' icon={faCheck} /></div>Our work is warrantied for a full year
            </div>
            <button className='px-8 py-4 border-2 hover:bg-[#1d72b2] hover:text-white font-Muli border-[#1d72b2]'>+ MORE INFO</button>
          </div>


        </div>

      </div>
      <div className='w-full pb-10 bg-[#f5f5f5]'>
        <h1 className='text-center p-16 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
          How It Works
        </h1>
        <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>
        <p className='text-center font-Muli font-extralight py-10 text-[#3a3a3a]'>
          We offer full service maintenance</p>
        <div className='flex flex-row pt-20 space-x-10 px-32'>
          <div>
            <div className='rounded-full bg-white shadow-lg'>
              <Image
                src='/images/how-it-works-3.webp'
                height={250}
                width={250}
                placeholder='blur'
                blurDataURL='/images/how-it-works-3.webp'
              />
            </div>
            <h1 className='text-center font-Muli text-3xl p-4 text-gray-400'>1</h1>
            <p className='text-center font-Muli'>CHOOSE YOUR<br />SERVICE</p>
          </div>
          <div>


            <div className='rounded-full bg-white shadow-lg'>
              <Image
                src='/images/how-it-works-1.webp'
                height={250}
                width={250}
                placeholder='blur'
                blurDataURL='/images/how-it-works-1.webp'
              />
            </div>
            <h1 className='text-center font-Muli text-3xl p-4 text-gray-400'>2</h1>
            <p className='text-center font-Muli'>MAKE AN<br />APPOINTMENT</p>
          </div>


          <div>
            <div className='rounded-full bg-white shadow-lg'>
              <Image
                src='/images/how-it-works-2.webp'
                height={250}
                width={250}
                placeholder='blur'
                blurDataURL='/images/how-it-works-2.webp'
              />
            </div>
            <h1 className='text-center font-Muli text-3xl p-4 text-gray-400'>3</h1>
            <p className='text-center font-Muli'>WE WILL COME AT<br />YOUR DOOR STEP<br />FOR MAINTENANCE</p>
          </div>


          <div>
            <div className='rounded-full bg-white shadow-lg'>
              <Image
                src='/images/how-it-works-4.webp'
                height={250}
                width={250}
                placeholder='blur'
                blurDataURL='/images/how-it-works-4.webp'
              />
            </div>
            <h1 className='text-center font-Muli text-3xl p-4 text-gray-400'>4</h1>
            <p className='text-center font-Muli'>PICK UP YOUR CAR<br />KEYS</p>
          </div>

        </div>
      </div>
      <div className='w-full'>
        <h1 className='text-center p-16 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
          Our Pricing Plans
        </h1>
        <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>
        <p className='text-center font-Muli font-extralight py-10 text-[#3a3a3a]'>
          Fixed price car servicing packages</p>
      </div>
      <div className='flex justify-evenly flex-row'>
        <Cards name="SUPRA" price="6499">
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
        <Cards name="SUPRA" price="6499">
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
        <Cards name="SUPRA" price="6499">
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
      </div>
      <div className='w-full'>
        <h1 className='text-center p-16 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
          Our Featured Services
        </h1>
        <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>
        <p className='text-center font-Muli font-extralight py-10 text-[#3a3a3a]'>
          We Offer Full Service & Maintenance</p>
      </div>
      <div className='p-20 grid grid-cols-4 gap-2'>
        {
          serviceGrid.map((service) => {
            return (
              <ServiceCell key={service.name} src={service.src} name={service.name} />

            )
          })
        }




      </div>
      <div className='w-full'>
        <h1 className='text-center p-16 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
          We Provide Expert Services

        </h1>
        <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>

      </div>
      <div className='flex p-20 justify-evenly space-x-10 items-center'>
        <ul className="parts font-Muli space-y-2 p-10">
          <li>General Auto Maintenance</li>
          <li>Computerized Scanning</li>
          <li>Manufacturer Recommended Service</li>
          <li>Brake Service or Replacements</li>
          <li>Catalytic Converter Cleaning</li>
        </ul>
        <div className=''>
          <Image
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
          What Our Valuable Customers Says
        </h1>
        <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>

      </div>
      <Reviews />
    </div>
  )
}
