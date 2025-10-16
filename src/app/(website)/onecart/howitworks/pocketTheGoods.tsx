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
    <section className=''>
      <div
        style={{
          backgroundImage: 'var(--bg-hero-section)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          isolation: 'isolate',
        }}
        className=' md:block md:rounded-3xl p-4 hidden py-10 md:px-0 px-5'
      >
        <ImageTextStrip
          title='How it works?'
          contents={[
            'Tap In & Tune In',
            'Chat, Bid, Buy',
            <div key='content-1'>
              <p className='font-bold text-[#570059] underline text-xl'>
                Pocket the Goods
              </p>
              <p className='text-[#000000] md:w-3/5 mx-auto font-inter mt-2'>
                Win the drop? Nice one. Your order is automatically confirmed,
                securely paid, and shipped to your doorstep. Track it in the app
                while you hop into the next show—because the thrill of the hunt
                never sleeps on OneCart.
              </p>
            </div>,
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
      <div className=' md:hidden block py-10 md:px-0 px-5'>
        <ImageTextStrip
          title='How it works?'
          contents={[
            <div key='content-1'>
              <p className='font-bold text-[#570059] underline  text-lg md:text-xl'>
                Pocket the Goods
              </p>
              <p className='text-[#000000] md:w-3/5 mx-auto  text-lg md:text-xl font-inter mt-2'>
                Win the drop? Nice one. Your order is automatically confirmed,
                securely paid, and shipped to your doorstep. Track it in the app
                while you hop into the next show—because the thrill of the hunt
                never sleeps on OneCart.
              </p>
            </div>,
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
