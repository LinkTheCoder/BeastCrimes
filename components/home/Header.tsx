"use client"

import React, { useState } from 'react';
import Wallpaper from '../../public/img/Wallpaper.png';
import Logo from '../../public/img/Logo.png';
import { BsPlayFill } from 'react-icons/bs';
import { FaSteam } from 'react-icons/fa';
import Image from 'next/image';
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [showVideo, setShowVideo] = useState(false);

  const openVideoModal = () => {
    setShowVideo(true);
  };

  const closeVideoModal = () => {
    setShowVideo(false);
  };


  return (
    <div id="Home" className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-screen'>
      {/* Left Column */}
      <div className='lg:ml-20 relative flex flex-col justify-center text-white p-4 lg:order-first md: order-last'>
        <Image className="lg:w-3/4 mx-auto sm:w-full" src={Logo} alt="/" />

        <h2 className='mt-5 text-3xl text-red-800 font-normal text-center'>
          CRIMES ACROSS TIMES
        </h2>

        <div className='flex justify-center items-center mt-5'>
          <a
            href='https://store.steampowered.com/app/1571090/Beast_Crimes/'
            className='hover:opacity-80 duration-150 mx-3'
          >
            <FaSteam size='3em' color="#9b1b1b" />
          </a>

          <button
            className='m-2 inline-block align-middle bg-red-800 hover:bg-red-900 font-bold py-2 px-2 rounded-full'
            onClick={openVideoModal}
          >
            <BsPlayFill size='2em' color="black" />
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className='relative'>
        <Image
          className='w-full h-full object-cover object-left lg:object-left'
          src={Wallpaper}
          alt=''
        />
        <div className='absolute w-full h-full top-0 left-0 bg-black/10'></div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="z-10 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-3/4 h-3/4 max-w-2xl max-h-96">
            <div className="absolute top-0 right-0 m-1 cursor-pointer" onClick={closeVideoModal}>
            <FaXmark size='1.7em' color="white" />
            </div>
            
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/WojJq77VbY4"
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
