import React from 'react';
import Image from 'next/image';

import supportGuy from '../../../public/Icons/Reilverse_Assets/Support_guy.svg';
import secure from '../../../public/Icons/Reilverse_Assets/secure.svg';
import trustus from '../../../public/Icons/Reilverse_Assets/trustus.svg';

const SupportSection: React.FC = () => {
  return (
    <>
      <div className='w-full h-0.5 bg-gray-200/70 mt-32'></div>
      <div
        className={
          'w-full flex max-[850px]:flex-col max-[850px]:gap-4 items-center justify-between max-[850px]:-translate-y-[50px] -translate-y-12 pl-32 max-[730px]:px-4 max-[1200px]:pr-10 max-[1200px]:pl-20 min-[1800px]:pl-80 pr-16'
        }>
        {/* Customer Service Section */}
        <div
          data-aos='fade-right'
          className={'flex flex-col max-[650px]:items-center relative'}>
          <div
            className={
              'max-[500px]:w-[304px] w-[374px] h-[100px] max-[500px]:h-[90px] bg-white flex items-center rounded-2xl shadow-lg'
            }>
            <Image
              className={
                'w-fit h-[149px] max-[500px]:h-[100px] max-[500px]:-translate-x-2 -translate-x-7 self-end object-contain'
              }
              src={supportGuy}
              alt='Support Guy'
            />
            <div
              style={{ fontWeight: '400', fontFamily: 'Arboria-Book' }}
              className={
                'flex flex-col items-center ml-7 max-[500px]:ml-2 max-[500px]:items-start text-[16px] max-[500px]:text-start font-semibold opacity-50 gap-2'
              }>
              <span style={{ fontWeight: '500' }}>CUSTOMER SERVICE</span>
              <span className={'text-[18px] text-[#13519C]'}>
                1800 2333 533
              </span>
            </div>
          </div>
        </div>

        {/* Security Logos Section */}
        <div
          data-aos='fade-left'
          className={
            'max-[350px]:w-[304px] w-[315px] h-[75px] px-4 bg-white flex items-center justify-center rounded-2xl shadow-lg'
          }>
          <div className={'w-full justify-around flex items-center gap-2'}>
            <Image
              className={'w-fit h-9 object-contain'}
              src={secure}
              alt='Secure'
            />
            <div className='flex flex-col text-[18px] font-bold'>
              <span className='font-normal'>Secured &</span>
              <span className=' text-[#13519C]'>Encrypted</span>
            </div>
            <Image
              className={'w-fit object-contain'}
              src={trustus}
              alt='trustus'
            />
            <div className='flex flex-col text-[18px] font-bold'>
              <span className='font-normal'>35000+</span>
              <span className=' text-[#13519C]'>Trust us</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportSection;
