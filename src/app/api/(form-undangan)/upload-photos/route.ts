import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { customAlphabet, nanoid } from 'nanoid'

export const POST = auth(async (request) => {
  if (request.auth) {
    

  // return NextResponse.json({ message: "bodynya kosong" });
  if (!request.body) return NextResponse.json({ message: "bodynya kosong" });

  const dataForm = await request.formData();
  const datas = Object.fromEntries(dataForm);
  

  const fotomempelaiPria = dataForm.get("url_foto_pria") as File;
  if (fotomempelaiPria.name) {
    const UploadFotoMempelaiPria = await put(
      fotomempelaiPria.name,
      fotomempelaiPria,
      {
        access: "public",
      }
    );
    datas.url_foto_pria = UploadFotoMempelaiPria.url;
  } else {
    datas.url_foto_pria = "";
  }

  const fotomempelaiWanita = dataForm.get("url_foto_wanita") as File;
  if (fotomempelaiWanita.name) {
    const UploadFotoMempelaiWanita = await put(
      fotomempelaiWanita.name,
      fotomempelaiWanita,
      {
        access: "public",
      }
    );
    datas.url_foto_wanita = UploadFotoMempelaiWanita.url;
  } else {
    datas.url_foto_wanita = "";
  }

  const fotoUtama = dataForm.get("url_foto_utama") as File;
  if (fotoUtama.name) {
    const UploadFotoUtama = await put(fotoUtama.name, fotoUtama, {
      access: "public",
    });
    datas.url_foto_utama = UploadFotoUtama.url;
  } else {
    datas.url_foto_utama = "";
  }
  // console.log('ini datas upload', fotomempelaiPria)

  datas.dateTime_akad_nikah = new Date(
    datas.dateTime_akad_nikah as string
  ).toISOString();

  datas.dateTime_resepsi = new Date(
    datas.dateTime_resepsi as string
  ).toISOString();

  // datas.templateId = datas.templateId;
  // model.id = nanoid() //=> "4f90d13a42"
  datas.slug =
    datas.nama_panggilan_pria +
    "-" +
    datas.nama_panggilan_wanita +
    "_(" +
    nanoid(6) +
    ")";

  //   const pria = (datas.nama_pria as string).split(' ')[0]
  //   const wanita = (datas.nama_wanita as string).split(' ')[0]
  // console.log("ini datas tesss", datas);
  let dataInputFotoMoments = {} as any;
  let dataInputProfile = {} as any;

  for (const [key, value] of Object.entries(datas)) {
    if (value instanceof File) {
      dataInputFotoMoments[key] = value;
    } else {
      dataInputProfile[key] = value;
    }
  }

  // datas.templateId = datas.templateId;
  const getAllDataForm = {
    ...dataInputProfile,
    templateId: Number(datas.templateId),
  };

  const newProfile = await prisma.profile.create({
    // data: datas as any,
    data: getAllDataForm as any,
  });

  const fotoMomentsArray = Object.values(dataInputFotoMoments).filter(
    (value) => value instanceof File
  );
  let getUrlFotoMomets = [];
  for (let i = 0; i < fotoMomentsArray.length; i++) {
    const foto = fotoMomentsArray[i] as File;

    const uploadFoto = await put(`fotomoments/${foto.name}`, foto, {
      access: "public",
    });
    getUrlFotoMomets.push(uploadFoto.url);
  }

  const UploadFoto = getUrlFotoMomets.map((datas) => ({
    url_foto : datas,
    profileId : newProfile.id
  }))

  const newFotoMoments = await prisma.photoMoments.createMany({
    data: UploadFoto
  })

  

  revalidatePath("/user");
    return NextResponse.json({ message: "upload bersahil" });
  }
  return Response.json({ message: "Not authenticated" }, { status: 401 })
} ) as any

