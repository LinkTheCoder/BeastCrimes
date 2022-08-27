import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://genshinimpact.wiki.fextralife.com/file/Genshin-Impact/albedo-character-portrait-genshin-impact-wiki-guide-300px.png',
  },
  {
    url: 'https://genshinimpact.wiki.fextralife.com/file/Genshin-Impact/aloy-character-portrait-genshin-impact-wiki-guide-300px.png',
  },
  {
    url: 'https://genshinimpact.wiki.fextralife.com/file/Genshin-Impact/arataki-itto-character-portrait-genshin-impact-wiki-guide-new-300px.png',
  },
  {
    url: 'https://genshinimpact.wiki.fextralife.com/file/Genshin-Impact/amber-character-portrait-genshin-impact-wiki-guide-300px.png',
  },
  {
    url: 'https://genshinimpact.wiki.fextralife.com/file/Genshin-Impact/barbara-character-portrait-genshin-impact-wiki-guide-300px.png',
  },
  {
    url: 'https://genshinimpact.wiki.fextralife.com/file/Genshin-Impact/beidou-character-portrait-genshin-impact-wiki-guide-300px.png',
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  // console.log(length)

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center itmes-center'>
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className='absolute top-[50%] text-3xl text-black cursor-pointer left-10'
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className='absolute top-[50%] text-3xl text-black cursor-pointer right-10'
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
          {index === slide && (
            <img className='w-full rounded-md' src={item.url} alt='/' />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
