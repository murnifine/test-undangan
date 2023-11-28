import prisma from "@/lib/prisma";
import { Suspense, lazy } from "react";
import imageDefault from "@/utils/imageDefault";

import { getUserByName } from "@/lib/actions";
import { UserProps } from "@/types/types";

export default async function MempelaiPage({
  params,
}: {
  params: { mempelai: string };
}) {
  // GET USER DATA

  const user = await getUserByName(params.mempelai);

  // STOP DAN TAMPILKAN PESAN JIKA USER TIDAK ADA
  if (!user) return <p>User tidak ditemukan</p>;

  // GET NAMA TEMPLATE
  const namaTemplate = user?.Profile?.template?.nama;

  // GET NAMA PEMBUAT
  const pembuat = user?.Profile?.template?.admin?.name;

  // GET TEMPLATE COMPONENT : CARA 1
  const TemplateComponent = lazy(() =>
    import(`../../../template/${pembuat}/${namaTemplate}`).catch(() => ({
      default: () => <div>Pengguna belum menerapkan template</div>,
    }))
  );

  // GET DEFAULT FOTO
  const defaultFoto = await imageDefault();
  const AllDataUser = {
    user: user,
    defaultFoto: defaultFoto,
    sosialMediaPria: {
      facebook: user.Profile?.pria_fb,
      instagram: user.Profile?.pria_ig,
      tiktok: user.Profile?.pria_tk,
    },
    sosialMediaWanita: {
      facebook: user.Profile?.wanita_fb,
      instagram: user.Profile?.wanita_ig,
      tiktok: user.Profile?.wanita_tk,
    },
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TemplateComponent AllDataUser={AllDataUser} />
      </Suspense>
    </>
  );
}
