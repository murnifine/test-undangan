import prisma from "@/lib/prisma";
import dynamic from "next/dynamic";
import { Suspense, lazy } from "react";
import Mempelai from "./Mempelai";
import imageDefault from "@/utils/imageDefault";

export default async function Page({
  params,
}: {
  params: { mempelai: string };
}) {
  // GET USER DATA
  const user = await prisma.user.findFirst({
    include: {
      ucapan: true,
      photo_moment: true,
      template: {
        include: {
          admin: true,
        },
      },
    },
    where: {
      name: params.mempelai,
    },
  });

  // STOP DAN TAMPILKAN PESAN JIKA USER TIDAK ADA
  if (!user) return <p>User tidak ditemukan</p>;

  // GET NAMA TEMPLATE
  const namaTemplate = user?.template?.nama;

  // GET NAMA PEMBUAT
  const pembuat = user?.template?.admin?.name;

  // GET TEMPLATE COMPONENT : CARA 1
  const TemplateComponent = lazy(() =>
    import(`../../../template/${pembuat}/${namaTemplate}`).catch(() => ({
      default: () => <div>Pengguna belum menerapkan template</div>,
    }))
  );
  const defaultFoto = await imageDefault();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TemplateComponent user={user} defaultFoto={defaultFoto} />
    </Suspense>
  );

  // GET TEMPLATE COMPONENT : CARA 2
  // const TemplateComponent = dynamic(
  //   () => import(`../../../template/${pembuat}/minimalist`),
  //   {
  //     ssr: false,
  //   }
  // );
  // const TemplateComponent = dynamic(
  //   () =>
  //     import(`../../../template/${pembuat}/${namaTemplate}`).catch(() => ({
  //       default: () => <div>Pengguna belum menerapkan template</div>,
  //     })),
  //   {
  //     ssr: false,
  //   }
  // );

  //   function MapCaller({ nama }) {
  //     return <TemplateComponent nama="edi" />
  // }

  // const Map = dynamic(() => import(`../../../template/${pembuat}/${namaTemplate}`), { ssr: false })

  // function MapCaller({ nama }) {
  //     return <Map nama={nama}/>
  // }

  // return <TemplateComponent nama="ediddd" />;

  // return (
  //   <>
  //     {/* <Mempelai user={user} /> */}
  //     {/* <TemplateComponent nama="edi" /> */}
  //     {/* <MapCaller nama={"edi"}/> */}
  //   </>
  // );
}
