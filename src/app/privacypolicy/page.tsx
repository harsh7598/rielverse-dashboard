import Image from 'next/image';
import React from 'react';
import righthead from '../../../public/Icons/Reilverse_Assets/bg_right.svg';
import { Header } from '@/components';
import privacylogo from '../../../public/Icons/Reilverse_Assets/privacylogo.svg';
import Footer from '@/components/footer/Footer';

const PrivacyPolicy = () => {
  return (
    <div className='w-full'>
      <Image
        className='absolute right-0 top-0'
        src={righthead}
        alt='righthead'
      />
      <Header />
      <div className='w-full h-auto mx-auto max-w-[1300px] flex flex-col md:flex-row gap-10 justify-center pt-24 md:pt-32 lg:pt-40 px-4 md:px-8 sm:px-1 lg:px-16 mb-16 md:mb-28 lg:mb-36'>
        {/* {left section} */}
        <div className='w-full md:w-4/6 flex flex-col'>
          <h2 className='text-lg md:text-xl lg:text-2xl font-semibold mb-4'>Privacy Policy</h2>
          <h2 className='text-lg md:text-xl lg:text-2xl font-semibold mb-4'>Rielverse</h2>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-4'>
            We may collect personal information that can be used to identify
            you, including, but not limited to, name, residential address,
            identification and/or passport number, date of birth, email address,
            employment details, information relating to financial circumstances
            (collectively “Personal Information”). We also collect traffic
            patterns relating to users on our website.
          </p>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-4'>
            When you provide personal information, through our websites or
            through other channels such as phone, email, SMS, WhatsApp, and
            other messaging and information sharing services, the information
            may be sent to servers located in the Singapore and other countries
            around the world.
          </p>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-4'>
            By providing this information, you consent to:
          </p>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-4'>
            1. You are authorized to provide this information on behalf of an
            entity other than yourself.
          </p>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-14'>
            2. The information you provide is accurate to the best of your
            knowledge.
          </p>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-4'>
            Your privacy is important to us. Keeping customer information safe,
            secure and using it only for the purpose of serving our customers is
            the top priority for all of us.
          </p>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-4'>
            We collects personal information from its clients (about their
            employees and customers) to provide risk based services, such as
            insurance broking, risk management consulting and employee benefits
            and pension administration. Grandiose also collects some personal
            information directly, for example over its websites and
            applications.
          </p>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-4'>
            We uses personal information to deliver services to clients. For its
            own purposes, it also uses personal information to analyse and
            improve how it delivers those services, to contact representatives
            of its clients or prospective clients and to market to them.
          </p>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-4'>
            By providing your personal data to us, you accept that Grandiose may
            retain your information for as long as necessary, to fulfill the
            purpose(s) for which it is collected in compliance with applicable
            laws and regulations and our’s prevailing internal policies.
          </p>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-4'>
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons :
          </p>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-4'>Internal record keeping.</p>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-4'>
            We may use the information to improve our products and services.
          </p>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-4'>
            We may periodically send promotional emails about new products,
            special offers or other information which we think you may find
            interesting using the email address which you have provided.
          </p>
          <p className='text-[12px] md:text-[14px] lg:text-[15px] mb-4'>
            For enquiries on the use of your personal data, please contact us.
          </p>
        </div>

        {/* {right seection} */}
        <div className='w-full md:w-2/6 z-10 h-fit bg-gradient-to-b from-[#1A45D6] to-white rounded-[10px] p-[1px]'>
          <div className='flex flex-col gap-4  bg-white z-10 rounded-[11px] p-4 md:p-8'>
            <Image src={privacylogo} alt='privacylogo' />
            <div className='flex flex-col gap-2'>
              <h3 className='text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-[#1A45D6]'>
                Need to get in touch?
              </h3>
              <p className='text-[12px] md:text-[14px] lg:text-[15px]'>
                If you have any complaints or grievances regarding your personal
                information, you can contact our grievance officer via email.
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-[#1A45D6]'>
                Email
              </h3>
              <p className='text-[12px] md:text-[14px] lg:text-[15px]'>complaint@rielverse.com</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-[#1A45D6]'>
                Post To
              </h3>
              <p className='text-[12px] md:text-[14px] lg:text-[15px]'>
                #10, 150 South Bridge Rd, #04 Fook Hai Building, Singapore
                058727
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
