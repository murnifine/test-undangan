import prisma from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";

export default async function Template() {

    const dataTemplates = await prisma.templateUndangan.findMany()






    return (

        <>
            <div>template undangan</div>

            {dataTemplates.map((dataTemplate) => (
                <div className="w-max bg-sky-400">
                    <div>{dataTemplate.nama}</div>
                    <div className="flex flex-col gap-1">
                        <span>Harga Rp 100.000</span>
                        <Link href={`user/create?templateId=${dataTemplate.id}`}>Use Tempalte</Link>
                        <Link className="bg-red-200" href={`/template/${dataTemplate.nama}`}>Demo</Link>
                    </div>

                </div>
            ))}
        </>
    )
}