"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteProfile(id: number) {
  const hapus = await prisma.profile.delete({
    where: {
      id,
    },
  });

  if (!hapus)
    return {
      status: "failed",
    };

  revalidatePath("/user");

  return {
    status: "success",
  };
}
