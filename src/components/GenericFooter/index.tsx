import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerSectionSchema } from '@/utils/constants';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const GenericFooter = () => {
  return (
    <section className='bg-[#FAFAFA]'>
      <div className='py-10'>
        <div className='grid md:grid-flow-col  grid-cols-2 justify-between gap-2 px-10'>
          {footerSectionSchema.map((r, i) => (
            <div key={r.title} className=' grid gap-5 lg:mt-0 mt-5'>
              <h6 className='font-bold font-inter text-lg text-[#000000]'>
                {r.title}
              </h6>
              <div className='grid gap-4 text-[#000000] font-inter pt-2'>
                <ul className='space-y-3'>
                  {r.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
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
      <div className='grid md:grid-flow-col py-5 justify-between items-center px-10'>
        <Image src='/onecart-logo.png' alt='logo' height={50} width={50} />
        <h6 className='text-sm font-inter'>
          Copyrights @ 2025 Privacy Policy Terms and Conditions
        </h6>
        <div className='grid grid-flow-col gap-4 items-center '>
          <FaTwitter />
          <FaLinkedin />
          <FaFacebook />
        </div>
      </div>
    </section>
  );
};
export default GenericFooter;
