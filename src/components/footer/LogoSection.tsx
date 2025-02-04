'use client';
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/Icons/Reilverse_Assets/Logo.svg';

const LogoSection: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-center text-center mt-10 md:mt-14 lg:mt-18 p-4'>
      <Image
        data-aos='zoom-out-up'
        className='w-auto h-6 md:h-8 lg:h-10 object-contain'
        src={logo}
        alt='Railverse Logo'
        width={160}
        height={40}
        priority
      />
      <p
        style={{ fontWeight: '400', fontFamily: 'Arboria-Book' }}
        data-aos='zoom-out-up'
        className='text-lg md:text-xl lg:text-2xl mt-4 opacity-75'>
        Powered by Worldbridge Insurance Broker
      </p>
      <p
        style={{ fontWeight: '400', fontFamily: 'Arboria-Book' }}
        data-aos='zoom-out-up'
        className='text-sm md:text-lg lg:text-xl mt-4 opacity-75 text-center'>
        #10, 150 South Bridge Rd, #04 Fook Hai Building, Singapore 058727
      </p>
    </div>
  );
};

export default LogoSection;
