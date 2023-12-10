import { useMutation } from '@apollo/client';

import { SignInDocument, SignInMutation, SignInMutationVariables } from '@/lib/graphql/codegen/graphql';

interface SignInProps {
  email: string;
  password: string;
}

const useSignIn = () => {
  const [signIn] = useMutation<
    SignInMutation,
    SignInMutationVariables
  >(SignInDocument);

  const onSignIn = async ({ email, password }: SignInProps) => {
    const { data } = await signIn({ variables: { signInInput: {email, password} } });
    return data?.signin;
  };

  return {onSignIn};
}

export default useSignIn;
