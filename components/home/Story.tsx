import Cards from './Cards'
import NeoTokyo from '../../public/img/NeoTokyo.jpg';
import AncientEgypt from '../../public/img/AncientEgypt.jpg';
import Century from '../../public/img/Century.png';

export default function Story() {
    return ( 
      <><div id='story' className='lg:mt-44 sm:mt-4 md:mt-16'>
         <h1 className='text-center text-red-800 text-4xl font-black'>
          STORY
        </h1>
      </div><div className="sm:p-0 lg:p-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
     
      <Cards image={NeoTokyo} title='NEO TOKYO' link='/neo-tokyo'/>
      <Cards image={AncientEgypt} title='ANCIENT EGYPT' link='/ancient-egypt'/>
      <Cards image={Century} title='21ST CENTURY'link='/21st-century'/>
        </div></>
  )
}