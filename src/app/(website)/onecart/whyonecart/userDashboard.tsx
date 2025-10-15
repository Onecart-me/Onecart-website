'use client';
import React from 'react';
import HeroImageTextStrip from '@/components/HeroImageTextStrip';

interface SectionNavProps {
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  total?: number;
}

const UserDashboard = ({
  onNext,
  onPrev,
  currentIndex,
  total,
}: SectionNavProps) => {
  return (
    <section className='md:bg-[linear-gradient(0deg,rgba(137,13,139,0)_-77.08%,rgba(137,13,139,0.08)_100%)] rounded-3xl '>
      <div className=' md:block hidden py-10 md:p-0 p-5'>
        <HeroImageTextStrip
          title='Why OneCart?'
          showTitleOnMobile
          contents={[
            <div key='content-1'>
              <p className='font-bold text-[#570059] underline  text-lg md:text-xl'>
                All in one Dashboard
              </p>
              <p className='text-[#000000] md:w-3/5 mx-auto font-inter mt-2'>
                Our dashboard identifies market patterns, projects likely trends
                from historical and real-time data, and presents a detailed view
                of sales and other key metrics with transparent methods and
                assumptions.
              </p>
            </div>,
            'Best finds and starting with as low as £1',
            'Exclusive Access',
          ]}
          imageSrc='/images/dashboard-image.png'
          textPosition='left'
          imageWidth={3600}
          imageHeight={800}
          onNext={onNext}
          onPrev={onPrev}
          currentIndex={currentIndex}
          total={total}
        />
      </div>
      <div className='block md:hidden p-5'>
        <HeroImageTextStrip
          title='Why OneCart?'
          showTitleOnMobile
          contents={[
            <div key='content-1'>
              <p className='font-bold text-[#570059] underline text-lg'>
                All in one Dashboard
              </p>
              <p className='text-[#000000] mx-auto font-inter mt-2'>
                Our dashboard identifies market patterns, projects likely trends
                from historical and real-time data, and presents a detailed view
                of sales and other key metrics with transparent methods and
                assumptions.
              </p>
            </div>,
          ]}
          imageSrc='/images/dashboard-image-mobile.png'
          textPosition='left'
          imageWidth={600}
          imageHeight={400}
          onNext={onNext}
          onPrev={onPrev}
          currentIndex={currentIndex}
          total={total}
        />
      </div>
    </section>
  );
};

export default UserDashboard;
