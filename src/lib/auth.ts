import NextAuth, { NextAuthConfig } from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

export const config = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;

      const isLoggedIn = !!auth?.user;
      console.log({ isLoggedIn, auth });
      // if (pathname === "/user/create") return !!auth?.user;
      return false;
    },

    // async session({ session, user }) {
    //   console.log({ session, user });
    //   session.user.id = user.id;
    //   session.user.role = user.role;
    //   return session;
    // },

    // authorized({ request, auth }) {
    //   const isLoggedIn = !!auth?.user;
    //   const paths = ["/dashboard"];
    //   const isProtected = paths.some((path) =>
    //     request.nextUrl.pathname.startsWith(path)
    //   );

    //   if (isProtected && !isLoggedIn) {
    //     const redirectUrl = new URL("api/auth/signin", request.nextUrl.origin);
    //     redirectUrl.searchParams.append("callbackUrl", request.nextUrl.href);
    //     return Response.redirect(redirectUrl);
    //   }

    //   // const { pathname } = request.nextUrl;
    //   // if (pathname === "/dashboard") return !!auth;
    //   return true;
    // },
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log("okeeeeeeeeeeeeeeeeeeeeeeeeeee");
    //   return true;
    // },
    // },
  },
  ...authConfig,
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
