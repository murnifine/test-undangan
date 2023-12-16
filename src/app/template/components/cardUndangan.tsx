import prisma from "@/lib/prisma";
import { category } from "@prisma/client";
import { IoCheckmarkDone } from "react-icons/io5";
import { Span } from "next/dist/trace";
import Link from "next/link";
import { LuEye } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import IsiCard from "./isiCard";

export default async function CardUndangan({ categoryName }: { categoryName: string }) {
    const dataTemplates = await prisma.templateUndangan.findMany({
        where: {
            category: categoryName as category
        }
    })


    return (
        <div className=' gap-2 pb-10 bg-zinc-50 px-5 rounded-lg shadow-md pt-5 w-full lg:max-w-6xl  '>
            <div className=" flex flex-col w-full  pb-10  h-screen">

                <IsiCard dataTemplates={dataTemplates} categoryName={categoryName as string} />

            </div>
            <Link className="w-full bg-red-300 px-4 py-2" href={'/template/undangan-pernikahan'}>Lihat Semua</Link>
        </div>
    )
}
