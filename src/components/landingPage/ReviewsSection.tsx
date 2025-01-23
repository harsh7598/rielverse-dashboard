import Image from 'next/image';
import React from "react";
import { REVIEWS } from '@/utils/constants';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import comas from "../../../public/Icons/Reilverse_Assets/comas.svg";
import girl from '../../../public/Icons/Reilverse_Assets/imagegirl.svg';
import greenStripe from '../../../public/Icons/Reilverse_Assets/Vector_stripe.svg';



interface Review {
    image: string;
    name: string;
    position: string;
    quote: string;
  }

const ReviewsSection = () => {
  return (
    <div className='w-full flex max-[1150px]:flex-col max-[1150px]:items-center items-start mt-24'>
      {/* Left Side - Image */}
      <div
        data-aos='zoom-out-right'
        className='w-full max-w-[620px] max-[1150px]:w-[330px]'>
        <Image
          className='w-full h-fit max-h-[423px] object-contain'
          src={girl}
          alt='Girl Image'
        />
      </div>

      {/* Right Side - Content */}
      <div
        data-aos='zoom-out-left'
        className='w-full max-[1150px]:w-full max-[1200px]:w-[400px] max-[1300px]:w-[500px] max-[1400px]:w-[600px] max-w-[900px] flex flex-col items-start max-[1400px]:ml-0 ml-16 mt-8 text-start'>
        <span className='text-[18px] underline font-[500]'>Reviews</span>
        <div className='flex flex-col text-[32px] max-[800px]:text-3xl leading-[25px] font-[700] mt-5'>
          <span className=' bg-clip-text'>
            What they say
          </span>
          <br />
          <span className='relative'>
            About us
            <Image
              className=' absolute -bottom-8 w-[175px] h-[17px] object-contain'
              src={greenStripe}
              alt='Green Stripe'
            />
          </span>
        </div>
        <p
          style={{ fontWeight: '400', fontFamily: 'Arboria-Book' }}
          className='text-[21px] max-[800px]:text-lg max-[800px]:mt-4 tracking-[1px] leading-[40px] mt-12'>
          We're honoured to have helped these begin a{' '}
          <span className='text-[#13519C]'>SMILING FACES</span> new life abroad
        </p>

        {/* Swiper Component */}
        <div className='w-full max-w-[850px] h-72 relative mt-7'>
          {/* Comas Icon */}
          <div className='flex items-center w-16 h-16 justify-center rounded-lg bg-[#2983D3]/30 gap-2 absolute top-0 max-[500px]:right-4 right-28 z-10'>
            <Image
              className='w-[31px] h-[23px] object-contain'
              src={comas}
              alt='quote'
            />
          </div>

          {/* Swiper Component */}
          <Swiper
            className='w-full h-full'
            style={{
              '--swiper-pagination-color': '#2983d3',
              '--swiper-pagination-bullet-inactive-color': '#2983D3',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '--swiper-pagination-bullet-size': '12px',
              '--swiper-pagination-bullet-horizontal-gap': '6px',
            }}
            modules={[Navigation, Autoplay, Pagination]}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={100}
            speed={2000}
            slidesPerView={1}
            onSlideChange={() => console.log('Slide changed')}
            onSwiper={(swiper) => console.log(swiper)}>
            {REVIEWS.map((review, index) => (
              <SwiperSlide key={index} className='w-full h-full cursor-pointer'>
                <div className='w-full h-52 flex flex-col relative items-start'>
                  <div className='w-1 h-12'></div>
                  <div className='w-full h-40 p-5 bg-gradient-to-r from-transparent from-5% to-gray-400/20 rounded-lg relative'>
                    {/* Avatar and Info */}
                    <div className='flex items-center gap-2 absolute -top-10 left-4'>
                      <div className='w-14 h-14 rounded-full'>
                        <Image
                          className='w-full h-full object-cover'
                          src={review.image}
                          alt='avatar'
                        />
                      </div>
                      <div className='flex flex-col items-start'>
                        <span className='font-[400] text-[14px]'>
                          {review.name}
                        </span>
                        <span
                          className='text-[12px]'
                          style={{
                            fontWeight: '400',
                            fontFamily: 'Arboria-Book',
                          }}>
                          {review.position}
                        </span>
                      </div>
                    </div>

                    {/* Quote */}
                    <p
                      style={{
                        fontWeight: '400',
                        fontFamily: 'Arboria-Book',
                      }}
                      className='mt-4 text-[16px] max-[400px]:text-sm'>
                      {review.quote}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
