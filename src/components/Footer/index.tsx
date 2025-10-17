'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerSectionSchema } from '@/utils/constants';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#FAFAFA] text-[#000000] font-inter'>
      {/* Footer Columns */}
      <div className='py-12 md:px-16 px-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-56'>
          {footerSectionSchema.map((section) => (
            <div key={section.title} className='space-y-4'>
              <h6 className='font-semibold text-lg text-[#890D8B]'>
                {section.title}
              </h6>
              <ul className='space-y-3 mt-5'>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="relative transition-colors duration-200 hover:text-[#890D8B] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#890D8B] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className='border-[#E6E6E6]' />
      {/* Footer Bottom */}
      <div className='flex flex-col md:flex-row justify-between items-center py-6 md:px-16 px-6 gap-4'>
        <div className='flex items-center gap-2'>
          <Image
            src='/onecart-logo.png'
            alt='Onecart logo'
            height={40}
            width={40}
          />
        </div>
        <p className='text-sm text-center md:text-left text-[#555]'>
          © {new Date().getFullYear()} Onecart. All rights reserved. |{' '}
          <Link href='/privacy' className='hover:text-[#890D8B]'>
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href='/terms' className='hover:text-[#890D8B]'>
            Terms & Conditions
          </Link>
        </p>

        <div className='flex items-center gap-5 text-[#890D8B] text-xl'>
          <Link href='https://twitter.com' target='_blank' aria-label='Twitter'>
            <FaTwitter className='hover:scale-110 transition-transform duration-200' />
          </Link>
          <Link
            href='https://linkedin.com'
            target='_blank'
            aria-label='LinkedIn'
          >
            <FaLinkedin className='hover:scale-110 transition-transform duration-200' />
          </Link>
          <Link
            href='https://facebook.com'
            target='_blank'
            aria-label='Facebook'
          >
            <FaFacebook className='hover:scale-110 transition-transform duration-200' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
