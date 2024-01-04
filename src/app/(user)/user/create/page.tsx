import { auth } from "@/lib/auth";
import Default from "./default";
import Index from ".";
import ChangePhoto from "../components/change-photo";
import ChangePhotoMoment from "../components/change-photo-moment";
import { ChangeBank } from "../components/change-bank";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await auth();

  const { type, profile_id } = searchParams;

  if (type === "add_bank")
    return <ChangeBank profile_id={profile_id as string} />;
  if (type === "add_photo")
    return <ChangePhoto profile_id={profile_id as string} />;

  if (type === "photo_moment")
    return <ChangePhotoMoment profile_id={profile_id as string} />;


  return (
    <>
      <div className=" flex flex-col justify-center   items-center gap-y-5 py-28  h-full   w-full">
        {/* <Default sessionId={session?.user.id} /> */}
        <Index sessionId={session?.user.id} />
      </div>
    </>
  );
}
