import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className='px-4 pt-3'>
      <div className='bg-[linear-gradient(118.91deg,_rgba(253,229,255,0.5)_4.36%,_rgba(253,166,255,0.2)_24.42%,_rgba(253,159,255,0.3)_43.8%,_rgba(221,12,237,0.1)_65.7%,_rgba(238,89,246,0.3)_91.72%,_rgba(137,13,139,0.3)_121.45%)]  rounded-2xl py-4 p-5'>
        <div className='grid md:grid-cols-2'>
          <div className=' relative p-5 pt-9'>
            <h5 className='text-[#890D8B] font-bold font-inter md:text-5xl md:w-10/12'>
              “Live Your Passion — Let the World Buy”
            </h5>
            <p className='font-medium font-inter text-[#000000] mt-7 md:w-8/12'>
              At Onecart we enable anyone to start commerce by simply following
              their passion.
            </p>
            <p className='font-medium font-inter text-[#890D8B] mt-7 md:w-1/2'>
              This is where passion meets commerce.
            </p>
            <span className='absolute -bottom-6 left-24 opacity-5'>
              <Image
                src='/images/story-box.png'
                alt='team-hero'
                width={463}
                height={354}
                className=''
              />
            </span>
          </div>

          <span>
            <Image
              src='/images/our-story.png'
              alt='team-hero'
              width={898}
              height={505}
              className='w-full h-full'
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
