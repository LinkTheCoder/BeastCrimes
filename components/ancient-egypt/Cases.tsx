import Cards from '../CardsCases'
import CardsSingle from '../CardsCasesSingle'
import Enigma from '../../public/img/EarlinessEnigma.png';
import Hound from '../../public/img/HellishHound.png';
import Sisterhood from '../../public/img/Sisterhood.png';

export default function Cases() {
    return ( 
      <><div className='lg:mt-24 mt-4 md:mt-16'>
        <h1 className='text-center text-red-800 text-4xl font-black'>
          CASES
        </h1>
      </div><div className="sm:p-0 lg:p-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
      <Cards image={Hound} title='HELLISH HOUND' description='Villagers has recently been hearing strange sounds from the tombs. It seems someone is eating the flesh out of the deceased. . .' />
      <Cards image={Enigma} title='EARLINESS ENIGMA' description='Thoth is determine to become a god of wisdom. However one day during dawn his master suddenly dies without any logical explanations. . .'/>
        </div>
        
      <div className="sm:p-0 grid grid-cols-1 gap-5">
      <CardsSingle image={Sisterhood} title='SISTERHOOD SACRIFICES' description='One sister is the ruler of upper Egypt, the other the lower Egypt. One night a head of a gazelle is floating in a river in the middle of the lands. . .
' />
        </div>
        </>
  )
}