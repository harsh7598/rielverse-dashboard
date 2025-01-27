"use client";
import AuthCardLayout from '@/components/layout/auth-card-layout';
import React, { Suspense } from 'react';
import PlaceHolder from '@/assets/placeholder.svg';
import ForgotVerifyForm from '@/components/forms/auth/forgot/forgot-verify-form';
import { useSearchParams } from "next/navigation";

// const ForgotVerifyPage: React.FC = () => {
//   return (
//     <AuthCardLayout
//     imgSrc={PlaceHolder}
//     imgAlt="Forgot password"
//     title="Forgot your password?"
//     description="Enter your details below to create new password"
//     noImg>
//     <ForgotVerifyForm />
//   </AuthCardLayout>
//   );
// };

// export default ForgotVerifyPage;
const ForgotVerifyPage = () => {
  const searchParams = useSearchParams();

  return <div>Query: {searchParams.get("token")}</div>;
};
export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgotVerifyPage />
    </Suspense>
  );
}