'use client';
import ImageTextStrip from '@/components/imageTextStrip';
import React from 'react';

interface SectionProps {
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  total?: number;
}

const ChatBidBuy = ({ onNext, onPrev, currentIndex, total }: SectionProps) => {
  return (
    <section className='bg-[linear-gradient(0deg,rgba(137,13,139,0)_-77.08%,rgba(137,13,139,0.08)_100%)] rounded-3xl'>
      <div className='py-10'>
        <ImageTextStrip
          title='Chat, Bid & Buy'
          contents={[
            'AI-Powered Dashboard',
            <div key='content-1'>
              <p className='font-bold text-[#570059] underline text-xl'>
                Best finds starting from £1
              </p>
              <p className='text-[#000000] w-3/5 mx-auto font-inter mt-2'>
                Explore a wide range of trendy outfits and must-have
                accessories.
              </p>
            </div>,
            'Exclusive Access',
          ]}
          imageSrc='/images/best-finds.png'
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

export default ChatBidBuy;
