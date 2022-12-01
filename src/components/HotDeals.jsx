import React from 'react'
import FireIcon from '../assets/images/icon__fire.svg'
import DealsIcon from '../assets/images/icon__deals.svg'

const HotDeals = () => {
    return (
        <div className='w-full px-4 md:px-8 '>
            <div className='py-[10rem] px-[1rem] max-w-[1300px] mx-auto h-full grid grid-cols-1 gap-[5rem] md:grid-cols-2 md:gap-[5rem] xl:grid-cols-5 xl:gap-7 items-center'>

                <div className='xl:col-span-2' data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='text-5xl font-bold flex items-center font-noto text-[#244D4D]'>Hot <img src={FireIcon} alt="" /></h1>
                    <h1 className='text-5xl font-bold flex items-center font-noto text-[#244D4D]'>deals for you</h1>
                    <p className='text-[#5F5F64] font-poppins pt-5'>Online shopping for retail sales <br /> direct to consumers</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1400">
                    <img src={DealsIcon} alt="" />
                    <h2 className='text-[#3D3D3F] font-bold text-xl font-poppins py-[1rem]'>1.5% cashback</h2>
                    <p className='text-[#5F5F64] font-poppins'>Online shopping for retail sales direct to consumers</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1700">
                    <img src={DealsIcon} alt="" />
                    <h2 className='text-[#3D3D3F] font-bold text-xl font-poppins py-[1rem]'>30-days terms</h2>
                    <p className='text-[#5F5F64] font-poppins'>Online shopping for retail sales direct to consumers</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="2000">
                    <img src={DealsIcon} alt="" />
                    <h2 className='text-[#3D3D3F] font-bold text-xl font-poppins py-[1rem]'>Save Money</h2>
                    <p className='text-[#5F5F64] font-poppins'>Online shopping for retail sales direct to consumers</p>
                </div>


            </div>
        </div>
    )
}

export default HotDeals