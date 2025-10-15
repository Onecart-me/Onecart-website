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
    <section
      style={{
        backgroundImage: 'var(--bg-hero-section)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        isolation: 'isolate',
      }}
      className='md:rounded-3xl px-10'
    >
      <div className='md:block hidden py-10'>
        <ImageTextStrip
          title='How it works?'
          contents={[
            'Tap In & Tune In',
            <div key='content-1'>
              <p className='font-bold text-[#570059] underline text-lg md:text-xl'>
                Chat, Bid, Buy
              </p>
              <p className='text-[#000000] md:w-3/5 mx-auto font-inter mt-2'>
                Jump into a live room that catches your eye. Ask questions in
                the chat, watch close-up product reveals, and place instant bids
                or fixed-price grabs with a single swipe. Secure checkout
                happens right inside the stream, so you never miss a beat.
              </p>
            </div>,
            'Pocket the Goods',
          ]}
          imageSrc='/images/chat-bid-buy.png'
          imageWidth={600}
          imageHeight={600}
          onNext={onNext}
          onPrev={onPrev}
          currentIndex={currentIndex}
          total={total}
        />
      </div>
      <div className='md:hidden block py-10'>
        <ImageTextStrip
          title='How it works?'
          contents={[
            <div key='content-1'>
              <p className='font-bold text-[#570059] underline text-lg md:text-xl'>
                Chat, Bid, Buy
              </p>
              <p className='text-[#000000] md:w-3/5 mx-auto font-inter mt-2'>
                Jump into a live room that catches your eye. Ask questions in
                the chat, watch close-up product reveals, and place instant bids
                or fixed-price grabs with a single swipe. Secure checkout
                happens right inside the stream, so you never miss a beat.
              </p>
            </div>,
          ]}
          imageSrc='/images/chat-bid-buy.png'
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
