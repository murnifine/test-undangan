import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session?.user) return redirect(`/login?callbackUrl=/user`);

  return (
    <main>
      <Link href="/api/auth/signout">Keluar</Link>
      <h1>Selamat datang </h1>kkkkkkkkkkks
      {/* <h1>Selamat datang {session.user.name}</h1> */}
      {JSON.stringify(session?.user)}
    </main>
  );
}
