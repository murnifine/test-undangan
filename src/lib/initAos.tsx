"use client";

import { ReactNode, useEffect } from "react";
import { jalankanAos } from "./aos";




export default function InitAos({ children }: { children: ReactNode }) {
    useEffect(() => {
        jalankanAos();
    }, []);
    return (
        <>
            {children}
        </>
    )
}