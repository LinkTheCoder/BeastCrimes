import React from 'react';
import Wallpaper from '../assets/HeroImage.png';
import {BsPlayFill} from "react-icons/bs";
import {
  FaSteam,
  FaDiscord,
} from 'react-icons/fa';


const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <img
        className='w-full h-full object-cover'
        src={Wallpaper}
      />
      <div className='absolute w-full h-full top-0 left-0 bg-black/30'></div>
      <div className='absolute bottom-20 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h2 id="outline" className='py-4'>Are you able to solve crimes regardless the outcome?</h2>

        <div className="flex justify-center items-center m-6">
					<a href="https://store.steampowered.com/app/1571090/Beast_Crimes/" className="mx-3 hover:opacity-80 duration-150">
					<FaSteam size="3em"/>
					</a>
          <a href="https://discord.gg/ZHhcMFAG2s" className="mx-3 hover:opacity-80 duration-150">
					<FaDiscord size="3em"/>
					</a>   
					</div>

          <div>
          <a href="#Trailer">
          <button class="m-2 inline-block align-middle bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-2 rounded-full border border-white">
          <BsPlayFill size="2em"/>
</button>
</a>
    </div>
    </div>
    </div>
    
  );
};

export default Hero;
