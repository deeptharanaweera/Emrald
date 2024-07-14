import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import 'react-simple-carousel-image-slider/dist/index.css';
import kids_shirt1 from '../assets/kids_shirt1.jpg';
import kids_shirt2 from '../assets/kids_shirt2.jpg';
import kids_shirt3 from '../assets/kids_shirt3.jpg';
import kids_tshirt1 from '../assets/kids_tshirt1.jpg';
import kids_tshirt2 from '../assets/kids_tshirt2.jpg';
import kids_tshirt3 from '../assets/kids_tshirt3.jpg';
import kids_tshirt4 from '../assets/kids_tshirt4.jpg';
import kids_tshirt5 from '../assets/kids_tshirt5.jpg';

function KidsCollection() {

    const [activeButton, setActiveButton] = useState('T-Shirt');
    const [currentIndex1, setCurrentIndex1] = useState(0);

    const items = {
        'T-Shirt': [
            { src: kids_tshirt1, title: 'Emerald Junior - Orange Sun', price: 'Rs 1,895.00', discount: 'Rs 631.66 ' },
            { src: kids_tshirt2, title: 'Emerald Junior - Teal', price: 'Rs 1,895.00', discount: 'Rs 631.66' },
            { src: kids_tshirt3, title: 'Emerald Junior - Black', price: 'Rs 1,895.00', discount: 'Rs 631.66' },
            { src: kids_tshirt4, title: 'Emerald Junior Stripe - Blue Heaven', price: 'Rs 1,895.00', discount: 'Rs 631.66' },
            { src: kids_tshirt5, title: 'Emerald Junior - Shadow Lime', price: 'Rs 1,895.00', discount: 'Rs 631.66' },
        ],
        'Shirts': [
            { src: kids_shirt1, title: 'Emerald Junior - Brick', price: 'Rs 1,995.00', discount: 'Rs 665.00' },
            { src: kids_shirt2, title: 'Emerald Junior Slub - Blue', price: 'Rs 2,495.00', discount: 'Rs 831.66' },
            { src: kids_shirt3, title: 'Emerald Junior - Turquoise', price: 'Rs 2,295.00', discount: 'Rs 665.00' },
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
                <hr className="w-[430px] h-1 bg-dark_gray border-0 rounded md:" />
                <p className='text-6xl font-bold mb-3 text-light_black'>Kid's Collection</p>
                <hr className="w-[430px] h-1 bg-dark_gray border-0 rounded md:" />
            </div>
            <div className='pb-5'>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-wrap text-3xl font-semibold gap-1">
                        {['T-Shirt', 'Shirts', 'Innerwear', 'Trousers'].map((item) => (
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

export default KidsCollection