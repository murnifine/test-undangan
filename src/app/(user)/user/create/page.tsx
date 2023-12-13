


import { AllDataUserProps } from "@/types/types";

import { auth } from "@/lib/auth";
import Default from "./default";
export default async function Page({ dataFormusers }: { dataFormusers: AllDataUserProps }) {
    const session = await auth()
    // console.log(session)







    return (
        <div className="flex flex-col gap-5 justify-center items-center p-5  w-full h-screen bg-slate-200 ">
            <Default dataFormusers={dataFormusers} sessionId={session?.user.id} />

        </div >
    );
}

