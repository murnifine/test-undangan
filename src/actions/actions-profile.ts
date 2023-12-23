"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function getProfile(id: number) {
  const data = await prisma.profile.findFirst({
    where: {
      id,
    },
  });

  let status = !data ? "failed" : "success";

  return {
    status,
    data,
  };

  // revalidatePath("/user");
}

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
      ...data,
    },
  });

  if (!edit)
    return {
      status: "failed",
    };

  revalidatePath("/user");
  redirect("/user");
}

export async function setMusic(profileId: number, musicId: string) {
  // const test = await prisma.

  const data = await prisma.profile.update({
    where: {
      id: profileId,
    },
    data: {
      musicId: musicId,
    },
  });

  console.log({ data });

  // if (!data)
  //   return {
  //     status: "failed",
  //   };

  // revalidatePath("/user");
  // redirect("/user");
}
