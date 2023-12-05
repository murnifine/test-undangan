import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      //   address: string
      id?: string | undefined;
      role?: string | undefined;
      // name?: string | undefined
      //   email?: string | undefined
      //   image?: string | undefined
    } & DefaultSession["user"];
  }

  interface User {
    role?: string | undefined;
  }
}
