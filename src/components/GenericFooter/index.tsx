import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerSectionSchema } from '@/utils/constants';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const GenericFooter = () => {
  return (
    <section className='bg-[#FAFAFA]'>
      <div className='py-10'>
        <div className='grid  md:grid-cols-4 md:gap-60 grid-cols-2 gap-20 md:px-10 px-5 '>
          {footerSectionSchema.map((r, i) => (
            <div key={r.title} className=' grid gap-5 lg:mt-0 mt-5'>
              <h6 className='font-bold font-inter text-lg text-[#000000]'>
                {r.title}
              </h6>
              <div className='grid gap-4 text-[#000000] font-inter pt-2'>
                <ul className='space-y-3 '>
                  {r.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="relative transition-colors duration-200 hover:text-[#890D8B] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className='grid md:grid-flow-col py-5 justify-between  gap-2 items-center md:px-10 px-5'>
        <Image src='/onecart-logo.png' alt='logo' height={50} width={50} />
        <h6 className='text-sm font-inter'>
          Copyrights @ 2025 | Privacy Policy | Terms and Conditions
        </h6>
        <div className='grid grid-flow-col text-[#890D8B] w-max md:gap-3 gap-4 items-center '>
          <FaTwitter className='w-5 h-12' />
          <FaLinkedin className='w-5 h-12' />
          <FaFacebook className='w-5 h-12' />
        </div>
      </div>
    </section>
  );
};
export default GenericFooter;
