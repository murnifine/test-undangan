import { fchmod } from "fs";
import React from "react";
import Cover from "./(content)/cover";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative font-Poppins flex flex-col items-center justify-center w-full h-full bg-slate-100  ">
      {children}
    </div>
  );
}
