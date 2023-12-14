import { auth } from "@/lib/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex justify-center h-full">{children}</div>;
}
