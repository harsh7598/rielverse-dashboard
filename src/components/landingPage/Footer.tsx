'use client';
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/Icons/Reilverse_Assets/Logo.svg';
import SupportSection from './SupportSection';
import RemarkSection from './RemarkSection';

const Footer: React.FC = () => {
  return (
    <div className='w-full h-auto min-h-[500px] flex flex-col relative overflow-x-clip pb-10'>
      <div className='flex flex-col items-center mt-18'>
        {/* Logo */}
        <Image
          data-aos='zoom-out-up'
          className='w-fit h-10 object-contain'
          src={logo}
          alt='Railverse Logo'
          width={160}
          height={40}
          priority
        />
        {/* Powered by Text */}
        <p
          style={{ fontWeight: '400', fontFamily: 'Arboria-Book' }}
          data-aos='zoom-out-up'
          className='text-2xl mt-4 opacity-75'>
          Powered by Worldbridge Insurance Broker
        </p>
        {/* Address */}
        <p
          style={{ fontWeight: '400', fontFamily: 'Arboria-Book' }}
          data-aos='zoom-out-up'
          className='text-xl mt-4 opacity-75 text-center'>
          #10, 150 South Bridge Rd, #04 Fook Hai Building, Singapore 058727
        </p>
      </div>

      <SupportSection />

      <RemarkSection />
    </div>
  );
};

export default Footer;
