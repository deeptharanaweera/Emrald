import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { SlHandbag, SlUser } from "react-icons/sl";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
    return (
        <header className='shadow-md w-full h-24 px- bg-gray flex justify-center items-center md:px-  '>
            <div className='flex items-center  h-full'>
                <Link to={"/emrald"}>
                    <div className='w-[118px] h-[55px] '>
                        <img src={logo} alt="" className='h-full' />
                    </div>
                </Link>
                <div className='pl-20 pr-6'>
                    <div class="h-10 w-[664px]  flex justify-between overflow-hidden rounded-xl bg-white shadow shadow-black/20">
                        <input type="text" class="block  flex-1 py-2 px-3 focus:outline-none" placeholder="Search for products,categories,brands....." />
                        <span class="m-1 w-8 h-8 inline-flex cursor-pointer items-center rounded-md bg-black px-1 py-1 ">
                        <IoMdSearch className='text-white w-20 h-20' />
                        </span>
                    </div>
                </div>
                <div className='flex pr-6 gap-1'>
                    <div className='flex justify-center items-center'>
                    <SlUser className='text-3xl' />
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-thin'>Hello,</p>
                        <Link to={"/login"} className='font-semibold'>Sign in</Link>
                    </div>
                </div>
                <div className='relative'>
                <SlHandbag className='text-3xl'/>
                <div className='absolute top-0 -right-1 text-white bg-red h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>0</div>
                </div>
            </div>
        </header>
    )
}

export default Header