import Cards from '../CardsCases'
import CardsSingle from '../CardsCasesSingle'
import Dealings from '../../public/img/Dealings.png';
import Gluttony from '../../public/img/Gluttony.png';
import Bombastic from '../../public/img/Bombastic.png';

export default function Cases() {
    return ( 
      <><div className='lg:mt-24 mt-4 md:mt-16'>
        <h1 className='text-center text-red-800 text-4xl font-black'>
          CASES
        </h1>
      </div><div className="sm:p-0 lg:p-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
      <Cards image={Gluttony} title='GREEDY GLUTTONY' description='A mysterious food poisoning happens at the towns local coffee shop. However when this also occurs at a restaurant nearby could this really be a coincidence?' />
      <Cards image={Dealings} title='DANGEROUS DEALINGS' description="It is 1 year ago since Sasha's girlfriend Paz throw herself in front of a train. However a secret witness tells Sasha it was not a accident, that instead it was someone who pushed her. . "/>
        </div>
        
      <div className="sm:p-0 grid grid-cols-1 gap-5">
      <CardsSingle image={Bombastic} title='BOMBASTIC BARRAGE' description="Tick. . . Tock. . . Bom. Several years ago Bion's mother died in a bombing. However the real truth behind his mother death might be better to remain unsolved. . ." />
        </div>
        </>
  )
}