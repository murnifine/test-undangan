import { getAllMusic } from "@/actions/actions-music";
import { getProfile } from "@/actions/actions-profile";
import { Input } from "@mantine/core";

import { MusicItem } from "./client";
import { Profile } from "@prisma/client";

const MusicPage = async ({
  searchParams,
}: {
  searchParams: { profileId: string };
}) => {
  const profile = await getProfile(Number(searchParams.profileId));

  const { data: allMusic } = await getAllMusic();

  return (
    <div className=" mt-20 flex flex-col gap-2 max-w-md w-full">
      {/* <Input /> */}

      <div className="flex flex-col gap-2 ">
        {allMusic && (
          <MusicItem allMusic={allMusic} profile={profile.data as Profile} />
        )}
      </div>
    </div>
  );
};

export default MusicPage;
