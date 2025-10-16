'use client';

import { BUYER_FAQ_SCHEMA } from '@/utils/constants';
import { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const BuyerFaq = () => {
  const [showFaq, setShowFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setShowFaq((prevId) => (prevId === id ? null : id));
  };

  return (
    <section>
      <div className='grid w-full mt-5 gap-6'>
        {BUYER_FAQ_SCHEMA.map((r, i) => (
          <motion.div
            key={i}
            layout
            transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
            className='bg-[#FFFFFF] shadow-md p-4 border border-[#EBEBEB] rounded-xl cursor-pointer'
            onClick={() => toggleFaq(i)}
          >
            {/* Question Section */}
            <div className='flex justify-between items-center'>
              <p className='font-inter text-[#0F0F0F] text-base md:text-lg'>
                {r.question}
              </p>
              {showFaq === i ? (
                <IoChevronUp className='text-[#570059] text-xl' />
              ) : (
                <IoChevronDown className='text-[#570059] text-xl' />
              )}
            </div>

            {/* Animated Answer Section */}
            <AnimatePresence>
              {showFaq === i && (
                <motion.div
                  key='content'
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className='overflow-hidden mt-3'
                >
                  <p className='text-[#303030] text-sm leading-relaxed font-inter'>
                    {r.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BuyerFaq;
