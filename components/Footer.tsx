import React from 'react';
import { FaYoutube, FaEnvelope, FaSteam } from 'react-icons/fa'; // Importing YouTube and TikTok icons
import Logo from '../public/img/Logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="hero container max-w-screen-lg mx-auto pb-10">
      <div className="flex justify-center items-center mt-20">

    {/* Steam Icon */}
    <a  className='hover:opacity-80 duration-150 mx-3' href="https://store.steampowered.com/app/1571090/BEAST_CRIMES/">
          <FaSteam className="text-red-700 text-3xl mr-2" />
        </a>

                          {/* Email Icon */}
                          <a  className='hover:opacity-80 duration-150 mx-3' href="mailto:beastcrimes@gmail.com">
          <FaEnvelope className="text-red-700 text-3xl mr-2" />
        </a>
        
      </div>
      
      {/* Logo */}
      <Image className='mt-10 w-60 content-center mx-auto' src={Logo} alt="/" />
      
      <div className='mt-5 text-center mx-auto mb-16 lg:mb-5'>
        <ul className='text-red-800 font-semibold text-center mx-auto'>
          <p><a className='hover:text-red-900' href="https://www.linkthedev.com/">LINK HÄGGMAN</a></p>
        </ul>
      </div>
    </div> 
  );
};

export default Footer;
