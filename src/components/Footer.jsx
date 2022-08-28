import React from 'react';
import Hoyoverse from '../assets/Hoyoverse.png';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
        <img className='w-80' src={Hoyoverse} alt="/" />
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaDiscord className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <ul className='mt-3 text-right lg:flex'>
         <p>Made with 🧡 by Link Häggman</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
