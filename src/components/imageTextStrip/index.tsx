'use client';

import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
  IoArrowDown as RawIoArrowDown,
  IoArrowUp as RawIoArrowUp,
  IoEllipse,
  IoEllipseOutline,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

// --- Icon wrapper ---
const Icon = ({
  icon: IconComponent,
  ...props
}: { icon: IconType } & React.ComponentProps<'svg'>) => (
  <IconComponent {...props} />
);

export interface ImageTextProps {
  title: string;
  contents: (ReactNode | string)[];
  showTitleOnMobile?: boolean;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  imageWidth: number;
  imageHeight: number;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  total?: number;
}

const ImageTextStrip = ({
  title,
  showTitleOnMobile,
  contents,
  imageSrc,
  imageAlt = 'Section image',
  imageWidth,
  imageHeight,
  onNext,
  onPrev,
  currentIndex = 0,
  total = 3,
}: ImageTextProps) => {
  return (
    <div className='flex flex-col-reverse md:grid md:grid-cols-2 justify-between items-center'>
      <div className='grid grid-flow-col items-center'>
        <motion.div
          key={`image-${currentIndex}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='z-0'
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            style={{
              objectFit: 'cover',
              height: '100%',
              mixBlendMode: 'multiply',
            }}
            className='mix-blend-multiply md:mt-0 mt-7 opacity-90 rounded-2xl select-none'
            priority
          />
        </motion.div>
        {/* === NAVIGATOR === */}

        <div
          style={{ position: 'relative', zIndex: 100 }}
          className='md:grid hidden grid-flow-row bg-[#890D8B] items-center h-24 p-1 rounded-3xl ml-auto'
        >
          <Icon
            icon={RawIoArrowUp}
            className='text-white w-3 h-3 cursor-pointer z-10 hover:scale-110 transition-transform'
            onClick={onPrev}
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
            className='text-white w-3 h-3 cursor-pointer z-10 hover:scale-110 transition-transform'
            onClick={onNext}
          />
        </div>
      </div>
      <div className='grid grid-flow-col items-center'>
        <div>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className='grid gap-9 justify-center text-center'
          >
            {title && (
              <h5
                className={`${
                  showTitleOnMobile ? 'grid' : 'hidden md:grid'
                } mx-auto font-inter text-[#570059] font-bold text-2xl md:text-3xl`}
              >
                {title}
              </h5>
            )}
            {contents.map((item, index) => (
              <div
                key={index}
                className='grid gap-2 justify-center text-center'
              >
                <IoCheckmarkCircleOutline className='w-14 h-14 mx-auto text-[#890D8B]' />
                <p className='font-inter text-lg  md:text-xl text-[#570059] mx-auto'>
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextStrip;
