'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import BenefitsSection from './BenefitsSection';
import OffersSection from './OffersSection';
import ReviewsSection from './ReviewsSection';
import WhoWeAre from './WhoWeAre';
import green_layer from '../../../public/Icons/Reilverse_Assets/Frame 3 (1).svg';
import home_icon from '../../../public/Icons/Reilverse_Assets/home_icon.svg';
import product_icon from '../../../public/Icons/Reilverse_Assets/product_icon.svg';
import profile_icon from '../../../public/Icons/Reilverse_Assets/profile_icon.svg';
import support_icon from '../../../public/Icons/Reilverse_Assets/support_icon.svg';
import Image from 'next/image';
import HeroSection from './HeroSection';

const LandingPage: React.FC = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
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
