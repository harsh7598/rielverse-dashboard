'use client';

import React, { ChangeEvent } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import getcallback from '../../../public/Icons/Reilverse_Assets/getcallback.svg';
import Image from 'next/image';

const CallbackForm: React.FC = () => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className='w-full flex flex-col items-center px-4 pb-20'>
        <div className='relative w-full max-w-[1180px] h-[172px] max-[1000px]:w-auto max-[1000px]:h-auto  rounded-xl bg-[#F2F9FF] self-center mt-7 flex flex-col justify-center max-[600px]:px-7 px-14'>
          <Image
            className='absolute top-0 right-0'
            src={getcallback}
            alt='getcallback'
          />
          <div className='flex justify-between gap-1 items-center max-[1000px]:flex-col max-[1000px]:gap-3 max-[1000px]:py-4 max-[1000px]:items-center text-start'>
            <span className='text-[15px] font-medium font-light leading-9'>
              Need Insurance? Request <br /> Call Back
            </span>

            <div className='border-b-2 border-[#2983D3] rounded-2xl'>
              <input
                onChange={handleInputChange}
                style={{ fontFamily: 'Arboria-Book', fontWeight: 400 }}
                placeholder='First Name *'
                className='placeholder:text-[#777777] placeholder:font-light w-[240px] h-[45px] bg-transparent rounded-xl pl-7 outline-none'
              />
            </div>

            <div className='border-b-2 border-[#2983D3] rounded-2xl'>
              <input
                onChange={handleInputChange}
                style={{ fontFamily: 'Arboria-Book', fontWeight: 400 }}
                placeholder='Phone number *'
                className='placeholder:text-[#777777] placeholder:font-light w-[240px] h-[45px] bg-transparent rounded-xl pl-7 outline-none'
              />
            </div>

            <div className='border-b-2 border-[#2983D3] w-[150px] rounded-2xl'>
              <select className='h-[45px] rounded-xl bg-transparent outline-none w-full pl-2'>
                <option value='volvo'>Motors</option>
                <option value='saab'>2JZ</option>
                <option value='opel'>RB26</option>
                <option value='audi'>V12</option>
              </select>
            </div>

            <div className='overflow-hidden w-[180px] h-10 flex pl-7 items-center self-start rounded-lg text-[11px] text-white font-semibold bg-gradient-to-tl from-[#2983D3] to-[#74B5FF] relative mt-5 cursor-pointer'>
              <span className='font-normal uppercase'>Request Callback</span>
              <IoIosArrowForward className='text-[150px] absolute -right-8 opacity-40' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallbackForm;
