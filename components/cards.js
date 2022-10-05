import React from 'react'

export default function Cards(props) {
    return (
        <>
            <div className='shadow-lg w-96'>

                <div className='flex bg-gradient-to-r from-[#004578] to-[#1d72b2] text-white font-Muli text-3xl p-10 '>
                    <div className='text-right'>{props.name}<br /> package</div>
                    <div className='bg-white mt-8 w-[70px] h-[2px] rotate-[70deg]'></div>
                    <div>{props.price}<br />onwards</div>
                </div>
                <div className='h-96 overflow-auto'>
                    {props.children}


                </div>

                <button className='mt-5 ml-20 px-20 py-4 bg-gradient-to-r from-[#004578] to-[#1d72b2] text-white font-Muli '>
                    Order Now
                </button>
            </div>
        </>
    )
}