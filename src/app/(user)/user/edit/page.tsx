import { auth } from "@/lib/auth";
import EditFormMempelai from "./editFormMempelai";
import prisma from "@/lib/prisma";
import EditWaktu from "./editWaktu";
import { redirect } from "next/navigation";
import EditFotoMoments from "./editFotoMoments";
// import EditFotoMoments from "./componetnts/modal/editFotoMoments";
export default async function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const session = await auth();
    const { profileId, type } = searchParams
    if (!profileId) return <div>not found</div>
    const dataValue = await prisma.profile.findUnique({
        where: {
            id: Number(profileId)
        }
    })
    if (!dataValue) return redirect('/not-found')
    if (type === 'dataMempelai')
        return (
            <>
                <div className="flex flex-col justify-center py-20 px-5 items-center gap-y-5 w-full">
                    <EditFormMempelai {...{ dataValue }} sessionId={session?.user.id} />
                </div>
            </>
        );
    if (type === 'waktu')
        return (
            <>
                <div className="flex flex-col justify-center py-20 px-5 items-center gap-y-5    w-full">
                    <EditWaktu {...{ dataValue }} sessionId={session?.user.id} />
                </div>
            </>
        );
    if (type === 'edit')
        return (
            <>
                <div className="flex flex-col justify-center py-20 px-5 items-center gap-y-5    w-full">
                    <EditFotoMoments {...{ dataValue }} sessionId={session?.user.id} />
                </div>
            </>
        );


}
