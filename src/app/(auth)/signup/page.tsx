import SignupForm from '@/components/forms/auth/signup-form';
import AuthCardLayout from '@/components/layout/auth-card-layout';
import React from 'react';
import PlaceHolder from '@/assets/placeholder.svg';

const SignupPage: React.FC = () => {
  return (
    <AuthCardLayout
      imgSrc={PlaceHolder}
      imgAlt='Signup'
      title='Create an account'
      description='Enter your details below to create your account'>
      <SignupForm />
    </AuthCardLayout>
  );
};

export default SignupPage;
