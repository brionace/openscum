import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id?: string | null;
  }
  interface Session {
    user?: {
      username: string | null | undefined;
      id?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
