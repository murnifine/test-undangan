export { auth as middleware } from "@/lib/auth";

// import authConfig from "@/lib/auth.config";
// import NextAuth from "next-auth";
// export const { auth: middleware } = NextAuth(authConfig);

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/user"],
};
