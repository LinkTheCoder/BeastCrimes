import Cards from '../CardsCases'
import Revenge from '../../public/img/RevengefulRide.png';
import Escape from '../../public/img/EverlastingEcsape.png';

export default function Cases() {
    return ( 
      <><div className='lg:mt-24 mt-8 md:mt-16'>
        <h1 className='text-center text-red-800 text-4xl font-black'>
          CASES
        </h1>
      </div><div className="sm:p-0 lg:p-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
      <Cards image={Escape} title='EVERLASTING ESCAPE' description='Seiko and three other orphans are kidnapped to a remote research lab called Hotel Jiyū. Their awaits a deadly elimination game. . .' />
      <Cards image={Revenge} title='REVENGEFUL RIDE' description=' Two suicides occurs on the shinkansen train from New Sydney to Neo Tokyo. A coincidence or a revenge from the past? '/>
        </div></>
  )
}