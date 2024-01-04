import {  auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";





// export const POST = auth(async (request) => {
//     if (request.auth) {
//         const dataForm = await request.json()
//         const newDatas = dataForm.banks.map((item: any) => {
//             return {
//                 ...item,
//                 profileId: parseInt(item.profileId),
//                 nomor_req: parseInt(item.nomor_req),
//             };
//         });
//         // newDatas.map(async (index : any) => {
//         //     if (isNaN(index.nomor_req)) {
//         //         return NextResponse.json({ message: 'any', status: 200 })
//         //     }
//         //     console.log('data ada');
//         // })
//         const saveDataBank = await prisma.bank.createMany({
//            data : newDatas
//         })
//         return NextResponse.json({ message: "success", status: 200 });
//     }
//     return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
// })
export const POST = async (request: Request): Promise<NextResponse> => {
    const authen = await auth()
    if (!authen?.user) return   NextResponse.json({ message: "Not authenticated" }, { status: 401 })
        const dataForm = await request.json()
        const newDatas = dataForm.banks.map((item: any) => {
            return {
                ...item,
                profileId: parseInt(item.profileId),
                nomor_req: parseInt(item.nomor_req),
            };
        });
        newDatas.map(async (index : any) => {
            if (isNaN(index.nomor_req)) {
                return NextResponse.json({ message: 'any', status: 200 })
            }
            console.log('data ada');
            const saveDataBank = await prisma.bank.createMany({
               data : newDatas
            })
        })
        return NextResponse.json({ message: "success", status: 200 });
}
export const PUT = async (request: Request): Promise<NextResponse> => {
    const authen = await auth()
    if (!authen?.user) return   NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    const dataForm = await request.formData()
    const datas = Object.fromEntries(dataForm);
    const saveData = await prisma.bank.update
    console.log(datas)
    return NextResponse.json({datas, message : 'ok', status: 200})
}

export const GET = async (req: Request, res: Response): Promise<NextResponse> => {
    const authen = await auth()
    if (!authen?.user) return   NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    const dataBank = await prisma.bank.findMany()
    console.log('get req', dataBank)
    return NextResponse.json({dataBank, message: 'success', status: 200})
}