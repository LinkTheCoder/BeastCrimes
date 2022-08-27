import React from 'react'

import Quest from '../assets/Quest.jpg';
import Craft from '../assets/Craft.jpg';
import Cooking from '../assets/Cooking.webp';
import Fishing from '../assets/Fishing.jpg';
import Dungeon from '../assets/Dungeon.jpg';
import Events from '../assets/Events.jpg';
import SelectsCard from './SelectsCard';



const Selects = () => {
  return (

      <><h1 className='text-center mt-7 max-w-[1240px] mx-auto grid gap-4 px-4 py-3 lg:col-span-2 flex flex-col justify-evenly' id="Features">Many Features</h1>

      <div className='max-w-[1240px] mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

      <SelectsCard bg={Quest} text='Quest' />
      <SelectsCard bg={Craft} text='Craft' />
      <SelectsCard bg={Cooking} text='Cooking' />
      <SelectsCard bg={Fishing} text='Fishing' />
      <SelectsCard bg={Dungeon} text='Dungeon' />
      <SelectsCard bg={Events} text='Events' />


    </div></>
  )
}

export default Selects