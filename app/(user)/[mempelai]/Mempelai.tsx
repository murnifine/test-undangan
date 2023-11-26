"use client";

import { User } from "@prisma/client";
import { useEffect } from "react";

export default function Mempelai({ user }: { user: User }) {
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, []);
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
  }

  return <></>;
}
