import React from 'react';
import { FiCheck } from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import koko from '../assets/koko.png';
import Navibar from '../components/Navibar';

function ItemViewKid() {
    const location = useLocation();
    const { state } = location;
    const { src, title, price, discount, collectionType } = state || {};

    return (
        <>
            <Navibar />
            <div className='flex items-center justify-center pt-5 pb-5'>
                <div className='bg-gray sm:flex justify-center sm:w-[1128px] w-96 h-auto gap-2'>
                    <img src={src} alt={title} className='sm:w-[614px] sm:h-[614px] w-48 h-48 object-cover sm:mt-10 mt-2 mb-2 sm:mb-10' />
                    <div className='flex flex-col sm:gap-5 gap-2 items-center sm:items-start'>
                        <div className='flex flex-col items-center sm:items-start sm:mb-5 mb-2'>
                            <p className='sm:text-[32px] text-[20px] font-bold'>{title}</p>
                            <p className='sm:text-[13px] text-[8px]'>SKU: 75039GZT3TV</p>
                            <p className='sm:text-[27px] text-[20px]'>{price}</p>
                        </div>
                        <div className='flex flex-row items-center sm:mb-5 mb-2'>
                            <p className='text-red sm:text-[15px] text-[10px]'>or 3 X {discount} with </p>
                            <img src={koko} alt="Installment option" className='sm:w-20 w-10 sm:h-6 h-4' />
                        </div>
                        <div className='flex gap-2 items-center sm:mb-5 mb-2'>
                            <FiCheck className='bg-green rounded-full sm:w-7 w-5 sm:h-7 h-5'/>
                            <p className='text-dark_green sm:text-[20px]'>In Stock</p>
                        </div>
                        <div className='flex flex-col sm:gap-5 gap-2 sm:mb-5 mb-2'>
                            <hr className="sm:w-[483px] h-0.5 bg-dark_gray border-0 rounded" />
                            <p className='text-[16px] text-light_black'>
                                {collectionType === 'Men' 
                                    ? "Performance driven clothing built for the urban professional, featuring exercise shorts, running tops and tanks, and other workout essentials. Breaking traditional boundaries in our engineering and product development. “RUNN” is designed for Action. Anytime. Anywhere."
                                    : collectionType === 'Kids'
                                    ? "Explore our collection of kids' fashion. Our pieces are designed to be both stylish and functional, offering comfort and durability for active children. Perfect for school, play, and everything in between."
                                    : "Explore our curated collection of clothing. Our pieces are designed to be both stylish and functional, offering versatility for various occasions."}
                            </p>
                            <hr className="sm:w-[483px] h-0.5 bg-dark_gray border-0 rounded" />
                        </div>
                        <div className='flex flex-col sm:gap-5 gap-2'>
                            <p className='text-[16px] text-light_black'>Size: <span className='text-black font-bold'>S</span></p>
                            <div className='flex gap-2'>
                                <button className='rounded-full sm:w-12 w-8 sm:h-12 h-8 bg-white border-2 border-black shadow-lg sm:text-[25px] text-[20px] font-bold hover:bg-blue hover:text-white hover:border-none'>S</button>
                                <button className='rounded-full sm:w-12 w-8 sm:h-12 h-8 bg-white border-2 border-black shadow-lg sm:text-[25px] text-[20px] font-bold hover:bg-blue hover:text-white hover:border-none'>M</button>
                                <button className='rounded-full sm:w-12 w-8 sm:h-12 h-8 bg-white border-2 border-black shadow-lg sm:text-[25px] text-[20px] font-bold hover:bg-blue hover:text-white hover:border-none'>L</button>
                                <button className='rounded-full sm:w-12 w-8 sm:h-12 h-8 bg-white border-2 border-black shadow-lg sm:text-[25px] text-[20px] font-bold hover:bg-blue hover:text-white hover:border-none'>XL</button>
                            </div>
                            <hr className="sm:w-[483px] h-0.5 bg-dark_gray border-0 rounded sm:mb-5 mb-2" />
                        </div>
                        <div className='flex gap-10 sm:mt-5'>
                            <button className='sm:w-[233px] w-[150px] h-[49px] bg-gold rounded-md sm:text-[25px] text-[20px] text-white hover:bg-dark_gold'>Add to cart</button>
                            <button className='sm:w-[233px] w-[150px] h-[49px] bg-blue rounded-md sm:text-[25px] text-[20px] text-white hover:bg-dark_blue'>Buy it now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-16 bg-black text-white flex justify-center items-center sm:fixed bottom-0'>
                <p className='text-sm md:text-base text-center'>© 2024, Emerald Sri Lanka. A site by Deeptha</p>
            </div>
        </>
    );
}

export default ItemViewKid;
