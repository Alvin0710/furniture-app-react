import React, { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = () => setNav(!nav)


    const [shadowNav, setShadowNav] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 60 ? setShadowNav(true) : setShadowNav(false)
    }

    window.addEventListener('scroll', addShadowNav)

    return (
        <div className={shadowNav ? 'bg-white black w-full py-6 flex justify-between items-center px-[1rem] md:px-[2rem] xl:px-[5rem] fixed top-0 transition z-[1000] shadow-lg' : 'bg-white black w-full py-6 flex justify-between items-center px-[1rem] md:px-[2rem] xl:px-[5rem] fixed top-0 transition z-[1000]'} >
            <h1 className='text-[#244D4D] font-bold text-xl md:text-xl cursor-pointer font-noto'>furni.shop</h1>
            <ul className='hidden md:flex md:gap-[3rem] xl:gap-[5rem] xl:text-base font-semibold cursor-pointer font-montserrat text-[#244D4D]'>
                <li>
                    <Link to="hero" offset={-100} smooth={true} duration={500} className='hover:text-gray-500' >Home</Link>
                </li>
                <li>
                    <Link to="about" offset={-100} smooth={true} duration={500} className='hover:text-gray-500' >About</Link>
                </li>
                <li>
                    <Link to="product" offset={-100} smooth={true} duration={500} className='hover:text-gray-500' >Product</Link>
                </li>
                <li>
                    <Link to="testimonial" offset={-50} smooth={true} duration={500} className='hover:text-gray-500' >Testimonial</Link>
                </li>
            </ul>
            <RiSearchLine className='hidden md:flex text-2xl cursor-pointer' />
            <div className='md:hidden cursor-pointer z-[100]' onClick={handleClick}>
                {!nav
                    ? <HiOutlineMenuAlt3 className='text-2xl' />
                    : <MdClose className='text-3xl text-white' />
                }
            </div>

            <ul className={!nav
                ? 'hidden'
                : 'absolute top-0 left-0 w-full h-screen bg-[#244D4D] flex flex-col justify-center items-center text-white text-2xl gap-9 z-50'}>
                <li>
                    <Link to="hero" onClick={handleClose} smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" onClick={handleClose} smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="product" onClick={handleClose} smooth={true} duration={500}>Product</Link>
                </li>
                <li>
                    <Link to="testimonial" onClick={handleClose} smooth={true} duration={500}>Testimonial</Link>
                </li>
                <RiSearchLine className='text-2xl cursor-pointer' />
            </ul>
        </div>
    )
}

export default Navbar