import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaInstagram } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='w-full px-4 md:px-8 bg-[#244D4D]'>
            <div className='max-w-[1300px] mx-auto h-full py-[5rem]'>
                <div className='flex flex-col xl:flex-row gap-y-[3rem] justify-between items-center font-poppins pb-[4rem] border-b-[0.5px] border-[#ffffff43]'>
                    <h2 className='text-4xl text-white leading-[3.5rem]'>Start your business today for <br /> $0+ state fees.</h2>
                    <div className='flex gap-6'>
                        <div className='bg-white text-[#244D4D] w-[11rem] py-4 text-center font-medium rounded-full cursor-pointer hover:bg-[#ffffffe1]'>Get Started</div>
                        <div className='text-white bg-[#3A5F5F] w-[11rem] text-center py-4 rounded-full cursor-pointer hover:bg-[#4f8181]'>Contact Sales</div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-y-[5rem] md:gap-y-[1rem] text-white pt-[5rem]'>
                    <div className='md:col-span-2'>
                        <h2 className='font-noto text-2xl text-center xl:text-left'>furni.shop</h2>
                        <p className='font-poppins font-thin text-center xl:text-left tracking-wide text-sm py-6'>Optix seamlessly connects your members with the community, resources.</p>
                        <div className='flex justify-center xl:justify-start text-2xl gap-6'>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaLinkedinIn />
                            <FaPinterest />
                            <FaInstagram />
                        </div>
                    </div>

                    <div className='font-poppins md:py-[3rem] xl:py-0 text-center xl:text-left'>
                        <p className='font-normal text-lg pb-2'>Entity types</p>
                        <div className='font-light text-base'>
                            <p className='py-1'>Knowledge base</p>
                            <p className='py-1'>Security</p>
                            <p className='py-1'>Privacy Policy</p>
                            <p className='py-1'>Partners</p>
                            <p className='py-1'>About us</p>
                            <p className='py-1'>FAQs</p>
                        </div>
                    </div>


                    <div className='font-poppins md:py-[3rem] xl:py-0 text-center xl:text-left'>
                        <p className='font-normal text-lg pb-2'>Services</p>
                        <div className='font-light text-base'>
                            <p className='py-1'>Contact Us</p>
                            <p className='py-1'>Press</p>
                            <p className='py-1'>Payrool</p>
                            <p className='py-1'>Library</p>
                            <p className='py-1'>Blog</p>
                            <p className='py-1'>Help Center</p>
                        </div>
                    </div>


                    <div className='font-poppins md:py-[2rem] xl:py-0 text-center xl:text-left'>
                        <p className='font-normal text-lg pb-2'>Resources</p>
                        <div className='font-light text-base'>
                            <p className='py-1'>Pricing</p>
                            <p className='py-1'>FAQs</p>
                            <p className='py-1'>Contact Support</p>
                            <p className='py-1'>Privacy Policy</p>
                            <p className='py-1'>Terms</p>
                        </div>
                    </div>


                    <div className='font-poppins md:py-[2rem] xl:py-0 text-center xl:text-left'>
                        <p className='font-normal text-lg pb-2'>Support</p>
                        <div className='font-light text-base'>
                            <p className='py-1'>Contact</p>
                            <p className='py-1'>Affiliates</p>
                            <p className='py-1'>Sitemap</p>
                            <p className='py-1'>Cancelation Policy</p>
                            <p className='py-1'>Pricing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer