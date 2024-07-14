import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import 'react-simple-carousel-image-slider/dist/index.css';
import men_tshirt1 from '../assets/men_tshirt1.jpg';
import men_tshirt2 from '../assets/men_tshirt2.jpg';
import men_tshirt3 from '../assets/men_tshirt3.jpg';
import men_tshirt4 from '../assets/men_tshirt4.jpg';
import men_tshirt5 from '../assets/men_tshirt5.jpg';
import men_tshirt6 from '../assets/men_tshirt6.jpg';
import shirt1 from '../assets/shirt1.jpg';
import shirt2 from '../assets/shirt2.jpg';
import shirt3 from '../assets/shirt3.jpg';
import shirt4 from '../assets/shirt4.jpg';

function MensCollection() {

    const [activeButton, setActiveButton] = useState('T-Shirt');
    const [currentIndex1, setCurrentIndex1] = useState(0);

    const items = {
        'T-Shirt': [
            { src: men_tshirt1, title: 'Lion Pride Polo - Egret', price: 'Rs 3,695.00', discount: 'Rs 1,231.66' },
            { src: men_tshirt2, title: 'Lion Pride Polo - Tuff Green', price: 'Rs 3,695.00', discount: 'Rs 1,231.66' },
            { src: men_tshirt3, title: 'Lion Pride Polo - Blue Depths', price: 'Rs 3,695.00', discount: 'Rs 1,231.66' },
            { src: men_tshirt4, title: 'Lion Pride Polo - Yellow-Aurora', price: 'Rs 3,695.00', discount: 'Rs 1,231.66' },
            { src: men_tshirt5, title: 'Lion Pride Polo - Ashley Blue', price: 'Rs 3,695.00', discount: 'Rs 1,231.66' },
            { src: men_tshirt6, title: 'Lion Pride Polo - Brown Port', price: 'Rs 3,695.00', discount: 'Rs 1,231.66' },
        ],
        'Shirt': [
            { src: shirt1, title: 'Emerald Active Printed Leisure Fit-Blue ', price: 'Rs 3,795.00', discount: 'Rs 1,265.00 ' },
            { src: shirt2, title: 'Emerald Active Checks Slim Fit-Brown Tannin', price: 'Rs 3,995.00', discount: 'Rs 1,331.66' },
            { src: shirt3, title: 'Emerald Active Printed Leisure Fit-Blue', price: 'Rs 3,795.00', discount: 'Rs 1,265.00 ' },
            { src: shirt4, title: 'Emerald Corporate Oxford Slim Fit-Powder', price: 'Rs 3,795.00', discount: 'Rs 1,265.00 ' },
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
                <hr className="w-[450px] h-1 bg-dark_gray border-0 rounded md:" />
                <p className='text-6xl font-bold mb-3 text-light_black'>Men's Collection</p>
                <hr className="w-[390px] h-1 bg-dark_gray border-0 rounded md:" />
            </div>
            <div className='pb-5'>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-wrap text-3xl font-semibold gap-1">
                        {['T-Shirt', 'Shirt', 'Shorts', 'Sweater', 'Innerwear'].map((item) => (
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

export default MensCollection