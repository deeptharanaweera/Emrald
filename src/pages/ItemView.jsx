import React from 'react';
import { FiCheck } from "react-icons/fi";
import girl_tshirt5 from '../assets/girl_tshirt5.jpg';
import girl_tshirt5_1 from '../assets/girl_tshirt5_1.jpg';
import girl_tshirt5_2 from '../assets/girl_tshirt5_2.jpg';
import koko from '../assets/koko.png';
import Footer from '../components/Footer';
import Navibar from '../components/Navibar';

function ItemView() {
    return (
        <>
            <Navibar />
            <div className='flex items-center justify-center pt-5'>
                <div className='bg-gray flex  justify-center w-[1128px] h-auto p-10 gap-28 rounded-xl'>
                    <div className='bg-white py-4 px-8'>
                        <div className='w-92 h-100'>
                            <img src={girl_tshirt5} alt="" />
                        </div>
                        <div className='flex flex-row gap-2 mt-2 justify-start'>
                            <img src={girl_tshirt5_1} alt="" className='w-24 h-28' />
                            <img src={girl_tshirt5_2} alt="" className='w-24 h-28' />
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[27px]'>Runn Active Wear Printed-Plum</p>
                            <p className='text-[13px]'>SKU: 75039GZT3TV</p>
                            <p className='text-[27px]'>Rs 1,795.00</p>
                        </div>
                        <div className='flex flex-row items-center mb-5'>
                            <p className='text-red'>or 3 X Rs 598.33 with </p>
                            <img src={koko} alt="" className='w-20 h-6' />
                        </div>
                        <div className='flex gap-2 items-center mb-5'>
                            <FiCheck className='bg-green rounded-full w-7 h-7'/>
                            <p className='text-dark_green text-[20px]'>In Stock</p>
                        </div>
                        <div className='flex flex-col gap-5 mb-5'>
                        <hr className="w-[483px] h-0.5 bg-dark_gray border-0 rounded md:" />
                            <p className='text-[16px] text-light_black'>Performance driven clothing built for the urban professional, featuring exercise shorts, running tops and tanks, and other workout essentials. Breaking traditional boundaries in our engineering and product development. “RUNN” is designed for Action. Anytime. Anywhere.</p>
                        <hr className="w-[483px] h-0.5 bg-dark_gray border-0 rounded md:" />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p className='text-[16px] text-light_black'>Size: <span className='text-black font-bold'>S</span></p>
                            <div className='flex gap-2'>
                                <button className='rounded-full w-12 h-12 bg-white border-2 border-black shadow-lg text-[25px] font-bold hover:bg-blue hover:text-white hover:border-none'>S</button>
                                <button className='rounded-full w-12 h-12 bg-white border-2 border-black shadow-lg text-[25px] font-bold hover:bg-blue hover:text-white hover:border-none'>M</button>
                                <button className='rounded-full w-12 h-12 bg-white border-2 border-black shadow-lg text-[25px] font-bold hover:bg-blue hover:text-white hover:border-none'>L</button>
                                <button className='rounded-full w-12 h-12 bg-white border-2 border-black shadow-lg text-[25px] font-bold hover:bg-blue hover:text-white hover:border-none'>XL</button>
                            </div>
                            <hr className="w-[483px] h-0.5 bg-dark_gray border-0 rounded mb-5" />
                        </div>
                        <div className='flex gap-10 mt-5'>
                            <button className='w-[233px] h-[49px] bg-gold rounded-md text-[25px] text-white hover:bg-dark_gold'>Add to cart</button>
                            <button className='w-[233px] h-[49px] bg-blue rounded-md text-[25px] text-white hover:bg-dark_blue'>Buy it now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ItemView