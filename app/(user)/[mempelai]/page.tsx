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
  const namaTemplate = user?.template?.nama;

  // GET NAMA PEMBUAT
  const pembuat = user?.template?.admin?.name;

  // GET TEMPLATE COMPONENT : CARA 1
  const TemplateComponent = lazy(() =>
    import(`../../../template/${pembuat}/${namaTemplate}`).catch(() => ({
      default: () => <div>Pengguna belum menerapkan template</div>,
    }))
  );

  // GET DEFAULT FOTO
  const defaultFoto = await imageDefault();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TemplateComponent user={user} defaultFoto={defaultFoto} />
      </Suspense>
    </>
  );
}
