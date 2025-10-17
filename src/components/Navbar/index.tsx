'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_SCHEMA } from '@/utils/constants';
import { useState } from 'react';
import MobileNavbar from '../mobileNavbar';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='sticky px-4 top-0 z-50 pt-2 '>
      <nav className=' border border-[#890D8B33] bg-[#890D8B33] rounded-xl py-2 px-5 md:px-10 '>
        <div className='grid grid-flow-col justify-between gap-3 items-center'>
          <Image src='/onecart-logo.png' alt='logo' width={50} height={50} />
          <div className='md:block hidden'>
            <div className='grid grid-flow-col  text-[#000000] items-center font-inter gap-16'>
              {NAV_SCHEMA.map(({ name, link }) => (
                <Link
                  key={name}
                  href={link}
                  className={`py-2 font-inter cursor-pointer ${
                    pathname === link
                      ? 'border-b-2 border-[#890D8B] font-semibold text-[#890D8B]'
                      : 'hover:text-[#890D8B] text-[#000000]'
                  }`}
                >
                  {name}
                </Link>
              ))}
              <Link href='/'>
                <button className='font-inter text-white cursor-pointer hover:bg-fuchsia-900 font-bold rounded-xl py-3 px-5 bg-[linear-gradient(91.9deg,#DD0CED_-5.47%,#890D8B_24.94%,#701C8F_63.75%,#403B98_96.79%)]'>
                  Dashboard Login
                </button>
              </Link>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className='md:hidden flex ml-auto text-3xl text-black md:pb-2'
          >
            <GiHamburgerMenu />
          </button>
        </div>
        {isOpen && <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}
      </nav>
    </section>
  );
}
