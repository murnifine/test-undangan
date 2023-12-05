import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import formidable from "formidable";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function POST(request: Request): Promise<NextResponse> {
  if (!request.body) return NextResponse.json({ message: "bodynya kosong" });

  // CARA 1 : terima sebagai FormData
  const formData = await request.formData();
  const file = formData.get("files") as File;
  const userId = formData.get("userId") as string;

  // CARA 2 : terima File dari client mnejadi ReadableStream
  // const file = request.body as ReadableStream;

  const blob = await put(file.name, file, {
    access: "public",
  });

  await prisma.photoMoments.create({
    data: {
      profileId: parseInt(userId),
      url_foto: blob.url,
    },
  });

  console.log(blob);
  // console.log(formData, file);
  // console.log(formData, file, { blob });

  // return NextResponse.json(blob);
  revalidatePath(`/admin/foto?userId=${userId}`);
  return NextResponse.json({ message: "upload" });
}
