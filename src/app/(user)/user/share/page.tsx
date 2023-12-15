import prisma from "@/lib/prisma";
import { Button } from "@mantine/core";

import Link from "next/link";
import Share from "./share";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: { profileId: string };
}) {
  const { profileId } = searchParams;

  const profile = await prisma.profile.findFirst({
    where: {
      id: Number(profileId),
    },
  });

  if (!profile) return redirect("/user");

  return (
    <div className="relative flex flex-col  items-center p-4 sm:p-0 w-full bg-zinc-50 h-full  shadow border rounded-md gap-y-5">
      <h1 className="text-xl font-semibold sm:mt-5">Bagikan Undangan Kepada</h1>

      {!profile && (
        <p className="text-center p-10 text-base ">Profile bermasalah</p>
      )}

      <Share slug={profile?.slug as string} id={profile.id} />

      <div className="fixed bottom-5 w-full  max-w-md flex justify-center">
        <Button component={Link} href={"/user"} variant="outline" size="md">
          Kembali
        </Button>
      </div>
    </div>
  );
}
