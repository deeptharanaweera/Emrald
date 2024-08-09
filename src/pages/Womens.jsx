import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import girl_crop1 from '../assets/girl_crop1.jpg';
import girl_crop2 from '../assets/girl_crop2.jpg';
import girl_crop3 from '../assets/girl_crop3.jpg';
import girl_crop4 from '../assets/girl_crop4.jpg';
import girl_tshirt1 from '../assets/girl_tshirt1.jpg';
import girl_tshirt1_1 from '../assets/girl_tshirt1_1.jpg';
import girl_tshirt1_2 from '../assets/girl_tshirt1_2.jpg';
import girl_tshirt2 from '../assets/girl_tshirt2.jpg';
import girl_tshirt2_1 from '../assets/girl_tshirt2_1.jpg';
import girl_tshirt2_2 from '../assets/girl_tshirt2_2.jpg';
import girl_tshirt3 from '../assets/girl_tshirt3.jpg';
import girl_tshirt3_1 from '../assets/girl_tshirt3_1.jpg';
import girl_tshirt3_2 from '../assets/girl_tshirt3_2.jpg';
import girl_tshirt4 from '../assets/girl_tshirt4.jpg';
import girl_tshirt4_1 from '../assets/girl_tshirt4_1.jpg';
import girl_tshirt4_2 from '../assets/girl_tshirt4_2.jpg';
import girl_tshirt5 from '../assets/girl_tshirt5.jpg';
import girl_tshirt5_1 from '../assets/girl_tshirt5_1.jpg';
import girl_tshirt5_2 from '../assets/girl_tshirt5_2.jpg';
import Footer from '../components/Footer';
import Navibar from '../components/Navibar';

