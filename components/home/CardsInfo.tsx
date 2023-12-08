import React from 'react';
import Image from 'next/image';

const CardsInfo = (props) => {
  return (
    <div className="rounded overflow-hidden ">
      <div className="px-6 py-4 text-center  border-red-800">
      <h1 className="text-center text-red-800 text-4xl font-black">{props.title}</h1>
        <Image src={props.image} unoptimized alt="" className="mt-8 mx-auto mb-5" />
        <p className="text-red-800 font-semibold">
       {props.description}
      </p>
      </div>
      <div className="px-6 pb-2 text-center md:mb-0">
      </div>
    </div>
  );
};

export default CardsInfo;
