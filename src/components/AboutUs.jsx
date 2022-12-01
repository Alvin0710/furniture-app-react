import React from 'react'
import AboutImg from '../assets/images/img__about.png'

const AboutUs = () => {
    return (
        <div name='about' className='w-full px-4 md:px-8'>

            <div className='max-w-[1300px] mx-auto h-full py-[5rem] grid grid-cols-4 px-4'>
                <div className='col-span-4 md:col-span-2' data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='text-5xl font-bold flex items-center font-noto text-[#244D4D] pb-5'>About us</h1>
                    <p className='text-[#64717C] font-poppins text-l font-normal'>At Besnik Consultancy, we take pride in our values <br /> - service, integrity, and excellence. </p>
                </div>

                <div className='hidden md:flex'></div>
                <div data-aos="fade-up" data-aos-duration="1500" className='col-span-4 md:col-span-1 flex items-center justify-start pt-7 md:justify-end'>
                    <a href="" className='bg-[#F4F6F6] rounded text-[#5F5F64] px-7 py-3 font-poppins btn__shadow'>Learn more</a>
                </div>
            </div>


            <div className='max-w-[1300px] mx-auto h-full py-[5rem] grid grid-cols-7'>
                <div className='col-span-7 xl:col-span-4 grid grid-cols-1 gap-[4rem]  md:grid-cols-2 md:gap-9 px-4 mr-8'>
                    <div data-aos="fade-up" data-aos-duration="500">
                        <h1 className='font-poppins font-bold text-[#244D4D] text-5xl '>1.</h1>
                        <h3 className='font-poppins font-bold text-[#244D4D] text-xl pt-5 pb-2'>Who We Are</h3>
                        <p className='font-poppins text-[#244D4D] text-sm'>You get a 2-week free trial to kick the Smarty tries. We want you to.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className='font-poppins font-bold text-[#244D4D] text-5xl '>2.</h1>
                        <h3 className='font-poppins font-bold text-[#244D4D] text-xl pt-5 pb-2'>What Do We Do</h3>
                        <p className='font-poppins text-[#244D4D] text-sm'>We give you a free course that guides you through the process.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1500">
                        <h1 className='font-poppins font-bold text-[#244D4D] text-5xl '>3.</h1>
                        <h3 className='font-poppins font-bold text-[#244D4D] text-xl pt-5 pb-2'>How Do We Help</h3>
                        <p className='font-poppins text-[#244D4D] text-sm'>Use our multimedia lecturers, videos, and coaching sessions.</p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2000">
                        <h1 className='font-poppins font-bold text-[#244D4D] text-5xl '>4.</h1>
                        <h3 className='font-poppins font-bold text-[#244D4D] text-xl pt-5 pb-2'>Create Success Story</h3>
                        <p className='font-poppins text-[#244D4D] text-sm'>With access to online learning resources anyone can transfrm.</p>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1500" className='col-span-7 order-first flex justify-center mt-[-5rem] mb-[5rem] xl:order-last xl:col-span-3'>
                    <img src={AboutImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs