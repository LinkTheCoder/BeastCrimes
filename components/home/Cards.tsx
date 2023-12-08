import React from 'react';
import Image from 'next/image';

const Cards = (props) => {
  return (
    <div className="rounded overflow-hidden">
      <div className="px-6 py-4 text-center">
        <Image src={props.image} unoptimized alt="" className="rounded border-2 border-red-800 mx-auto mb-5" />
        <div className="text-red-800 font-medium text-3xl">{props.title}</div>
      </div>
      <div className="px-6 pb-2 text-center md:mb-0">
      </div>
    </div>
  );
};

export default Cards;
