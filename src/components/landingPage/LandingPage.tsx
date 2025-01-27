'use client';

import BenefitsSection from './BenefitsSection';
import OffersSection from './OffersSection';
import ReviewsSection from './ReviewsSection';
import WhoWeAre from './WhoWeAre';
import green_layer from '../../../public/Icons/Reilverse_Assets/Frame 3 (1).svg';
import Image from 'next/image';
import HeroSection from './HeroSection';

const LandingPage: React.FC = () => {
  return (
    <div className='py-[100px] w-[98vw] h-auto flex flex-col items-center max-[1400px]:px-4 '>
      <HeroSection />
      <BenefitsSection />
      <WhoWeAre />
      <OffersSection />
      <ReviewsSection />
      <div
        data-aos='zoom-out-up'
        className={
          'w-full max-[630px]:w-full max-[630px]:h-28 max-[850px]:w-[600px] max-[850px]:h-44 max-[1200px]:w-[800px] max-[1200px]:h-60 min-[1880px]:max-w-[1400px] max-w-[1190px] h-80 rounded-2xl flex flex-col items-end justify-center max-[630px]:px-4 max-[850px]:px-16 px-28 relative'
        }>
        <Image
          alt='Image'
          className={
            'w-full h-full object-fill absolute top-0 left-0 -z-0 pt-20'
          }
          src={green_layer}
        />
      </div>
    </div>
  );
};

export default LandingPage;
