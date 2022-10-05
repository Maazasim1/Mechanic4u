import React from 'react'
import Image from 'next/image'
export default function ServiceCell(props) {
    return (
        <>
            <div className='flex flex-col justify-center items-center shadow-lg overflow-hidden p-5'>
                <div className='overflow-hidden'>

                    <Image
                        src={props.src}
                        height={180}
                        width={210}
                        placeholder="blur"
                        blurDataURL={props.src}
                    />
                </div>
                <div className='text-center text-black hover:bg-gradient-to-r from-[#004578] to-[#1d72b2] font-Muli hover:text-white px-4 py-2'>
                    {props.name}
                </div>

            </div>
        </>
    )
}
