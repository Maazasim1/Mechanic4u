import React from 'react'
import Footer from '../components/footer'
import Lowerbar from '../components/lowerbar'
import Upperbar from '../components/upperbar'

export default function Contact() {
  return (
    <div>
        <Upperbar />
        <Lowerbar />

        <div className='w-full'>
        <h1 className='text-center p-8 font-Muli text-4xl font-[1000] text-[#3A3A3A]'>
        Contacts</h1>
        <div className='bg-[#1d72b2] relative left-[47%] w-[55px] h-[2px]'></div>
      
      </div>
      <div className='p-20 flex sm:flex-row flex-col justify-evenly'>
        <h2 className='w-[600px] sm:py-0 py-5 font-Muli text-lg'>
        Call: +92 318 1144183
        </h2>
        <p>
        If you have any questions or comments regarding us or your vehicle, please fill out a contact request form below. Or if you prefer, you can reach us at the following address:
        </p>

      </div>

      <div className='sm:p-20 p-5'>
        <h2 className='font-Muli text-4xl py-5'>
          Contact Us
        </h2>
        <form className='w-full'>
          <div className='flex sm:flex-row flex-col'>

          <div className='flex flex-col space-y-3'>
            <input className='border-[1px] border-gray-400 py-5 sm:w-[500px] h-12' placeholder=' Your Name'/>
            <input className='border-[1px] border-gray-400 py-5 sm:w-[500px] h-12' placeholder=' Your Subject'/>
            <input className='border-[1px] border-gray-400 py-5 sm:w-[500px] h-12' placeholder=' E-mail'/>
          </div>

          <div className='flex-grow'>
            <textarea  className='resize-none w-[100%] h-[100%] sm:mx-5 border-[1px] sm:py-0 py-5 sm:my-0 my-5 border-gray-400' placeholder=' Comments' />
          </div>
          </div>
          <button className='bg-red-700 text-white w-full my-10 h-14 font-Muli' type='submit'>
            Send Message
          </button>
        </form>
      </div>
        <Footer />
    </div>
  )
}
