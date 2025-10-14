import React from 'react';
import Image from 'next/image';

const OurMission = () => {
  return (
    <section className='px-4 '>
      <div className='bg-[linear-gradient(168.94deg,_#DD0CED_1.55%,_#890D8B_30.45%,_#701C8F_67.32%,_#403B98_98.7%)] rounded-2xl py-6'>
        <div className='grid md:grid-cols-2 md:pt-10'>
          <div className='md:ml-9 -mb-6'>
            <span>
              <Image
                src='/images/happy-people.png'
                alt='team-hero'
                width={474}
                height={365}
                className=''
              />
            </span>
          </div>
          <div className='p-8'>
            <h5 className='text-[#FFFFFF] font-bold grid  md:justify-end justify-center font-inter text-lg md:text-[2.5rem] md:w-8/12'>
              Our Mission
            </h5>
            <p className='font-medium font-inter text-center text-[#FFFFFF] mt-2 md:w-9/12'>
              To enable real-time commerce that blurs the line between buying
              and selling, creating global opportunities for anyone to monetize
              their passion and build vibrant communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
