"use client";

import ReactImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IconTrash } from "@tabler/icons-react";
import { UserProps } from "@/types/types";

export default function Foto({ user }: { user: UserProps }) {
  const images = user?.Profile?.photo_moment?.map((item) => ({
    original: item.url_foto,
    thumbnail: item.url_foto,
  }));

  // console.log(user?.photo_moment);

  return (
    <>
      <div className="relative">
        <div className="absolute top-2 right-2 z-40 bg-white/80 p-1 rounded-sm hover:text-red-500 cursor-pointer">
          <IconTrash className="" />
        </div>

        <ReactImageGallery items={images as ReactImageGalleryItem[]} />
      </div>
    </>
  );
}
