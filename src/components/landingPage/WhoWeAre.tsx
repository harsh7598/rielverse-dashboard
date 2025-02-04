import React from 'react';
import { CARDS } from '../../utils/constants';
import Image from 'next/image';

const WhoWeAre: React.FC = () => {
  return (
    <div
      className={
        'w-full flex max-[1150px]:flex-col max-[1150px]:items-center items-start mt-16 justify-center py-[50px]'
      }>
      {/* Left Section */}
      <div
        data-aos='fade-right'
        className={
          'w-auto max-[1150px]:w-full h-auto flex flex-col max-[1150px]:items-center max-[1150px]:text-center items-start text-start'
        }>
        <div
          className={
            'w-[400px] max-[1300px]:w-auto max-[1150px]:w-full max-[1150px]:items-center h-auto flex flex-col gap-2 md:gap-4 items-start'
          }>
          <span
            className='text-[12px] md:text-[14px] lg:text-[18px] font-[600] bg-clip-text'>
            WHO WE ARE ?
          </span>
          <span
            className='bg-clip-text text-[22px] md:text-[28px] lg:text-[34px] tracking-widest leading-[50px] max-[1300px]:leading-[30px] font-[600]'>
            Always there for our users
          </span>
        </div>
        <span
          style={{ fontWeight: '400', fontFamily: 'Arboria-Book' }}
          className={
            'text-[12px] lg:text-[14px] max-w-[350px]  mt-3 max-[1300px]:leading-7 leading-10'
          }>
          We are committed to serve our customers during or after the purchase
          of your policy, handover all your insurance related worries to us and
          Relax!
        </span>
      </div>

      {/* Right Section */}
      <div
        data-aos='fade-left'
        className={
          'flex max-[700px]:flex-wrap max-[700px]:justify-start max-[700px]:gap-3 items-start relative max-[1150px]:mt-10'
        }>
        {CARDS.map((value, index) => (
          <div
            key={index}
            className='w-[260px] max-[800px]:w-56 max-[1300px]:w-64 min-[1800px]:w-80 h-[300px] rounded-xl p-[2px] relative bg-gradient-to-r from-[#0761bf]/70 to-50% to-transparent overflow-hidden'>
            <div
              className={
                'w-full h-full rounded-xl bg-white flex flex-col items-start px-6 pt-6 text-start'
              }>
              <Image
                className={'w-24 max-h-[75px] object-contain'}
                src={value.image}
                alt={value.title}
              />
              <span
                className={'text-[18px] lg:text-xl font-[400] mt-4'}>
                {value.title}
              </span>
              <span
                style={{ fontWeight: '400', fontFamily: 'Arboria-Book' }}
                className={'text-[12px] lg:text-[14px] font-[400] max-[1300px]:mt-2 mt-4'}>
                {value.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
