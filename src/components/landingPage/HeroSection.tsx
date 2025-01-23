import React, { useState, useEffect } from 'react';
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
export default function HeroSection() {
  const router = useRouter();
  const [currentVariant, setCurrentVariant] = useState<number>(0);

  const getCategories = (): Category[] => {
    if (width <= 575) return [];
    return CATEGORIES.slice(
      window.innerWidth <= 800 && window.innerWidth >= 500 ? 4 : 5,
      window.innerWidth <= 800 && window.innerWidth >= 500 ? 8 : 7,
    );
  };
  const [width, setWidth] = useState(0);
  const VARIANTS = ['PERSONAL', 'BUSINESS'];

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categoryNo1 = width <= 800 && width >= 500 ? 4 : 5;
  const handleClick = (item: Category) => {
    window.scrollTo(0, 0);
    console.log(item.description);
    // navigate(`/uat${item.card_href}`, {
    //     state: {description: item.description},
    // });
  };
  const navigateTo = (href: string) => {
    router.push(href);
  };
  return (
    <div className='bg-hero-gradient w-[100vw] pb-20'>
      <div
        className={
          'w-full max-[1440px]:px-4 max-[500px]:px-2 flex max-[1150px]:flex-col justify-center relative mt-0'
        }>
        <Image
          data-aos='zoom-in'
          src={couple}
          className={
            'w-[500px] max-[800px]:w-[300px] max-[1350px]:w-[400px] max-w-[500px] h-fit  object-contain mr-3 mt-40'
          }
          alt=''
        />
        <div
          className={
            'w-full max-[500px]:w-auto max-w-[800px] max-[500px]:max-w-[450px] flex flex-col items-end text-start relative top-14 '
          }>
          <span
            data-aos='fade-left'
            className={
              'max-[1150px]:self-center self-start max-[1150px]:text-center min-[1800px]:text-[40px] max-[500px]:text-[17px] text-[36px] font-[400] text-primary tracking-[-1px]'
            }>
            The #1 Trusted Platform For Your Insurance Needs
          </span>
          <span
            data-aos='fade-left'
            className={
              'mb-2 max-[1150px]:self-center self-start text-[18px] font-[400] text-[#000000]'
            }>
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
            <div className='w-full h-auto grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-4 sm:gap-6 md:gap-8 mt-4'>
              {CATEGORIES.map((value, index) => (
                <div
                  data-aos='zoom-in'
                  onClick={() => handleClick(value)}
                  key={index}
                  className='w-full flex flex-col items-center text-center'>
                  <div className='w-full h-32  sm:h-32 md:h-32 border-t-2 border-r-2 border-transparent rounded-2xl duration-300 hover:border-dashed hover:border-[#2983D399] cursor-pointer'>
                    <div className='w-full h-32 flex flex-col items-center pt-4 pb-4 rounded-2xl bg-white shadow border border-[#2983D399] duration-300 hover:translate-y-2 hover:-translate-x-2 active:translate-y-0 active:translate-x-0'>
                      <div className='flex h-32 justify-between flex-col items-center'>
                        <Image
                          className={`w-fit ${
                            index === 0
                              ? 'h-8 sm:h-10 translate-y-4'
                              : 'h-12 sm:h-14'
                          } object-contain`}
                          src={value.card_image}
                          alt='Car logo'
                        />
                        <span
                          className={`text-[14px] sm:text-[16px] font-[400] ${
                            index === 0 ? 'translate-y-3' : ''
                          }`}>
                          {value.card_title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentVariant === 1 && (
            <div className='w-full h-auto grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-4 sm:gap-6 md:gap-8 mt-4'>
              {BUSINESS_CATEGORIES.map((value, index) => (
                <div
                  data-aos='zoom-in'
                  onClick={() => handleClick(value)}
                  key={index}
                  className='w-full flex flex-col items-center text-center'>
                  <div className='w-full h-32 sm:h-32 md:h-32 border-t-2 border-r-2 border-transparent rounded-2xl duration-300 hover:border-dashed hover:border-[#2983D399] cursor-pointer'>
                    <div className='w-full h-32 flex flex-col items-center pt-4 pb-4 rounded-2xl bg-white shadow border border-[#2983D399] duration-300 hover:translate-y-2 hover:-translate-x-2 active:translate-y-0 active:translate-x-0'>
                      <div className='flex h-32 justify-between flex-col items-center'>
                        <Image
                          className={`w-fit ${
                            index === 0
                              ? 'h-8 sm:h-10 translate-y-4'
                              : 'h-12 sm:h-14'
                          } object-contain`}
                          src={value.card_image}
                          alt='Car logo'
                        />
                        <span
                          className={`text-[14px] sm:text-[16px] font-[400] ${
                            index === 0 ? 'translate-y-3' : ''
                          }`}>
                          {value.card_title}
                        </span>
                      </div>
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
}
