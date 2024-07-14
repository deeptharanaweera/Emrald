import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import 'react-simple-carousel-image-slider/dist/index.css';
import girl_crop1 from '../assets/girl_crop1.jpg';
import girl_crop2 from '../assets/girl_crop2.jpg';
import girl_crop3 from '../assets/girl_crop3.jpg';
import girl_crop4 from '../assets/girl_crop4.jpg';
import girl_tshirt1 from '../assets/girl_tshirt1.jpg';
import girl_tshirt2 from '../assets/girl_tshirt2.jpg';
import girl_tshirt3 from '../assets/girl_tshirt3.jpg';
import girl_tshirt4 from '../assets/girl_tshirt4.jpg';
import girl_tshirt5 from '../assets/girl_tshirt5.jpg';

function WomensCollection() {

    const [activeButton, setActiveButton] = useState('T-Shirt');
    const [currentIndex1, setCurrentIndex1] = useState(0);

    const items = {
        'T-Shirt': [
            { src: girl_tshirt1, title: 'Runn Active Wear Printed-White', price: 'Rs 1,795.00', discount: 'Rs 598.33' },
            { src: girl_tshirt2, title: 'Runn Active Wear Printed-Royal', price: 'Rs 1,795.00', discount: 'Rs 598.33' },
            { src: girl_tshirt3, title: 'Runn Active Wear Printed-Midnight', price: 'Rs 1,795.00', discount: 'Rs 598.33' },
            { src: girl_tshirt4, title: 'Runn Active Wear Printed-Navy', price: 'Rs 1,795.00', discount: 'Rs 598.33' },
            { src: girl_tshirt5, title: 'Runn Active Wear Printed-Plum', price: 'Rs 1,795.00', discount: 'Rs 598.33' },
        ],
        'Crops': [
            { src: girl_crop1, title: 'Runn Active Wear -Turquoise', price: 'Rs 2,295.00', discount: 'Rs 765.00 ' },
            { src: girl_crop2, title: 'Runn Active Wear -Twilight', price: 'Rs 2,295.00', discount: 'Rs 765.00' },
            { src: girl_crop3, title: 'Runn Active Wear -Tomato', price: 'Rs 2,295.00', discount: 'Rs 765.00 ' },
            { src: girl_crop4, title: 'Runn Active Wear -Navy', price: 'Rs 2,295.00', discount: 'Rs 765.00 ' },
        ],
        // Add other categories similarly
    };


    const handleButtonClick = (item) => {
        setActiveButton(item);
        setCurrentIndex1(0);
    };

    const handlePrevClick = () => {
        setCurrentIndex1((prevIndex) => (prevIndex - 1 + items[activeButton].length) % items[activeButton].length);
    };

    const handleNextClick = () => {
        setCurrentIndex1((prevIndex) => (prevIndex + 1) % items[activeButton].length);
    };

    const getVisibleItems = () => {
        const start = currentIndex1;
        const end = start + 3;
        const itemsArray = items[activeButton];
        return [...itemsArray, ...itemsArray].slice(start, end);
    };

    const visibleItems = getVisibleItems();

    return (
        <div className='h-full mb-20'>
            <div className='flex justify-center items-center gap-16'>
                <hr className="w-[372px] h-1 bg-dark_gray border-0 rounded md:" />
                <p className='text-6xl font-bold mb-3 text-light_black'>Women's Collection</p>
                <hr className="w-[372px] h-1 bg-dark_gray border-0 rounded md:" />
            </div>
            <div className='pb-5'>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-wrap text-3xl font-semibold gap-1">
                        {['T-Shirt', 'Crops', 'Tank Tops', 'Leggings', 'Innerwear'].map((item) => (
                            <li key={item} className="relative">
                                <button
                                    className={`inline-block w-[175px] h-[45px] border- rounded-md ${activeButton === item ? 'bg-white' : 'bg-gray hover:bg-dark_gray'}`}
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

            <div className='flex justify-center items-center gap-8'>
                <button onClick={handlePrevClick} className='text-4xl rounded-full p-2 bg-black text-white cursor-pointer transition duration-500 ease-in-out hover:scale-150 translate-x-10  drop-shadow-lg'>
                    <FaAngleLeft />
                </button>
                <div className='flex justify-center items-center gap-8'>
                    {visibleItems.map(({ src, title, price, discount }, index) => (
                        <div key={index} className='bg-gray w-[400px] h-auto pt-5 pl-5 pr-5 pb-2'>
                            <img src={src} alt={title} className='mb-3' />
                            <p className='font-serif font-bold text-[15px]'>{title}</p>
                            <p className='font-bold text-light_black'>{price}</p>
                            <p className='text-red'>or 3 X {discount}</p>
                        </div>
                    ))}
                </div>
                <button onClick={handleNextClick} className='text-4xl rounded-full p-2 bg-black text-white cursor-pointer transition duration-500 ease-in-out hover:scale-150 -translate-x-10  drop-shadow-lg'>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    )
}

export default WomensCollection