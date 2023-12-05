import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const session = await auth();
  //   if (!session?.user) return redirect(`/login?callbackUrl=/user/${user}`);

  return (
    <main>
      <h1>Selamat datang </h1>kkkkkkkkkkks
      {/* <h1>Selamat datang {session.user.name}</h1> */}
      {JSON.stringify(session?.user)}
    </main>
  );
};
export default Page;
