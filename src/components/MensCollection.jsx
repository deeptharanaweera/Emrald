import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import 'react-simple-carousel-image-slider/dist/index.css';
import { useSwipeable } from 'react-swipeable';
import men_shirt1 from '../assets/men_shirt1.jpg';
import men_shirt1_1 from '../assets/men_shirt1_1.jpg';
import men_shirt2 from '../assets/men_shirt2.jpg';
import men_shirt2_1 from '../assets/men_shirt2_1.jpg';
import men_shirt3 from '../assets/men_shirt3.jpg';
import men_shirt3_1 from '../assets/men_shirt3_1.jpg';
import men_shirt4 from '../assets/men_shirt4.jpg';
import men_shirt4_1 from '../assets/men_shirt4_1.jpg';
import men_tshirt1 from '../assets/men_tshirt1.jpg';
import men_tshirt1_1 from '../assets/men_tshirt1_1.jpg';
import men_tshirt2 from '../assets/men_tshirt2.jpg';
import men_tshirt2_1 from '../assets/men_tshirt2_1.jpg';
import men_tshirt3 from '../assets/men_tshirt3.jpg';
import men_tshirt3_1 from '../assets/men_tshirt3_1.jpg';
import men_tshirt4 from '../assets/men_tshirt4.jpg';
import men_tshirt4_1 from '../assets/men_tshirt4_1.jpg';
import men_tshirt5 from '../assets/men_tshirt5.jpg';
import men_tshirt5_1 from '../assets/men_tshirt5_1.jpg';
import men_tshirt6 from '../assets/men_tshirt6.jpg';
import men_tshirt6_1 from '../assets/men_tshirt6_1.jpg';

function MensCollection() {
    const [activeButton, setActiveButton] = useState('T-Shirt');
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    const navigate = useNavigate();

    const items = {
        'T-Shirt': [
            { src: men_tshirt1, src1: men_tshirt1_1, title: 'Lion Pride Polo - Egret', price: 'Rs 3,695.00', discount: 'Rs 1,231.66' },
            { src: men_tshirt2, src1: men_tshirt2_1, title: 'Lion Pride Polo - Tuff Green', price: 'Rs 3,695.00', discount: 'Rs 1,231.66' },
            { src: men_tshirt3, src1: men_tshirt3_1, title: 'Lion Pride Polo - Blue Depths', price: 'Rs 3,695.00', discount: 'Rs 1,231.66' },
            { src: men_tshirt4, src1: men_tshirt4_1, title: 'Lion Pride Polo - Yellow-Aurora', price: 'Rs 3,695.00', discount: 'Rs 1,231.66' },
            { src: men_tshirt5, src1: men_tshirt5_1, title: 'Lion Pride Polo - Ashley Blue', price: 'Rs 3,695.00', discount: 'Rs 1,231.66' },
            { src: men_tshirt6, src1: men_tshirt6_1, title: 'Lion Pride Polo - Brown Port', price: 'Rs 3,695.00', discount: 'Rs 1,231.66' },
        ],
        'Shirt': [
            { src: men_shirt1, src1: men_shirt1_1, title: 'Emerald Active Printed Leisure Fit-Blue ', price: 'Rs 3,795.00', discount: 'Rs 1,265.00 ' },
            { src: men_shirt2, src1: men_shirt2_1, title: 'Emerald Active Checks Slim Fit-Brown Tannin', price: 'Rs 3,995.00', discount: 'Rs 1,331.66' },
            { src: men_shirt3, src1: men_shirt3_1, title: 'Emerald Active Printed Leisure Fit-Blue', price: 'Rs 3,795.00', discount: 'Rs 1,265.00 ' },
            { src: men_shirt4, src1: men_shirt4_1, title: 'Emerald Corporate Oxford Slim Fit-Powder', price: 'Rs 3,795.00', discount: 'Rs 1,265.00 ' },
        ],
        'Shorts': [

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
        }, 6000); // Change slide every 3 seconds

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
                <hr className="md:w-[450px] w-[130px] h-1 bg-dark_gray border-0 rounded md:" />
                <Link to='/Emrald/mens' className='md:text-6xl font-bold mb-3 text-light_black'>Men's Collection</Link>
                <hr className="md:w-[390px] w-[130px] h-1 bg-dark_gray border-0 rounded md:" />
            </div>
            <div className='pb-5'>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-wrap md:text-3xl font-semibold gap-1">
                        {['T-Shirt', 'Shirt', 'Shorts', 'Sweater', 'Innerwear'].map((item) => (
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

            <div className='flex justify-center items-center md:gap-8 gap-12'>
                <button
                    onClick={handlePrevClick}
                    className='z-10 md:text-4xl text-md rounded-full p-2 bg-black text-white cursor-pointer transition duration-500 ease-in-out hover:scale-150 md:translate-x-10 translate-x-20 drop-shadow-lg'
                >
                    <FaAngleLeft />
                </button>
                <div className='flex justify-center items-center md:gap-8 gap-2'
                {...swipeHandlers}>
                    {visibleItems.map(({ src, src1, title, price, discount }, index) => (
                        <div
                            key={index}
                            className='group bg-gray md:w-[400px] w-[200px] h-auto md:pt-5 pt-2 md:pl-5 pl-2 md:pr-5 pr-2 pb-2'
                            onClick={() => navigate('/Emrald/itemviewmen', { state: { src, src1, title, price, discount } })}
                            style={{ cursor: 'pointer' }} // Add cursor pointer to indicate clickable items
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
                    className='z-10 md:text-4xl text-md rounded-full p-2 bg-black text-white cursor-pointer transition duration-500 ease-in-out hover:scale-150 md:-translate-x-10 -translate-x-20 drop-shadow-lg'
                >
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
}

export default MensCollection;
