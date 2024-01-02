"use client";

import { useState } from "react";
import InputDropzone from "./input-dropzone";
import { Button } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ChangePhotoMoment({
  profile_id,
}: {
  profile_id: string;
}) {
  const [imgFiles, setImgFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSaveImage = async () => {
    if (imgFiles.length > 8) {
      return toast.error("Foto terlalu banyak!");
    }
    //
    // console.log({ imgFiles });
    setLoading(true);
    const formData = new FormData();

    imgFiles.forEach((file, index) => {
      formData.append(`foto_moment[${index}]`, file);
    });

    formData.append("profile_id", profile_id);

    const changePhoto = await fetch("/api/photo-moment", {
      method: "PUT",
      body: formData,
    });

    const res = await changePhoto.json();

    console.log({ res });

    if (res.message === "success") {
      router.push(`/user`);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center flex-col gap-4 py-20 mb-11">
      <div className="py-10">
        <Button
          leftSection={<IconPhoto size={14} />}
          loading={loading}
          onClick={handleSaveImage}
        >
          Simpan Foto Moment
        </Button>
      </div>

      <InputDropzone
        imgFiles={imgFiles}
        setImgFiles={setImgFiles}
        label="Foto moment kamu"
        name="photo_moment"
        isMultiple={true}
      />
    </div>
  );
}
