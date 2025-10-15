import { ONECART_TIE_UP_SCHEMA } from '@/utils/constants';
import Image from 'next/image';
import React from 'react';

const OneCartTieUps = () => {
  return (
    <section className='px-3 md:-mt-7'>
      <div className=' rounded-3xl bg-[#FFF2FF80] mt-5 mb-5'>
        <div className='grid py-20 gap-4'>
          <h5 className='font-bold font-inter md:text-4xl mx-auto text-[#570059]'>
            Onecart Tie-ups
          </h5>
          <div className='grid md:grid-flow-col'>
            {ONECART_TIE_UP_SCHEMA.map((r, i) => {
              return (
                <div key={r.slug} className='grid grid-flow-col items-center'>
                  <div className='grid grid-flow-row items-center'>
                    <span className='grid mx-auto'>
                      <Image
                        src={r.image}
                        alt='view'
                        width={235}
                        height={235}
                      />
                    </span>
                    <div className='grid grid-flow-row item-center mt-4 gap-6'>
                      <h6 className='font-medium md:text-left text-center text-xl mt-6 text-[#570059] mx-auto '>
                        {r.slug}
                      </h6>
                      <h6 className='font-inter text-[#2B2B2B] text-center mx-auto md:w-2/3'>
                        {r.content}
                      </h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneCartTieUps;
