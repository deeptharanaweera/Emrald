import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
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

function WomensCollection() {
    const [activeButton, setActiveButton] = useState('T-Shirt');
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    const items = {
        'T-Shirt': [
            { src: girl_tshirt1,src1:girl_tshirt1_1, src2: girl_tshirt1_2 ,  title: 'Runn Active Wear Printed-White', price: 'Rs 1,795.00', discount: 'Rs 598.33' },
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
        // Add other categories similarly
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
                <hr className="md:w-[450px] w-[120px] h-1 bg-dark_gray border-0 rounded md:" />
                <Link to="/Emrald/womens" className='md:text-6xl font-bold mb-3 text-light_black'>Women's Collection</Link>
                <hr className="md:w-[390px] w-[120px] h-1 bg-dark_gray border-0 rounded md:" />
            </div>
            <div className='pb-5'>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-wrap md:text-3xl  font-semibold gap-1">
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

            <div className='flex justify-center items-center md:gap-8 gap-12'>
                <button onClick={handlePrevClick} className='z-10 md:text-4xl text-md rounded-full p-2 bg-black text-white cursor-pointer transition duration-500 ease-in-out hover:scale-150 md:translate-x-10 translate-x-20 drop-shadow-lg'>
                    <FaAngleLeft />
                </button>
                <div className='flex justify-center items-center md:gap-8 gap-2'
                {...swipeHandlers}>
                    {visibleItems.map(({ src, src1, src2, title, price, discount }, index) => (
                        <Link
                            to={`/Emrald/itemview?src=${encodeURIComponent(src)}&src1=${encodeURIComponent(src1)}&src2=${encodeURIComponent(src2)}&title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&discount=${encodeURIComponent(discount)}`}
                            key={index}
                            className='group bg-gray md:w-[400px] w-[200px] h-auto md:pt-5 pt-2 md:pl-5 pl-2 md:pr-5 pr-2 pb-2'
                        >
                            <div className='relative group bg-no-repeat bg-cover overflow-hidden'>
                                <div className='transition duration-500 ease-in-out hover:scale-110 bg-black'>
                                    <img src={src} alt={title} className='mb-3' />
                                </div>
                            </div>
                            <div>
                                <p className='font-serif font-bold md:text-[20px] text-[10px]'>{title}</p>
                                <p className='font-bold text-light_black md:text-[20px] text-[10px] '>{price}</p>
                                <p className='text-red md:text-[15px] text-[10px]'>or 3 X {discount}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <button onClick={handleNextClick} className='z-10 md:text-4xl text-md rounded-full p-2 bg-black text-white cursor-pointer transition duration-500 ease-in-out hover:scale-150 md:-translate-x-10 -translate-x-20 drop-shadow-lg'>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
}

export default WomensCollection;
