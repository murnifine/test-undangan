import LogoutButton from "@/components/auth/logout-button";
import { auth, signIn } from "@/lib/auth";
import { Avatar, Button, Menu, rem } from "@mantine/core";
import Link from "next/link";
import { redirect } from "next/navigation";
import SetUpNewAccount from "./components/set-up-new-account";
import prisma from "@/lib/prisma";
import {
  IconHeart,
  IconMessageCircle,
  IconPlus,
  IconPlusEqual,
  IconSettings,
} from "@tabler/icons-react";
import { MotionDiv } from "@/components/MotionDiv";
import { SubmitButton } from "@/components/auth/submit-button";
import UserMenu from "./components/user-menu";
import Logo from "./components/logo";
import CardOptions from "./components/card-options";

export default async function Page() {
  /* 
  dapatkan email dari session login
  
  */
  const session = await auth();
  const email = session?.user.email;

  // mengambil data pengguna
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
      userId: session?.user.id
    }
  }

  )

  return (
    <main className=" h-full  w-screen max-w-md flex flex-col items-center">
      <div className="flex justify-between p-4 sm:p-0 w-full sm:py-5">
        <Logo />
        <UserMenu session={session} />
      </div>

      <div className="relative flex flex-col  items-center p-4 sm:p-0 w-full bg-zinc-50 h-full  shadow border rounded-md gap-y-5">
        <h1 className="text-xl font-semibold sm:mt-5">Undangan Buatan Kamu</h1>

        {!profile && (
          <p className="text-center p-10 text-base ">
            Kamu belum membuat satupun undangan, Buat Undangan Sekarang
          </p>
        )}

        {profile && (
          <div className="flex flex-col w-full overflow-scroll gap-5 mb-20 sm:px-5">
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
                      <CardOptions />
                    </div>
                  </MotionDiv>
                </Link>
              ))}
          </div>
        )}

        <div className="fixed bottom-5 w-full  max-w-md flex justify-center">
          <MotionDiv whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link href={"/template"}>
              <Button size="md" color="indigo" fullWidth>
                <IconPlus size={30} />
              </Button>
            </Link>
          </MotionDiv>
        </div>
      </div>
    </main>
  );
}
