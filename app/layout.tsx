import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Undangan",
  description: "Gunakan website undangan dengan mudah",
};

import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <body className=" font-Poppins flex flex-col items-center justify-center w-full h-full bg-slate-100 overflow-scroll"> */}
        {children}
      </body>
    </html>

    // <html lang="en">
    //   <head>
    //     <ColorSchemeScript />
    //   </head>
    //   <body>{children}</body>
    // </html>
  );
}
