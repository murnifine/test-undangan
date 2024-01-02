import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { error } from "console";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";









export const GET = auth(async (request) => {
  if (request.auth) {
    let data
    const getIdParams = request.nextUrl.searchParams.get('id')
    if (getIdParams) {
      data = await prisma.profile.findFirst({
        where: {
          id : Number(getIdParams),
        }
      })
    } else {
      data = await prisma.profile.findMany()
    }
    // return NextResponse.json({data})
    return NextResponse.json({data, message: "success", status: 200 });
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 })
})




export const POST = auth(async (request) => {
  if (request.auth) {
    
    try {
      // throw error
      const dataForm = await request.formData()
      const datas = Object.fromEntries(dataForm);

      datas.dateTime_akad_nikah = new Date(datas.dateTime_akad_nikah as string).toISOString();

      datas.dateTime_resepsi = new Date(datas.dateTime_resepsi as string).toISOString();

      datas.slug = datas.nama_panggilan_pria + "-" + datas.nama_panggilan_wanita + '_(' + nanoid(6) + ')';
      // datas.userId("userId", sessionId);
      datas.templateId = Number(datas.templateId) as any
      datas.userId = request.auth.user.id

      const data = await prisma.profile.create({
        data: datas as any,
      });
      revalidatePath("/user");
      return NextResponse.json({ data, message: "success", status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({error: error, message: "failed", status: 401 });
    }
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 })
})

// export const POST = auth(async (request) => {
//     if (request.auth) {
//         if (!request.body) return NextResponse.json({ message: "bodynya kosong" });
//         const dataForm = await request.formData()
//         const datas = Object.fromEntries(dataForm);
//         datas.dateTime_akad_nikah = new Date(
//             datas.dateTime_akad_nikah as string
//           ).toISOString();
        
//           datas.dateTime_resepsi = new Date(
//             datas.dateTime_resepsi as string
//           ).toISOString();
//           datas.slug = datas.nama_panggilan_pria + "-" + datas.nama_panggilan_wanita + '_(' + nanoid(6) + ')';
          
//           datas.templateId = datas.templateId;
//         const newProfile = await prisma.profile.create({
//         data: datas as any,
     
//       });
    
//         revalidatePath("/user");
        
//         return NextResponse.json({ message: "upload bersahil" });
//     }
//     return Response.json({ message: "Not authenticated" }, { status: 401 })
    
// })