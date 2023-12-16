import React from 'react';
import Image from 'next/image';

const CasesCards = (props) => {
  return (
    <div className="rounded overflow-hidden ">
      <div className="px-6 py-4 text-center  border-red-800">
        <Image src={props.image} unoptimized alt="" className="rounded border-2 border-red-800 mx-auto mb-5" />
        <h1 className="text-center text-red-800 text-4xl font-black">{props.title}</h1>
        <p className="text-red-800 font-semibold mx-8 mt-4 lg:mx-20">
       {props.description}
      </p>
      </div>
      <div className="px-6 pb-2 text-center md:mb-0">
      </div>
    </div>
  );
};

export default CasesCards;
