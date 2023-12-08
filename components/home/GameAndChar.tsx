import Cards from '../../components/home/CardsInfo'
import NeoTokyo from '../../public/img/NeoTokyo.jpg';
import Characters from '../../public/img/Characters.png';
import Gameplay from '../../public/img/Gameplay.png';

export default function GameAndChar() {
    return ( 
      <><div id='Gameplay' className='mt-10 lg:mt-6'>
      </div><div id='Characters' className="sm:p-0 lg:p-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
      <Cards image={Gameplay} title='GAMEPLAY' description='MODERN ESCAPE ROOMS TO CLASSIC CRIMINAL DEDUCTION' />
      <Cards image={Characters} title='CHARACTERS' description='OVER 50 ANIMALS SPECIES TO MEET'/>
        </div></>
  )
}