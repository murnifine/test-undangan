import { auth } from "@/lib/auth";
import Default from "./default";
import { Button } from "@mantine/core";
import Link from "next/link";
export default async function Page() {
  const session = await auth();

  return (
    <>
      <div className="flex flex-col gap-y-5    w-full">
        <Default sessionId={session?.user.id} />
      </div>

      <div className="fixed bottom-5 w-full  max-w-md flex justify-center">
        <Button component={Link} href={"/user"} variant="outline" size="md">
          Kembali
        </Button>
      </div>
    </>
  );
}
