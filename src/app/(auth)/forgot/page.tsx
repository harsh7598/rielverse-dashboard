import AuthCardLayout from '@/components/layout/auth-card-layout';
import React from 'react';
import PlaceHolder from '@/assets/placeholder.svg';
import ForgotForm from '@/components/forms/auth/forgot/forgot-form';

const ForgotPage: React.FC = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <AuthCardLayout
        imgSrc={PlaceHolder}
        imgAlt='Forgot password'
        title='Forgot your password?'
        description='Enter your email below to reset your password'
        noImg>
        <ForgotForm />
      </AuthCardLayout>
    </div>
  );
};

export default ForgotPage;
