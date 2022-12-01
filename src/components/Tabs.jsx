import React, { useState } from 'react'
import CardProduct from '../commons/CardProduct'
import Product1 from '../assets/images/product_1.svg'
import Product2 from '../assets/images/product_2.svg'
import Product3 from '../assets/images/product_3.svg'
import Product4 from '../assets/images/product_4.svg'
import Product5 from '../assets/images/product_5.svg'
import Product6 from '../assets/images/product_6.svg'

const Tabs = () => {
    const Card = [
        { title: 'Hand Base Lamp', price: '$35.00', crossPrice: '$55.00', image: Product1 },
        { title: 'Vintage Chair', price: '65.00', crossPrice: '95.00', image: Product2 },
        { title: 'Lamp Tool', price: '35.00', crossPrice: '$45.00', image: Product3 },
        { title: 'Stylish Chair', price: '45.00', crossPrice: '$55.00', image: Product4 },
        { title: 'Vintage Chair', price: '65.00', crossPrice: '$95.00', image: Product5 },
        { title: 'Stackable Chair', price: '87.00', crossPrice: '97.00', image: Product6 }
    ]

    const Bed = [
        { title: 'Hand Base Lamp', price: '$35.00', crossPrice: '$55.00', image: Product1 },
        { title: 'Vintage Chair', price: '65.00', crossPrice: '95.00', image: Product2 },
        { title: 'Lamp Tool', price: '35.00', crossPrice: '$45.00', image: Product3 },
    ]

    const Sofa = [
        { title: 'Hand Base Lamp', price: '$35.00', crossPrice: '$55.00', image: Product1 },
        { title: 'Vintage Chair', price: '65.00', crossPrice: '95.00', image: Product2 },
        { title: 'Stackable Chair', price: '87.00', crossPrice: '97.00', image: Product6 }
    ]

    const Chair = [
        { title: 'Vintage Chair', price: '65.00', crossPrice: '95.00', image: Product2 },
        { title: 'Stylish Chair', price: '45.00', crossPrice: '$55.00', image: Product4 },
        { title: 'Vintage Chair', price: '65.00', crossPrice: '$95.00', image: Product5 },
        { title: 'Stackable Chair', price: '87.00', crossPrice: '97.00', image: Product6 }
    ]

    const Light = [
        { title: 'Hand Base Lamp', price: '$35.00', crossPrice: '$55.00', image: Product1 },
        { title: 'Lamp Tool', price: '35.00', crossPrice: '$45.00', image: Product3 }
    ]

    const [index, setIndex] = useState(0)

    return (
        <div className='Tabs flex flex-col justify-center items-center'>
            <div className="tabsList flex items-center justify-center gap-8 md:gap-[4rem] font-poppins">
                <div className={`tabHead cursor-pointer ${index === 0 ? 'active' : null}`} onClick={() => { setIndex(0) }}>
                    All
                </div>
                <div className={`tabHead cursor-pointer ${index === 1 ? 'active' : null}`} onClick={() => { setIndex(1) }}>
                    Bed
                </div>
                <div className={`tabHead cursor-pointer ${index === 2 ? 'active' : null}`} onClick={() => { setIndex(2) }}>
                    Sofa
                </div>
                <div className={`tabHead cursor-pointer ${index === 3 ? 'active' : null}`} onClick={() => { setIndex(3) }}>
                    Chair
                </div>
                <div className={`tabHead cursor-pointer ${index === 4 ? 'active' : null}`} onClick={() => { setIndex(4) }}>
                    Light
                </div>
            </div>

            <div className="tabContant" hidden={index !== 0}>
                <div className='mx-auto flex justify-center'>
                    <div className='my-[7rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[5rem] gap-y-[12rem]'>
                        {Card.map((card, index) => {
                            return <CardProduct {...card} key={index} />
                        })}
                    </div>
                </div>
            </div>

            <div className="tabContant" hidden={index !== 1}>
                <div className='mx-auto flex justify-center'>
                    <div className='my-[7rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[5rem] gap-y-[12rem]'>
                        {Bed.map((bed, index) => {
                            return <CardProduct {...bed} key={index} />
                        })}
                    </div>
                </div>
            </div>


            <div className="tabContant" hidden={index !== 2}>
                <div className='mx-auto flex justify-center'>
                    <div className='my-[7rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[5rem] gap-y-[12rem]'>
                        {Sofa.map((sofa, index) => {
                            return <CardProduct {...sofa} key={index} />
                        })}
                    </div>
                </div>
            </div>


            <div className="tabContant" hidden={index !== 3}>
                <div className='mx-auto flex justify-center'>
                    <div className='my-[7rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[5rem] gap-y-[12rem]'>
                        {Chair.map((chair, index) => {
                            return <CardProduct {...chair} key={index} />
                        })}
                    </div>
                </div>
            </div>


            <div className="tabContant" hidden={index !== 4}>
                <div className='mx-auto flex justify-center'>
                    <div className='my-[7rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[5rem] gap-y-[12rem]'>
                        {Light.map((light, index) => {
                            return <CardProduct {...light} key={index} />
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tabs