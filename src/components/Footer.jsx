import React from 'react';
import Logo from '../assets/Logo.png';
import {
  FaSteam,
  FaTwitter,
  FaDiscord,
} from 'react-icons/fa';

const Footer = () => {
  return (
<div class="hero container max-w-screen-lg mx-auto pb-10">
<img className='mt-20 w-60 mx-auto content-center mx-auto' src={Logo} alt="/" />

        <div className='text-center'>
          <ul className='lg:flex text-white text-center mx-auto'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>About Us</li>
          </ul>
         <p>Created by Link Häggman</p>
        </div>
        </div>
        
 
      
  );
};

export default Footer;
