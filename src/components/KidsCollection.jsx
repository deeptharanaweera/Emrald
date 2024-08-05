import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import 'react-simple-carousel-image-slider/dist/index.css';
import { useSwipeable } from 'react-swipeable';
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
    const [itemsToShow, setItemsToShow] = useState(3);

    const navigate = useNavigate();

    const items = {
        'T-Shirt': [
            { src: kids_tshirt1, title: 'Emerald Junior - Orange Sun', price: 'Rs 1,895.00', discount: 'Rs 631.66' },
            { src: kids_tshirt2, title: 'Emerald Junior - Teal', price: 'Rs 1,895.00', discount: 'Rs 631.66' },
            { src: kids_tshirt3, title: 'Emerald Junior - Black', price: 'Rs 1,895.00', discount: 'Rs 631.66' },
            { src: kids_tshirt4, title: 'Emerald Junior Stripe - Blue Heaven', price: 'Rs 1,895.00', discount: 'Rs 631.66' },
            { src: kids_tshirt5, title: 'Emerald Junior - Shadow Lime', price: 'Rs 1,895.00', discount: 'Rs 631.66' },
        ],
        'Shirts': [
            { src: kids_shirt1, title: 'Emerald Junior - Brick', price: 'Rs 1,995.00', discount: 'Rs 665.00' },
            { src: kids_shirt2, title: 'Emerald Junior Slub - Blue', price: 'Rs 2,495.00', discount: 'Rs 831.66' },
            { src: kids_shirt3, title: 'Emerald Junior - Turquoise', price: 'Rs 2,295.00', discount: 'Rs 765.00' },
        ],
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextClick();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [activeButton]);

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
        const end = start + itemsToShow;
        const itemsArray = items[activeButton];
        return [...itemsArray, ...itemsArray].slice(start, end);
    };

    const visibleItems = getVisibleItems();

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleNextClick(),
        onSwipedRight: () => handlePrevClick(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className='h-full md:mb-20 mb-10'>
            <div className='flex justify-center items-center md:gap-16 gap-3'>
                <hr className="md:w-[450px] w-[130px] h-1 bg-dark_gray border-0 rounded" />
                <p className='md:text-6xl font-bold mb-3 text-light_black'>Kid's Collection</p>
                <hr className="md:w-[390px] w-[130px] h-1 bg-dark_gray border-0 rounded" />
            </div>
            <div className='pb-5'>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-wrap md:text-3xl font-semibold gap-1">
                        {['T-Shirt', 'Shirts', 'Innerwear', 'Trousers'].map((item) => (
                            <li key={item} className="relative">
                                <button
                                    className={`inline-block md:w-[175px] w-[75px] h-[45px]  rounded-md ${activeButton === item ? 'bg-white' : 'bg-gray hover:bg-dark_gray'}`}
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

            <div className='flex justify-center items-center md:gap-8 gap-12'>
                <button
                    onClick={handlePrevClick}
                    className='md:text-4xl text-md rounded-full p-2 bg-black text-white cursor-pointer transition duration-500 ease-in-out hover:scale-150 md:translate-x-10 translate-x-20 drop-shadow-lg hidden md:block'
                >
                    <FaAngleLeft />
                </button>
                <div
                    className='flex justify-center items-center md:gap-8 gap-2'
                    {...swipeHandlers}
                >
                    {visibleItems.map(({ src, title, price, discount }, index) => (
                        <div
                            key={index}
                            className='bg-gray md:w-[400px] w-[200px] h-auto md:pt-5 pt-2 md:pl-5 pl-2 md:pr-5 pr-2 pb-2'
                            onClick={() => navigate('/itemviewkid', { state: { src, title, price, discount } })}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className='relative group bg-no-repeat bg-cover overflow-hidden'>
                                <div className='transition duration-500 ease-in-out hover:scale-110 bg-black'>
                                    <img src={src} alt={title} className='mb-3' />
                                </div>
                            </div>
                            <div>
                                <p className='font-serif font-bold md:text-[20px] text-[10px]'>{title}</p>
                                <p className='font-bold text-light_black md:text-[20px] text-[10px]'>{price}</p>
                                <p className='text-red md:text-[15px] text-[10px]'>or 3 X {discount}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleNextClick}
                    className='md:text-4xl text-md rounded-full p-2 bg-black text-white cursor-pointer transition duration-500 ease-in-out hover:scale-150 md:-translate-x-10 -translate-x-20 drop-shadow-lg hidden md:block'
                >
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
}

export default KidsCollection;
