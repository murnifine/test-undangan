import { Suspense, lazy } from "react";
import imageDefault from "@/utils/imageDefault";
import { getProfileBySlug } from "@/lib/actions";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function MempelaiPage({
  params,
}: {
  params: { slug: string };
}) {

  const profile = await getProfileBySlug(params.slug);
  const session = await auth()

  if (!profile) return <p>Data profile tidak ditemukan</p>;
  const pembuatTemplate = (profile?.template?.user as any).name;
  if (!profile.order || profile.order[0]?.status !== 'success') {
    if (!session?.user) return redirect('/')
  }

  const namaTemplate = profile?.template?.nama;
  const category = profile?.template?.category



  const TemplateUndanganComponent = lazy(() =>
    import(`../../../template/${category}/${pembuatTemplate}/${namaTemplate}`).catch(
      // import(`../../../template/.${pembuatTemplate}/${namaTemplate}`).catch(
      () => ({
        default: () => <div>Pengguna belum menerapkan template</div>,
      })
    )
  );

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TemplateUndanganComponent profile={profile} />
      </Suspense>
    </>
  );
}
