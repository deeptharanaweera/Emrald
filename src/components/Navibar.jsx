import React, { useState } from 'react';
import { RiArrowDropDownLine, RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';

function Navibar() {
    const [menisOpen, mensetIsOpen] = useState(false);
    const [womenisOpen, womensetIsOpen] = useState(false);
    const [kidisOpen, kidsetIsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigate = useNavigate();

    const handleCategoryClick = (type, category) => {
        navigate(`/Emrald/${type}?category=${category}`);
    };

    return (
        <nav className='flex flex-col md:flex-row w-full h-11 bg-black'>
            <div className='flex justify-between items-center w-full px-4 py-2 md:space-x-[425px] z-10'>
                <div className='flex space-x-10 text-white'>
                    <Link to="" className='hidden md:block'>New Arrivals</Link>
                    <div className="relative inline-block text-left hidden md:block"
                        onMouseEnter={() => mensetIsOpen(true)}
                        onMouseLeave={() => mensetIsOpen(false)}>
                        <button className='flex items-center'>
                            Men's<RiArrowDropDownLine className='text-3xl' />
                        </button>
                        {menisOpen && (
                            <div className="absolute w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    <button onClick={() => handleCategoryClick('mens', 'T-Shirt')} className="block px-4 py-2 text-l font-serif text-black hover:underline">T-Shirt</button>
                                    <button onClick={() => handleCategoryClick('mens', 'Shirt')} className="block px-4 py-2 text-l font-serif text-black hover:underline">Shirt</button>
                                    <button onClick={() => handleCategoryClick('mens', 'Shorts')} className="block px-4 py-2 text-l font-serif text-black hover:underline">Shorts</button>
                                    <button onClick={() => handleCategoryClick('mens', 'Sweater')} className="block px-4 py-2 text-l font-serif text-black hover:underline">Sweater</button>
                                    <button onClick={() => handleCategoryClick('mens', 'Innerwear')} className="block px-4 py-2 text-l font-serif text-black hover:underline">Innerwear</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative inline-block text-left hidden md:block"
                        onMouseEnter={() => womensetIsOpen(true)}
                        onMouseLeave={() => womensetIsOpen(false)}>
                        <button className='flex items-center'>
                            Women's<RiArrowDropDownLine className='text-3xl' />
                        </button>
                        {womenisOpen && (
                            <div className="absolute w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    <button onClick={() => handleCategoryClick('womens', 'T-Shirt')} className="block px-4 py-2 text-l font-serif text-black hover:underline">T-Shirt</button>
                                    <button onClick={() => handleCategoryClick('womens', 'Crops')} className="block px-4 py-2 text-l font-serif text-black hover:underline">Crops</button>
                                    <button onClick={() => handleCategoryClick('womens', 'Tank Tops')} className="block px-4 py-2 text-l font-serif text-black hover:underline">Tank Tops</button>
                                    <button onClick={() => handleCategoryClick('womens', 'Leggings')} className="block px-4 py-2 text-l font-serif text-black hover:underline">Leggings</button>
                                    <button onClick={() => handleCategoryClick('womens', 'Innerwear')} className="block px-4 py-2 text-l font-serif text-black hover:underline">Innerwear</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative inline-block text-left hidden md:block"
                        onMouseEnter={() => kidsetIsOpen(true)}
                        onMouseLeave={() => kidsetIsOpen(false)}>
                        <button className='flex items-center'>
                            Kid's<RiArrowDropDownLine className='text-3xl' />
                        </button>
                        {kidisOpen && (
                            <div className="absolute w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1">
                                    <button onClick={() => handleCategoryClick('kids', 'T-Shirt')} className="block px-4 py-2 text-l font-serif text-black hover:underline">T-Shirt</button>
                                    <button onClick={() => handleCategoryClick('kids', 'Shirts')} className="block px-4 py-2 text-l font-serif text-black hover:underline">Shirts</button>
                                    <button onClick={() => handleCategoryClick('kids', 'Innerwear')} className="block px-4 py-2 text-l font-serif text-black hover:underline">Innerwear</button>
                                    <button onClick={() => handleCategoryClick('kids', 'Trousers')} className="block px-4 py-2 text-l font-serif text-black hover:underline">Trousers</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex items-center space-x-6 text-gold hidden md:block'>
                    <Link to="">Contact us</Link>
                    <Link to="">About us</Link>
                </div>
                <div className='md:hidden flex items-center'>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <RiCloseLine className='text-3xl text-white' /> : <RiMenu3Line className='text-3xl text-white' />}
                    </button>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className='flex flex-col items-start bg-black text-white w-full md:hidden z-10'>
                    <Link to="" className='py-2 px-4'>New Arrivals</Link>
                    <div className="relative inline-block text-left">
                        <button className='flex items-center w-full py-2 px-4' onClick={() => mensetIsOpen(!menisOpen)}>
                            Men's<RiArrowDropDownLine className='text-3xl' />
                        </button>
                        {menisOpen && (
                            <div className="w-full bg-black text-white ring-opacity-5">
                                <button onClick={() => handleCategoryClick('mens', 'T-Shirt')} className="block py-2 px-8 hover:underline">T-Shirt</button>
                                <button onClick={() => handleCategoryClick('mens', 'Shirt')} className="block py-2 px-8 hover:underline">Shirt</button>
                                <button onClick={() => handleCategoryClick('mens', 'Shorts')} className="block py-2 px-8 hover:underline">Shorts</button>
                                <button onClick={() => handleCategoryClick('mens', 'Sweater')} className="block py-2 px-8 hover:underline">Sweater</button>
                                <button onClick={() => handleCategoryClick('mens', 'Innerwear')} className="block py-2 px-8 hover:underline">Innerwear</button>
                            </div>
                        )}
                    </div>
                    <div className="relative inline-block text-left">
                        <button className='flex items-center w-full py-2 px-4' onClick={() => womensetIsOpen(!womenisOpen)}>
                            Women's<RiArrowDropDownLine className='text-3xl' />
                        </button>
                        {womenisOpen && (
                            <div className="w-full bg-black text-white">
                                <button onClick={() => handleCategoryClick('womens', 'T-Shirt')} className="block py-2 px-8 hover:underline">T-Shirt</button>
                                <button onClick={() => handleCategoryClick('womens', 'Crops')} className="block py-2 px-8 hover:underline">Crops</button>
                                <button onClick={() => handleCategoryClick('womens', 'Tank Tops')} className="block py-2 px-8 hover:underline">Tank Tops</button>
                                <button onClick={() => handleCategoryClick('womens', 'Leggings')} className="block py-2 px-8 hover:underline">Leggings</button>
                                <button onClick={() => handleCategoryClick('womens', 'Innerwear')} className="block py-2 px-8 hover:underline">Innerwear</button>
                            </div>
                        )}
                    </div>
                    <div className="relative inline-block text-left">
                        <button className='flex items-center w-full py-2 px-4' onClick={() => kidsetIsOpen(!kidisOpen)}>
                            Kid's<RiArrowDropDownLine className='text-3xl' />
                        </button>
                        {kidisOpen && (
                            <div className="w-full bg-black text-white">
                                <button onClick={() => handleCategoryClick('kids', 'T-Shirt')} className="block py-2 px-8 hover:underline">T-Shirt</button>
                                <button onClick={() => handleCategoryClick('kids', 'Shirts')} className="block py-2 px-8 hover:underline">Shirts</button>
                                <button onClick={() => handleCategoryClick('kids', 'Innerwear')} className="block py-2 px-8 hover:underline">Innerwear</button>
                                <button onClick={() => handleCategoryClick('kids', 'Trousers')} className="block py-2 px-8 hover:underline">Trousers</button>
                            </div>
                        )}
                    </div>
                    <Link to="" className='py-2 px-4 text-gold'>Contact us</Link>
                    <Link to="" className='py-2 px-4 text-gold'>About us</Link>
                </div>
            )}
        </nav>
    );
}

export default Navibar;
