import prisma from "@/lib/prisma";

import CardUndangan from "./components/cardUndangan";
import { category } from "@prisma/client";

export default async function Template() {

    const dataTemplates = await prisma.templateUndangan.findMany()
    const categoryData = category


    const categoryNames = Object.keys(categoryData).map((key) => ((categoryData as any)[key] as string))

    console.log(categoryNames)
    return (
        <>
            <div className="flex flex-col items-center  gap-5 py-20 px-5 md:px-10 w-full  h-full bg-white">
                <div className="flex justify-between w-full md:max-w-2xl bg-zinc-50 px-10 py-4 rounded-lg shadow-md">
                    <div className="flex flex-col text-slate-800">
                        <span className="text-xl md:text-4xl font-bold text-red-500">50,000</span>
                        <span className="text-xs md:text-base">Undangan Terbuat</span>
                    </div>
                    <div className="flex flex-col text-slate-800">
                        <span className="text-xl md:text-4xl font-bold text-sky-600">50,000</span>
                        <span className="text-xs md:text-base">Undangan Tersebar</span>
                    </div>

                </div>
                {categoryNames.map((categoryName) => (
                    <CardUndangan categoryName={categoryName} />
                ))}


            </div>

        </>
    )
}