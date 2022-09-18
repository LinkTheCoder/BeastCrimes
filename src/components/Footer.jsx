import React from 'react';
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
<div class="hero container max-w-screen-lg mx-auto pb-10">
<img className='mt-20 w-60 mx-auto content-center mx-auto' src={Logo} alt="/" />

        <div className='mt-5 text-center mx-auto'>
          <ul className='text-white text-center mx-auto'>
         <p>Created by Link Häggman</p>
         </ul>
        </div>
        </div> 
  );
};

export default Footer;
