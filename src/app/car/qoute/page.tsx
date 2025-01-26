'use client';
import { Header } from '@/components';
import Image from 'next/image';
import React from 'react';
import righthead from '../../../../public/Icons/Reilverse_Assets/bg_right.svg';
import maruti from '../../../../public/Icons/Reilverse_Assets/Car.svg';
import edit from '../../../../public/Icons/Reilverse_Assets/edit (6) 1.svg';
import arrow from '../../../../public/Icons/Reilverse_Assets/arrowdownblue.svg';

export default function page() {
  return (
    <div>
      <Image
        className='absolute right-0 top-0'
        src={righthead}
        alt='righthead'
      />
      <Header />
      <div className='w-full min-h-screen p-8'>
        {/* Main Container */}
        <div className='max-w-6xl mx-auto mt-40'>
          {/* Vehicle Information */}
          <div className='flex items-center gap-4 mb-8'>
            <Image src={maruti} alt='Car Icon' className='w-12 h-12' />
            <div className='flex flex-col'>
              <h2 className='text-2xl text-[#1A45D6] font-semibold'>
                Maruti Alto 800
              </h2>
              <div className='flex flex-row items-center gap-4'>
                <p className='text-gray-800'>
                  Active Policy Start Date:{' '}
                  <span className='font-medium'>07 Feb 2025</span>
                </p>
                <button>
                  <Image src={edit} alt='edit' />
                </button>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className='flex gap-4 mb-8'>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[14px] font-medium pl-2'>
                In Last 3 Years AnyLosses Or Claim
              </h6>
              <div className='max-w-[350px] flex flex-row items-center justify-center h-[50px] rounded-[6px] bg-white p-6 gap-10'>
                <div className='flex flex-row items-center justify-center gap-4'>
                  <label className='block text-[12px] font-medium'>NCB</label>
                  <select
                    id='ncb'
                    className='w-[65px] h-[30px] px-2 text-[12px] text-blue-800 bg-[#E8ECFB] rounded-[5px] appearance-none focus:ring-blue-500 focus:border-blue-500'
                    style={{
                      backgroundImage: `url(${arrow.src})`,
                      backgroundPosition: 'right 10px center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '16px',
                    }}>
                    <option value='20%'>20%</option>
                    <option value='25%'>25%</option>
                    <option value='30%'>30%</option>
                  </select>
                </div>
                <div className='flex flex-row items-center justify-center gap-4'>
                  <label className='block text-[12px] font-medium'>Claim</label>
                  <select
                    id='claim'
                    className='w-[65px] h-[30px] px-2 text-[12px] text-blue-800 bg-[#E8ECFB] rounded-[5px] appearance-none focus:ring-blue-500 focus:border-blue-500'
                    style={{
                      backgroundImage: `url(${arrow.src})`,
                      backgroundPosition: 'right 10px center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '16px',
                    }}>
                    <option value='No'>No</option>
                    <option value='Yes'>Yes</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Plan Type */}
            <div className='flex flex-col gap-2'>
              <label className='text-[14px] font-medium pl-2'>Plan Type</label>
              <select
                id='plantype'
                className='w-[250px] h-[50px] rounded-[6px] text-[18px] text-blue-700 font-semibold focus:ring-blue-500 focus:border-blue-500 px-4'
                style={{
                  appearance: 'none',
                  backgroundImage: `url(${arrow.src})`,
                  backgroundPosition: 'right 10px center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '26px',
                }}>
                <option value='Third Party'>Third Party</option>
                <option value='Comprehensive'>Comprehensive</option>
              </select>
            </div>

            {/* Sum Insured Slider */}
            {/* <div>
              <label className='block text-gray-700 font-medium mb-2'>
                Sum Insured
              </label>
              <input
                type='range'
                min='10000'
                max='75000'
                defaultValue='75000'
                className='w-full'
              />
              <div className='flex justify-between text-sm text-gray-500 mt-2'>
                <span>$10,000 USD</span>
                <span>$75,000 USD</span>
              </div>
            </div> */}

            {/* Engine Size */}
            <div className='flex flex-col gap-2'>
              <label className='text-[14px] font-medium pl-2'>
                Engine Size
              </label>
              <select
                id='engine'
                className='w-[140px] h-[50px] rounded-[6px] text-[18px] text-blue-700 font-semibold focus:ring-blue-500 focus:border-blue-500 px-4'
                style={{
                  appearance: 'none',
                  backgroundImage: `url(${arrow.src})`,
                  backgroundPosition: 'right 10px center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '26px',
                }}>
                <option value='3000'>3000</option>
                <option value='3500'>3500</option>
                <option value='4000'>4000</option>
              </select>
            </div>
          </div>

          {/* Insurance Card */}
          <div className='bg-gray-50 p-6 rounded-lg shadow-md flex justify-between items-center mb-8'>
            <div>
              <h3 className='text-lg font-semibold'>Forte General Insurance</h3>
              <p className='text-gray-600'>
                SUM INSURED: <span className='font-medium'>$74,000</span>
              </p>
              <p className='text-gray-600'>
                PLAN TYPE:{' '}
                <span className='font-medium'>Third Party Liability Only</span>
              </p>
            </div>
            <div className='text-right'>
              <p className='text-xl font-bold text-blue-600'>$290 USD</p>
              <button className='mt-2 text-blue-500 hover:underline'>
                View Benefits & Breakup
              </button>
            </div>
          </div>

          {/* Why Rielverse Section */}
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold mb-4'>Why Rielverse?</h3>
            <ul className='space-y-2'>
              <li className='flex items-center gap-2'>
                <span className='text-blue-500'>✔</span>
                <p>Instant Policy Insurance</p>
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-blue-500'>✔</span>
                <p>
                  24×7 Claim Assistance (10am to 7pm excluding national
                  holidays)
                </p>
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-blue-500'>✔</span>
                <p>Transparent Comparisons</p>
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-blue-500'>✔</span>
                <p>Application to Issuance</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
