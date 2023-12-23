"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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


export async function updateProfile(id: number, data: any) {
  const edit = await prisma.profile.update({
    where: {
       id,
    },
    data: {
      ...data
    }
  })

  if (!edit)
    return {
      status: "failed",
    };

  revalidatePath("/user");
  redirect('/user')


}
