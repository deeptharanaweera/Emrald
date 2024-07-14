import React, { useEffect, useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { RxDotFilled } from 'react-icons/rx';
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import 'react-simple-carousel-image-slider/dist/index.css';
import causal from '../assets/causal.jpg';
import evening from '../assets/evening.jpg';
import utility from '../assets/utility.jpg';
import GiftVoucher from '../components/GiftVoucher';
import KidsCollection from '../components/KidsCollection';
import MensCollection from '../components/MensCollection';
import WomensCollection from '../components/WomensCollection';
import Footer from '../components/Footer';
import Navibar from '../components/Navibar';

function Home() {
  const slides = [
    {
      url: 'https://emerald.lk/cdn/shop/files/polo-desktop-banner.jpg?v=1706013602&width=2000'
    },
    {
      url: 'https://emerald.lk/cdn/shop/files/utility-pants-desktop-banner_4ca92995-6625-421a-8ba0-e913e4ccfd4f.jpg?v=1706013030&width=2000'
    },
    {
      url: 'https://emerald.lk/cdn/shop/files/IMG_4069.jpg?v=1720283319&width=2000'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className='w-full h-auto'>
      <Navibar />
      <div className="group max-w-[1920px] h-[700px] w-full m-auto sm:py-12 sm:pt-0 sm:pb-0 relative">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center transition duration-500 brightness-75 group-hover:brightness-100 "
        >
          {currentIndex === 1 && (
            <div className="relative w-full h-full">
              <div className="flex flex-col items-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-6xl font-bold mb-4 brightness-100">Special Offer</h2>
                <button className="px-6 py-2 w-48 h-20 bg-blue text-white text-2xl rounded-lg">Shop Now</button>
              </div>
            </div>
          )}
        </div>
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer"
          onClick={prevSlide}
        >
          <FaAngleLeft size={40} />
        </div>
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer"
          onClick={nextSlide}
        >
          <FaAngleRight size={40} />
        </div>
        <div className='flex top-4 justify-center py-1 bg-gray'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-green' : 'text-black'}`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center items-center gap-48 bg-gray w-full h-[185px] mt-5 drop-shadow-xl	'>
        <div className='flex flex-col items-center'>
          <TbTruckDelivery className='text-8xl' />
          <p className='text-2xl font-bold'>Free Shipping Island wide</p>
          <p className=''>Delivered to your doorstep at no additional cost</p>
        </div>
        <div className='flex flex-col items-center'>
          <FaExchangeAlt className='text-8xl' />
          <p className='text-2xl font-bold'>Returns And Exchange</p>
          <p>Don’t like it? We do exchanges within 7 days!</p>
        </div>
        <div className='flex flex-col items-center'>
          <SiAdguard className='text-8xl' />
          <p className='text-2xl font-bold'>Guaranteed Comfort, Quality</p>
          <p>Wear confidence, comfort and quality. Made to fit you!</p>
        </div>
      </div>

      <div class="flex overflow-hidden w-[100%] p-10">
        <div class="flex flex-shrink min-w-[100%] w-[33.33%] animate-loop-scroll text-light_black">
          <p class="text-[50px] whitespace-nowrap">Sri Lanka's No.1 Menswear Brand</p>
          <p class="text-[50px] whitespace-nowrap ml-40">Sri Lanka's No.1 Menswear Brand</p>
          <p class="text-[50px] whitespace-nowrap ml-40">Sri Lanka's No.1 Menswear Brand</p>

          <p class="text-[50px] whitespace-nowrap ml-40">Sri Lanka's No.1 Menswear Brand</p>
          <p class="text-[50px] whitespace-nowrap ml-40">Sri Lanka's No.1 Menswear Brand</p>
          <p class="text-[50px] whitespace-nowrap ml-40">Sri Lanka's No.1 Menswear Brand</p>
        </div>
      </div>

      <div className='flex justify-center items-center gap-10 bg-white pb-20'>
        <div className='relative group bg-no-repeat bg-cover overflow-hidden'>
          <div className='transition duration-500 ease-in-out hover:scale-110'>
            <img src={evening} alt="" className='w-[450px] h-[550px] rounded-xl brightness-75 ' />
            <div>
              <h1 className='absolute top-1/2 left-1 transform translate-x-20 -translate-y-1/2 text-5xl text-white '>Evening Wear</h1>
              <div className="hidden group-hover:block absolute top-[63%] left-[25%] transition duration-700 transform translate-x-20 -translate-y-1/2  text-2xl rounded-full p-2 bg-white text-black cursor-pointer" >
                <FaAngleRight size={40} />
              </div>
            </div>
          </div>
        </div>
        <div className='relative group bg-no-repeat bg-cover overflow-hidden'>
          <div className='transition duration-500 ease-in-out hover:scale-110'>
            <img src={causal} alt="" className='w-[450px] h-[550px] rounded-xl brightness-75 ' />
            <div>
              <h1 className='absolute top-1/2 left-1 transform translate-x-20 -translate-y-1/2 text-5xl text-white '>Casual Wear</h1>
              <div className="hidden group-hover:block absolute top-[63%] left-[25%] transition duration-700 transform translate-x-20 -translate-y-1/2  text-2xl rounded-full p-2 bg-white text-black cursor-pointer" >
                <FaAngleRight size={40} />
              </div>
            </div>
          </div>
        </div>
        <div className='relative group bg-no-repeat bg-cover overflow-hidden'>
          <div className='transition duration-500 ease-in-out hover:scale-110'>
            <img src={utility} alt="" className='w-[450px] h-[550px] rounded-xl brightness-75 ' />
            <div>
              <h1 className='absolute top-1/2 left-1 transform translate-x-20 -translate-y-1/2 text-5xl text-white '>Utility Pants</h1>
              <div className="hidden group-hover:block absolute top-[63%] left-[25%] transition duration-700 transform translate-x-20 -translate-y-1/2  text-2xl rounded-full p-2 bg-white text-black cursor-pointer" >
                <FaAngleRight size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <MensCollection />
      <WomensCollection />
      <KidsCollection />
      <GiftVoucher />
      <Footer/>
    </div>
  );
}

export default Home;
