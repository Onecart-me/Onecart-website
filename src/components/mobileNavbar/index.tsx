'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_SCHEMA } from '@/utils/constants';

interface MobileNavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavbar({ isOpen, setIsOpen }: MobileNavbarProps) {
  const pathname = usePathname();

  return (
    <section className='md:hidden fixed inset-0 z-50 bg-white flex flex-col justify-start pt-6 overflow-y-auto'>
      <nav className='py-4 px-6'>
        <div className='flex justify-between items-center mb-8'>
          <Image src='/onecart-logo.png' alt='logo' width={50} height={50} />
          <button
            onClick={() => setIsOpen(false)}
            className='text-2xl text-[#890D8B] font-bold'
          >
            ✕
          </button>
        </div>

        <div className='flex flex-col items-center gap-8 text-[#000000] font-inter'>
          {NAV_SCHEMA.map(({ name, link }) => (
            <Link
              key={name}
              href={link}
              onClick={() => setIsOpen(false)} // close menu on click
              className={`py-2 text-lg ${
                pathname === link
                  ? 'border-b-2 border-[#890D8B] font-semibold text-[#890D8B]'
                  : 'hover:text-[#890D8B] text-[#000000]'
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
}
