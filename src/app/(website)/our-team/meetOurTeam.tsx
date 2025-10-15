'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OUR_TEAM_SCHEMA } from '@/utils/constants';
import { Button } from '@/components/GenericButton';
import TeamModal from '@/components/TeamModal';

interface Member {
  name: string;
  role: string;
  image: string;
  link: string;
  description?: string;
}

const MeetOurTeam = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (member: Member) => {
    setSelectedMember(member);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedMember(null);
  };

  return (
    <section className='bg-[#FAFAFA] relative'>
      <div className='grid md:px-20 px-5 py-10'>
        <div className='grid gap-5'>
          <h5 className='text-[#890D8B] font-semibold font-inter border border-[#890D8B] px-4 py-4 w-40'>
            Meet Our Team
          </h5>
          <p className='font-semibold font-inter text-3xl text-[#890D8B]'>
            Passionate. Proactive. Expert.
          </p>
          <p className='font-inter'>
            We lead with care, our core value and a shared passion for
            connecting with the world.
          </p>
        </div>
        <div className='grid md:grid-cols-4 md:justify-center md:gap-8 mt-4'>
          {OUR_TEAM_SCHEMA.map((r, i) => (
            <div key={i}>
              <Image
                className='mt-8 rounded-2xl w-full'
                src={r.image}
                alt={r.name}
                width={258}
                height={318}
              />
              <div className='grid grid-flow-col justify-between mt-4 items-center w-max gap-44 md:gap-20'>
                <p className='text-[#000000] font-medium text-sm md:text-lg md:w-[181px]'>
                  {r.name}
                </p>
                <Link href={r.link}>
                  <Image
                    src='/images/linkedin.png'
                    alt={`${r.name} LinkedIn`}
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
              <p className='text-[#696969] font-inter'>{r.role}</p>
              <div className='grid mx-auto mt-2 '>
                <Button
                  className='text-[#890D8B] rounded-xl cursor-pointer border border-[#890D8B] py-3 px-7 mt-2 mx-auto'
                  size={'sm'}
                  variant={'primary'}
                  onClick={() => handleOpenModal(r)}
                >
                  View Profile →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {openModal && selectedMember && (
        <TeamModal member={selectedMember} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default MeetOurTeam;
