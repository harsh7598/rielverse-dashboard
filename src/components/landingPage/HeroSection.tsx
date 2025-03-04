import React, { useState, useEffect, forwardRef } from 'react';
import style from './style.module.css';
import { CATEGORIES, BUSINESS_CATEGORIES } from '../../utils/constants';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import couple from '../../../public/Icons/Reilverse_Assets/couple3.svg';

interface Props {
  CATEGORIES: Category[];
  BUSINESS_CATEGORIES: Category[];
  width: number;
  handleClick: (value: Category) => void;
}
interface Category {
  card_image: string;
  card_title: string;
  description?: string;
}

const HeroSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [currentVariant, setCurrentVariant] = useState<number>(0);
  const [width, setWidth] = useState(0);
  const VARIANTS = ['PERSONAL', 'BUSINESS'];

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categoryNo1 = width <= 800 && width >= 500 ? 4 : 5;

  const navigateTo = (href: string) => {
    router.push(href);
  };

  const router = useRouter();

  const handleClick = (category: string) => {
    router.push(`/product/${category.toLowerCase().replace(/\s+/g, "_")}`);
  };

  return (
    <div ref={ref} className="bg-hero-gradient w-full pt-8 md:pt-20 pb-20">
      <div className="w-full px-2 md:px-4 flex flex-col lg:flex-row items-center justify-center max-[1400px]:px-4">
        <Image
          data-aos="zoom-in"
          src={couple}
          className="w-auto h-60 md:h-72 lg:h-80 object-contain"
          alt=""
        />
        <div className="w-full max-[500px]:w-auto max-w-[800px] max-[500px]:max-w-[450px] flex flex-col text-center md:text-start relative">
          <span
            data-aos="fade-left"
            className="text-[20px] lg:text-[40px] md:text-[34px] font-[600] text-primary tracking-[-1px]"
          >
            The #1 Trusted Platform For Your Insurance Needs
          </span>
          <span
            data-aos="fade-left"
            className="mb-2 text-[12px] md:text-[16px] lg:text-[18px] font-[400] text-[#000000]"
          >
            Your financial literacy journey starts here
          </span>

          <div
            className={
              'w-full max-w-[1200px] self-start max-[500px]:flex max-[500px]:justify-center h-auto'
            }>
            <div
              data-aos='fade-left'
              className={
                'w-[420px] max-[500px]:w-[200px] max-[800px]:w-[280px] h-14 bg-white shadow-inner rounded-lg self-start p-1.5 flex gap-1 relative overflow-hidden box-inset'
              }>
              <div
                style={{ transform: `translateX(${currentVariant * 100}%)` }}
                className={
                  'w-1/2 h-full bg-[#1E96FC33] rounded-lg duration-500'
                }></div>
              <div
                className={
                  'absolute  w-[97.5%] h-[43px] rounded-lg flex items-center gap-1'
                }>
                {VARIANTS.map((value, index) => (
                  <div
                    onClick={() => setCurrentVariant(index)}
                    className={`w-1/2 h-full rounded-xl flex flex-col items-center justify-center text-[12px] font-[400] duration-500 cursor-pointer ${
                      currentVariant === index ? `text-primary ` : ``
                    } `}>
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {currentVariant === 0 && (
            <div className="w-full h-auto grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4 md:gap-6 mt-4">
            {CATEGORIES.map((value, index) => (
              <div
                data-aos="zoom-in"
                onClick={() => handleClick(value.card_title)}
                key={index}
                className="w-full cursor-pointer"
              >
                <div className="w-full h-28 border-t-2 border-r-2 border-transparent rounded-2xl duration-300 hover:border-dashed hover:border-[#2983D399]">
                  <div className="w-full flex h-full justify-between flex-col gap-1 items-center text-center px-2 py-4 rounded-2xl bg-white shadow border border-[#2983D399] duration-300 hover:translate-y-2 hover:-translate-x-2 active:translate-y-0 active:translate-x-0">
                    <Image
                      className="w-fit h-10 object-contain"
                      src={value.card_image}
                      alt={value.card_title}
                    />
                    <span className="text-[12px] font-[500]">{value.card_title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}

          {currentVariant === 1 && (
            <div className='w-full h-auto grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4 md:gap-6 mt-4'>
              {BUSINESS_CATEGORIES.map((value, index) => (
                <div
                  data-aos='zoom-in'
                  onClick={() => handleClick(value.card_title)}
                  key={index}
                  className='w-full flex flex-col items-center text-center'>
                  <div className='w-full h-28 border-t-2 border-r-2 border-transparent rounded-2xl duration-300 hover:border-dashed hover:border-[#2983D399] cursor-pointer'>
                    <div className='w-full flex h-full justify-between flex-col gap-1 items-center text-center px-2 py-4 rounded-2xl bg-white shadow border border-[#2983D399] duration-300 hover:translate-y-2 hover:-translate-x-2 active:translate-y-0 active:translate-x-0'>
                      <Image
                        className={`w-fit h-10 object-contain`}
                        src={value.card_image}
                        alt='Car logo'
                      />
                      <span className={`text-[12px] font-[500]`}>
                        {value.card_title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;
