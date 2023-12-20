"use client"

import CardsRight from '../../components/gameplay/CardsRight';
import CardsLeft from '../../components/gameplay/CardsLeft';
import React from 'react';
import CardsImage from './CardsImage';
import Gameplay from '../../public/img/Gameplay.png';
import GameplayPast from '../../public/img/Gameplay_Past.png';
import GameplayPresent from '../../public/img/Gameplay_Present.png';

const Features = () => {
  return (
    <div>
      <h1 className="mt-10 text-center text-red-800 text-4xl font-black lg:mt-32">GAMEPLAY</h1>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
       
        <div>
          <CardsImage image={Gameplay} className="lg:order-first md:order-last" />
        </div>
        <div>
          <CardsRight title='Future deduction'
            list1='🗯️ CROSS-EXAMINATION: Interrogate your suspect'
            list2='🔓 CLUE TREE: Collect clues and unlock new ones with the Clue Tree'
            list3='💀 REAPER: Your choices decide which persons are going to die and when'
            list4='🔐 ESCAPE ROOMS: Solve puzzles and escape deadly rooms'
            list5='📊 RANKING SYSTEM: Track and improve your different skills'
            list6='🕒 CLOCK: Decied what to do during mornings, afternoons, evenings and nights'
          />
        </div>

        <div className='md:hidden block'>
<CardsImage image={GameplayPast} />
</div>
        <div>
          <CardsLeft title='Past mysterium'
            list1='⚖️ SCALE OF JUSTICE: Your choice of questions and their answers will decide the fate'
            list2='🔓 THE EYE OF WISDOM: See the true thoughts of people who are lying'
            list3='🩸 DOWSING ROD: Use a dowsing rod to find body parts.'
            list4="😈 EMOTION DETECTOR: Observe people's true emotions"
          />
        </div>
        <div className='hidden md:block'>
<CardsImage image={GameplayPast} />
</div>

<div>
          <CardsImage image={GameplayPresent} className="lg:order-first md:order-last" />
        </div>
        <div>
          <CardsRight title='Modern science'
            list1='👁️‍🗨️ INVESTIGATION: Study the surrounding and find clues.'
            list2='📝 JOURNAL: Collect information about characters'
            list3='💼 INVENTORY: Organize all evidences'
            list4='🗺️ MAPS: Solve puzzles and escape deadly rooms'
            list5='🗣️ INTERROGATE: Battle of wits, argument and prove who is behind the crimes'
          />
        </div>

      </div>
    </div>
  );
};

export default Features;
