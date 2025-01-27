import AuthCardLayout from '@/components/layout/auth-card-layout';
import Loader from '@/components/ui/custom/Loader';
import React, { Suspense } from 'react';
import PlaceHolder from '@/assets/placeholder.svg';
import LoginForm from '@/components/forms/auth/login-form';
import Image from 'next/image';
import TopLogin from '../../../../public/Icons/Reilverse_Assets/TopContainer.svg';
import BottomLogin from '../../../../public/Icons/Reilverse_Assets/BottomContainer.svg';
import LeftLogin from '../../../../public/Icons/Reilverse_Assets/LeftBottomContainer.svg';
import RightLogin from '../../../../public/Icons/Reilverse_Assets/RightBottomContainer.svg';
import LoginLogo from '../../../../public/Icons/Reilverse_Assets/LoginLogo.svg';

const LoginPage: React.FC = () => {
  return (
    <div className='relative w-screen h-screen flex items-center justify-center overflow-hidden'>
      <div className='relative flex items-center justify-center'>
        <AuthCardLayout
          imgSrc={PlaceHolder}
          imgAlt='Login'
          title='Welcome Back'
          description='Login to your Rielverse Insurance account'>
          <Suspense fallback={<Loader />} >
            <LoginForm />
          </Suspense>
        </AuthCardLayout>
        <div className='absolute top-[-130px] left-1/2 transform -translate-x-1/2 hidden sm:block '>
          <Image src={LoginLogo} alt='Logo' width={300} quality={100} />
        </div>
        <div className='absolute top-[-95px] left-1/2 transform -translate-x-1/2 hidden sm:block pointer-events-none'>
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

export default LoginPage;
