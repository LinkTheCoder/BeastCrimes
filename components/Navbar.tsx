"use client"

import React from 'react';
import Link from 'next/link';
import Logo from '../public/img/Logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaHome, FaGamepad, FaNewspaper } from "react-icons/fa";
import { FaCircleInfo, FaUserGroup } from "react-icons/fa6";
import { BsChatQuoteFill } from "react-icons/bs";

const Navbar = () => {
  const pathname = usePathname(); // Use usePathname to get the current route

  // Conditionally render based on the route
  const isHomePage = pathname !== '/';

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
    {isHomePage ? (
        <div>
          <Image className="ml-5 mt-5 w-80" src={Logo} id="Home" alt="/" />
        </div>
      ) : null}
      
      <ul className='hidden lg:ml-10 lg:flex space-x-10 text-red-800 font-black'>
      <li className="flex items-center space-x-2">
    <FaHome size='1.5em' color="darkred" />
    <Link href="/#Home">HOME</Link>
  </li>
  <li className="flex items-center space-x-2">
    <FaCircleInfo size='1.5em' color="darkred" />
    <Link href="/#About">ABOUT</Link>
  </li>
  <li className="flex items-center space-x-2">
    <BsChatQuoteFill size='1.5em' color="darkred" />
    <Link href="/#Story">STORY</Link>
  </li>
  <li className="flex items-center space-x-2">
    <FaGamepad size='1.5em' color="darkred" />
    <Link href="/#Gameplay">GAMEPLAY</Link>
  </li>
  <li className="flex items-center space-x-2">
    <FaUserGroup size='1.5em' color="darkred" />
    <Link href="/#Characters">CHARACTERS</Link>
  </li>
    {/* <li className="flex items-center space-x-2">
    <FaNewspaper size='1.5em' color="darkred" />
    <Link href="/#Press-kit">PRESS KIT</Link>
  </li>*/}
      </ul>
    </div>
  );
};

export default Navbar;