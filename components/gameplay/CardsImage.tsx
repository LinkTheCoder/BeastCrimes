import React from 'react';
import Image from 'next/image';

const CardsImage = (props) => {
  return (
    <div className="rounded overflow-hidden">
    <div>
    <Image src={props.image} alt="..." className="mx-auto lg:max-w-lg sm:max-w-full mt-14" />
    </div>
    <div className="mb-7 pb-2 text-center md:mb-0">
    </div>
  </div>
  );
};

export default CardsImage;
