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
    <div className='py-[50px] w-full h-auto flex flex-col items-center max-[1400px]:px-4 '>
      <HeroSection />
      <BenefitsSection />
      <WhoWeAre />
      <OffersSection />
      <ReviewsSection />
      <div
        data-aos='zoom-out-up'
        className={
          'w-full max-w-[1200px] rounded-2xl py-8 md:py-12 lg:py-20'
        }>
        <Image
          alt='Image'
          className={
            'w-full h-auto object-fill'
          }
          src={green_layer}
        />
      </div>
    </div>
  );
};

export default LandingPage;
