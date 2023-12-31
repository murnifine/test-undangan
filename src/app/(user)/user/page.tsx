
import { auth, signIn } from "@/lib/auth";
import { Avatar, ModalCloseButton } from "@mantine/core";
import Link from "next/link";
import prisma from "@/lib/prisma";
import React from 'react'
import {
  IconPlus,
} from "@tabler/icons-react";
import { MotionDiv } from "@/components/MotionDiv";
import CardOptions from "./components/card-options";
import ModalCretaeUndangan from "./components/modalCretaeUndangan";

export default async function Page() {

  const session = await auth();
  const email = session?.user.email;



  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      Profile: true,
    },
  });

  const profile = await prisma.profile.findMany({
    where: {
      userId: session?.user.id,
    },
  });


  return (
    <div className="relative flex justify-center pt-20 pb-10 px-5 md:px-10 w-full h-screen bg-white ">
      <div className=" py-5    bg-zinc-50 flex flex-col h-full  items-center  p-4 sm:p-0 w-full md:max-w-lg  overflow-scroll  shadow border rounded-md gap-y-5">
        <h1 className="text-xl font-semibold sm:mt-5">List Undangan</h1>


        {!profile && (
          <p className="text-center p-10 text-base ">
            Kamu belum membuat satupun undangan, Buat Undangan Sekarang
          </p>
        )}

        {profile && (
          <div className="flex flex-col w-full  gap-5 mb-20 sm:px-5">
            {profile
              .slice()
              .reverse()
              .map((undangan) => (
                <Link
                  href={`/${undangan.slug}`}
                  target="_blank"
                  key={undangan.id}
                >
                  <MotionDiv
                    whileHover={{ scale: 1.02 }}
                    // whileTap={{ scale: 0.9 }}
                    className="bg-gray-50 border flex items-center hover:bg-white  rounded-md p-2 h-16 transition-all duration-75 hover:border-pink-500"
                  >
                    <div>
                      <Avatar size={"md"} src={undangan.url_foto_utama} />
                    </div>
                    <div className="flex-1 flex flex-col pl-3 gap-1">
                      <h2 className="font-medium text-sm">
                        {undangan.nama_pria} & {undangan.nama_wanita}
                      </h2>
                      <p className="text-xs">
                        {undangan.dateTime_akad_nikah
                          ? new Date(
                            undangan.dateTime_akad_nikah
                          ).toLocaleDateString("id-ID", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                          : ""}
                      </p>
                      <div></div>
                    </div>
                    <div className="pr-2">
                      <CardOptions profileId={undangan.id} />
                    </div>
                  </MotionDiv>
                </Link>
              ))}
          </div>
        )}


        <ModalCretaeUndangan />
      </div>
    </div>
  );
}
