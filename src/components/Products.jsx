import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Tabs from './Tabs'

const Products = () => {
    return (
        <div name='product' className='w-full px-4 md:px-8'>
            <div className='max-w-[1300px] mx-auto h-full py-9'>
                <div className='flex flex-col md:flex-row justify-between md:items-center px-3'>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className='text-5xl font-bold flex items-center font-noto text-[#244D4D] pb-5'>Products</h1>
                    </div>
                    <div className='flex md:justify-center gap-6 pr-8'  data-aos="fade-up" data-aos-duration="2000">
                        <p className='text-medium font-poppins cursor-pointer'>See all</p>
                        <div className='bg-[#E9E9E9] px-5'>
                            <BsArrowRight className='text-2xl ml-[-1.7rem]' />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center py-9" data-aos="fade-up" data-aos-duration="2000">
                    <Tabs />
                </div>
            </div>
        </div>
    )
}

export default Products