"use client";
import React, { useState } from "react";

import { Button, Checkbox } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

import Alert from "@/components/Alert";
import { ControlledInput } from "@/components/Form";
import ControlledPassword from "@/components/Form/ControlledPassword";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      email: "email2@prueba.com",
      password: "123455",
    },
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ email, password }: FormValues) => {
    setLoading(true);
    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);

    if (responseNextAuth?.error) {
      setError(responseNextAuth.error);
      return;
    }
    if (responseNextAuth?.status !== 200) {
      setError("Something went wrong");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your email and password to access your account
        </p>
      </div>

      {error && <Alert type="error" message={error} />}

      <form className="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <ControlledInput
          control={control}
          label="Email"
          name="email"
          type="email"
          variant="bordered"
          radius="sm"
          size="md"
          rules={{
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          }}
        />

        <ControlledPassword
          label="Password"
          name="password"
          variant="bordered"
          radius="sm"
          size="md"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password should be at least 5 characters",
            },
          }}
        />

        <div className="flex items-center justify-between">
          <Checkbox defaultSelected size="sm">
            Remember me
          </Checkbox>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-primary-500 hover:text-primary-400"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <Button
          color="primary"
          className=" w-full"
          radius="sm"
          isDisabled={!isValid}
          onClick={handleSubmit(onSubmit)}
          isLoading={loading}
        >
          Sing in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
