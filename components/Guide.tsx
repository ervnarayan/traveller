import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24'>
        <Image
          src='/camp.svg'
          alt='Trip'
          width={50}
          height={50}
        />
        <p className='uppercase regular-18 mt-2 mb-3 text-green-50'>Where does it come from?</p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guide You Easy Path</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        </div>
      </div>
      <div className='flexCenter max-container relative w-full'>
        <Image 
          src='/boat.png'
          alt='boat'
          width={1440}
          height={580}
          className='w-full object-cover object-center 2xl:rounded-5xl'
        />
        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <Image 
            src='/meter.svg'
            alt='meter'
            width={16}
            height={158}
            className='h-full w-auto'
          />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-green-50'>58 min</p>
              </div>
              <p className='bold-20 mt-2'>NCR, Gurugram</p>
            </div>
            <div className='flex w-full flex-col'>
                <p className='regular-16 text-gray-20'>Start Track</p>
                <h4 className='bold-20 mt-2 whitespace-nowrap'>Noida</h4>
            </div>            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide