"use client"
import React from "react";
import { useState } from "react";
import Link from 'next/link';
import { FaHome, FaGamepad, FaBars, FaTimes } from "react-icons/fa";
import { FaCircleInfo, FaUserGroup } from "react-icons/fa6";
import { BsChatQuoteFill } from "react-icons/bs";
import { FaYoutube, FaTiktok, FaSteam } from "react-icons/fa"; // Import social media icons

export default function NavbarSmall() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <footer className="fixed bottom-0 z-50 lg:hidden">
      <nav className="backdrop-blur-sm bg-black/50 fixed bottom-0 w-full">
        <div className="py-2 flex md:py-4">
          <div className="flex space-x-8 mx-auto">

            <Link href="/#About">
              <div>
                <button
                  className="border-none px-0 py-0 hover:opacity-50 duration-150"
                >
                  <FaCircleInfo color="#991b1b" size="2em" />
                </button>
              </div>
            </Link>

            <Link href="/#Story">
            <div>
                <button
                  className="border-none px-0 py-0 hover:opacity-50 duration-150"
                >
                  <BsChatQuoteFill color="#991b1b" size="2em" />
                </button>
              </div>
            </Link>

            <Link href="/#Home">
              <div>
                <button
                  className="border-none px-0 py-0 hover:opacity-50 duration-150"
                >
                  <FaHome color="#991b1b" size="30px" />
                </button>
              </div>
            </Link>

            <Link href="/#Gameplay">
              <div>
                <button
                  className="border-none px-0 py-0 hover:opacity-50 duration-150"
                >
                  <FaGamepad color="#991b1b" size="2em" />
                </button>
              </div>
            </Link>

            <div>
              <button
                className="border-none px-0 py-0 hover:opacity-50 duration-150"
                onClick={toggleModal}
              >
                <FaBars color="#991b1b" size="2em" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          {/* Dark overlay */}
          <div className="bg-gray-900 rounded-lg p-6 relative z-10">
            {/* Close button */}
            <button
              className="absolute top-2 right-2"
              onClick={toggleModal}
            >
              <FaTimes className="text-red-700 hover:text-red-600" size="1.5em" />
            </button>
            <ul className="font-bold text-red-700 space-y-6 text-lg">
              <div className="flex items-center">
                <FaHome />
                <Link
                  className="ml-1 mr-5 hover:text-red-600"
                  href="/#home"
                  onClick={toggleModal}
                >
                  HOME
                </Link>
              </div>

              <div className="flex items-center">
                <FaCircleInfo />
                <Link
                  className="ml-1 mr-5 hover:text-red-600"
                  href="/#about"
                  onClick={toggleModal}
                >
                  ABOUT
                </Link>
              </div>

              <div className="flex items-center">
                <BsChatQuoteFill />
                <Link
                  className="ml-1 mr-5 hover:text-red-600"
                  href="/#story"
                  onClick={toggleModal}
                >
                  STORY
                </Link>
              </div>

              <div className="flex items-center">
                <FaGamepad />
                <Link
                  className="ml-1 mr-5 hover:text-red-600"
                  href="/gameplay"
                  onClick={toggleModal}
                >
                  GAMEPLAY
                </Link>
              </div>

              <div className="flex items-center">
                <FaUserGroup />
                <Link
                  className="ml-1 mr-5 hover:text-red-600"
                  href="/characters"
                  onClick={toggleModal}
                >
                  CHARACTERS
                </Link>
              </div>
            </ul>
            {/* Social media icons */}
            <div className="flex justify-left mt-6 space-x-4">
              <a className='hover:opacity-80 duration-150' href="https://store.steampowered.com/app/1571090/BEAST_CRIMES/">
                <FaSteam className="text-red-700" size="2em" />
              </a>
              <a className='hover:opacity-80 duration-150' href="https://www.tiktok.com/@beast.crimes">
                <FaTiktok className="text-red-700" size="2em" />
              </a>
              <a className='hover:opacity-80 duration-150' href="https://www.youtube.com/@BEASTCRIMES">
                <FaYoutube className="text-red-700" size="2em" />
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}