'use client';
import React from 'react';
import SupportSection from './SupportSection';
import RemarkSection from './RemarkSection';
import LogoSection from './LogoSection';

const Footer: React.FC = () => {
  return (
    <div className='w-full h-auto min-h-[500px] flex flex-col relative overflow-x-clip pb-10'>
      <LogoSection/>
      <SupportSection />
      <RemarkSection />
    </div>
  );
};

export default Footer;
