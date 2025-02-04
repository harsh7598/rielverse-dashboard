import React from 'react';
import Image from 'next/image';

import supportGuy from '../../../public/Icons/Reilverse_Assets/Support_guy.svg';
import secure from '../../../public/Icons/Reilverse_Assets/secure.svg';
import trustus from '../../../public/Icons/Reilverse_Assets/trustus.svg';

const SupportSection: React.FC = () => {
  return (
    <>
      <div
        className={
          'relative w-full mx-auto px-2 md:px-10 lg:px-20 p-4 flex flex-col md:flex-row gap-4 items-center justify-center lg:justify-between max-[850px]:-translate-y-[50px] -translate-y-12 mt-20'
        }>
          <div className="absolute w-full h-0.5 bg-gray-300/70 top-1/2 left-0 transform -translate-y-1/2"></div>

        {/* Customer Service Section */}
        <div
          data-aos='fade-right'
          className={'flex flex-col w-full max-w-[400px] min-w-[220px] p-4 z-10'}>
          <div
            className={
              'w-full bg-white flex items-center rounded-2xl shadow-lg'
            }>
            <Image
              className={
                'w-auto h-[120px] max-[500px]:-translate-x-2 -translate-x-7 self-end object-contain'
              }
              src={supportGuy}
              alt='Support Guy'
            />
            <div
              style={{ fontWeight: '400', fontFamily: 'Arboria-Book' }}
              className={
                'flex flex-col text-[14px] max-[500px]:text-start font-semibold gap-2'
              }>
              <span style={{ fontWeight: '500' }}>CUSTOMER SERVICE</span>
              <span className={'font-medium text-secondary'}>
              +65 6287 7537
              </span>
            </div>
          </div>
        </div>

        {/* Security Logos Section */}
        <div
          data-aos='fade-left'
          className={
            'w-full max-w-[400px] min-w-[220px] p-4 bg-white rounded-2xl shadow-lg z-10'
          }>
          <div className={'w-full justify-around flex items-center gap-2'}>
            <div className='flex gap-3 items-center'>
            <Image
              className={'w-auto h-12 md:h-16 object-contain'}
              src={secure}
              alt='Secure'
            />
            <div className='flex flex-col text-[12px] md:text-[15px] font-bold'>
              <span className='font-normal'>Secured &</span>
              <span className=' text-primary'>Encrypted</span>
            </div>
            </div>
            <div className='flex gap-3 items-center'>
            <Image
              className={'w-fit h-16 object-contain'}
              src={trustus}
              alt='trustus'
            />
            <div className='flex flex-col text-[12px] md:text-[15px] font-bold'>
              <span className='font-normal'>35000+</span>
              <span className=' text-primary'>Trust us</span>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportSection;
