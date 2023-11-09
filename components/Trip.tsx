import { PEOPLE_URL } from '@/constants';
import Image from 'next/image'
import React from 'react'

interface ITripProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const TripSite = ({ backgroundImage, title, subtitle, peopleJoined }: ITripProps) => {
  return <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl cursor-pointer`}>
    <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
      <div className='flexCenter gap-4'>
        <div className='rounded-full bg-green-50 p-4'>
          <Image
            src='/folded-map.svg'
            width={28}
            height={28}
            alt='map' 
          />
        </div>
        <div className='flex flex-col gap-1'>
          <h4 className='bold-18 text-white'>{title}</h4>
          <p className='regular-16 text-white'>{subtitle}</p>
        </div>
      </div>
      <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url)=>(
              <Image
                src={url}
                key={url}
                alt='person'
                width={52}
                height={52}
                className='inline-block h-10 w-10 rounded-full'
              />
            ))}
          </span>
          <p className='bold-16 md:bold-20 text-white'>{peopleJoined}</p>
      </div>
    </div>
  </div>
}

const Trip = () => {
  return (
    <section className='2xl:max-container flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-10 relative'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <TripSite 
          backgroundImage='bg-bg-img-1'
          title='Why do we use it?'
          subtitle='NCR, Gurugram'
          peopleJoined='60+ Joined'
        />
        <TripSite 
          backgroundImage='bg-bg-img-2'
          title='Where can I get some?'
          subtitle='Surat, Gujarat'
          peopleJoined='90+ Joined'
        />        
      </div>
      <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'><strong>Exploring the World: </strong> A Journey of Discovery.</h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>Traveling is not just about moving from one place to another; it's a journey of discovery, an opportunity to explore new horizons and cultures, and a chance to create memories that last a lifetime. As travelers, we embark on adventures that take us beyond our comfort zones, open our minds to new perspectives, and connect us with people and places we might have never encountered otherwise.</p>
          <Image 
            src='/quote.svg'
            alt='Trip'
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  )
}

export default Trip