import Cards from '../../components/home/Cards'
import NeoTokyo from '../../public/img/NeoTokyo.jpg';
import AncientEgypt from '../../public/img/AncientEgypt.jpg';
import Century from '../../public/img/21stCentury.jpg';

export default function Story() {
    return ( 
      <><div id='Story' className='lg:mt-44 sm:mt-4 md:mt-16'>
         <h1 className='text-center text-red-800 text-4xl font-black'>
          STORY
        </h1>
      </div><div className="sm:p-0 lg:p-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <Cards image={NeoTokyo} title='NEO TOKYO' />
      <Cards image={AncientEgypt} title='ANCIENT EGYPT' />
      <Cards image={Century} title='21ST CENTURY'/>
        </div></>
  )
}