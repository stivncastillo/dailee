import { useState } from "react";

import { ApolloError } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import ControlledInput from "@/components/form/ControlledInput";
import ControlledPassword from "@/components/form/ControlledPassword";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/AuthProvider";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      email: "stiven@prueba.com",
      password: "12345",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await signIn(data.email, data.password);
      navigate("/");
    } catch (error) {
      if (error instanceof ApolloError) {
        setError(error.message);
      }
    }
    setLoading(false);
  });

  return (
    <form>
      <div className="grid gap-2">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="grid gap-1">
          <ControlledInput
            control={control}
            label="Email"
            name="email"
            type="email"
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
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password should be at least 5 characters",
              },
            }}
          />
        </div>

        <Button onClick={onSubmit} isLoading={loading} disabled={!isValid}>
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
