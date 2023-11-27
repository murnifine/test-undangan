"use server";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { User } from "@prisma/client";
import { put } from "@vercel/blob";

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

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    include: {
      photo_moment: true,
    },
  });
  return users;
};

// export const uploadGambar = async (formData: FormData, userId: string) => {
export const uploadGambar = async (files: any, userId: string) => {
  // const file = formData.get("file") as File;
  const file = files[0] as File;

  console.log({ file });

  // const blob = await put(file.name, file, {
  //   access: "public",
  // });

  // await prisma.photoMoments.create({
  //   data: {
  //     url_foto: blob.url,
  //     userId: parseInt(userId),
  //   },
  // });

  // console.log({ blob });
};