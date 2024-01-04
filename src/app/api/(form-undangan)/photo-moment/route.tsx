// const UploadFoto = getUrlFotoMomets.map((datas) => ({
//     url_foto: datas,
//     profileId: newProfile.id,
//   }));

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const PUT = async (request: Request): Promise<NextResponse> => {
  const authen = await auth()
  if (!authen?.user) return NextResponse.json({ message: "Not authenticated" }, { status: 401 })

  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const profile_id = data.profile_id;

  async function saveImage(file: File) {
    const image = await put(`profile/${file.name}`, file, {
      access: "public",
    });
    return image.url as string;
  }

  const result = handleFile(data, Number(profile_id));

  return NextResponse.json({
    data: result,
    message: "success",
    status: 200,
  });
};

async function handleFile(data: any, profile_id: number) {
  let dataInputFotoMoments = {} as any;
  let dataInputProfile = {} as any;
  let getUrlFotoMomets = [];

  for (const [key, value] of Object.entries(data)) {
    if (value instanceof File) {
      dataInputFotoMoments[key] = value;
    } else {
      dataInputProfile[key] = value;
    }
  }

  const fotoMomentsArray = Object.values(dataInputFotoMoments).filter(
    (value) => value instanceof File
  );

  for (let i = 0; i < fotoMomentsArray.length; i++) {
    const foto = fotoMomentsArray[i] as File;
    const uploadFoto = await put(`foto_moments/${foto.name}`, foto, {
      access: "public",
    });
    getUrlFotoMomets.push(uploadFoto.url);
  }

  const UploadFoto = getUrlFotoMomets.map((datas) => ({
    url_foto: datas,
    profileId: profile_id,
  }));

  const newFotoMoments = await prisma.photoMoments.createMany({
    data: UploadFoto,
  });

  console.log({ newFotoMoments });

  return newFotoMoments;
}
