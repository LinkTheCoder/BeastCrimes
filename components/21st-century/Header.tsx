
import React from 'react';
import Wallpaper from '../../public/img/WallpapersCentury.png';
import Logo from '../../public/img/LogoCentury.png';
import Image from 'next/image';

const Header = () => {

  return (
    <div id="Home" className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-screen'>
      {/* Left Column */}
      <div className='lg:ml-20 relative flex flex-col justify-center text-white p-4 lg:order-first md: order-last'>
        <Image className="lg:w-3/4 mx-auto sm:w-full" src={Logo} alt="/" />

        <h2 className='mt-5 text-3xl text-red-800 font-normal text-center'>
          CRIMES IN THE PRESENT
        </h2>
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
          </div>
 );
};

export default Header;
