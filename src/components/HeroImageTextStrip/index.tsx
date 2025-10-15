'use client';

import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
  IoArrowDown as RawIoArrowDown,
  IoArrowUp as RawIoArrowUp,
  IoEllipse,
  IoEllipseOutline,
} from 'react-icons/io5';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

// Wrap react-icons so TypeScript treats them as JSX components
const Icon = ({
  icon: IconComponent,
  ...props
}: { icon: IconType } & React.ComponentProps<'svg'>) => (
  <IconComponent {...props} />
);

export interface ImageTextProps {
  title?: string;
  showTitleOnMobile?: boolean;
  contents: (ReactNode | string)[];
  imageSrc: string | StaticImageData;
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
  showTitleOnMobile,
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='grid md:grid-cols-2 justify-between items-center'
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className='grid grid-flow-col items-center'
      >
        <div>
          <div className='grid gap-9 justify-center text-center'>
            {title && (
              <motion.h5
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`${
                  showTitleOnMobile ? 'grid' : 'hidden md:grid'
                } mx-auto font-inter text-[#570059] font-bold text-2xl md:text-3xl`}
              >
                {title}
              </motion.h5>
            )}

            {contents.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='grid gap-2 justify-center text-center'
              >
                <p className='font-inter text-[#000000] mx-auto'>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical navigation control */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className='hidden md:block'
        >
          <div
            style={{ position: 'relative', zIndex: 50 }}
            className='grid grid-flow-row bg-[#890D8B] items-center h-24 p-1 rounded-3xl ml-auto'
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
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: textPosition === 'right' ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className={`flex justify-center py-10 ${
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
      </motion.div>
    </motion.div>
  );
};

export default HeroImageTextStrip;
