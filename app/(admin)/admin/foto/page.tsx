import { getAllUsers } from "@/lib/actions";
import Foto from "./Foto";
import { IconLink, IconPhotoPlus } from "@tabler/icons-react";
import { Grid, Image, Modal, ScrollArea } from "@mantine/core";
import { Avatar } from "antd";
import Link from "next/link";

import ImageGallery from "react-image-gallery";
import { useDisclosure } from "@mantine/hooks";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const users = await getAllUsers();

  const { userId } = searchParams;

  userId && console.log("first");

  //   const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className=" flex-1 p-5">
        {/* <h1 className="text-2xl font-semibold mb-5">Photo Moment</h1> */}
        <div className="flex gap-5">
          <div className="flex flex-col w-96 gap-1  ">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center hover:shadow-sm bg-slate-50  hover:bg-slate-100 "
              >
                <Link
                  // href={`/admin/foto/${user.id}`}
                  href={`/admin/foto?userId=${user.id}`}
                  className="flex flex-1 gap-2 items-center px-3"
                >
                  <Avatar src={user.url_foto_utama} alt={user.name} />
                  <div className="flex flex-col">
                    <p className="font-medium text-sm">
                      {user.nama_pria} & {user.nama_wanita}
                    </p>
                    <p className="text-xs">{user.name}</p>
                  </div>
                </Link>
                <div className="flex gap-2 hover:bg-pink-200 cursor-pointer p-3">
                  <IconPhotoPlus size={22} />
                </div>
              </div>
            ))}
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
            <div className=" bg-slate-50 p-3 h hover:bg-slate-100 h-10 hover:shadow-sm">
              Contoh
            </div>
          </div>

          <div className=" flex-1">
            <Foto users={users} />
          </div>
        </div>

        {/* <Grid>
        {users[0] &&
          users[0].photo_moment.map((item) => (
            <Grid.Col
              span={{ base: 12, sm: 6, md: 4, lg: 3 }}
              key={item.url_foto}
            >
              <CardItemTemplate template={item} />

              <ImageGallery items={images} />
            </Grid.Col>
          ))}
      </Grid> */}

        {/* {userId && (
          <Modal
            scrollAreaComponent={ScrollArea.Autosize}
            styles={{
              body: { padding: 0 },
            }}
            withCloseButton={false}
            opened={false}
            onClose={true}
            // title="This is a fullscreen modal"
            // fullScreen
            radius={5}
            p={0}
            size={"100%"}
            transitionProps={{ transition: "fade", duration: 200 }}
          >
            <p>Halooooooo</p>
          </Modal>
        )} */}
      </div>
    </>
  );
}
