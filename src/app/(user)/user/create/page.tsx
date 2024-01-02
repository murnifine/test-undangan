import { auth } from "@/lib/auth";
import Default from "./default";
import Index from ".";
export default async function Page() {
  const session = await auth();

  return (
    <>
      <div className=" flex flex-col justify-center   items-center gap-y-5 py-28  h-full   w-full">
        {/* <Default sessionId={session?.user.id} /> */}
        <Index sessionId={session?.user.id} />
      </div>
    </>
  );
}
