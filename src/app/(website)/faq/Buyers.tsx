'use client';

import { BUYER_FAQ_SCHEMA, FAQ_SCHEMA } from '@/utils/constants';
import { useState } from 'react';
import React from 'react';

const BuyerFaq = () => {
  const [showFaq, setShowFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setShowFaq((prevId) => (prevId === id ? null : id));
  };
  return (
    <section className=''>
      <div className=''>
        <div className='grid w-full mt-5  gap-6 '>
          {BUYER_FAQ_SCHEMA.map((r, i) => {
            return (
              <div key={i} className=' grid rounded-2xl'>
                <div className='grid grid-flow-col justify-between'>
                  <p className=' font-inter text-[#0F0F0F]'>{r.question}</p>
                  {/* <span onClick={() => toggleFaq(i.id)}>
                    {showFaq === i.id ? (
                      <Icon type={ICONS.minus_icon} size={25} color='black' />
                    ) : (
                      <Icon type={ICONS.plus_icon} size={25} color='black' />
                    )}
                  </span> */}
                </div>
                {showFaq && (
                  <div>
                    <p className='text-black opacity-100 '>{r.answer}</p>
                  </div>
                )}
                <hr className='mt-4' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuyerFaq;
