import { auth } from "@/lib/auth";
import Default from "./default";
export default async function Page() {
  const session = await auth();

  return (
    <>
      <div className="flex flex-col justify-center py-20 px-5 items-center gap-y-5    w-full">
        <Default sessionId={session?.user.id} />
      </div>
    </>
  );
}
