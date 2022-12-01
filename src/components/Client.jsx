import React, { useState } from 'react'
import ImgTestimoni from '../assets/images/img__testimoni.svg'
import IconTestimoni from '../assets/images/Icon__testimoni.svg'
import CircleTestimoni from '../assets/images/circle__testimoni.svg'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Client = () => {

    const Testimoni = [
        { id: 1, image: ImgTestimoni, comment: 'File storage made easy - including powerful features you won\'t find anywhere else. Whether you\'re.', person: 'Larry Diamond', position: 'Chief Executive Officer' },
        { id: 2, image: ImgTestimoni, comment: 'You can find One Piece here', person: 'Gold D Roger', position: 'Pirate King' },
        { id: 3, image: ImgTestimoni, comment: 'This store is amazing with all of the things they sell', person: 'Khalid Kashmiri', position: 'Chief Executive Technology' },
        { id: 4, image: ImgTestimoni, comment: 'I hope they open another store near my house', person: 'Khidir Karawita', position: 'Customer' },
        { id: 5, image: ImgTestimoni, comment: 'They are not only sell, they also provide services', person: 'Ismail Ahmad Kanabawi', position: 'Customer' },
        { id: 6, image: ImgTestimoni, comment: 'Love this place', person: 'Usman Abdul Jalil Sisha', position: 'Customer' },
        { id: 7, image: ImgTestimoni, comment: 'I just like the design', person: 'Khidir Karawita', position: 'Designer' }
    ]

    // const [activeSlide, setActiveSlide] = useState(1)

    // const prevSliderHandler = (id) => {
    //     if (id === 1) {
    //         setActiveSlide(Testimoni.length)
    //     } else if (id > 1) {
    //         setActiveSlide(activeSlide - 1)
    //     } else {
    //         setActiveSlide(Testimoni.length - 1)
    //     }
    // }

    // const nextSliderHandler = (id) => {
    //     if (id === Testimoni.length) {
    //         setActiveSlide(1)
    //     } else if (id < Testimoni.length) {
    //         setActiveSlide(activeSlide + 1)
    //     } else {
    //         setActiveSlide(Testimoni.length - 1)
    //     }
    // }


    return (
        <div name='testimonial' className='w-full px-4 md:px-8'>
            <div className='max-w-[1300px] mx-auto h-full py-[5rem]'>
                <div className='bg-[#F4F6F6] py-[7rem]' data-aos="fade-up" data-aos-duration="2000">
                    <div className='grid grid-cols-4'>
                        <div className='mt-[-7rem]'>
                            <img src={CircleTestimoni} alt="" />
                        </div>
                        <div className='col-span-2'>
                            <h1 className='text-5xl font-noto font-bold text-[#244D4D] text-center'>What Our Happy <br /> Client Say</h1>
                            <p className='text-center text-base font-normal font-poppins pt-8 text-[#244D4D]'>File storage made easy - including powerful features <br /> you won't find anywhere else. Whether you're.</p>
                        </div>
                        <div className='mt-8 ml-[5rem]'>
                            <img src={IconTestimoni} alt="" />
                        </div>
                    </div>


                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >

                        {
                            Testimoni.map(item => {

                                const { id, image, comment, person, position } = item

                                return (
                                    <SwiperSlide>
                                        <div key={id} className='grid grid-cols-1 md:grid-cols-2 mt-[7rem] gap-8 max-w-[1000px] mx-auto px-4'>
                                            <div>
                                                <img src={image} alt="" />
                                            </div>

                                            <div className='flex flex-col items-start justify-between py-8 h-[25rem] md:h-[27rem] xl:h-[25rem] duration-200'>
                                                <div>
                                                    <h2 className='text-xl font-noto text-[#244D4D] font-extrabold'>furni.shop</h2>
                                                    <p className='text-[#5E7388] text-xl italic font-poppins py-9'>{comment}</p>
                                                    <p className='text-xl font-semibold font-poppins pb-2'>{person}</p>
                                                    <p className='text-[#647383] text-xs font-poppins pb-[3rem]'>{position}</p>
                                                </div>


                                                {/* <div className='flex justify-between gap-4'>
                                                    <button className='bg-white hover:bg-[#244D4D] hover:text-white rounded-full p-4 flex justify-center items-center'>
                                                        <BsArrowLeft />
                                                    </button>
                                                    <button className='bg-white hover:bg-[#244D4D] hover:text-white rounded-full p-4 flex justify-center items-center'>
                                                        <BsArrowRight />
                                                    </button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>



                </div>


                {/* <div className="slider">
    <div className="slide">
        <div className="content">
            <h1></h1>
        </div>
    </div>

    <div className="slide">
        <div className="content">
            <h1></h1>
        </div>
    </div>

    <div className="slide">
        <div className="content">
            <h1></h1>
        </div>
    </div>
</div> */}



            </div>
        </div>
    )
}

export default Client