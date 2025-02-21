'use client';

import { useState } from 'react';
import Image from 'next/image';
import lefthead from '../../../public/Icons/Reilverse_Assets/bg_left.svg';
import righthead from '../../../public/Icons/Reilverse_Assets/bg_right.svg';
import { Header } from '@/components';
import Footer from '@/components/footer/Footer';
import { IoIosArrowForward } from 'react-icons/io';
import operator from "../../../public/Icons/Reilverse_Assets/operator.svg";
import call from "../../../public/Icons/Reilverse_Assets/support call.svg";
import mail from "../../../public/Icons/Reilverse_Assets/mail.svg";
import couple from "../../../public/Icons/Reilverse_Assets/couple 2.svg";

interface CheckboxGroupProps {
  subjects?: string[];
}

export default function page() {
  const subjects = [
    'General Inquiry',
    'Technical Support',
    'Billing Issue',
    'Feedback',
  ];
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const handleCheckboxChange = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((item) => item !== subject)
        : [...prev, subject],
    );
  };
  return (
    <>
      <Image className='absolute left-0 top-0' src={lefthead} alt='lefthead' />
      <Image
        className='absolute right-0 top-0'
        src={righthead}
        alt='righthead'
      />
      <Header />
      <div className='w-full flex justify-center pt-40 px-4 md:px-8 sm:px-2 lg:px-16 min-h-screen mb-20'>
        <div className='w-full max-w-[1200px] bg-gradient-to-b from-[#1A45D6] to-white rounded-[10px] p-[1px] z-10'>
          <div className='flex w-full justify-between  flex-col gap-3 lg:flex-row h-full overflow-hidden p-6 bg-white rounded-[11px]'>
            {/* {Left Section} */}
            <div className='flex-3 min-w-[250px] flex flex-col items-start'>
              <p className='text-[#13519C] text-[24px] font-semibold'>
                Health Insurance
              </p>
              <span className='text-[#717171] font-normal text-[14px] mt-2'>
                Please drop your query here and we will call you back soon
              </span>
              <div className='w-full mt-10'>
                <form>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className=''>
                      <input
                        className='w-full border-b-2 border-[#1A45D6] outline-0 bg-transparent pl-4 pb-1 mt-2 rounded-b-md text-[#8D8D8D] placeholder-[#8D8D8D] '
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                      />
                    </div>
                    <div className=''>
                      <input
                        className='w-full border-b-2 border-[#1A45D6] outline-0 bg-transparent pb-1 pl-4 mt-2 rounded-b-md text-[#8D8D8D] placeholder-[#8D8D8D]'
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                      />
                    </div>
                    <div className=''>
                      <input
                        className='w-full border-b-2 border-[#1A45D6] outline-0 bg-transparent pb-1 pl-4 mt-2 rounded-b-md text-[#8D8D8D] placeholder-[#8D8D8D]'
                        type='email'
                        name='email'
                        placeholder='example@email.com'
                      />
                    </div>
                    <div className=''>
                      <input
                        className='w-full border-b-2 border-[#1A45D6] outline-0 bg-transparent pb-1 pl-4 mt-2 rounded-b-md text-[#8D8D8D] placeholder-[#8D8D8D]'
                        type='tel'
                        name='phoneNumber'
                        placeholder='Phone'
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className='overflow-hidden w-[180px] h-10 flex pl-7 items-center self-start rounded-xl text-[11px] text-white font-semibold bg-[#1A45D6] relative mt-8 cursor-pointer'>
                <span className='font-normal uppercase'>SEND</span>
                <IoIosArrowForward className='text-[150px] absolute -right-8 opacity-40' />
              </div>
              <div className='flex items-center gap-4 mt-6'>
                <input
                  type='checkbox'
                  id='authorize'
                  className='w-6 min-w-4  md:min-w-6 h-4 md:h-6 appearance-none bg-blue-200 rounded border border-gray-300 checked:bg-blue-600 checked:border-blue-600'
                />
                <p className='text-[12px]'>
                  I hereby authorize Universal Sompo General Insurance to
                  contact me on my given mobile number.
                </p>
              </div>
            </div>
            {/* {Right Section} */}
            <div className={'flex flex-col items-start text-start gap-4 mt-10'}>
              <div className={'flex items-center gap-3'}>
                <Image
                  className={'w-[24px] h-[24px] object-contain '}
                  src={operator}
                  alt={'operator'}
                />

                <div className={'flex flex-col items-start text-start'}>
                  <span className={'text-[16px] text-[#13519C]'}>
                    Customer Care
                  </span>
                  <span
                    style={{ fontFamily: 'Arboria-Book', fontWeight: '400' }}
                    className={'text-[12px] '}>
                    Looking for help regarding policy?
                  </span>
                </div>
              </div>

              <div className={'flex items-center gap-3'}>
                <Image
                  className={'w-[24px] h-[24px] object-contain '}
                  src={call}
                  alt={'call'}
                />

                <div className={'flex flex-col items-start text-start'}>
                  <p className={'text-[16px] flex items-start'}>
                    Call Us :<span>9999-22-999</span>
                  </p>
                  <span
                    style={{ fontFamily: 'Arboria-Book', fontWeight: '400' }}
                    className={'text-[9px] self-center '}>
                    24/7 available
                  </span>
                </div>
              </div>

              <div className={'flex items-center gap-3'}>
                <Image
                  className={'w-[33px] h-[33px] object-contain '}
                  src={mail}
                  alt={'call'}
                />

                <div className={'flex flex-col items-start text-start'}>
                  <span className={'text-[16px] text-[#13519C]'}>
                    Drop Email At
                  </span>
                  <span
                    style={{ fontFamily: 'Arboria-Book', fontWeight: '400' }}
                    className={'text-[12px] '}>
                    Email-Id
                  </span>
                  <span
                    style={{ fontFamily: 'Arboria-Book', fontWeight: '400' }}
                    className={'text-[12px] '}>
                    help@reilverse.com | support@reilverse.com
                  </span>
                </div>
              </div>

              <Image
                className={
                  'object-contain max-[800px]:w-[259px] max-[800px]:h-fit max-w-[379px] max-h-[207px] mt-10 max-[800px]:self-center self-end'
                }
                src={couple}
                alt={'couple'}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
