// import { HttpLink } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import createApolloClient from "@/apollo-client";
import {
  RefreshTokenDocument,
  RefreshTokenMutation,
  RefreshTokenMutationVariables,
  SignInDocument,
  SignInMutation,
  SignInMutationVariables,
} from "@/graphql/codegen/graphql";

const client = createApolloClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;
        if (!credentials?.password) return null;

        const { data } = await client.mutate<
          SignInMutation,
          SignInMutationVariables
        >({
          mutation: SignInDocument,
          variables: {
            signInInput: {
              email: credentials?.email,
              password: credentials?.password,
            },
          },
        });

        if (!data?.signin?.user) return null;

        return {
          id: data.signin?.user.id,
          name: data.signin?.user?.name,
          email: data.signin?.user?.email,
          token: data.signin?.accessToken,
          refreshToken: data.signin?.refreshToken,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ user, token }) {
      // @ts-ignore
      if (token?.exp * 1000 > Date.now()) {
        const { data } = await client.mutate<
          RefreshTokenMutation,
          RefreshTokenMutationVariables
        >({
          mutation: RefreshTokenDocument,
          context: {
            headers: {
              authorization: `Bearer ${token?.refreshToken}`,
            },
          },
        });

        const result = {
          id: data?.newTokens?.user.id,
          name: data?.newTokens?.user?.name,
          email: data?.newTokens?.user?.email,
          token: data?.newTokens?.accessToken,
          refreshToken: data?.newTokens?.refreshToken,
        };

        return { ...token, ...result };
      }

      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
