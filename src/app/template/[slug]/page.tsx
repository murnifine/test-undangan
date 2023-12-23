import prisma from "@/lib/prisma";
import { category } from "@prisma/client";
import IsiCard from "../components/isiCard";
export default async function Slug({ params }: { params: { slug: string } }) {
    if (!params.slug) return
    const templateUndangan = await prisma.templateUndangan.findMany({
        where: {
            category: params.slug.replaceAll('-', '_') as category
        },
        include: {
            user: true
        }
    })


    const namaTemplate = params.slug


    return (
        <>
            <div className='w-full h-full py-20 '>
                <div className="flex flex-col items-center  gap-5 py-20 px-5 md:px-10 w-full  h-full bg-white">

                    <IsiCard dataTemplates={templateUndangan} categoryName={namaTemplate.replaceAll('_', '-')} />
                </div>

            </div>
        </>

    )
}