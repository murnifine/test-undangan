import prisma from "@/lib/prisma";
import { category } from "@prisma/client";
import IsiCard from "../components/isiCard";
import { redirect } from "next/navigation";
import { ActionTemplate } from "@/actions/action-template";
export default async function Slug({ params }: { params: { slug: string } }) {
    if (!params.slug) return

    const getSlugTemplate = await ActionTemplate(params.slug.replaceAll('-', '_') as category)


    if (getSlugTemplate.status === 'failed') return <div className="flex justify-center items-center h-screen w-full">Not FOund</div>




    const namaTemplate = params.slug


    return (
        <>
            <div className='w-full h-full py-20 '>
                <div className="flex flex-col items-center  gap-5 py-20 px-5 md:px-10 w-full  h-full bg-white">

                    <IsiCard dataTemplates={getSlugTemplate.data} categoryName={namaTemplate.replaceAll('_', '-')} />
                </div>

            </div>
        </>

    )
}