import InitAos from "@/lib/initAos";
import { fchmod } from "fs";
import React from "react";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <InitAos>
      <div id="isiUndangan" className="relative flex overflow-hidden font-Poppins  flex-col items-center justify-center w-full h-screen bg-slate-100  ">
        {children}
      </div>
    </InitAos>
  );
}
