'use client';
import Image from "next/image";
import secure from '../../../public/Icons/Reilverse_Assets/secure.svg';
import trustus from '../../../public/Icons/Reilverse_Assets/trustus.svg';


const CarFooter: React.FC = () => {
  return (
    <div className='w-full text-gray-800 py-6'>
      <div className="container mx-auto flex flex-col justify-end items-end gap-4 px-4 py-10">
        {/* Security Section */}
        <div
          className='w-full md:max-w-[300px] md:w-auto flex items-center justify-center bg-white rounded-2xl shadow-lg p-4 gap-4'
          data-aos='fade-left'>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <Image
                className='w-fit h-12 object-contain'
                src={secure}
                alt='Secure'
                width={64}
                height={64}
              />
              <div className='flex flex-col text-[12px] font-bold'>
                <span className='font-normal'>Secured &</span>
                <span className='text-primary'>Encrypted</span>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <Image
                className='w-fit h-12 object-contain'
                src={trustus}
                alt='Trust us'
                width={64}
                height={64}
              />
              <div className='flex flex-col text-[12px] font-bold'>
                <span className='font-normal'>35000+</span>
                <span className='text-primary'>Trust us</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Design Info */}
        <div className='text-center md:text-left'>
          <p className='text-[12px] md:text-sm'>
            Copyright 2024 Rielverse All Rights Reserved. |{' '}
            <a href='/privacy-policy' className='hover:underline'>
              Privacy Policy
            </a>
          </p>
          <p className='text-[12px] md:text-sm'>
            Designed by{' '}
            <a
              href='https://konaxtechnologies.com'
              className='text-primary hover:underline'
              target='_blank'
              rel='noopener noreferrer'>
              Konax Technologies Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarFooter;

