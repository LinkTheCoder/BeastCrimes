import React from 'react'
import '../index.css';
import Video from '../assets/Video.mp4';

const Trailer = () => {
  return (
    <div className=' max-w-[1240px] mx-auto py-16 px-4 text-center'>

<h1 className='mb-10 text-red-800 text-center mt-7 max-w-[1240px] mx-auto grid gap-4 px-4 py-3 lg:col-span-2 flex flex-col justify-evenly' id="Trailer">Trailer</h1>
    <video className='mx-auto rounded-lg' controls autoPlay muted width="80%">
    <source src={Video} type="video/mp4" />
    Sorry, your browser doesn't support videos.
    </video>
    </div>
  );
};

export default Trailer