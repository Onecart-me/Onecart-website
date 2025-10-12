import Image from 'next/image';
import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

const OneCartHero = () => {
  return (
    <section className='px-3'>
      <div className='grid md:grid-cols-2 gap-4 items-stretch'>
        <div
          style={{
            backgroundImage: 'var(--bg-hero)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className=' flex-1 bg-bgButton rounded-2xl'
        >
          <div className='grid gap-4 pt-7 md:pt-5'>
            <h5
              style={{ color: '#fff' }}
              className=' grid justify-center mx-auto font-inter font-bold text-white text-center  text-2xl md:text-[40px] w-8/12'
            >
              Passion Meets Commerce Stream LIVE
            </h5>
            <p
              style={{ color: '#fff' }}
              className='grid font-inter text-xl text-white font-semibold justify-center italic mx-auto '
            >
              For Sharpness & OneSellers
            </p>
            <span className='grid justify-center mx-auto mb-1 '>
              <Image
                src='/images/hero-zag-image.png'
                alt='live-stream'
                width={258}
                height={10}
              />
            </span>
          </div>
          <span className='grid justify-center'>
            <Image
              src='/images/live-stream.png'
              alt='live-stream'
              width={575}
              height={400}
              className=''
            />
          </span>
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <div className='flex flex-col-reverse  md:grid md:grid-cols-2 bg-[#FFF2FF80] rounded-2xl'>
            <span className='md:mt-0 mt-9'>
              <Image
                src='/images/phone-outline.png'
                alt='live-stream'
                width={800}
                height={400}
                className='w-full h-auto'
              />
            </span>
            <div className='pt-7'>
              <div className='grid gap-5'>
                <h5 className='text-[#570059] mx-auto font-inter grid justify-center text-[32px] font-bold'>
                  Bid in real Time
                </h5>
                <p className='text-[#303030] grid text-center  justify-center font-inter mx-auto w-10/12'>
                  Allow users to bid in real time during live stream, ask
                  questions, and buy products instantly.
                </p>
              </div>
              <div className='relative grid justify-center mx-auto mt-4'>
                <h6 className='text-[#554EBF] font-inter font-bold italic text-[20px]'>
                  Coming Soon on
                </h6>
                <span className='absolute top-0 left-9'>
                  <Image
                    src='/images/curve-arrow.png'
                    alt='live-stream'
                    width={70}
                    height={55}
                  />
                </span>
              </div>
              <div className='relative grid justify-center mx-auto mt-9'>
                <div className='grid md:grid-flow-col w-max items-center gap-2'>
                  <span className=''>
                    <Image
                      src='/images/apple-icon.png'
                      alt='live-stream'
                      width={40}
                      height={40}
                    />
                  </span>
                  <div className='grid grid-flow-row w-max mt-3'>
                    <p className='font-inter text-sm text-[#000000]'>
                      Download on the
                    </p>
                    <p className='text-[#000000] font-inter -mt-2 text-2xl'>
                      App Store
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <hr className=' grid justify-center mt-5 mx-auto bg-[#570059] h-1 w-20' />
                  </div>
                  <div className='grid md:grid-flow-col w-max items-center mt-5 gap-2'>
                    <span className=''>
                      <Image
                        src='/images/google.png'
                        alt='live-stream'
                        width={40}
                        height={40}
                      />
                    </span>
                    <div className='grid grid-flow-row w-max mt-3'>
                      <p className='font-inter text-sm text-[#000000]'>
                        GET IT ON
                      </p>
                      <p className='text-[#000000] font-inter -mt-2 text-2xl'>
                        Google Play
                      </p>
                    </div>
                  </div>
                </div>
                <span className='absolute top-0 right-10'>
                  <Image
                    src='/images/curve-up.png'
                    alt='curve'
                    width={25}
                    height={25}
                  />
                </span>
                <span className='absolute -bottom-2 left-12'>
                  <Image
                    src='/images/curve-down.png'
                    alt='curve'
                    width={25}
                    height={25}
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: 'var(--bg-hero-tab)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className='flex flex-col-reverse md:grid md:grid-cols-2 px-7 bg-heroImageTab bg-no-repeat rounded-3xl'
          >
            <div className='pt-8 md:py-0 py-5'>
              <h5 className='text-[#570059] grid justify-center font-inter text-xl md:text-[32px] font-bold'>
                Become a OneSeller
              </h5>
              <p className='text-[#303030] grid text-center font-inter mt-3'>
                Oneseller can sell products using live streaming functionality
              </p>
              <div className='relative grid gap-5 justify-center mt-10'>
                <p className='text-[#554EBF] font-semibold font-inter italic'>
                  Start with as low as £1
                </p>
                <button
                  style={{ color: '#fff' }}
                  className='bg-[#570059]  w-48 md:mt-5 mt-6 rounded-xl text-white grid grid-flow-col items-center py-3 px-4 gap-2'
                >
                  Register Now
                  <span>
                    <IoArrowForward />
                  </span>
                </button>
                <span className='absolute top-0 md:left-4 left-2'>
                  <Image
                    src='/images/curve-arrow.png'
                    alt='arrow'
                    width={65}
                    height={65}
                  />
                </span>
              </div>
            </div>
            <div className='relative mt-10'>
              <Image
                src='/images/live-broadcast.png'
                alt='live-stream'
                width={300}
                height={300}
                className='w-full h-auto mix-blend-multiply opacity-90'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneCartHero;
