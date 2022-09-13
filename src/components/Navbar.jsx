import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}></h1>
        <img className="mt-10" src={Logo} width={400} alt="/" />
      </div>
      <ul className='hidden md:flex'>
      <li><a href="#Home">Home</a></li>
        <li><a href="#Cases">Cases</a></li>
        <li><a href="#Characters">Characters</a></li>
        <li><a href="#Features">Features</a></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>BEAST CRIMES</h1>
          <li><a href="#Home">Home</a></li>
        <li><a href="#Cases">CASES</a></li>
        <li><a href="#Characters">Characters</a></li>
        <li><a href="#Features">Features</a></li>
          <div className='flex flex-col'>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
