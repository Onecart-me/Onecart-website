'use client';

import { Button } from '@/components/Button';
import ContactModal from '@/components/contactModal';
import React, { useState } from 'react';

const ContactUs = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <section className='px-4 mb-4'>
      <div
        style={{
          backgroundImage: 'var(--bg-contact-section)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='rounded-2xl px-10'
      >
        <div className='grid justify-center mx-auto py-10'>
          <h5 className='text-[#000000] font-semibold font-inter md:text-2xl'>
            Get in Touch with Onecart
          </h5>
          <Button
            size={'sm'}
            variant={'primary'}
            className='text-[#FCFCFD] font-inter cursor-pointer font-bold bg-[#890D8B] rounded-xl py-3 mt-7'
            onClick={handleOpenModal}
          >
            Contact Us →
          </Button>
        </div>
      </div>
      {openModal && (
        <ContactModal
          member={{ name: 'Contact Us' }}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default ContactUs;
