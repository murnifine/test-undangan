import prisma from "@/lib/prisma";
import { Suspense, lazy } from "react";
import { exampleData } from "@/lib/dataweedings";
export default async function Slug({ params }: { params: { slug: string } }) {

    const templateUndangan = await prisma.templateUndangan.findFirst({
        where: {
            nama: params.slug
        },
        include: {
            user: true
        }
    })
    const namaTemplate = params.slug

    const pembuatTemplate = templateUndangan?.user.name
    console.log(namaTemplate, pembuatTemplate)
    const TemplateUndanganComponent = lazy(() =>
        // import(`../../../template/${pembuatTemplate}/${namaTemplate}`).catch(
        import(`../../../template/${pembuatTemplate}/${namaTemplate}`).catch(
            () => ({
                default: () => <div>Pengguna belum menerapkan template</div>,
            })
        )
    );
    return (
        <div className=''>
            <div className="fixed flex flex-col top-5 left-5  z-50">
                <span className=" bg-red-100 p-2 ">
                    example {params.slug}
                </span>
                <button className="p-2 bg-sky-200">Terapkan</button>

            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <TemplateUndanganComponent profile={exampleData} />
            </Suspense>

        </div>
    )
}