import React,{useState} from 'react'
import Confetti from 'react-confetti'
export default function ConfettiComp(props) {
    if(props.showConf)
    {

        return (
            
            <div>
            
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                tweenDuration={5000}
                />

                <div className='w-full h-full p-20 bg-white shadow-sm rounded-lg  border-2 border-blue-700 flex justify-center items-center'>
                    <h1 className='font-Muli text-black text-xl'>Congratulations!!</h1>
                    <p className='font-Muli text-black text-base'>Your order has been placed a representative will contact you shortly</p>


                </div>

        </div>
    )
}
}
