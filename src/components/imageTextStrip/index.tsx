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

// --- Icon Wrapper ---
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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-10 md:gap-16 overflow-hidden'
    >
      {/* === IMAGE SECTION === */}
      <motion.div
        key={`image-${currentIndex}`}
        initial={{ opacity: 0, scale: 0.95, x: -40 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='relative flex justify-center px-6 md:px-0'
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          style={{ objectFit: 'cover', height: '100%' }}
          className='rounded-3xl shadow-lg md:mt-0 mt-7 opacity-95 mix-blend-multiply select-none'
          priority
        />
        {/* === Vertical Navigator === */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='hidden md:grid grid-flow-row bg-[#890D8B] items-center h-24 p-1 rounded-3xl absolute right-[-3rem] top-1/2 -translate-y-1/2 shadow-md'
        >
          <Icon
            icon={RawIoArrowUp}
            className='text-white w-4 h-4 cursor-pointer hover:scale-110 transition-transform'
            onClick={onPrev}
          />
          <div className='flex flex-col items-center gap-[2px]'>
            {Array.from({ length: total }).map((_, i) =>
              i === currentIndex ? (
                <IoEllipse key={i} className='text-white w-3 h-3' />
              ) : (
                <IoEllipseOutline key={i} className='text-white w-3 h-3' />
              )
            )}
          </div>
          <Icon
            icon={RawIoArrowDown}
            className='text-white w-4 h-4 cursor-pointer hover:scale-110 transition-transform'
            onClick={onNext}
          />
        </motion.div>
      </motion.div>
      {/* === TEXT SECTION === */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className='grid gap-8 justify-center text-center px-6 md:px-0'
      >
        {title && (
          <motion.h5
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              showTitleOnMobile ? 'grid' : 'hidden md:grid'
            } mx-auto font-inter text-[#570059] font-bold text-2xl md:text-3xl`}
          >
            {title}
          </motion.h5>
        )}

        <motion.div
          className='grid gap-8'
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {contents.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='grid gap-2 justify-center text-center'
            >
              <IoCheckmarkCircleOutline className='w-12 h-12 mx-auto text-[#890D8B]' />
              <p className='font-inter text-[#570059] mx-auto leading-relaxed'>
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ImageTextStrip;
