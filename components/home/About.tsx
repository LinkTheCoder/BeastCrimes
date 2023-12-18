import React from 'react';
import Image from 'next/image';
import Seiko from '../../public/img/Seiko.png';

const About = () => {

  return (
    <div id='about' className='md:mt-64 relative lg:mt-24 mx-auto py-16 px-4 bg-[url(/img/BG.gif)] bg-cover'>
      <div className='absolute inset-0 flex items-center'>
        <div>
          <Image src={Seiko} alt='' className='ml-5 mt-14 w-2/4 hidden lg:block' />
        </div>
      </div>
      <div className='mt-9 max-w-3xl text-center mx-auto relative z-10'>
        <h1 className='pt-5 text-white text-4xl font-bold drop-shadow-[0_2.0px_3.0px_rgba(0,0,0,0.8)] text-stroke'>
          ABOUT
        </h1>
        <p className='py-4 text-white font-semibold text-xl leading-10 text-stroke drop-shadow-[0_2.0px_3.0px_rgba(0,0,0,0.8)]'>
          Embark on a thrilling journey through the annals of time in this beastly crime investigation drama that transcends
          the boundaries of eras. Immerse yourself in the mysteries of three distinct time periods. The distant past of
          Ancient Egypt, the bustling present of the 21st century, and the futuristic landscape of Neo Tokyo!
        </p>
        <p className='mt-2 lg:mt-20 py-4 text-white font-bold text-3xl drop-shadow-[0_2.0px_3.0px_rgba(0,0,0,0.8)] text-stroke'>
          ‘The past, present, and future await your investigation!’
        </p>
      </div>
    </div>
  );
};

export default About;