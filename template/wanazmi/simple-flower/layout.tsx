import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative font-Poppins flex flex-col items-center justify-center w-full h-full bg-slate-100  ">
      {children}
    </div>
  );
}
