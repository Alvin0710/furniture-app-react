import React from 'react'
import HeroImage from '../assets/images/hero__img.png'
import Dots from '../assets/images/hero__dots.svg'

const HeroPage = () => {
    return (
        <div name='hero' className='w-full px-4 md:px-8 h-[80vh] xl:h-screen pt-[4rem]'>
            <div className='max-w-[1550px] mx-auto h-full md:grid grid-cols-12 grid-rows-1'>

                <img src={HeroImage} alt="" className='inline-block w-full md:hidden' />

                <div className="col-start-1 xl:col-start-2 col-end-9 xl:col-end-7 grid-rows-1 row-start-1 z-50">
                    <div data-aos="fade-up" data-aos-duration="1000" className='bg-[#ffffff66] w-[40vh] xl:w-full backdrop-blur-xl px-4 md:px-[3rem] md:py-[3rem] xl:py-[5rem] md:mt-[4rem] xl:mt-[7rem]'>
                        <div className='pb-9 mt-5 md:mt-[-5rem] xl:mt-[-10rem] md:ml-[2rem] xl:ml-[3rem] md:pb-[2rem] xl:pb-[3rem]'>
                            <img src={Dots} alt="" className='absolute -mt-[4.5rem] w-[6rem] h-[6rem] md:relative md:mt-7' />
                        </div>
                        <h1 className='text-5xl leading-[4rem] xl:text-6xl text-[#244D4D] font-black tracking-tight xl:leading-[5rem] pb-9 font-noto'>We Help You Make Modern Interior</h1>
                        <p className='text-lg text-[#5F5F64] font-ligth font-poppins'>We will help you to make an elegant
                            and luxurious interior designed by
                            professional interior designer.</p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="2000" className="hidden md:flex w-[60vw] md:h-[90vh] md:col-start-5 md:col-end-12 md:row-start-1 bg-no-repeat"
                    style={{ backgroundImage: `url(${HeroImage})`, objectFit: 'fill' }}>
                </div>

            </div>
        </div>
    )
}

export default HeroPage