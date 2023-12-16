import { Suspense, lazy } from "react";
import imageDefault from "@/utils/imageDefault";
import { getProfileBySlug } from "@/lib/actions";

export default async function MempelaiPage({
  params,
}: {
  params: { slug: string };
}) {
  const profile = await getProfileBySlug(params.slug);

  if (!profile) return <p>Data profile tidak ditemukan</p>;

  const namaTemplate = profile?.template?.nama;
  const category = profile?.template?.category

  const pembuatTemplate = profile?.template?.user.name;

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
