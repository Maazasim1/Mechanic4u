import React from 'react'
import { useRef } from 'react'
import { postData } from '../lib/userdata/utils';

import ReactPortal from './reactportal';


export default function Modal(props) {
    const fname = useRef();
    const lname = useRef();
    const email = useRef();
    const phone = useRef();
    const date = useRef();
    const time = useRef();
    const details = useRef();
    const kilometers = useRef();
    const service = useRef();

    const handlesubmit = (event) => {
        event.preventDefault();

        const payload = {
            fname: fname.current.value,
            lname: lname.current.value,
            email: email.current.value,
            phoneNumber: phone.current.value,
            date: date.current.value,
            time: time.current.value,
            details: details.current.value,
            kilometeres: kilometers.current.value,
            service: service.current.value,
        }

        async function sendData(payload) {
            const response = await postData(payload);
            console.log(response);

        }

        sendData(payload);
        props.setShow(!props.show);


    }

    if (props.show) {
        return (
            <ReactPortal wrapperId="react-portal-modal-container">

            <div className='sm:p-16 fixed  bg-transparent overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-[100] w-full md:inset-0 h-modal md:h-full'>
                <button onClick={() => props.setShow(!props.show)} className='absolute right-7 top-7 text-3xl z-50'>✖</button>
                <div className=''>
                    <div className="h-screen md:flex">
                        <div
                            className="relative overflow-hidden sm:p-0 p-10 sm:w-1/2 h-60 sm:h-auto w-full md:flex  bg-gradient-to-tr from-blue-900 to-blue-600 i justify-around items-center flex-col">
                            <div>
                                <h1 className="text-white font-bold text-4xl font-sans">Schedule Auto Service</h1>
                                <p className="text-white mt-1">mechanic4u</p>
                            </div>
                            <div className="hidden sm:absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                            <div className="hidden sm:absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                            <div className="hidden sm:absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                            <div className="hidden sm:absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                        </div>
                        <div className="flex md:w-1/2 justify-center py-10 sm:px-14 items-center bg-white">
                            <form className="w-full max-w-lg p-10" onSubmit={handlesubmit}>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                            First Name
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                            Last Name
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                            Phone Number
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 py-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                            Email
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                            Date of appoinment
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 py-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                            Time of appoinment
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="time" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                            Vehicle Year, Make and Model
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                            Current Kilometers
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" />
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                            Location
                                        </label>
                                        <div className="relative">
                                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                <option>Karachi</option>
                                                <option>Lahore</option>

                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                            Zip
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                            Service Required
                                        </label>
                                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" />

                                    </div>
                                </div>
                                <button className='font-Muli text-white bg-[#3c3c3c] w-28 h-12'>
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
            </ReactPortal>

        )
    }
}
