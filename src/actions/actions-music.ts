"use server";

import prisma from "@/lib/prisma";

export async function getAllMusic() {
  const data = await prisma.music.findMany();

  // console.log({ data });

  let status = !data ? "failed" : "success";

  return {
    status,
    data,
  };
}
