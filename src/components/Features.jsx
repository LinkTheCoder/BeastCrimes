import React from 'react'

import Investigate from '../assets/Investigate.png';
import Interrogate from '../assets/Interrogate.png';
import Map from '../assets/Map.png';
import Skills from '../assets/Skills.png';
import Inventory from '../assets/Inventory.png';
import Journal from '../assets/Journal.png';
import FeaturesCard from './FeaturesCard';



const Features = () => {
  return (

      <><h1 className='text-red-800 text-center mt-7 max-w-[1240px] mx-auto grid gap-4 px-4 py-3 lg:col-span-2 flex flex-col justify-evenly' id="Features">Features</h1>
      <p className='py-4 text-white text-center'>
          A few things included
          </p>
      <div className='max-w-[1240px] mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

      <FeaturesCard bg={Investigate} text='Investigate' />
      <FeaturesCard bg={Interrogate} text='Interrogate' />
      <FeaturesCard bg={Map} text='Maps' />
      <FeaturesCard bg={Skills} text='Skills' />
      <FeaturesCard bg={Inventory} text='Inventory' />
      <FeaturesCard bg={Journal} text='Journal' />

    </div></>
  )
}

export default Features