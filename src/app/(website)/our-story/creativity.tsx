import React from 'react';
import Image from 'next/image';

const Creativity = () => {
  return (
    <section className=''>
      <div className='grid md:grid-flow-col justify-between gap-5'>
        <Image
          src='/images/creative-image.png'
          alt='creative-image'
          width={529}
          height={561}
          className='md:block hidden'
        />
        <Image
          src='/images/creative-image-mobile.png'
          alt='creative-image'
          width={529}
          height={561}
          className='md:hidden block'
        />
        <div className='md:pt-64'>
          <span>
            <Image
              src='/images/live-broadcast.png'
              alt='live-broadcast'
              width={164}
              height={264}
              className=' md:block hidden'
            />
          </span>
          <div className='grid md:justify-normal justify-center md:p-0 p-5 md:text-justify md:mt-4  text-center'>
            <h5 className='text-[#570059] font-inter font-bold md:text-3xl'>
              {' '}
              Hustle Meets Creativity
            </h5>
            <p className='mt-4 font-inter md:w-9/12'>
              It all began in Manchester, when our founder Pratik started
              reselling products on Depop and Vinted. It started in a small
              bedroom in a shared apartment, flipping limited-edition sneakers,
              vintage clothes, and accessories. At first, it was about buying
              cheaply from discount sales and then selling — first for money,
              then for passion.{' '}
            </p>
          </div>
        </div>
        <Image
          src='/images/Scribble.png'
          alt='creative-image'
          width={236}
          height={489}
          className='md:block hidden'
        />
      </div>
    </section>
  );
};

export default Creativity;
