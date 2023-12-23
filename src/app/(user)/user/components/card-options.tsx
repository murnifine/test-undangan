"use client";
import { deleteProfile } from "@/actions/actions-profile";
import { Button, Menu, rem } from "@mantine/core";
import {
  IconDots,
  IconEdit,
  IconHttpDelete,
  IconMessageCircle,
  IconRowRemove,
  IconSettings,
  IconShare,
} from "@tabler/icons-react";
import Link from "next/link";
import DeleteButton from "./delete-button";
import { ProfileProps } from "@/types/types";
import { Profile } from "@prisma/client";

export default function CardOptions({ profile }: { profile: Profile }) {
  // function handleDeleteProfile(){

  // }

  return (
    <div
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
          {/* <Menu.Label>Application</Menu.Label> */}

          <Link href={`/user/edit?profileId=` + profile.id}>
            <Menu.Item
              leftSection={
                <IconEdit style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Edit
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
