"use client"

// Navbar.jsx
import React from 'react';
import Link from 'next/link';
import { FaHome, FaGamepad, FaNewspaper } from "react-icons/fa";
import { FaCircleInfo, FaUserGroup } from "react-icons/fa6";
import { BsChatQuoteFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-transparent text-red-800 absolute top-0 left-0 w-full z-50 p-4 flex justify-between items-center">
      <ul className="ml-10 m-4 hidden lg:flex space-x-8 font-black">
        <li className="flex items-center space-x-2">
          <FaHome size='1.5em' color="darkred" />
          <Link href="/#home">HOME</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaCircleInfo size='1.5em' color="darkred" />
          <Link href="/#about">ABOUT</Link>
        </li>
        <li className="flex items-center space-x-2">
          <BsChatQuoteFill size='1.5em' color="darkred" />
          <Link href="/#story">STORY</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaGamepad size='1.5em' color="darkred" />
          <Link href="/gameplay">GAMEPLAY</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaUserGroup size='1.5em' color="darkred" />
          <Link href="/characters">CHARACTERS</Link>
        </li>
        {/* <li className="flex items-center space-x-2">
          <FaNewspaper size='1.5em' color="darkred" />
          <Link href="/#Press-kit">PRESS KIT</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
