'use client';

import React, { useState } from 'react';
import SellerFaq from './Sellers';
import BuyerFaq from './Buyers';
export default function Faq() {
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');

  return (
    <section className='grid gap-3 mb-4'>
      <div className='px-10 mt-5'>
        <h5 className='font-inter font-bold  text-lg md:text-4xl'>
          Frequently Asked Questions
        </h5>
        <p className='mt-3'>
          We have provided the answers for your questions below
        </p>
        <div className='grid grid-cols-2 gap-5 mt-5'>
          <button
            onClick={() => setActiveTab('buyer')}
            className={`py-3 rounded-2xl cursor-pointer font-semibold transition-all duration-300 ${
              activeTab === 'buyer'
                ? 'bg-[#890D8B] text-white'
                : 'text-[#8C8C8C] border border-[#E6E6E6]'
            }`}
          >
            Buyers
          </button>
          <button
            onClick={() => setActiveTab('seller')}
            className={`py-3 rounded-2xl font-semibold cursor-pointer transition-all duration-300 ${
              activeTab === 'seller'
                ? 'bg-[#890D8B] text-white'
                : 'text-[#8C8C8C] border border-[#E6E6E6]'
            }`}
          >
            Sellers
          </button>
        </div>
        {/* Conditional Display */}
        <div className='mt-8'>
          {activeTab === 'buyer' ? <BuyerFaq /> : <SellerFaq />}
        </div>
      </div>
    </section>
  );
}
