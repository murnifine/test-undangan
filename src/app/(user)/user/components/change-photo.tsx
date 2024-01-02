"use client";

import { useState } from "react";
import InputDropzone from "./input-dropzone";
import { Button } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ChangePhoto({ profile_id }: { profile_id: string }) {
  const [imgFiles, setImgFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const initialData = [
    {
      label: "Foto Utama",
      name: "foto_utama",
    },
    {
      label: "Foto Pria",
      name: "foto_pria",
    },
    {
      label: "Foto Wanita",
      name: "foto_wanita",
    },
  ];

  const handleSaveImage = async () => {
    if (imgFiles.length !== 3) {
      return toast.error("Ada foto yang belum disertakan!");
    }

    setLoading(true);
    const formData = new FormData();
    imgFiles.forEach((imgFile) =>
      formData.append((imgFile as any).name, (imgFile as any).file)
    );
    formData.append("profile_id", profile_id);

    const changePhoto = await fetch("/api/profile-foto", {
      method: "PUT",
      body: formData,
    });

    const res = await changePhoto.json();

    if (res.message === "success") {
      router.push(`/user/create?profile_id=${res.data.id}&type=photo_moment`);
      // router.push(`/user?message=success`);
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
          Simpan Foto
        </Button>
      </div>

      {initialData.map((item) => (
        <InputDropzone
          key={item.name}
          imgFiles={imgFiles}
          setImgFiles={setImgFiles}
          label={item.label}
          name={item.name}
        />
      ))}
    </div>
  );
}