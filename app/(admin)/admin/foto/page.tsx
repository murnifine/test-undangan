import { getAllUsers, getUserById } from "@/lib/actions";
import Foto from "./Foto";
import { IconLink, IconPhotoPlus } from "@tabler/icons-react";
import { Grid, Image, Modal, ScrollArea } from "@mantine/core";
import { Avatar } from "antd";
import Link from "next/link";

import ImageGallery from "react-image-gallery";
import { useDisclosure } from "@mantine/hooks";
import { UserProps } from "@/types/types";
import FileUpload from "./[userId]/FileUpload";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const users = await getAllUsers();

  const { userId, upload } = searchParams;

  let user;
  // let userId = "";
  if (userId) {
    const id = parseInt(userId);
    user = await getUserById(id);
  }

  return (
    <>
      <div className=" flex-1 p-5">
        {/* <h1 className="text-2xl font-semibold mb-5">Photo Moment</h1> */}
        <div className="flex gap-5">
          <div className="flex flex-col w-96 gap-1  ">
            {users.length > 0 &&
              users.map((user) => (
                <div
                  key={user.id}
                  className="flex justify-between items-center hover:shadow-sm bg-slate-50  hover:bg-slate-100 "
                >
                  <Link
                    // href={`/admin/foto/${user.id}`}
                    href={`?userId=${user.id}`}
                    className="flex flex-1 gap-2 items-center px-3"
                  >
                    <Avatar
                      src={user.Profile?.url_foto_utama}
                      alt={user.name}
                    />
                    <div className="flex flex-col">
                      <p className="font-medium text-sm">
                        {user.Profile?.nama_pria} & {user.Profile?.nama_wanita}
                      </p>
                      <p className="text-xs">{user.name}</p>
                    </div>
                  </Link>
                  <Link
                    href={`?userId=${user.id}&upload=true`}
                    className="flex gap-2 hover:bg-pink-200 cursor-pointer p-3"
                  >
                    <IconPhotoPlus size={22} />
                  </Link>
                </div>
              ))}

            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
          </div>

          <div className=" flex-1">
            {user && upload ? (
              <FileUpload userId={userId} />
            ) : (
              user && <Foto user={user as UserProps} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
