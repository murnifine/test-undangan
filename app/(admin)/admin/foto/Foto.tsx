"use client";

import { Button, Select } from "@mantine/core";
import { useState } from "react";
import { uploadGambar } from "@/lib/actions";
import { User } from "@prisma/client";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IconTrash } from "@tabler/icons-react";

// type UserIdName = {
//   label: string;
//   value: string;
// };

export default function Foto({ users }: { users: User[] }) {
  const [userId, setUserId] = useState("");

  const userId_name = users.map((item) => ({
    value: item.id.toString(),
    label: item.name,
  }));

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <>
      {/* <form
        className=" gap-5 flex flex-col"
        action={(formData) => uploadGambar(formData, userId)}
      >
        {userId_name.length > 0 && (
          <Select
            placeholder="Untuk user?"
            searchable
            limit={10}
            data={userId_name}
            onChange={(value) => setUserId(value as string)}
          />
        )}

        <input name="file" type="file" required />

        <Button type="submit">Upload</Button>
      </form> */}

      <div className="relative">
        <div className="absolute top-2 right-2 z-40">
          <IconTrash className="hover:text-red-500 cursor-pointer" />
        </div>

        <ReactImageGallery items={images} />
      </div>

      {/* {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )} */}
    </>
  );
}
