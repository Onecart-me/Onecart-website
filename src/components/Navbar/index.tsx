'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_SCHEMA } from '@/utils/constants';
import { Button } from '../GenericButton';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <section className='md:block hidden sticky px-4 top-0 z-50 pt-2 '>
      <nav className=' border border-[#890D8B33] bg-[#FFF2FF80] rounded-xl py-2 px-10 '>
        <div className='grid grid-flow-col justify-between gap-3 items-center'>
          <Image src='/onecart-logo.png' alt='logo' width={50} height={50} />

          <div className='grid grid-flow-col text-[#000000] items-center font-inter gap-16'>
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

            <button
              style={{ color: '#fff' }}
              className='font-inter !text-white font-bold rounded-xl py-3 px-5 bg-[linear-gradient(91.9deg,#DD0CED_-5.47%,#890D8B_24.94%,#701C8F_63.75%,#403B98_96.79%)]'
            >
              Dashboard Login
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}
