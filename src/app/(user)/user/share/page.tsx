import prisma from "@/lib/prisma";
import { Avatar, Button, Divider } from "@mantine/core";

import Link from "next/link";
import Share from "./share";
import { redirect } from "next/navigation";
import {
  getTransactionStatus,
  updateStatusOrderSuccess,
  verifyTransaction,
} from "@/actions/action-order";
import { ProfileProps } from "@/types/types";

export default async function Page({
  searchParams,
}: {
  searchParams: { profileId: string };
}) {
  const { profileId } = searchParams;

  const host = process.env.AUTH_URL;

  const profile = await prisma.profile.findFirst({
    where: {
      id: Number(profileId),
    },
    include: {
      ucapan: true,
      order: {
        orderBy: {
          createdAt: "asc",
        },
      },
      music: true,
      photo_moment: true,
      template: {
        include: {
          user: true,
        },
      },
    },
  });

  // check payment
  const order = profile?.order[0];
  if (order && order?.status === "pending") {
    await verifyTransaction(order.id, profile.id);
  }

  if (!profile) return redirect("/user");

  return (
    <div className="relative flex flex-col  items-center p-4 sm:p-0 w-full bg-zinc-50 h-full  shadow border rounded-md gap-y-5">
      <h1 className="text-xl font-semibold mt-5">Bagikan Undangan</h1>

      <div className=" flex flex-col items-center gap-3">
        <Avatar src={profile.url_foto_utama} size={100} />

        <h2 className="font-medium text-sm">
          {profile.nama_pria} & {profile.nama_wanita}
        </h2>

        <p className="text-xs">
          {profile.dateTime_akad_nikah
            ? new Date(profile.dateTime_akad_nikah).toLocaleDateString(
              "id-ID",
              {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )
            : ""}
        </p>
      </div>

      <div className="w-full px-7">
        <Divider my={10} />
      </div>

      {!profile && (
        <p className="text-center p-10 text-base ">Profile bermasalah</p>
      )}

      <Share
        slug={profile?.slug as string}
        host={host as string}
        // id={profile.id}
        // orderId={profile.order?.id as number}
        // orderStatus={profile.order?.status as string}

        profile={profile as ProfileProps}
      />

      <div className="fixed bottom-5 w-full  max-w-md flex justify-center">
        <Button component={Link} href={"/user"} variant="outline" size="md">
          Kembali
        </Button>
      </div>
    </div>
  );
}
