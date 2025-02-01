import { Header } from '@/components';
import Image from 'next/image';
import React from 'react';
import righthead from '../../../../../public/Icons/Reilverse_Assets/bg_right.svg';
import vectorarrow from '../../../../../public/Icons/Reilverse_Assets/Vectorarrow.svg';
import vectorright from '../../../../../public/Icons/Reilverse_Assets/vectorright.svg';
import CarFooter from '@/components/footer/CarFooter';

const ConfirmationPage = () => {
  return (
    <div className='w-full bg-gradient-to-b from-[#BCCEE4] to-transparent h-96 to bg-white'>
      <Image
        className='absolute right-0 top-0'
        src={righthead}
        alt='righthead'
      />
      <Header />
      <div className='w-full h-auto max-w-[1300px] px-8 flex flex-col md:flex-row gap-4 mx-auto pt-20 md:pt-40'>
        {/* Left Section - Form */}
        <div className='w-full md:w-3/4 bg-gradient-to-b from-[#1A45D6] to-white rounded-[10px] p-[1px] flex flex-col '>
          <div className='bg-white z-10 rounded-[11px] p-6 md:p-12'>
            <div className='flex flex-col gap-2 mb-10'>
              <h2 className='text-[24px] font-bold'>Confirmation</h2>
              <p className='text-gray-700 text-[14px]'>
                Our insurance consultant will call you to confirm the order
                after it has been submitted.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {[
                { label: 'Full Name', placeholder: 'Name', type: 'text' },
                { label: 'Email ID', placeholder: 'ID', type: 'email' },
                { label: 'Mobile No', placeholder: 'Phone', type: 'tel' },
                {
                  label: 'Manufacture Date',
                  placeholder: 'Date',
                  type: 'date',
                },
              ].map((field, idx) => (
                <div key={idx} className='flex flex-col'>
                  <label className='font-semibold text-[16px] pb-1'>
                    {field.label}
                  </label>
                  <p className='text-[10px] pb-1'>Need Help ?</p>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className='border border-blue-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none'
                  />
                </div>
              ))}

              <div className='col-span-1 md:col-span-2 flex flex-col'>
                <label className='font-semibold text-[16px] pb-1'>
                  Address
                </label>
                <p className='text-[10px] pb-1'>Need Help ?</p>
                <input
                  type='text'
                  placeholder='Address'
                  className='border border-blue-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none'
                />
              </div>

              <div className='flex flex-col'>
                <label className='font-semibold text-[16px] pb-1'>
                  Policy Start Date?
                </label>
                <p className='text-[10px] pb-1'>Need Help ?</p>
                <input
                  type='date'
                  className='border border-blue-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none'
                />
              </div>

              <div className='flex flex-col'>
                <label className='font-semibold text-[16px] pb-1'>
                  Years of Driving
                </label>
                <p className='text-[10px] pb-1'>Need Help ?</p>
                <div className='relative'>
                  <select
                    className='w-[110px] appearance-none border border-blue-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none w-full'
                    style={{
                      backgroundImage: `url(${vectorarrow.src})`,
                      backgroundPosition: 'right 10px center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '15px',
                    }}>
                    {[...Array(30)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {[
                { label: 'Registration No.', placeholder: 'TEMP' },
                { label: 'Chassis No.', placeholder: 'MM7DK2W7ARW703387' },
                { label: 'Engine No.', placeholder: 'PE20370009' },
              ].map((field, idx) => (
                <div key={idx} className='flex flex-col'>
                  <label className='font-semibold text-[16px] pb-1'>
                    {field.label}
                  </label>
                  <p className='text-[10px] pb-1'>Need Help ?</p>
                  <input
                    type='text'
                    placeholder={field.placeholder}
                    className='border border-blue-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Summary */}
        <div className='w-full md:w-1/4 z-10 h-fit bg-gradient-to-b from-[#1A45D6] to-white rounded-[10px] p-[1px]'>
          <div className='bg-white z-10 rounded-[11px] p-4 md:p-8'>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-3'>
                <h3 className='text-[16px] font-semibold'>Policy Details</h3>
                <h3 className='text-[16px] font-semibold text-[#102770]'>
                  Comprehensive
                </h3>
              </div>
              <div className='flex items-center justify-center'>
                <span className='font-semibold text-2xl'>$300</span>
              </div>
            </div>
            <div className='border-2 border-dashed mt-2'></div>
            <div className='pt-4'>
              <div className='flex justify-between pb-[100px]'>
                <p className='text-[14px]'>Comprehensive</p>
                <p className='text-[14px]'>$300</p>
              </div>
            </div>
            <div className='border-2 border-dashed mt-2'></div>
            <div className='pt-4 flex flex-col gap-4 pb-6'>
              <div className='flex justify-between'>
                <p className='text-[14px]'>Sub-total</p>
                <p className='text-[14px]'>$300</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-[14px]'>+ Admin Fee</p>
                <p className='text-[14px]'>$1</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex justify-between text-lg font-bold'>
                <span className='text-[#343434]'>Final Price</span>
                <span className='text-[#102770]'>$301</span>
              </div>
              <p className='text-xs text-gray-500 mt-2'>
                By continuing, you agree to our{' '}
                <a href='#' className='text-blue-500 underline'>
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href='#' className='text-blue-500 underline'>
                  T&C
                </a>
                .
              </p>
              <div className='flex flex-col gap-2'>
                <button
                  className='flex items-center justify-between w-[175px] h-[40px] px-4 py-2 bg-[#13519C] text-white text-[12px] rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'
                  style={{
                    backgroundImage: `url(${vectorright.src})`,
                    backgroundPosition: 'right 10px center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '16px',
                  }}>
                  <span>Confirm and pay</span>
                </button>
                <p className='text-[10px]'>Get your policy online instantly!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarFooter />
    </div>
  );
};

export default ConfirmationPage;
