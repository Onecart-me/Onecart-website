'use client';
import React from 'react';
import HeroImageTextStrip from '@/components/HeroImageTextStrip';
import ImageTextStrip from '@/components/imageTextStrip';

interface SectionNavProps {
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  total?: number;
}
const PocketTheGoods = ({
  onNext,
  onPrev,
  currentIndex,
  total,
}: SectionNavProps) => {
  return (
    <section
      style={{
        backgroundImage: 'var(--bg-hero-section)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        isolation: 'isolate',
      }}
      className='rounded-3xl px-10'
    >
      <div className='py-10 md:px-0 px-5'>
        <ImageTextStrip
          title='How it works?'
          contents={[
            'AI-Powered Dashboard',
            <div key='content-1'>
              <p className='font-bold text-[#570059] underline text-xl'>
                Best finds and starting with as low as £1
              </p>
              <p className='text-[#000000] w-3/5 mx-auto font-inter mt-2'>
                Explore a wide range of trendy outfits and must-have
                accessories. Find unbeatable deals that make fashion both
                affordable and accessible.
              </p>
            </div>,
            'Exclusive Access',
          ]}
          imageSrc='/images/payment.png'
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

export default PocketTheGoods;
