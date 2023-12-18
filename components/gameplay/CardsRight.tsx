import React from 'react';

const CardsRight = (props) => {
  return (
    <div className="rounded overflow-hidden lg:mt-8 lg:mr-52">
    <div className="text-center lg:text-left">
      <div className="text-red-800 font-black uppercase text-3xl mb-2">{props.title}</div>
      <p className="text-gray font-base text-lg">
       {props.description}
      </p>
      <ul className='mt-4 text-red-800 font-bold text-lg space-y-2'>
        <li>{props.list1}</li>
        <li>{props.list2}</li>
        <li>{props.list3}</li>
        <li>{props.list4}</li>
        <li>{props.list5}</li>
        <li>{props.list6}</li>
      </ul>
    </div>
    <div className="mb-7 pt-4 pb-2 text-center md:mb-0">
    </div>
  </div>
  );
};

export default CardsRight;
