import AuthCardLayout from '@/components/layout/auth-card-layout';
import React from 'react';
import PlaceHolder from '@/assets/placeholder.svg';
import ForgotVerifyForm from '@/components/forms/auth/forgot/forgot-verify-form';

const ForgotVerifyPage: React.FC = () => {
  return (
    <AuthCardLayout
    imgSrc={PlaceHolder}
    imgAlt="Forgot password"
    title="Forgot your password?"
    description="Enter your details below to create new password"
    noImg>
    <ForgotVerifyForm />
  </AuthCardLayout>
  );
};

export default ForgotVerifyPage;
