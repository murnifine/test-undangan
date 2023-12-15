import { MantineProvider } from "@mantine/core";
import Logo from "./components/logo";
import UserMenu from "./components/user-menu";
import { auth } from "@/lib/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const email = session?.user.email;

  return (
    <div className="flex justify-center h-screen">
      <div className=" h-full  w-screen max-w-md flex flex-col items-center relative">
        <div className="flex justify-between p-4 max-w-md px-1 w-full sm:py-5 fixed z-50  ">
          <Logo />
          <UserMenu session={session} />
        </div>

        <div className="mt-20 w-full h-full">{children}</div>
      </div>
    </div>
  );
}
