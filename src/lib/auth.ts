import GitHub from "next-auth/providers/github";
import Discord from "next-auth/providers/discord";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";

import type { NextAuthConfig } from "next-auth";
import Email from "next-auth/providers/email";
import nodemailer from "nodemailer";

import sendVerificationRequest from "@/lib/sendVerificationRequest";

const costumConfig = {
  allowDangerousEmailAccountLinking: true,
};

import { z } from "zod";

import Credentials from "next-auth/providers/credentials";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import NextAuth from "next-auth";

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    GitHub(costumConfig),
    Google(costumConfig),
    Facebook(costumConfig),
    Discord(costumConfig),
    // {
    //   id: "email",
    //   type: "email",
    //   name: "Email",
    //   from: "",
    //   server: "",
    //   maxAge: 60 * 10,
    //   options: {},
    //   sendVerificationRequest: sendVerificationRequest,
    // },
    // Email({
    //   sendVerificationRequest,
    // }),
    // Credentials({
    //   async authorize(credentials) {
    //     console.log("AWAL", credentials);
    //     const parsedCredentials = z
    //       .object({ email: z.string().email(), password: z.string().min(2) })
    //       .safeParse(credentials);

    //     if (parsedCredentials.success) {
    //       const { email, password } = parsedCredentials.data;
    //       const user = { name: "edi", email: "edi@mail.com" };

    //       if (email != user.email) return null;

    //       return user;
    //     }
    //     console.log("Invalid credentials");
    //     return null;
    //   },
    // }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const paths = ["/user"];
      const isProtected = paths.some((path) =>
        nextUrl.pathname.startsWith(path)
      );

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL("login", nextUrl.origin);
        redirectUrl.searchParams.append("callbackUrl", nextUrl.href);

        console.log("AUTHORIZED", { auth, nextUrl, redirectUrl });

        return Response.redirect(redirectUrl);
      }

      return true;
    },
    async session({ session, token, user }) {
      // console.log("SESSION AWAL", { session, token, user });
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      // console.log("SESSION AKHIR", { session, token, user });
      return session;
    },
    async jwt({ token, user, account, profile }) {
      // console.log("JWT AWAL", { token, user, account, profile });
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      // console.log("JWT AKHIR", { token, user, account, profile });
      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
