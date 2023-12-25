"use client";
import { deleteProfile } from "@/actions/actions-profile";
import { Button, Menu, rem } from "@mantine/core";
import {
  IconDots,
  IconEdit,
  IconHttpDelete,
  IconMessageCircle,
  IconMusic,
  IconRowRemove,
  IconSettings,
  IconShare,
} from "@tabler/icons-react";
import Link from "next/link";
import DeleteButton from "./delete-button";
import { ProfileProps } from "@/types/types";
import { Profile } from "@prisma/client";
import ModalEditUndangan from "./modalEditUndangan";
import { useDisclosure } from "@mantine/hooks";

export default function CardOptions({ profile }: { profile: Profile }) {
  const [opened, { open, close }] = useDisclosure(false);

  if (opened)
    return <ModalEditUndangan {...{ opened, open, close, profile }} />;

  return (
    <div
      className=" h-full w-full flex justify-center items-center"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Menu
        shadow="md"
        width={150}
        position="bottom-end"
        withArrow
        arrowPosition="center"
        offset={2}
      >
        <Menu.Target>
          <IconDots />
        </Menu.Target>

        <Menu.Dropdown className="bg-blue-300">
          <Menu.Item
            onClick={open}
            leftSection={
              <IconRowRemove style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Edit
          </Menu.Item>

          <Link href={`/user/music?profileId=` + profile.id}>
            <Menu.Item
              leftSection={
                <IconMusic style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Music
            </Menu.Item>
          </Link>

          <Link href={`/user/share?profileId=` + profile.id}>
            <Menu.Item
              leftSection={
                <IconShare style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Bagikan
            </Menu.Item>
          </Link>

          <DeleteButton profile={profile}>
            <Menu.Item
              leftSection={
                <IconRowRemove style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Hapus
            </Menu.Item>
          </DeleteButton>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
