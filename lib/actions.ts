"use server";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { User } from "@prisma/client";

export const sendUcapan = async (formData: FormData, user: User) => {
  const nama = formData.get("nama");
  const ucapan = formData.get("ucapan");

  const sendUser = await prisma.ucapan.create({
    data: {
      userId: user.id as number,
      nama: nama as string,
      pesan: ucapan as string,
    },
  });
  revalidatePath(`/${user?.name}`);
};

export const uploadGambar = async (formData: FormData, user: User) => {
  // const nama = formData.get("nama");
  // const ucapan = formData.get("ucapan");
  // const sendUser = await prisma.ucapan.create({
  //   data: {
  //     userId: user.id as number,
  //     nama: nama as string,
  //     pesan: ucapan as string,
  //   },
  // });
  // revalidatePath(`/${user?.name}`);
};

export const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

