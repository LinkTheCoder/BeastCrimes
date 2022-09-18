import React from 'react'
import '../index.css';

import GunFloor from '../assets/GunFloor.png';
import Bite from '../assets/Bite.png';
import Lobby from '../assets/Lobby.png';
import RailWay from '../assets/RailWay.png';
import Fire from '../assets/Fire.png';

const Cases = () => {
  return (
    <div className='mt-20 max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1 id="Cases" className='text-red-800'>Cases</h1>
        <p className='py-4 text-white'>From the far future to the distant past</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='rounded-lg w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Bite} alt="/" />
            <img className='rounded-lg w-full h-full object-cover' src={GunFloor} alt="/" />
            <img className='rounded-lg w-full h-full object-cover' src={Lobby} alt="/" />
            <img className='rounded-lg w-full h-full object-cover' src={RailWay} alt="/" />
            <img className='rounded-lg w-full h-full object-cover' src={Fire} alt="/" />
        </div>
    </div>
  )
} 

export default Cases