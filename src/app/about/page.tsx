import { Header } from '@/components';
import CallbackForm from '@/components/aboutus/CallBackForm';
import FirstSection from '@/components/aboutus/FirstSection';
import LogoSection from '@/components/footer/LogoSection';
import RemarkSection from '@/components/footer/RemarkSection';
import SupportSection from '@/components/footer/SupportSection';
import lefthead from '../../../public/Icons/Reilverse_Assets/bg_left.svg';
import righthead from '../../../public/Icons/Reilverse_Assets/bg_right.svg';
import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <>
      <Image className='absolute left-0 top-0' src={lefthead} alt='lefthead' />
      <Image
        className='absolute right-0 top-0'
        src={righthead}
        alt='righthead'
      />
      <Header />
      <div className='w-full h-auto flex flex-col items-center pt-40 z-10 overflow-x-clip'>
        <FirstSection />
        <CallbackForm />
        <LogoSection />
        <SupportSection />
        <RemarkSection />
      </div>
    </>
  );
};

export default About;
