import { auth } from "@/lib/auth";
import Default from "./default";
export default async function Page() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-5 justify-center items-center p-5  w-full h-screen bg-slate-200 ">
      <Default sessionId={session?.user.id} />
    </div>
  );
}
