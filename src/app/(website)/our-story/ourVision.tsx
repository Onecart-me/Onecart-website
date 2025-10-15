import React from 'react';
import Image from 'next/image';

const OurVision = () => {
  return (
    <section className='px-4'>
      <div className='bg-[#890D8B0D] rounded-2xl md:py-10'>
        <div className='grid md:grid-flow-col justify-between'>
          <div className=' relative p-8'>
            <h5 className='text-[#890D8B]  grid  md:justify-start justify-center font-bold font-inter  text-lg md:text-[2.5rem] md:w-8/12'>
              Our Vision
            </h5>
            <p className='font-medium md:text-left text-center font-inter md:text-2xl text-[#000000] md:mt-9 md:w-10/12'>
              Onecart empowers passionate individuals to trade in real time —
              where buyers become sellers, sellers become buyers, and {''}
              <span className='font-bold text-[#000000] '>
                every transaction is a live, dynamic experience.
              </span>
            </p>
          </div>
          <div className=''>
            <span>
              <Image
                src='/images/our-vision.png'
                alt='team-hero'
                width={580}
                height={406}
                className='md:ml-16 '
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
