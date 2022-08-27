import React from 'react'

import Liyue from '../assets/Liyue.jpg';
import Mondstadt from '../assets/Mondstadt.jpg';
import Inazuma from '../assets/Inazuma.png';
import Sumeru from '../assets/Sumeru.jpg';
import IceWorld from '../assets/IceWorld.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1 id="World">A Wast Open World</h1>
        <p className='py-4'>Several Continents To Explore</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='rounded-lg w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Mondstadt} alt="/" />
            <img className='rounded-lg w-full h-full object-cover' src={Liyue} alt="/" />
            <img className='rounded-lg w-full h-full object-cover' src={Inazuma} alt="/" />
            <img className='rounded-lg w-full h-full object-cover' src={Sumeru} alt="/" />
            <img className='rounded-lg w-full h-full object-cover' src={IceWorld} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations