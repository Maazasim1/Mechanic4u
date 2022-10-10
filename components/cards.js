import React,{useState} from 'react'
import Modal from './modal'



export default function Cards(props) {
    const [show,setShow]=useState(false)

    return (
        <>
        <Modal show={show} setShow={setShow} />
            <div className='shadow-lg w-96'>

                <div className='flex h-48 bg-gradient-to-r from-[#004578] to-[#1d72b2] text-white font-Muli text-3xl p-10 '>
                    <div className='text-right'>{props.name}<br /> Package</div>
                    <div className='bg-white mt-8 w-[70px] h-[2px] rotate-[70deg]'></div>
                    <div>{props.price}<br />onwards</div>
                </div>
                <div className='h-96 overflow-auto'>
                    {props.children}


                </div>

                <button onClick={()=>setShow(!show)} className='mt-5 mb-5 ml-20 px-20 py-4 bg-gradient-to-r from-[#004578] to-[#1d72b2] text-white font-Muli '>
                    Book Now
                </button>
            </div>
        </>
    )
}
