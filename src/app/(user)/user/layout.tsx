import { MantineProvider } from "@mantine/core";
import Logo from "./components/logo";
import UserMenu from "./components/user-menu";
import { auth } from "@/lib/auth";
import { Navbar } from "@/app/(tamu)/components/Navbar/Navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const email = session?.user.email;

  return (
    <>
      {/* <div className="flex justify-between p-4 px-7 md:px-10 w-full fixed z-50 bg-white ">
        <Logo />
        <UserMenu session={session} />
      </div> */}
      <Navbar />
      <div className="flex justify-center h-full">
        {children}
      </div>
    </>
  );
}
