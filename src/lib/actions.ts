"use server";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { User } from "@prisma/client";
import { put } from "@vercel/blob";
import { UserProps } from "@/types/types";

export const sendUcapan = async (formData: FormData, user: UserProps) => {
  const nama = formData.get("nama");
  const ucapan = formData.get("ucapan");

  const sendUser = await prisma.ucapan.create({
    data: {
      profileId: user.Profile?.id,
      nama: nama as string,
      pesan: ucapan as string,
    },
  });
  revalidatePath(`/${user?.name}`);
};

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    include: {
      Profile: {
        include: {
          photo_moment: true,
        },
      },
    },
  });
  return users;
};

// // export const uploadGambar = async (formData: FormData, userId: string) => {
// export const uploadGambar = async (files: any, userId: string) => {
//   // const file = formData.get("file") as File;
//   const file = files[0] as File;

//   console.log({ file });

//   // const blob = await put(file.name, file, {
//   //   access: "public",
//   // });

//   // await prisma.photoMoments.create({
//   //   data: {
//   //     url_foto: blob.url,
//   //     userId: parseInt(userId),
//   //   },
//   // });

//   // console.log({ blob });
// };

export async function getUserByName(name: string) {
  const user = await prisma.user.findFirst({
    include: {
      Profile: {
        include: {
          ucapan: true,
          photo_moment: true,
          template: true,
          // template: {
          //   include: {
          //     admin: true,
          //   },
          // },
        },
      },
    },
    where: {
      name: name,
    },
  });

  return user;
}
export async function getUserById(id: string) {
  const user = await prisma.user.findFirst({
    include: {
      Profile: {
        include: {
          ucapan: true,
          photo_moment: true,
          template: true,
          // template: {
          //   include: {
          //     admin: true,
          //   },
          // },
        },
      },
    },
    where: {
      id: id,
    },
  });

  return user;
}

// export async function getSosialMedia(id : number){
//   const user = await prisma.user.findFirst({
//     include : {
//       Profile : {
//         include : {
//           pria_ig,

//         }

//       }
//     },
//     where : {
//       id:id
//     }

//   })
// }

