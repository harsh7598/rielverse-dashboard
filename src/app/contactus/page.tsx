'use client';

import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import sendPlan from '../../../public/Icons/Reilverse_Assets/sendPlan.svg';
import contactIcon1 from '../../../public/Icons/Reilverse_Assets/contactIcon1.svg';
import contactIcon2 from '../../../public/Icons/Reilverse_Assets/contactIcon2.svg';
import contactIcon3 from '../../../public/Icons/Reilverse_Assets/contactIcon3.svg';
import contactIcon5 from '../../../public/Icons/Reilverse_Assets/contactIcon5.svg';
import contactIcon6 from '../../../public/Icons/Reilverse_Assets/contactIcon6.svg';
import lefthead from '../../../public/Icons/Reilverse_Assets/bg_left.svg';
import righthead from '../../../public/Icons/Reilverse_Assets/bg_right.svg';
import { Header } from '@/components';
import { useState } from 'react';
import Footer from '@/components/footer/Footer';

interface CheckboxGroupProps {
  subjects?: string[];
}

const ContactUs = () => {
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
      <div className='w-full flex justify-center pt-40 px-4 md:px-8 sm:px-2 lg:px-16 min-h-screen mb-44'>
        <div className='w-full max-w-[1200px] bg-gradient-to-b from-[#dbdfec] to-white rounded-[10px] p-[1px] z-10'>
          <div className='flex w-full justify-between  flex-col gap-3 lg:flex-row h-full overflow-hidden p-6 bg-white rounded-[11px]'>
            {/* {Left Section} */}
            <div className='flex-3 min-w-[250px] flex flex-col items-start'>
              <p className='text-[#13519C] text-[24px] font-semibold'>
                Contact Us
              </p>
              <span className='text-[#717171] font-normal text-[14px] mt-2'>
                Any question or remarks? Just write us a message!
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
              <div className='flex flex-col items-start mt-12'>
                <p className='text-[14px] font-semibold text-[#011C2A]'>
                  Select Subject?
                </p>
                <div className='flex flex-wrap gap-5 mt-4'>
                  {subjects.map((subject, index) => (
                    <div key={index} className='flex items-center gap-3'>
                      <input
                        type='checkbox'
                        id={`subject-${index}`}
                        checked={selectedSubjects.includes(subject)}
                        onChange={() => handleCheckboxChange(subject)}
                        className='appearance-none w-5 h-5 border-2 border-[#13519C] rounded-full checked:bg-[#13519C] checked:border-[#13519C] cursor-pointer flex items-center justify-center'
                      />
                      {selectedSubjects.includes(subject) && (
                        <svg
                          className='w-4 h-4 text-white absolute'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M5 13l4 4L19 7'></path>
                        </svg>
                      )}
                      <label
                        htmlFor={`subject-${index}`}
                        className='peer-checked:text-[#13519C] font-medium text-[12px] flex items-center'>
                        {subject}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className='overflow-hidden w-[180px] h-10 flex pl-7 items-center self-start rounded-xl text-[11px] text-white font-semibold bg-[#1A45D6] relative mt-8 cursor-pointer'>
                <span className='font-normal uppercase'>SEND</span>
                <IoIosArrowForward className='text-[150px] absolute -right-8 opacity-40' />
              </div>
              <div className='flex flex-row gap-4 mt-6'>
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
            <div
              className='flex-2 min-w-[250px] p-4 h-fit border-l-[3px] border-transparent'
              style={{
                borderImage:
                  'linear-gradient(to bottom, #2983D3, transparent) 1',
              }}>
              <div className='flex flex-col w-full items-start h-full bg-white overflow-hidden py-3'>
                <p className='text-[#3B3B3B] text-[24px] font-semibold'>
                  Need help ?
                </p>
                <p className='text-[#000] text-[16px] mt-1'>
                  Choose how you like to connect with us
                </p>
                <div className='mt-6 w-full flex flex-col gap-8'>
                  <div className='flex justify-between w-full max-w-[250px]'>
                    <div className='flex gap-5 items-center'>
                      <Image src={contactIcon1} className='h-8 w-auto' alt='contactIcon1' />
                      <p className='text-[#000] font-semibold text-[14px] md:text-[16px]'>
                        Request a call back
                      </p>
                    </div>
                    <Image src={contactIcon6} alt='contactIcon' />
                  </div>
                  <div className='flex justify-between w-full max-w-[250px]'>
                    <div className='flex gap-5 items-center'>
                      <Image src={contactIcon2} className='h-8 w-auto' alt='contactIcon2' />
                      <p className='text-[#000] font-semibold text-[14px] md:text-[16px]'>
                        Chat with us
                      </p>
                    </div>
                    <Image src={contactIcon6} alt='contactIcon' />
                  </div>
                  <div className='flex justify-between w-full max-w-[250px]'>
                    <div className='flex gap-5 items-center'>
                      <Image src={contactIcon3} className='h-8 w-auto' alt='contactIcon1' />
                      <div className='flex flex-col items-start'>
                        <p className='text-[#000] font-medium text-[10px]'>
                          Connect on Whatsapp at
                        </p>
                        <p className='text-[#1A45D6] font-semibold text-[16px]'>
                          +65 6287 7537
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full max-w-[300px] bg-gradient-to-b from-[#13519C26] to-[#74B5FF00] px-3 md:px-5 py-3 mt-10 rounded-xl'>
                  <div className='flex w-full '>
                    <div className='flex gap-5 items-center'>
                      <Image
                        src={contactIcon5}
                        alt='Contact Icon'
                        width={40}
                        height={40}
                      />
                      <div className='flex flex-col items-start'>
                        <p className='text-black font-medium text-[10px]'>
                          Need help buying a new policy?
                        </p>
                        <p className='text-[#13519C] font-semibold text-[16px] my-1'>
                          Call at +65 6287 7537
                        </p>
                        <p className='text-black font-medium text-[10px]'>
                          10 AM to 7 PM (use registered number)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
