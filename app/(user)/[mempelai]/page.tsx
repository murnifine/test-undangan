import prismadb from "@/lib/prismadb";

export default async function Page({
  params,
}: {
  params: { mempelai: string };
}) {
  const user = await prismadb.user.findFirst({
    include: {
      template: true,
    },
    where: {
      name: params.mempelai,
    },
  });

  return <></>;
}
