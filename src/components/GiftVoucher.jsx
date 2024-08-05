import React from 'react';
import { FaGift } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import logo from '../assets/logo.png';

function GiftVoucher() {
    return (
        <div className='bg-gold p-5 h-auto'>
            <div className='flex justify-center items-center sm:gap-5 gap-1'>
                <hr className="sm:w-[372px] w-[30px] h-1 bg-white border-0 rounded md:" />
                <IoIosStarOutline className='text-white sm:text-[30px] text-[5px]'/>
                <IoIosStarOutline className='text-white sm:text-[40px] text-[10px]'/>
                <IoIosStarOutline className='text-white sm:text-[60px] text-[20px]'/>
                <p className='sm:text-6xl text-xl font-bold mb-3 text-white'>Gift Vouchers</p>
                <IoIosStarOutline className='text-white sm:text-[60px] text-[20px]'/>
                <IoIosStarOutline className='text-white sm:text-[40px] text-[10px]'/>
                <IoIosStarOutline className='text-white sm:text-[30px] text-[5px]'/>
                <hr className="sm:w-[372px] w-[30px] h-1 bg-white border-0 rounded md:" />
            </div>
            <div className='flex justify-center items-center md:gap-5 gap-1 md:p-5 pb-5'>
                <div className='flex flex-col items-center bg-white md:w-[263px] w-[100px] md:h-[396px] h-[160px] sm:rounded-3xl rounded-xl sm:gap-5 gap-1 transition duration-500 ease-in-out hover:scale-110 '>
                    <img src={logo} alt="" className='md:w-40 w-8 md:h-20 h-6 mt-2' />
                    <FaGift className='md:text-[110px] text-[50px] text-green'/>
                    <p className='md:text-3xl text-md font-bold font-serif'>Rs. 2000</p>
                    <button className='bg-blue text-white md:p-4 p-1 sm:rounded-xl rounded-md hover:bg-dark_blue md:text-xl text-sm'>Buy Now</button>
                </div>
                <div className='flex flex-col items-center bg-white md:w-[263px] w-[100px] md:h-[396px] h-[160px] sm:rounded-3xl rounded-xl sm:gap-5 gap-1 transition duration-500 ease-in-out hover:scale-110 '>
                    <img src={logo} alt="" className='md:w-40 w-8 md:h-20 h-6 mt-2' />
                    <FaGift className='md:text-[110px] text-[50px] text-blue'/>
                    <p className='md:text-3xl text-md font-bold font-serif'>Rs. 5000</p>
                    <button className='bg-blue text-white md:p-4 p-1 sm:rounded-xl rounded-md hover:bg-dark_blue md:text-xl text-sm'>Buy Now</button>
                </div>
                <div className='flex flex-col items-center bg-white md:w-[263px] w-[100px] md:h-[396px] h-[160px] sm:rounded-3xl rounded-xl sm:gap-5 gap-1 transition duration-500 ease-in-out hover:scale-110 '>
                    <img src={logo} alt="" className='md:w-40 w-8 md:h-20 h-6 mt-2' />
                    <FaGift className='md:text-[110px] text-[50px] text-red'/>
                    <p className='md:text-3xl text-md font-bold font-serif'>Rs. 10000</p>
                    <button className='bg-blue text-white md:p-4 p-1 sm:rounded-xl rounded-md hover:bg-dark_blue md:text-xl text-sm'>Buy Now</button>
                </div>
                <div className='flex flex-col items-center bg-white md:w-[263px] w-[100px] md:h-[396px] h-[160px] sm:rounded-3xl rounded-xl sm:gap-5 gap-1 transition duration-500 ease-in-out hover:scale-110 '>
                    <img src={logo} alt="" className='md:w-40 w-8 md:h-20 h-6 mt-2' />
                    <FaGift className='md:text-[110px] text-[50px] text-gold'/>
                    <p className='md:text-3xl text-md font-bold font-serif'>Rs. 20000</p>
                    <button className='bg-blue text-white md:p-4 p-1 sm:rounded-xl rounded-md hover:bg-dark_blue md:text-xl text-sm'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default GiftVoucher