import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const PUT = auth(async (request) => {
  if (!request.auth)
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // return console.log(data.foto_pria);

  async function saveImage(file: File) {
    const image = await put(`profile/${file.name}`, file, {
      access: "public",
    });
    return image.url as string;
  }

  const foto_urls = {
    url_foto_pria: await saveImage(data.foto_pria as File),
    url_foto_wanita: await saveImage(data.foto_wanita as File),
    url_foto_utama: await saveImage(data.foto_utama as File),
  };

  const profile_id = data.profile_id;

  const data_updated = await prisma.profile.update({
    where: {
      id: Number(profile_id),
    },
    data: foto_urls,
  });

  console.log({ data_updated });

  return NextResponse.json({
    data: data_updated,
    message: "success",
    status: 200,
  });
});
