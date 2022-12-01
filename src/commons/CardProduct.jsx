import React from 'react'
import { BsCart3 } from 'react-icons/bs'

const CardProduct = (props) => {
    return (
        <div className='bg-[#244d4d09] w-[17rem] px-[3rem]'>
            <div className='flex justify-end mr-[-2rem]'>
                <div className='bg-[#a28470e1] mt-[-1.3rem] rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center'><BsCart3 className='text-white text-lg' /></div>
            </div>
            <h2 className='text-2xl font-poppins pt-8'>{props.title}</h2>
            <div className='flex items-center pt-6 font-poppins gap-8'>
                <p className='text-lg'>{props.price}</p>
                <p className='text-base line-through text-[#A9A7A6]'>{props.crossPrice}</p>
            </div>
            <div className='flex justify-center'>
                <img src={props.image} alt="product1" className='mt-[3rem] mb-[-9rem]' />
            </div>
        </div>
    )
}

export default CardProduct