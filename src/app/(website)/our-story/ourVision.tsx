import React from 'react';
import Image from 'next/image';

const OurVision = () => {
  return (
    <section className='px-4'>
      <div className='bg-[#890D8B0D] rounded-2xl py-4'>
        <div className='grid md:grid-cols-2'>
          <div className=' relative p-8'>
            <h5 className='text-[#890D8B] font-bold font-inter text-[2.5rem] w-8/12'>
              Our Vision
            </h5>
            <p className='font-medium font-inter text-[#000000] mt-2 w-9/12'>
              Onecart empowers passionate individuals to trade in real time —
              where buyers become sellers, sellers become buyers, and {''}
              <span className='font-bold text-[#000000] '>
                every transaction is a live, dynamic experience.
              </span>
            </p>
          </div>
          <div className='relative'>
            <span>
              <Image
                src='/images/our-vision.png'
                alt='team-hero'
                width={474}
                height={365}
                className=''
              />
            </span>
            <span className='absolute bottom-0 left-96 '>
              <Image
                src='/images/mask-group.png'
                alt='group-hero'
                width={350}
                height={391}
                className=''
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
