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
      { threshold: 0.1 }
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
    <div className="py-[50px] w-full h-auto flex flex-col items-center ">
      <HeroSection ref={heroRef} />
      {!isHeroVisible && (
        <motion.div
          className="fixed bottom-0 w-full bg-white py-4 px-6 -mb-1 flex justify-around items-center z-50 shadow-[0px_0px_10px_5px_#00000040] rounded-t-[21px] min-[1150px]:hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          {[
            { icon: home_icon, label: 'Home' },
            { icon: product_icon, label: 'Product' },
            { icon: support_icon, label: 'Support' },
            { icon: profile_icon, label: 'Profile' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-1 md:gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                alt={item.label}
                className="w-5 md:w-7 h-5 md:h-7 object-contain"
                src={item.icon}
              />
              <p className="text-[12px] md:text-[14px]">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
        <BenefitsSection />
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <WhoWeAre />
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <OffersSection />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <ReviewsSection />
      </motion.div>
      <motion.div
        data-aos="zoom-out-up"
        className="w-full max-w-[1200px] rounded-2xl py-8 md:py-12 lg:py-20 max-[1400px]:px-4"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          alt="Image"
          className="w-full h-auto object-fill"
          src={green_layer}
        />
      </motion.div>
      </div>
      );
};

export default LandingPage;
