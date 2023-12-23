"use client";

import { deleteProfile } from "@/actions/actions-profile";
import { Button, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { Profile } from "@prisma/client";
import { ReactNode } from "react";

export default function DeleteButton({
  profile,
  children,
}: {
  profile: Profile;
  children: ReactNode;
}) {
  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: "Hapus Undangan",
      centered: true,
      children: (
        <Text size="sm">
          Apakah Anda yakin ingin menghapus undangan{" "}
          <span className="font-semibold">
            {profile.nama_pria} & {profile.nama_wanita}
          </span>
        </Text>
      ),
      labels: { confirm: "Hapus Undangan", cancel: "Tidak jangan dihapus" },
      confirmProps: { color: "red" },
      // onCancel: () =>
      //   notifications.show({
      //     title: "Default notification",
      //     message: "Hey there, your code is awesome! 🤥",
      //   }),

      onConfirm: async () => {
        const reqDelete = await deleteProfile(profile.id);

        if (reqDelete.status === "success") {
          notifications.show({
            title: "Undangan telah dihapus",
            color: "green",
            message: `Undangan ${profile.nama_pria} & ${profile.nama_wanita} telah dihapus dari database kami`,
          });
        } else {
          notifications.show({
            title: "Undangan gagal dihapus",
            color: "red",
            message: `Sepertinya ada kesalahan!`,
          });
        }
      },
    });

  return (
    <button className="w-full" onClick={openDeleteModal}>
      {children}
    </button>
  );
}
