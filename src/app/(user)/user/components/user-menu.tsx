"use client";
import { handleLogout } from "@/actions/auth-action";
import { Menu, Button, Text, rem, Avatar } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { Session } from "next-auth/types";
import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";

export default function UserMenu({ session }: { session: Session | null }) {
  const { name, image } = session?.user;

  return (
    <Menu
      shadow="md"
      width={200}
      position="bottom-end"
      withArrow
      arrowPosition="center"
    >
      <Menu.Target>
        {/* <Button>Toggle menu</Button> */}

        {image ? (
          <Avatar src={image} alt={name} className="cursor-pointer" />
        ) : (
          <Avatar className="cursor-pointer" radius="xl" />
        )}
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>{name}</Menu.Label>

        <Link className="w-full" href={'/user'}>
          <Menu.Item
            leftSection={
              <IconSettings style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Profile
          </Menu.Item>
        </Link>
        <Link className="w-full" href={'/template'}>
          <Menu.Item
            leftSection={
              <IconSettings style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Templates
          </Menu.Item>
        </Link>

        <Menu.Divider />
        <form action={handleLogout}>
          <button className="w-full" type="submit">
            <Menu.Item
              color="red"
              leftSection={
                <IoMdLogOut style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Logout
            </Menu.Item>
          </button>
        </form>
      </Menu.Dropdown>
    </Menu>
  );
}
