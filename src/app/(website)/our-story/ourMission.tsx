import React from 'react';
import Image from 'next/image';

const OurMission = () => {
  return (
    <section className='px-4 '>
      <div className='bg-[linear-gradient(168.94deg,_#DD0CED_1.55%,_#890D8B_30.45%,_#701C8F_67.32%,_#403B98_98.7%)] rounded-2xl py-4'>
        <div className='grid md:grid-cols-2'>
          <div className='md:ml-7'>
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
            <h5 className='text-[#FFFFFF] font-bold grid  justify-end font-inter text-[2.5rem] w-8/12'>
              Our Mission
            </h5>
            <p className='font-medium font-inter text-[#000000] mt-2 w-9/12'>
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
