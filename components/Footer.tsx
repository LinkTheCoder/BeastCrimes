import React from 'react';
import Logo from '../public/img/Logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
<div className="hero container max-w-screen-lg mx-auto pb-10">
<Image className='mt-20 w-60 content-center mx-auto' src={Logo} alt="/" />

        <div className='mt-5 text-center mx-auto md: mb-16'>
          <ul className='text-red-800 font-semibold text-center mx-auto'>
         <p><a className='hover:text-red-900' href="https://www.linkthedev.com/">LINK HÄGGMAN</a></p>
         </ul>
        </div>
        </div> 
  );
};

export default Footer;
