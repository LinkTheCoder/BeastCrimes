import React from 'react';
import Characters from '../assets/Characters.png';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid gap-4 px-4 py-3 text-center'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2 id="Characters" className='text-red-800'>Characters</h2>
          <p className='py-4 text-white text-center'>
          All kinds of animals
          </p>
          <img className='mt-6 content-center' src={Characters} width='1200' alt="/" />

        </div>
      </div>

      <div>
          </div>
          </div>
  );
};

export default Search;
