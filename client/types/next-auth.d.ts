import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      token: string;
      refreshToken: string;
    };
  }
}
