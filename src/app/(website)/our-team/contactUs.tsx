import { Button } from '@/components/GenericButton';
import React from 'react';

const ContactUs = () => {
  return (
    <section className='px-4'>
      <div
        style={{
          backgroundImage: 'var(--bg-contact-section)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='rounded-3xl px-10'
      >
        <div className='grid justify-center mx-auto py-10'>
          <h5 className='text-[#000000] font-semibold font-inter md:text-2xl'>
            Get in Touch with Onecart
          </h5>
          <Button
            size={'sm'}
            variant={'primary'}
            className='text-[#FCFCFD] font-inter font-bold bg-[#890D8B] rounded-xl py-3 mt-7'
          >
            Contact Us →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
