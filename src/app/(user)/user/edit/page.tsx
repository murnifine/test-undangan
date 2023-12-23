import { auth } from "@/lib/auth";
import EditFormMempelai from "./editFormMempelai";
export default async function Page() {
    const session = await auth();

    return (
        <>
            <div className="flex flex-col justify-center py-20 px-5 items-center gap-y-5    w-full">
                <EditFormMempelai sessionId={session?.user.id} />
            </div>
        </>
    );
}
