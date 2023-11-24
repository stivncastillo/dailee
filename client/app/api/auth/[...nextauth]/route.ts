import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import createApolloClient from "@/apollo-client";
import {
  SignInDocument,
  SignInMutation,
  SignInMutationVariables,
} from "@/graphql/codegen/graphql";

const client = createApolloClient();
const httpLink: HttpLink = new HttpLink({
  uri: "http://localhost:3001/graphql",
});

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

        // if (user.error) throw user;

        if (!data?.signin?.user) return null;

        const link = setContext(async (operation, prevContext) => {
          return {
            ...prevContext,
            headers: {
              ...prevContext.headers,
              Authorization: `Bearer ${data.signin.accessToken}`,
            },
          };
        });

        client.setLink(link.concat(httpLink));

        return {
          id: data.signin.user.id,
          name: data.signin?.user?.name,
          email: data.signin?.user?.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
