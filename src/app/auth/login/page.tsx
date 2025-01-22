import AuthCardLayout from '@/components/layout/auth-card-layout';
import Loader from '@/components/ui/custom/Loader';
import React, { Suspense } from 'react';
import PlaceHolder from '@/assets/placeholder.svg';
import LoginForm from '@/components/forms/auth/login-form';

const LoginPage: React.FC = () => {
  return (
    <AuthCardLayout
      imgSrc={PlaceHolder}
      imgAlt='Login'
      title='Welcome Back'
      description='Login to your IAMI Insurance account'>
      <Suspense fallback={<Loader />}>
        <LoginForm />
      </Suspense>
    </AuthCardLayout>
  );
};

export default LoginPage;
