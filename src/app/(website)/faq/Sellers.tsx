'use client';

import { FAQ_SCHEMA } from '@/utils/constants';
import { useState } from 'react';
import React from 'react';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';

const SellerFaq = () => {
  const [showFaq, setShowFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setShowFaq((prevId) => (prevId === id ? null : id));
  };
  return (
    <section className=''>
      <div className=''>
        <div className='grid w-full mt-5  gap-6 '>
          {FAQ_SCHEMA.map((r, i) => {
            return (
              <div
                key={i}
                className=' grid bg-[#FFFFFF] shadow-md p-3 border border-[#EBEBEB] rounded-xl'
              >
                <div
                  onClick={() => toggleFaq(i)}
                  className='grid grid-flow-col cursor-pointer justify-between'
                >
                  <p className=' font-inter text-[#0F0F0F]'>{r.question}</p>
                  {showFaq === i ? (
                    <IoChevronUp className='text-[#570059]  cursor-pointer text-xl md:mt-0 mt-1' />
                  ) : (
                    <IoChevronDown className='text-[#570059] cursor-pointer text-xl md:mt-0 mt-1' />
                  )}
                </div>
                {/* Answer Section */}
                {showFaq === i && (
                  <div className='mt-3 transition-all duration-300 ease-in-out'>
                    <p className='text-[#303030] text-sm cursor-pointer leading-relaxed font-inter'>
                      {r.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SellerFaq;
