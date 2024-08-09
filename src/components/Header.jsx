import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { SlHandbag, SlUser } from "react-icons/sl";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
    return (
        <header className='shadow-md w-full h-auto md:h-24 bg-gray flex flex-col md:flex-row justify-between items-center px-4 md:px-8'>
            <div className='flex flex-row md:flex-row w-full md:w-auto items-center justify-center gap-20 py-2 md:py-0'>
                <Link to={"/Emrald/"} className='sm:mb-2 '>
                    <div className='sm:w-[118px] w-[60px] sm:h-[55px] h-[35px]'>
                        <img src={logo} alt="Logo" className='h-full' />
                    </div>
                </Link>
                <div className='flex md:hidden flex-row items-center gap-2'>
                    <SlUser className='text-3xl' />
                    <div className='flex flex-col items-center '>
                        <p className='font-thin'>Hello,</p>
                        <Link to={"/Emrald/login"} className='font-semibold'>Sign in</Link>
                    </div>
                    <div className='relative'>
                        <SlHandbag className='text-3xl'/>
                        <div className='absolute top-0 -right-1 text-white bg-red h-4 w-4 rounded-full m-0 p-0 text-xs text-center'>0</div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-auto flex justify-center md:justify-start py-2 md:py-0'>
                <div className="h-10 w-full md:w-[664px] flex justify-between overflow-hidden rounded-xl bg-white shadow shadow-black/20">
                    <input type="text" className="block flex-1 py-2 px-3 focus:outline-none" placeholder="Search for products, categories, brands..." />
                    <span className="m-1 w-8 h-8 inline-flex cursor-pointer items-center rounded-md bg-black px-1 py-1">
                        <IoMdSearch className='text-white w-6 h-6' />
                    </span>
                </div>
            </div>
            <div className='hidden md:flex py-2 md:py-0 gap-4 items-center'>
                <div className='flex items-center gap-2'>
                    <SlUser className='text-3xl' />
                    <div className='flex flex-col'>
                        <p className='font-thin'>Hello,</p>
                        <Link to={"/Emrald/login"} className='font-semibold'>Sign in</Link>
                    </div>
                </div>
                <div className='relative flex items-center'>
                    <SlHandbag className='text-3xl'/>
                    <div className='absolute top-0 -right-1 text-white bg-red h-4 w-4 rounded-full m-0 p-0 text-xs text-center'>0</div>
                </div>
            </div>
        </header>
    )
}

export default Header;
