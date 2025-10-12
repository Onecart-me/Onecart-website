'use client';

import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
  IoArrowDown as RawIoArrowDown,
  IoArrowUp as RawIoArrowUp,
  IoEllipse,
  IoEllipseOutline,
} from 'react-icons/io5';
import { IconType } from 'react-icons';

// Wrap react-icons so TypeScript treats them as JSX components
const Icon = ({
  icon: IconComponent,
  ...props
}: { icon: IconType } & React.ComponentProps<'svg'>) => (
  <IconComponent {...props} />
);

export interface ImageTextProps {
  title: string;
  contents: (ReactNode | string)[];
  imageSrc: string | StaticImageData; // can be a path or an import
  imageAlt?: string;
  textPosition?: 'left' | 'right';
  imageWidth: number;
  imageHeight: number;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  total?: number;
}

const HeroImageTextStrip = ({
  title,
  contents,
  imageSrc,
  imageAlt = 'Section image',
  textPosition = 'left',
  imageWidth,
  imageHeight,
  onNext,
  onPrev,
  currentIndex = 0,
  total = 3,
}: ImageTextProps) => {
  return (
    <div className='grid md:grid-cols-2 justify-between items-center'>
      <div className='grid grid-flow-col items-center'>
        <div>
          <div className='grid gap-9 justify-center text-center'>
            <h5 className='grid mx-auto font-inter text-[#570059] font-bold text-3xl'>
              {title}
            </h5>
            {contents.map((item, index) => (
              <div
                key={index}
                className='grid gap-2 justify-center text-center'
              >
                <p className='font-inter text-[#000000] mx-auto'>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='hidden md:block'>
          <div
            style={{ position: 'relative', zIndex: 50 }}
            className='grid grid-flow-row  bg-[#890D8B] items-center h-24 p-1 rounded-3xl ml-auto'
          >
            <Icon
              icon={RawIoArrowUp}
              className='text-white w-3 h-3 cursor-pointer z-10'
              onClick={() => onPrev?.()}
            />
            {Array.from({ length: total }).map((_, i) =>
              i === currentIndex ? (
                <span key={i}>
                  <IoEllipse className='text-white w-3 h-3' />
                </span>
              ) : (
                <span key={i}>
                  <IoEllipseOutline className='text-white w-3 h-3' />
                </span>
              )
            )}

            <Icon
              icon={RawIoArrowDown}
              className='text-white w-3 h-3 cursor-pointer z-10'
              onClick={() => onNext?.()}
            />
          </div>
        </div>
      </div>

      <div
        className={`flex justify-center ${
          textPosition === 'right' ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          style={{ objectFit: 'cover', height: '100%' }}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    </div>
  );
};

export default HeroImageTextStrip;
//
