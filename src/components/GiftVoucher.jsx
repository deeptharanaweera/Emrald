import React from 'react';
import { FaGift } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import logo from '../assets/logo.png';

function GiftVoucher() {
    return (
        <div className='bg-gold p-5 h-auto'>
            <div className='flex justify-center items-center gap-5'>
                <hr className="w-[372px] h-1 bg-white border-0 rounded md:" />
                <IoIosStarOutline className='text-white text-[30px]'/>
                <IoIosStarOutline className='text-white text-[40px]'/>
                <IoIosStarOutline className='text-white text-[60px]'/>
                <p className='text-6xl font-bold mb-3 text-white'>Gift Vouchers</p>
                <IoIosStarOutline className='text-white text-[60px]'/>
                <IoIosStarOutline className='text-white text-[40px]'/>
                <IoIosStarOutline className='text-white text-[30px]'/>
                <hr className="w-[372px] h-1 bg-white border-0 rounded md:" />
            </div>
            <div className='flex justify-center items-center md:gap-5 gap-2 md:p-5'>
                <div className='flex flex-col items-center bg-white md:w-[263px] w-[100px] md:h-[396px] h-[250px] rounded-3xl gap-5 transition duration-500 ease-in-out hover:scale-110 '>
                    <img src={logo} alt="" className='md:w-40 w-10 md:h-20 h-8 mt-2' />
                    <FaGift className='md:text-[110px] text-[50px] text-green'/>
                    <p className='md:text-3xl text-md font-bold font-serif'>Rs. 2000</p>
                    <button className='bg-blue text-white md:p-4 p-1 rounded-xl hover:bg-dark_blue md:text-xl text-sm'>Buy Now</button>
                </div>
                <div className='flex flex-col items-center bg-white md:w-[263px] w-[100px] md:h-[396px] h-[250px] rounded-3xl gap-5 transition duration-500 ease-in-out hover:scale-110 '>
                    <img src={logo} alt="" className='md:w-40 w-10 md:h-20 h-8 mt-2' />
                    <FaGift className='md:text-[110px] text-[50px] text-blue'/>
                    <p className='md:text-3xl text-md font-bold font-serif'>Rs. 5000</p>
                    <button className='bg-blue text-white md:p-4 p-1 rounded-xl hover:bg-dark_blue md:text-xl text-sm'>Buy Now</button>
                </div>
                <div className='flex flex-col items-center bg-white md:w-[263px] w-[100px] md:h-[396px] h-[250px] rounded-3xl gap-5 transition duration-500 ease-in-out hover:scale-110 '>
                    <img src={logo} alt="" className='md:w-40 w-10 md:h-20 h-8 mt-2' />
                    <FaGift className='md:text-[110px] text-[50px] text-red'/>
                    <p className='md:text-3xl text-md font-bold font-serif'>Rs. 10000</p>
                    <button className='bg-blue text-white md:p-4 p-1 rounded-xl hover:bg-dark_blue md:text-xl text-sm'>Buy Now</button>
                </div>
                <div className='flex flex-col items-center bg-white md:w-[263px] w-[100px] md:h-[396px] h-[250px] rounded-3xl gap-5 transition duration-500 ease-in-out hover:scale-110 '>
                    <img src={logo} alt="" className='md:w-40 w-10 md:h-20 h-8 mt-2' />
                    <FaGift className='md:text-[110px] text-[50px] text-gold'/>
                    <p className='md:text-3xl text-md font-bold font-serif'>Rs. 20000</p>
                    <button className='bg-blue text-white md:p-4 p-1 rounded-xl hover:bg-dark_blue md:text-xl text-sm'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default GiftVoucher