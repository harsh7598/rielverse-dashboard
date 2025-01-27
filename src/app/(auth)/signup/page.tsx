import SignupForm from '@/components/forms/auth/signup-form';
import AuthCardLayout from '@/components/layout/auth-card-layout';
import Loader from '@/components/ui/custom/Loader';
import React, { Suspense } from 'react';
import PlaceHolder from '@/assets/placeholder.svg';
import Image from 'next/image';
import TopLogin from '../../../../public/Icons/Reilverse_Assets/TopContainer.svg';
import BottomLogin from '../../../../public/Icons/Reilverse_Assets/BottomContainer.svg';
import LeftLogin from '../../../../public/Icons/Reilverse_Assets/LeftBottomContainer.svg';
import RightLogin from '../../../../public/Icons/Reilverse_Assets/RightBottomContainer.svg';

const SignupPage: React.FC = () => {
  return (
    <div className='relative w-screen h-screen flex items-center justify-center overflow-hidden'>
      <div className='relative flex items-center justify-center'>
        <AuthCardLayout
          imgSrc={PlaceHolder}
          imgAlt='Signup'
          title='Create an account'
          description='Enter your details below to create your account'>
          <Suspense fallback={<Loader />}>
            <SignupForm />
          </Suspense>
        </AuthCardLayout>
        <div className='absolute top-[-102px] left-1/2 transform -translate-x-1/2 hidden sm:block pointer-events-none'>
          <Image src={TopLogin} alt='Top Icon' />
        </div>
        <div className='absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 hidden sm:block pointer-events-none'>
          <Image src={BottomLogin} alt='Bottom Icon' />
        </div>
        <div className='absolute top-0 left-[-300px] hidden sm:block pointer-events-none'>
          <Image src={LeftLogin} alt='Left Icon' width={300} height={200} />
        </div>
        <div className='absolute top-0 right-[-300px] hidden sm:block pointer-events-none'>
          <Image src={RightLogin} alt='Right Icon' width={300} height={200} />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
