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
        <div className='relative w-full max-w-[1180px] h-[172px] max-[1000px]:w-auto max-[1000px]:h-auto  rounded-xl bg-[#cfe3f5] self-center mt-7 flex flex-col justify-center max-[600px]:px-7 px-14'>
          <Image
            className='absolute top-0 right-0'
            src={getcallback}
            alt='getcallback'
          />
          <div className='p-4 lg:p-0 flex gap-4 items-center flex-wrap md:flex-nowrap'>
            <span className='w-[220px] text-[13px] md:text-[15px] lg:text-[17px] font-normal leading-9'>
              Need Insurance? Request <br /> Call Back
            </span>
            <div className='flex flex-1 gap-4 md:gap-2 items-center flex-wrap'>
              <div className='border-b-2 flex-1 border-[#2983D3] rounded-2xl'>
                <input
                  onChange={handleInputChange}
                  style={{ fontFamily: 'Arboria-Book', fontWeight: 400 }}
                  placeholder='First Name *'
                  className='placeholder:text-[#777777] placeholder:font-light min-w-[200px] h-[45px] bg-transparent rounded-xl pl-7 outline-none text-[13px] md:text-[15px] lg:text-[17px]'
                />
              </div>
              <div className='border-b-2 flex-1 border-[#2983D3] rounded-2xl'>
                <input
                  onChange={handleInputChange}
                  style={{ fontFamily: 'Arboria-Book', fontWeight: 400 }}
                  placeholder='Phone number *'
                  className='placeholder:text-[#777777] placeholder:font-light min-w-[200px] h-[45px] bg-transparent rounded-xl pl-7 outline-none text-[13px] md:text-[15px] lg:text-[17px]'
                />
              </div>
              <div className=' border-b-2 flex-1 border-[#2983D3] min-w-[200px] rounded-2xl'>
                <select className='h-[45px] rounded-xl bg-transparent outline-none w-full pl-7 text-[13px] md:text-[15px] lg:text-[17px]'>
                  <option value='volvo'>Motors</option>
                  <option value='saab'>2JZ</option>
                  <option value='opel'>RB26</option>
                  <option value='audi'>V12</option>
                </select>
              </div>
              <button className='min-w-[200px] max-w-[250px] flex flex-1 gap-2 items-center rounded-lg text-[11px] text-white font-semibold bg-gradient-to-tl from-[#2983D3] to-[#74B5FF] relative cursor-pointer pl-8 pr-12 py-3 overflow-hidden'>
                <span className='font-medium uppercase whitespace-nowrap'>
                  Request Callback
                </span>
                <IoIosArrowForward className='text-[150px] absolute -right-8 opacity-40' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallbackForm;
