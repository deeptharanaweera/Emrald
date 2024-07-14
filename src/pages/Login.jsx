import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import login_background from '../assets/login_background.jpg';
import logo from '../assets/logo.png';
import main_background from '../assets/main_background.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';



function Login() {
  const [signIn, toggle] = useState(true);
  return (
    <div className='h-[823px] flex flex-col'>
      <div className="flex justify-center items-center h-full bg-center relative">
        <img src={main_background} alt="" className='h-full w-full object-cover absolute mix-blend-overlay brightness-75' />
        <div className="relative overflow-hidden w-[960px] max-w-full min-h-[602px] bg-white rounded-[60px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)]">
          <div className={`absolute top-0 h-full transition-all duration-600 left-0 w-1/2 ${!signIn ? 'transform translate-x-full opacity-100 z-[5]' : 'opacity-0 z-[1]'}`}>
            <form className="bg-white flex flex-col items-center justify-center p-12 h-full ">
              <h1 className="font-bold text-[24px]">Create Account</h1>
              <hr className="w-[115px] h-1 bg-black border-0 rounded" />
              <button className="flex items-center my-4 cursor-pointer  p-2 w-[309px] mb-4 border border-dark_gray rounded-lg hover:bg-gray">
                <FcGoogle className="text-2xl mr-2" />
                <p className="text-lg">Sign up with Google</p>
              </button>
              <div className="flex items-center gap-6">
                <hr className="w-[115px] h-1 bg-dark_gray border-0 rounded" />
                <p className="text-light_black text-[20px]">OR</p>
                <hr className="w-[115px] h-1 bg-dark_gray border-0 rounded" />
              </div>
              <div className="flex flex-col w-full max-w-xs left-0">
                <label className="mb-2 text-[20px]">First name*</label>
                <input type="text" className="p-2 mb-4  border border-dark_gray rounded-lg" placeholder='Enter your first name' />
                <label className="mb-2 text-[20px]">Email*</label>
                <input type="text" className="p-2 mb-4 border border-dark_gray rounded-lg" placeholder='Enter your email' />
                <label className="mb-2 text-[20px]">Password*</label>
                <input type="password" className="p-2 mb-4 border border-dark_gray rounded-lg" placeholder='Enter your password' />
                <button className="bg-black  text-white text-[21px] p-2 rounded-lg hover:bg-gold">Create account</button>
              </div>
            </form>
          </div>

          <div className={`absolute top-0 h-full transition-all duration-600 left-0 w-1/2 z-[2] ${!signIn ? 'transform translate-x-full' : ''}`}>
            <form className="bg-white flex flex-col items-center justify-center p-12 h-full ">
              <img src={logo} alt="" className='w-[138px] h-[66px] mb-16' />
              <h1 className="font-bold text-[24px]">Sign in</h1>
              <hr className="w-[50px] h-1 bg-black border-0 rounded" />
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2 text-[20px]">Email*</label>
                <input type="text" className="p-2 mb-4 border border-dark_gray rounded-lg" placeholder='Enter your email' />
                <label className="mb-2 text-[20px]">Password*</label>
                <input type="password" className="p-2 mb-4 border border-dark_gray rounded-lg" placeholder='Enter your password' />
                <button className="bg-black  text-white text-[21px] p-2 rounded-lg hover:bg-gold">Sign in</button>
              </div>
              <Link className='text-blue text-l pt-2'>frogot your password</Link>
            </form>
          </div>

          <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 z-[100] ${!signIn ? 'transform -translate-x-full' : ''}`}>
            <div className={` text-white relative left-[-100%] h-full w-[200%] transform transition-transform duration-600 ${!signIn ? 'transform translate-x-[50%]' : ''}`}>
            <div className={`absolute flex flex-col items-center justify-center  text-center top-0 h-full w-1/2 transition-transform duration-600 ${!signIn ? 'transform translate-x-0' : 'transform -translate-x-1/5'}`}>
            <div className='transition duration-500 ease-in-out'>
            <img src={login_background} alt="" className='w-full h-full rounded-xl scale-y-110 rounded-r-[145px]' />
            <div>
            <button onClick={() => toggle(true)} className="rounded-full border  left-1 transform translate-x-[10%] -translate-y-[400%] border-white text-white bg-dark_blue font-bold text-[22px] uppercase w-[154px] h-[62px]  transition-transform duration-80 focus:outline-none active:scale-95 bg-transparent">Sign in</button>
              <h1 className='absolute top-[75%] left-1 transform translate-x-5 -translate-y-1/2 text-5xl text-white font-bold font-serif'>Sri Lanka's No.1 <br />Menswear Brand</h1>
            </div>
          </div>
          </div>

              <div className={`absolute flex flex-col items-center justify-center  text-center top-0 h-full w-1/2 right-0 transition-transform duration-600 ${!signIn ? 'transform translate-x-[20%]' : 'transform translate-x-0'}`}>
              <div className='transition duration-500 ease-in-out'>
            <img src={login_background} alt="" className='w-full h-full rounded-xl scale-y-110 rounded-l-[145px]' />
            <div>
            <button onClick={() => toggle(false)} className="rounded-full border  left-1 transform translate-x-[10%] -translate-y-[400%] border-white text-white text-[18px] bg-dark_blue font-bold  uppercase  w-[154px] h-[62px] transition-transform duration-80 focus:outline-none active:scale-95 bg-transparent ">Create account</button>
              <h1 className='absolute top-[75%] left-1 transform translate-x-5 -translate-y-1/2 text-5xl text-white font-bold font-serif'>Sri Lanka's No.1 <br />Menswear Brand</h1>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
