import React from 'react';
import Wallpaper from '../assets/Wallpaper.mp4';
import { SiEpicgames } from "react-icons/si";
import { BsFillCloudLightningFill,BsPlayFill} from "react-icons/bs";
import {
  FaGooglePlay,
  FaAppStore,
  FaWindows,
} from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={Wallpaper}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>Welcome Traveler,</h1>
        <h2 className='py-4'>Begin your journey through multiple portals!</h2>

        <div className="flex justify-center items-center m-6">
					<a href="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=sv&gl=US" className="mx-3 hover:opacity-80 duration-150">
					<FaGooglePlay size="3em"/>
					</a>
          <a href="https://apps.apple.com/us/app/genshin-impact/id1517783697" className="mx-3 hover:opacity-80 duration-150">
					<FaAppStore size="3em"/>
					</a> 
          <a href="https://apps.apple.com/us/app/genshin-impact/id1517783697" className="mx-3 hover:opacity-80 duration-150">
					<SiEpicgames size="3em"/>
					</a> 
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
					<FaWindows size="3em"/>
					</a>   
          <a href="https://www.nvidia.com/sv-se/geforce-now/#" className="mx-3 hover:opacity-80 duration-150">
					<BsFillCloudLightningFill size="3em"/>
					</a>    
					</div>

          <div>
          <button class="m-2 inline-block align-middle bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-2 rounded-full border border-white">
          <BsPlayFill size="2em"/>
</button>
    </div>
    </div>
    </div>
  );
};

export default Hero;
