import React from 'react';
import Image from 'next/image';

const AboutTeam = () => {
  return (
    <section className='px-4 pt-3'>
      <div className='bg-[linear-gradient(168.94deg,#DD0CED_1.55%,#890D8B_30.45%,#701C8F_67.32%,#403B98_98.7%)] rounded-2xl py-4 p-5'>
        <div className='grid grid-flow-col justify-between'>
          <div className=' p-7'>
            <h5 className='text-[#FFFFFF] font-bold font-inter text-[2.5rem] w-1/2'>
              “More than a team — we’re Onecart.”
            </h5>
            <p className='font-medium font-inter text-[#FFFFFF] mt-5 w-1/2'>
              From vision to execution, our team is dedicated to building
              seamless experiences for buyers and sellers worldwide.
            </p>
          </div>

          <span>
            <Image
              src='/images/about-hero.png'
              alt='team-hero'
              width={539}
              height={354}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
