'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Member {
  name: string;
  role: string;
  image: string;
  link: string;
  description?: string;
}

interface TeamModalProps {
  member: Member | null;
  onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <section
      className={`z-50 h-screen w-full justify-center items-center bg-[rgba(0,0,0,0.2)] fixed inset-0 transition duration-500 ease-in-out `}
    >
      <div
        className='fixed inset-0 z-50 flex items-center justify-center 
               h-screen w-full backdrop-blur-md transition-all duration-300 '
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className='relative bg-white rounded-2xl shadow-2xl 
                   p-8 w-[90%] max-w-md mx-auto text-center
                   flex flex-col items-center'
        >
          <button
            onClick={onClose}
            className='absolute top-0 p-5 right-3 text-gray-600 hover:text-black text-xl font-bold'
          >
            ✕
          </button>
          <div className='grid nd:grid-flow-col'>
            <span className='w-[150px] h-[150px] rounded-full overflow-hidden mx-auto relative'>
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className='object-cover'
              />
            </span>
            <Link
              className='absolute md:top-36 top-40 left-36'
              href={member.link}
            >
              <Image
                src='/images/linkedin.png'
                alt={`${member.name} LinkedIn`}
                width={32}
                height={32}
              />
            </Link>

            <div className=''>
              <div className=''>
                <h5 className='text-2xl font-semibold text-[#890D8B] font-inter mt-4'>
                  {member.name}
                </h5>
                <p className='text-gray-600 font-inter mb-3'>{member.role}</p>
                <p className='text-gray-700 font-inter text-sm leading-relaxed max-h-[40vh] overflow-y-auto px-2'>
                  {member.description ||
                    'This team member brings unique experience and creativity to the team.'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamModal;
