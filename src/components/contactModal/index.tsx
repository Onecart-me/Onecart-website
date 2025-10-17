'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface Member {
  name: string;
  description?: string;
}

interface ContactModalProps {
  member: Member | null;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ member, onClose }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: '',
  });
  if (!member) return null;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    alert('Thank you! Your message has been sent.');
    onClose();
  };

  return (
    <section
      className='fixed inset-0 z-50 flex items-center md:px-0 px-3 justify-center bg-[rgba(0,0,0,0.3)] backdrop-blur-sm'
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className='relative bg-white rounded-2xl shadow-2xl p-3 md:p-8 md:mt-0 mt-4  md:max-w-2xl mx-auto text-center flex flex-col items-center'
      >
        <button
          onClick={onClose}
          className='absolute top-3  right-3 text-gray-600 hover:text-black text-xl font-bold'
        >
          ✕
        </button>

        <form
          onSubmit={handleSubmit}
          className=' justify-between md:gap-7 w-full text-left font-inter'
        >
          <div className='grid md:grid-cols-2  md:gap-7'>
            <div>
              <div className='grid  gap-1 '>
                <h5 className='text-[#000000] font-semibold font-inter text-2xl md:text-4xl '>
                  Contact Us!
                </h5>
                <p className='text-[#8C8C8C]  text-sm font-inter font-medium '>
                  So our team can reach out to you on time
                </p>
              </div>
              {/* Full Name */}
              <div className='grid md:mt-3 gap-1'>
                <label
                  htmlFor='fullname'
                  className='text-lg font-inter font-medium text-[#000000]'
                >
                  Full Name
                </label>
                <input
                  id='fullname'
                  name='fullname'
                  type='text'
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder='eg: John Doe'
                  required
                  className='border border-[#EEF4FF] bg-[#F9F9F9] rounded-lg p-2 focus:outline-none focus:border-[#890D8B]'
                />
              </div>

              {/* Email */}
              <div className='grid gap-1'>
                <label
                  htmlFor='email'
                  className='text-lg font-inter font-medium text-[#000000]'
                >
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter your email'
                  required
                  className='border border-[#EEF4FF] bg-[#F9F9F9] rounded-lg p-2 focus:outline-none focus:border-[#890D8B]'
                />
              </div>

              {/* Phone Number */}
              <div className='grid mt-3 gap-1'>
                <label
                  htmlFor='phone'
                  className='text-lg font-inter font-medium text-[#000000]'
                >
                  Phone Number
                </label>
                <PhoneInput
                  country={'ng'}
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  inputClass='border !border-[#EEF4FF] !bg-[#F9F9F9]  !rounded-lg p-2 focus:outline-none focus:border-[#EEF4FF]'
                  containerClass='relative w-full'
                  inputProps={{
                    required: true,
                    name: 'phone',
                    id: 'phone',
                  }}
                />
              </div>
            </div>
            <div>
              <div className='grid gap-1 mt-10 md:mt-20'>
                <label
                  htmlFor='message'
                  className='text-sm font-medium text-gray-700'
                >
                  Share your message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=' message'
                  required
                  className='border border-[#EEF4FF] w-full  bg-[#F9F9F9] rounded-lg p-2 w-[303px] h-[183px] resize-none focus:outline-none focus:border-[#890D8B]'
                ></textarea>
              </div>
            </div>
          </div>
          <div className='grid grid-flow-col justify-between'>
            <p className='font-inter text-sm mt-5 text-[#8C8C8C]'>
              In addition to the form, please send an  email to {''}
              <span className='text-[#890D8B]'>pratik@onecart.me</span>
            </p>
            {/* Submit Button */}
            <button
              type='submit'
              className='bg-[#890D8B] text-white py-2 mt-20 cursor-pointer  px-5 rounded-lg hover:bg-[#701C8F] transition font-semibold'
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactModal;
