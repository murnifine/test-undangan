import LogoutButton from "@/components/auth/logout-button";
import { auth, signIn } from "@/lib/auth";
import { Button } from "@mantine/core";
import Link from "next/link";
import { redirect } from "next/navigation";
import SetUpNewAccount from "./components/set-up-new-account";
import prisma from "@/lib/prisma";
import { IconHeart } from "@tabler/icons-react";
import { MotionDiv } from "@/components/MotionDiv";
import { SubmitButton } from "@/components/auth/submit-button";
import UserMenu from "./components/user-menu";

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

  return (
    <main className=" bg-red-400 min-h-screen w-screen max-w-md flex flex-col justify-center  items-center">
      <div className="flex justify-between p-4 sm:p-0">
        <div>Logo</div>
        <div>
          <UserMenu session={session} />
        </div>
      </div>

      <div className="flex flex-col max-w-lg w-full bg-zinc-50 shadow border  p-20  rounded-md gap-y-5">
        <div className="flex flex-col items-center gap-y-5">
          <div className="flex flex-col  gap-3 ">
            <div className="flex flex-col justify-center items-center">
              <IconHeart size={80} className="text-pink-600" />
              <h1 className="text-2xl font-bold text-center">Olvite</h1>
            </div>

            <p className="text-base mb-3">
              Log in untuk mulai menggunakan Olvite.com
            </p>

            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "a" });
              }}
            >
              <MotionDiv whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <SubmitButton />
              </MotionDiv>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
