import React from 'react';
import Image from 'next/image';

const PassionSelling = () => {
  return (
    <section className=''>
      <div className=' flex flex-col-reverse md:grid md:grid-flow-col justify-between gap-5 md:mt-0 -mt-32'>
        <Image
          src='/images/curve.png'
          alt='creative-image'
          width={109}
          height={101}
        />
        <div className='md:pt-80 md:mt-0 -mt-20  md:p-0 p-5'>
          <h5 className='text-[#570059] font-inter grid justify-center md:justify-end  md:mr-16 font-bold text-lg md:text-3xl'>
            {' '}
            Passion selling
          </h5>
          <p className='mt-4 font-inter md:w-9/12 grid justify-center text-center md:justify-end md:ml-40'>
            Onecart was started by Pratik and his friends as there was high
            trend on reselling market. Recent nationally reported estimates
            suggest 39% to 47% of UK adults report running a side hustle in
            2025, indicating roughly 2 in 5 to 1 in 2 adults supplement income
            beyond a primary job
          </p>
        </div>
        <Image
          src='/images/passion-screen.png'
          alt='creative-image'
          width={1966}
          height={984}
          className='md:block hidden'
        />
        <Image
          src='/images/passion-screen-mobile.png'
          alt='creative-image'
          width={1966}
          height={584}
          className='md:hidden block '
        />
      </div>
    </section>
  );
};

export default PassionSelling;
