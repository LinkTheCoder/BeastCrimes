import React from 'react';
import Wallpaper from '../assets/HeroImage.png';
import { BsFillCloudLightningFill,BsPlayFill} from "react-icons/bs";
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
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute bottom-20 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h2 id="outline" className='py-4'>Are you able to solve the crime whetever outcome?</h2>

        <div className="flex justify-center items-center m-6">
					<a href="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=sv&gl=US" className="mx-3 hover:opacity-80 duration-150">
					<FaSteam size="3em"/>
					</a>
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
					<FaDiscord size="3em"/>
					</a>   
          <a href="https://www.nvidia.com/sv-se/geforce-now/#" className="mx-3 hover:opacity-80 duration-150">
					<BsFillCloudLightningFill size="3em"/>
					</a>    
					</div>

          <div>
          <button class="m-2 inline-block align-middle bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-2 rounded-full border border-white">
          <BsPlayFill size="2em"/>
</button>
    </div>
    </div>
    </div>
  );
};

export default Hero;
