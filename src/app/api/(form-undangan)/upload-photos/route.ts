import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import formidable from "formidable";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { User } from "next-auth/types";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
    


    if (!request.body) return NextResponse.json({ message: "bodynya kosong" });
    
    const dataForm = await request.formData()
    const datas  = Object.fromEntries(dataForm)
    
    
    const fotomempelaiPria = dataForm.get("url_foto_pria") as File;
    if (fotomempelaiPria.name) {
        const UploadFotoMempelaiPria = await put(fotomempelaiPria.name, fotomempelaiPria, {
            access: "public",
        });
        datas.url_foto_pria = UploadFotoMempelaiPria.url
    } else {
        datas.url_foto_pria = ''

    }
    // console.log('ini datas upload', fotomempelaiPria)
   
    
    datas.dateTime_akad_nikah = (new Date(datas.dateTime_akad_nikah as string)).toISOString()
    datas.dateTime_resepsi = (new Date(datas.dateTime_resepsi as string)).toISOString()
    console.log('ini datas tesss', datas)


    const a = await prisma.profile.create({
        data: datas as any
    })
    console.log(a)
    revalidatePath('/user')
    return NextResponse.json({ message: "upload bersahil" });
    
  }

  