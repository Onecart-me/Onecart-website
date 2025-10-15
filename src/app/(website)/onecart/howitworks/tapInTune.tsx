'use client';
import React from 'react';
import ImageTextStrip from '@/components/imageTextStrip';

interface SectionNavProps {
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  total?: number;
}
const TapInTune = ({
  onNext,
  onPrev,
  currentIndex,
  total,
}: SectionNavProps) => {
  return (
    <section className=''>
      <div
        style={{
          backgroundImage: 'var(--bg-hero-section)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          isolation: 'isolate',
        }}
        className=' hidden md:block py-10 md:rounded-3xl p-4 md:px-0 '
      >
        <ImageTextStrip
          title='How it works?'
          showTitleOnMobile
          contents={[
            <div key='content-1'>
              <p className='font-bold text-[#570059] underline text-lg md:text-xl'>
                Tap In & Tune In
              </p>
              <p className='text-[#000000] md:w-3/5 mx-auto font-inter mt-2'>
                Download the OneCart app, sign up in seconds, and open the Live
                Feed. You’ll in a buzzing marketplace of real-time shows where
                sellers demo everything from street-style sneakers to
                limited-edition collectibles—all streaming live from across the
                UK.
              </p>
            </div>,
            'Chat, Bid, Buy',
            'Pocket the Goods',
          ]}
          imageSrc='/images/how-it-works.png'
          imageWidth={600}
          imageHeight={600}
          onNext={onNext}
          onPrev={onPrev}
          currentIndex={currentIndex}
          total={total}
        />
      </div>
      <div className='md:hidden block py-10 md:px-0 '>
        <ImageTextStrip
          title='How it works?'
          showTitleOnMobile
          contents={[
            <div key='content-1'>
              <p className='font-bold text-[#570059] underline text-lg md:text-xl'>
                Tap In & Tune In
              </p>
              <p className='text-[#000000] md:w-3/5 mx-auto font-inter mt-2'>
                Download the OneCart app, sign up in seconds, and open the Live
                Feed. You’ll in a buzzing marketplace of real-time shows where
                sellers demo everything from street-style sneakers to
                limited-edition collectibles—all streaming live from across the
                UK.
              </p>
            </div>,
          ]}
          imageSrc='/images/how-it-works.png'
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

export default TapInTune;
