import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';
import Characters from '../assets/Characters.png';
import Profiles from '../assets/Profiles.jpg';
import Carousel from '../components/Carousel';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-3'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2 id="Characters">Exciting Characters</h2>
          <p className='py-4'>
          From Bards To Warriors
          </p>
          <Carousel />

        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
          </div>
        </div>
      </div>

      <div>
      <img className='mt-6' src={Profiles} alt="/" />
          </div>
          </div>
  );
};

export default Search;
