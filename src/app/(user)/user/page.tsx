import LogoutButton from "@/components/auth/logout-button";
import { auth } from "@/lib/auth";
import { Button } from "@mantine/core";
import Link from "next/link";
import { redirect } from "next/navigation";
import SetUpNewAccount from "./components/set-up-new-account";
import prisma from "@/lib/prisma";

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
    <main className=" min-h-screen w-screen flex flex-col gap-3">
      <div className="bg-red-200 flex flex-col rounded-sm ">
        <div className="bg-red-500">Isi Halaman User</div>
        <div className=""></div>
        <Link href={'/user/create'}>create</Link>
      </div>
    </main>
  );
}