export default function Womens() {
    const [activeButton, setActiveButton] = useState('T-Shirt');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');

    useEffect(() => {
        if (category) {
            setActiveButton(category);
        }
    }, [category]);

    const items = {
        'T-Shirt': [
            { src: girl_tshirt1, src1:girl_tshirt1_1, src2: girl_tshirt1_2 ,  title: 'Runn Active Wear Printed-White', price: 'Rs 1,795.00', discount: 'Rs 598.33' },
            { src: girl_tshirt2, src1:girl_tshirt2_1, src2: girl_tshirt2_2 , title: 'Runn Active Wear Printed-Royal', price: 'Rs 1,795.00', discount: 'Rs 598.33' },
            { src: girl_tshirt3, src1:girl_tshirt3_1, src2: girl_tshirt3_2 , title: 'Runn Active Wear Printed-Midnight', price: 'Rs 1,795.00', discount: 'Rs 598.33' },
            { src: girl_tshirt4, src1:girl_tshirt4_1, src2: girl_tshirt4_2 , title: 'Runn Active Wear Printed-Navy', price: 'Rs 1,795.00', discount: 'Rs 598.33' },
            { src: girl_tshirt5, src1:girl_tshirt5_1, src2: girl_tshirt5_2 , title: 'Runn Active Wear Printed-Plum', price: 'Rs 1,795.00', discount: 'Rs 598.33' },
        ],
        'Crops': [
            { src: girl_crop1, title: 'Runn Active Wear -Turquoise', price: 'Rs 2,295.00', discount: 'Rs 765.00' },
            { src: girl_crop2, title: 'Runn Active Wear -Twilight', price: 'Rs 2,295.00', discount: 'Rs 765.00' },
            { src: girl_crop3, title: 'Runn Active Wear -Tomato', price: 'Rs 2,295.00', discount: 'Rs 765.00' },
            { src: girl_crop4, title: 'Runn Active Wear -Navy', price: 'Rs 2,295.00', discount: 'Rs 765.00' },
        ],
        // Add more categories as needed
    };

    const handleButtonClick = (category) => {
        setActiveButton(category);
    };

    return (
        <>
            <Navibar />
            <div className='flex flex-col items-center'>
                <div className='flex flex-col justify-center items-center sm:mb-5 mb-2 mt-5'>
                    <h1 className='sm:text-4xl text-xl font-bold text-light_black'>Women's {activeButton}</h1>
                    <hr className="md:w-[250px] w-[60px] h-1 bg-light_black border-0 rounded " />
                </div>

                <div className='sm:hidden flex flex-col w-[80%] bg-gray rounded-xl p-5 sm:mb-10 mb-5'>
                    {/* Sorting dropdown */}
                    <div className='mb-2'>
                        <label htmlFor='sortDropdown' className='text-xl font-bold mb-0 block'>Sort by</label>
                        <select id='sortDropdown' className='w-full p-2 rounded bg-white border border-dark_gray'>
                            <option value='newToOld'>Date, new to old</option>
                            <option value='bestSelling'>Best selling</option>
                            <option value='highToLow'>Price high to low</option>
                            <option value='lowToHigh'>Price low to high</option>
                            <option value='alphabetical'>Alphabetically, A-Z</option>
                        </select>
                    </div>

                    {/* Size dropdown */}
                    <div className='mb-2'>
                        <label htmlFor='sizeDropdown' className='text-xl font-bold mb-0 block'>Size</label>
                        <select id='sizeDropdown' className='w-full p-2 rounded bg-white border border-dark_gray'>
                            <option value='all'>All</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                            <option value='extraLarge'>Extra large</option>
                        </select>
                    </div>

                    {/* Price dropdown */}
                    <div>
                        <label htmlFor='priceDropdown' className='text-xl font-bold mb-0 block'>Price</label>
                        <select id='priceDropdown' className='w-full p-2 rounded bg-white border border-dark_gray'>
                            <option value='all'>All</option>
                            <option value='under2000'>Under Rs.2000</option>
                            <option value='over2000'>Over Rs.2000</option>
                            <option value='2000to5000'>Rs.2000 to Rs.5000</option>
                            <option value='custom'>Custom Range</option>
                        </select>
                        {/* Custom range input (only show when 'Custom Range' is selected) */}
                        <div className='mt-2'>
                            <input type='number' placeholder='Min' className='w-[45%] p-2 rounded bg-white border border-dark_gray mr-2' />
                            <input type='number' placeholder='Max' className='w-[45%] p-2 rounded bg-white border border-dark_gray' />
                        </div>
                    </div>
                </div>

				
				<div className='hidden sm:flex gap-80 items-center justify-center bg-gray w-[80%] rounded-xl p-5 mb-10'>
                    {/* Sorting options */}
                    {/* Other code remains the same */}
                    <div>
                        <h2 className='text-xl font-bold mb-3'>Sort by</h2>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-white border-dark_gray rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked />
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">Date, new to old</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">Best selling</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">Price high to low</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">Price low to high</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">Alphabetically, A-Z</label>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold mb-3'>Size</h2>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked/>
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">All</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">Small</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">Medium</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">Large</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">Extra large</label>
                        </div>
                    </div>
                    <div>
                    <h2 className='text-xl font-bold mb-3'>Price</h2>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked/>
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">All</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">Under Rs.2000</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">Over Rs.2000</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">Rs.2000 to Rs.5000</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">Rs.</label>
                            <input type="number" name="" id="" className='w-20 h-5 text-blue-600 bg-gray-100 border-dark_gray border-2 rounded focus:ring-blue-500  focus:ring-2'/>
                            <label for="default-checkbox" class="ms-2 text-md font-medium text-light_black ">to Rs.</label>
                            <input type="number" name="" id="" className='w-20 h-5 text-blue-600 bg-gray-100 border-dark_gray border-2 rounded focus:ring-blue-500  focus:ring-2'/>
                        </div>
                    </div>
                </div>

                {/* Category Buttons */}
                <div className='sm:pb-5'>
                    <div className="flex justify-center items-center">
                        <ul className="flex flex-wrap md:text-3xl font-semibold gap-1">
                            {['T-Shirt', 'Crops', 'Tank Tops', 'Leggings', 'Innerwear'].map((item) => (
                                <li key={item} className="relative">
                                    <button
                                        className={`inline-block md:w-[175px] w-[75px] h-[45px] border- rounded-md ${activeButton === item ? 'bg-white' : 'bg-gray hover:bg-dark_gray'}`}
                                        onClick={() => handleButtonClick(item)}
                                    >
                                        {item}
                                    </button>
                                    {activeButton === item && (
                                        <hr className="absolute bottom-0 left-0 w-full border-t-4 border-light_black" />
                                    )}
                                </li>
                            ))}
                        </ul>   
                    </div>
                </div>

                {/* Items Display */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5'>
                    {items[activeButton]?.map(({ src, src1, src2, title, price, discount }, index) => (
                        <Link
                            to={`/Emrald/itemview?src=${encodeURIComponent(src)}&src1=${encodeURIComponent(src1)}&src2=${encodeURIComponent(src2)}&title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&discount=${encodeURIComponent(discount)}`}
                            key={index}
                            className='group bg-gray p-4 rounded-lg shadow-lg'
                        >
                            <div className='relative group bg-no-repeat bg-cover overflow-hidden'>
                                <div className='transition duration-500 ease-in-out hover:scale-110 bg-black'>
                                    <img src={src} alt={title} className='mb-3' />
                                </div>
                            </div>
                            <div>
                                <p className='font-serif font-bold text-lg'>{title}</p>
                                <p className='font-bold text-light_black text-md'>{price}</p>
                                <p className='text-red text-sm'>or 3 X {discount}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
