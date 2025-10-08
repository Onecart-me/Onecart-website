import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import { IoCheckmarkCircle, IoCheckmarkCircleOutline } from 'react-icons/io5';

export interface ImageTextProps {
  title: string;
  content1: ReactNode | string;
  content2: ReactNode | string;
  content3: ReactNode | string;
  externalTranslation?: boolean;
  imageSrc: string | StaticImageData; // can be a path or an import
  imageAlt?: string;
  textPosition: 'left' | 'right';
  imageWidth: number;
  imageHeight: number;
}

const ImageTextSrip = ({
  title,
  content1,
  content2,
  content3,
  imageSrc,
  imageAlt,
  textPosition = 'right',
  imageWidth,
  imageHeight,
}: ImageTextProps) => {
  return (
    <div className='grid md:grid-cols-2 justify-between items-center gap-6 md:gap-20 lg:py-10'>
      <div
        className={`grid grid-flow-row gap-4 ${
          textPosition === 'right' ? 'order-2' : 'order-1'
        }`}
      >
        <h5 className=' grid justify-center mx-auto font-inter font-bold text-3xl'>
          {title}
        </h5>
        <div className=' grid gap-2 justify-center text-center mx-auto'>
          <IoCheckmarkCircleOutline className='w-10 h-10 ' />
          <p className='font-inter underline'>{content1}</p>
        </div>
        <div className=' grid gap-2 justify-center mx-auto'>
          <IoCheckmarkCircleOutline className='w-10 h-10 ' />
          <p className='font-inter font-bold text-[#570059] '>{content2}</p>
          <p className='grid text-center font-inter'>{content3}</p>
        </div>
        <div className=' grid gap-2 justify-center mx-auto'>
          <IoCheckmarkCircleOutline className='w-10 h-10 ' />
          <p className='font-inter'></p>
        </div>
      </div>
      <div
        className={`${textPosition === 'right' ? 'md:order-1' : 'md:order-2'}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    </div>
  );
};

export default ImageTextSrip;
