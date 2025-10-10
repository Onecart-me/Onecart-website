import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OUR_TEAM_SCHEMA } from '@/utils/constants';
import { Button } from '@/components/GenericButton';

const MeetOurTeam = () => {
  return (
    <section className='bg-[#FAFAFA]'>
      <div className='px-20 py-10'>
        <div className='grid gap-5'>
          <h5 className='text-[#890D8B] font-semibold font-inter border border-[#890D8B] px-4 py-4 w-40 '>
            Meet Our Team
          </h5>
          <p className='font-semibold font-inter text-3xl text-[#890D8B]'>
            Passionate. Proactive. Expert.
          </p>
          <p className='font-inter '>
            We lead with care, our core value and a shared passion for
            connecting with world.
          </p>
        </div>
        <div className=' grid grid-cols-4 gap-8 mt-4 w-full'>
          {OUR_TEAM_SCHEMA.map((r, i) => {
            return (
              <div key={i}>
                <Image
                  className='mt-8 rounded-2xl'
                  src={r.image}
                  alt='pratik'
                  width={258}
                  height={318}
                />
                <div className='grid grid-flow-col mt-4 items-center w-max gap-11'>
                  <p className='text-[#000000] font-medium text-lg w-[181px]'>
                    {r.name}
                  </p>
                  <Link href={r.link}>
                    <Image
                      src='/images/linkedin.png'
                      alt='pratik'
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
                <p className='text-[#696969] font-inter'>{r.role}</p>
                <Button
                  className='text-[#890D8B] rounded-2xl border border-[#890D8B] py-2 px-3 mt-2 mx-auto'
                  size={'sm'}
                  variant={'primary'}
                >
                  View Profile →
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
