'use client';
import React from 'react';
import HeroImageTextStrip from '@/components/HeroImageTextStrip';

interface SectionNavProps {
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  total?: number;
}
const ExcluciveAccess = ({
  onNext,
  onPrev,
  currentIndex,
  total,
}: SectionNavProps) => {
  return (
    <section className='md:bg-[linear-gradient(0deg,rgba(137,13,139,0)_-77.08%,rgba(137,13,139,0.08)_100%)] rounded-3xl '>
      <div className=' hidden md:block py-10 md:p-0 p-5'>
        <HeroImageTextStrip
          title='Why OneCart?'
          contents={[
            'AI-Powered Dashboard',
            'Best finds and starting with as low as £1',
            <div key='content-1'>
              <p className='font-bold text-[#570059] underline  text-lg md:text-xl'>
                Exclusive Access
              </p>
              <p className='text-[#000000]  md:w-3/5 mx-auto font-inter mt-2'>
                Enjoy exciting giveaways and exclusive product drops at the
                lowest prices during our live streaming events. Shop in real
                time and grab limited deals.
              </p>
            </div>,
          ]}
          imageSrc='/images/exclusive-access.png'
          textPosition='left'
          imageWidth={600}
          imageHeight={600}
          onNext={onNext}
          onPrev={onPrev}
          currentIndex={currentIndex}
          total={total}
        />
      </div>
      <div className=' md:hidden block py-10 md:p-0 p-5'>
        <HeroImageTextStrip
          title='Why OneCart?'
          contents={[
            <div key='content-1'>
              <p className='font-bold text-[#570059] underline  text-lg md:text-xl'>
                Exclusive Access
              </p>
              <p className='text-[#000000]  md:w-3/5 mx-auto font-inter mt-2'>
                Enjoy exciting giveaways and exclusive product drops at the
                lowest prices during our live streaming events. Shop in real
                time and grab limited deals.
              </p>
            </div>,
          ]}
          imageSrc='/images/exclusive-access.png'
          textPosition='left'
          imageWidth={600}
          imageHeight={600}
          onNext={onNext}
          onPrev={onPrev}
          currentIndex={currentIndex}
          total={total}
        />
      </div>
    </section>
  );
};

export default ExcluciveAccess;
