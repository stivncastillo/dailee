"use client";
import AuthLayout from "@/components/Layout/AuthLayout";
import LoginForm from "@/features/Auth/LoginForm";

export default function Login() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

Login.getLayout = function getLayout(page: any) {
  return <AuthLayout>{page}</AuthLayout>;
};
