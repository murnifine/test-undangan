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
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Settings
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Messages
        </Menu.Item>

        <Menu.Divider />

        {/* <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={
            <IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Transfer my data
        </Menu.Item> */}
        <Menu.Item
          color="red"
          leftSection={
            <IoMdLogOut style={{ width: rem(14), height: rem(14) }} />
          }
        >
          <form action={handleLogout}>
            <button type="submit">Logout</button>
          </form>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
