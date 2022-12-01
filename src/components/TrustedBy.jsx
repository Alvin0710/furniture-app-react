import React from 'react'
import MicrosoftLogo from '../assets/images/logo__microsoft.svg'
import EntrepreneurLogo from '../assets/images/logo__entrepreneur.svg'
import FortuneLogo from '../assets/images/logo__fortune.svg'
import BusinessWebLogo from '../assets/images/logo__business web.svg'
import MashableLogo from '../assets/images/logo__mashable.svg'

const TrustedBy = () => {
    return (
        <div className='bg-[#F4F6F6] mt-5 w-full py-[4rem] my-[4rem] md:my-0 flex justify-center px-4'>
            <div className='w-full'>
                <h1 data-aos="fade-up" data-aos-duration="500" className='capitalize text-center font-poppins font-semibold text-xl tracking-wider pb-9'>TRUSTED BY OVER 1K+ COMPANIES</h1>
                <div className='flex justify-center flex-wrap md:gap-[3rem] gap-[3rem] xl:gap-[9rem] px-4 mx-auto'>
                    <img data-aos="fade-up" data-aos-duration="1000" src={MicrosoftLogo} alt="" className='w-[7rem]' />
                    <img data-aos="fade-up" data-aos-duration="1300" src={EntrepreneurLogo} alt="" className='w-[7rem]' />
                    <img data-aos="fade-up" data-aos-duration="1600" src={FortuneLogo} alt="" className='w-[7rem]' />
                    <img data-aos="fade-up" data-aos-duration="1900" src={BusinessWebLogo} alt="" className='w-[7rem]' />
                    <img data-aos="fade-up" data-aos-duration="2100" src={MashableLogo} alt="" className='w-[7rem]' />
                </div>
            </div>
        </div>
    )
}

export default TrustedBy