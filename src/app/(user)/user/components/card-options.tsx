"use client";
import { Menu, rem } from "@mantine/core";
import {
  IconDots,
  IconEdit,
  IconMessageCircle,
  IconSettings,
  IconShare,
} from "@tabler/icons-react";
import Link from "next/link";

export default function CardOptions({ profileId }: { profileId: number }) {
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

          <Link href={`/user/edit?profileId=` + profileId}>
            <Menu.Item
              leftSection={
                <IconEdit style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Edit
            </Menu.Item>
          </Link>
          <Link href={`/user/share?profileId=` + profileId}>
            <Menu.Item
              leftSection={
                <IconShare style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Bagikan
            </Menu.Item>
          </Link>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
