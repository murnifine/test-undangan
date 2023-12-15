import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import { auth } from "@/lib/auth";
import { Toaster } from "sonner";
import Script from "next/script";
import { Navbar } from "./(tamu)/components/Navbar/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olvit - Online Invitation",
  description: "Sampaikan undanganmu dengan mudah",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
  // filter out sensitive data before passing to client.
  if (session?.user) {
    session.user = {
      id: session.user.id,
      role: session.user.role,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className=" min-h-screen min-w-full">
        <SessionProvider session={session}>
          <Toaster position="top-center" />
          <MantineProvider>

            {children}
          </MantineProvider>
        </SessionProvider>
        <Script
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={process.env.MIDTRANS_CLIENT_KEY}
        />
      </body>
    </html>
  );
}
