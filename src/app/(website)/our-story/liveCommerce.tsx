import React from 'react';
import Image from 'next/image';

const LiveCommerce = () => {
  return (
    <section className='md:mb-4'>
      <div className='grid md:grid-flow-col justify-between md:gap-5 md:mt-0 mt-9'>
        <Image
          src='/images/live-commerce.png'
          alt='creative-image'
          width={529}
          height={561}
          className='md:block hidden'
        />
        <Image
          src='/images/live-commerce-mobile.png'
          alt='creative-image'
          width={529}
          height={561}
          className='md:hidden block'
        />
        <div className='md:mt-28 md:ml-20'>
          <span>
            <Image
              src='/images/live-commerce-image.png'
              alt='live-broadcast'
              width={164}
              height={264}
              className='md:block hidden'
            />
          </span>
          <div className='grid justify-center md:justify-normal md:p-0 p-3 mx-auto  md:text-justify text-center'>
            <h5 className='text-[#570059] font-inter font-bold  text-lg md:text-3xl'>
              {' '}
              Live Commerce
            </h5>
            <p className='mt-4 font-inter md:w-9/12'>
              We gathered a small team of developers, designers, and
              live-commerce veterans who’d felt the same frustrations firsthand.
              Over countless late-night coding sessions (fueled by flat whites
              and pizza), we built features to solve real problems.
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

export default LiveCommerce;
