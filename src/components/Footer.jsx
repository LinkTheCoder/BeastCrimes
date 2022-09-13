import React from 'react';
import Logo from '../assets/Logo.png';
import {
  FaSteam,
  FaTwitter,
  FaDiscord,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
        <img className='w-60' src={Logo} alt="/" />
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaTwitter className='icon text-red-800' />
            <FaSteam className='icon text-red-800' />
            <FaDiscord className='icon text-red-800' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex text-white'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <ul className='mt-3 text-right lg:flex text-white'>
         <p>Created by Link Häggman</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
