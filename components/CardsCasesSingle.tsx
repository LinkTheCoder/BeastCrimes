import React from 'react';
import Image from 'next/image';

const CasesCards = (props) => {
  return (
    <div className="rounded overflow-hidden mx-auto max-w-2xl"> {/* Adjust mx-auto for centering and my-10 for vertical margin */}
      <div className="px-10 py-8 text-center border-red-800"> {/* Increase px-10 for larger horizontal padding */}
        <Image src={props.image} unoptimized alt="" className="rounded border-2 border-red-800 mx-auto mb-6" /> {/* Increase mb-6 for larger bottom margin */}
        <h1 className="text-center text-red-800 text-4xl font-black">{props.title}</h1>
        <p className="text-red-800 font-semibold mt-6"> {/* Increase mt-6 for larger top margin */}
          {props.description}
        </p>
      </div>
      <div className="px-6 pb-2 text-center md:mb-0">
      </div>
    </div>
  );
};

export default CasesCards;
