import Image from 'next/image'
import Upperbar from '../components/upperbar'
import Lowerbar from '../components/lowerbar'
import Herobanner from '../components/herobanner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Cards from '../components/cards'
import ServiceCell from '../components/servicecell'
import Reviews from '../components/reviews'
import Footer from '../components/footer'
import Link from 'next/link';
import AccordionApp from '../components/accordion';
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
      <Upperbar />
      <Lowerbar />
      <Herobanner />
      <div className='w-full'>
        <h1 className='text-center sm:p-16 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
          WELCOME TO CAR MAINTENANCE SERVICES
        </h1>
        <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>
        <p className='text-center font-Muli font-extralight py-10 text-[#3a3a3a]'>
          More Than 10 Years of Experience
        </p>
        <div className='flex sm:flex-row flex-col justify-around p-20 items-center space-x-6'>
          <div className='flex-shrink-0'>
            <Image alt="picure showing a person doing maintenance on a car" src='/images/image_1.webp' height={430} width={450} placeholder="blur" blurDataURL='/images/image_1.webp' />

          </div>
          <div className='w-full'>
            <p className='text-lg text-[#3a3a3a]'>
              Mechanic4u is a full-service preventive maintenance center. We perform high quality, guaranteed service you can trust at a fair price. We work on domestic and foreign vehicles and are your best choice for scheduled maintenance of your car, SUV, truck and fleet vehicles.
            </p>
            <div className='py-5'>
              <div className='w-5 inline-block px-[2px] mx-2'>  <FontAwesomeIcon className='text-[1px] text-[#1d72b2]' icon={faCheck} /></div>Same day service is provided in many instances<br />
              <div className='w-5 inline-block px-[2px] mx-2'>  <FontAwesomeIcon className='text-[1px] text-[#1d72b2]' icon={faCheck} /></div>Our work is warrantied for a full year
            </div>
            <Link href="/about-us">
              <a className='px-8 py-4 border-2 hover:bg-[#1d72b2] hover:text-white font-Muli border-[#1d72b2]'>+ MORE INFO</a>
            </Link>
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
        <div className='sm:flex sm:flex-row grid grid-cols-2 sm:justify-center pt-20 sm:space-x-10 sm:px-32 gap-3 px-5'>
          <div>
            <div className='rounded-full bg-white shadow-lg'>
              <Image
                alt='how booking works at mechanic4u'
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
                alt='how booking works at mechanic4u'
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
                alt='how booking works at mechanic4u'
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
                alt='how booking works at mechanic4u'
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
      <div className='flex sm:flex-row flex-col sm:justify-evenly justify-center items-center'>
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
        <Cards name="HYBRID PREMIUM" price="8499">
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

        <Cards name="PRO MAX" price="9499">
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
            <li>Tyre wash and polish</li>
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
      <div className='sm:p-20 p-10 grid sm:grid-cols-4 grid-cols-2 gap-2'>
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
      <div className='flex sm:flex-row flex-col sm:p-20 p-10 sm:justify-evenly justify-center sm:space-x-10 items-center'>
        <ul className="parts font-Muli space-y-2 p-10">
          <li>General Auto Maintenance</li>
          <li>Computerized Scanning</li>
          <li>Manufacturer Recommended Service</li>
          <li>Brake Service or Replacements</li>
          <li>Catalytic Converter Cleaning</li>
        </ul>
        <div className=''>
          <Image
            alt='how booking works at mechanic4u'
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
      <AccordionApp />

      
      <div className='w-full'>
        <h1 className='text-center p-16 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
          We Maintain All Makes of Automobiles        </h1>
        <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>
        <p className='text-center font-Muli font-extralight py-10 text-[#3a3a3a]'>
          Some of the popular makers</p>
      </div>
      <div className='sm:p-20 p-10 space-x-2 flex justify-evenly'>
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
        <div className='shadow-2xl sm:block hidden'>
          <Image
            alt='car logo'


            src='/images/logo_4.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='shadow-2xl sm:block hidden'>
          <Image
            alt='car logo'


            src='/images/logo_5.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='shadow-2xl sm:block hidden'>
          <Image
            alt='car logo'


            src='/images/logo_6.webp'
            height={120}
            width={140}

          />

        </div>
        <div className='shadow-2xl sm:block hidden'>
          <Image
            alt='car logo'


            src='/images/logo_7.webp'
            height={120}
            width={140}

          />

        </div>


      </div>
      <Footer />

    </div>
  )
}
