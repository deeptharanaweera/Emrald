import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Navibar() {

    const [menisOpen, mensetIsOpen] = useState(false);
    const [womenisOpen, womensetIsOpen] = useState(false);
    const [kidisOpen, kidsetIsOpen] = useState(false);
    return (
        <nav className='flex  w-full h-11 bg-black'>
            <div className=' flex flex-wrap justify-between items-center mx-auto space-x-[425px] z-10'>
                <div className='flex  space-x-10 rtl:space-x-reverse text-white '>
                    <Link to="">New Arrivals</Link>
                    <div className="relative inline-block text-left"
                            onMouseEnter={() => mensetIsOpen(true)}
                            onMouseLeave={() => mensetIsOpen(false)}>
                        <div
                            
                        >
                            <button className='flex items-center'>
                                Men's<RiArrowDropDownLine className='text-3xl' />
                            </button>
                            {menisOpen && (
                                <div className="absolute  w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 " >
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">T-Shirt</a>
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">Shirt</a>
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">Shorts</a>
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">Sweater</a>
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">Innerwear</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="relative inline-block text-left"
                            onMouseEnter={() => womensetIsOpen(true)}
                            onMouseLeave={() => womensetIsOpen(false)}>
                        <div
                            
                        >
                            <button className='flex items-center'>
                                Women's<RiArrowDropDownLine className='text-3xl' />
                            </button>
                            {womenisOpen && (
                                <div className="absolute  w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" >
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">T-Shirt</a>
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">Crops</a>
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">Tank Tops</a>
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">Leggings</a>
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">Innerwear</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="relative inline-block text-left"
                            onMouseEnter={() => kidsetIsOpen(true)}
                            onMouseLeave={() => kidsetIsOpen(false)}>
                        <div
                            
                        >
                            <button className='flex items-center'>
                                Kid's<RiArrowDropDownLine className='text-3xl' />
                            </button>
                            {kidisOpen && (
                                <div className="absolute  w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" >
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">T-Shirt</a>
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">Shirts</a>
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">Innerwear</a>
                                        <a href="#" className="block px-4 py-2 text-l font-serif text-black hover:underline">Trousers</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex items-center space-x-6 rtl:space-x-reverse text-gold'>
                    <Link to="">Contact us</Link>
                    <Link to="">About us</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navibar