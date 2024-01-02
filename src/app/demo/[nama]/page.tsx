import { Suspense, lazy } from "react";

import prisma from "@/lib/prisma";
import { exampleData } from "@/lib/dataweedings"


export default async function MempelaiPage({
    params,
}: {
    params: { nama: string };
}) {


    const templateUndangan = await prisma.templateUndangan.findFirst(
        {
            where: {
                nama: params.nama as any
            },
            include: {
                user: true
            }
        }
    )
    const namaTemplate = templateUndangan?.nama;
    const category = templateUndangan?.category
    const pembuatTemplate = (templateUndangan?.user as any).name;
    const profile = exampleData




    const TemplateUndanganComponent = lazy(() =>
        import(`../../../template/${category}/${pembuatTemplate}/${namaTemplate}`).catch(
            // import(`../../../template/.${pembuatTemplate}/${namaTemplate}`).catch(
            () => ({
                default: () => <div>tidak ada template</div>,
            })
        )
    );

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <TemplateUndanganComponent profile={profile} />
            </Suspense>
        </>
    );
}
