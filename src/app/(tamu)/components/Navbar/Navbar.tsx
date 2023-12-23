"use client";
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Container,
  NavLink,
  Avatar,
} from "@mantine/core";
// import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconHeart,
  IconHeartFilled,
  IconGauge,
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { GiBigDiamondRing } from "react-icons/gi";
import { BsCake2 } from "react-icons/bs";
import { PiFlowerTulipThin } from "react-icons/pi";
import { IoCutOutline } from "react-icons/io5";
import { TbTemplate } from "react-icons/tb";
import { FaUser, FaUserInjured } from "react-icons/fa";
import { IoIosHelpCircle, IoMdLogOut } from "react-icons/io";
import { GoProjectTemplate } from "react-icons/go";
import { RiHome2Line } from "react-icons/ri";

import { useSession } from "next-auth/react";
import UserMenu from "@/app/(user)/user/components/user-menu";
import { handleLogout } from "@/actions/auth-action";
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);


  const { data: session } = useSession();
  const pathname = usePathname()



  return (
    <div className={`fixed w-full z-50 bg-white  `}>
      <Group
        justify="space-between"
        className="flex px-5 md:px-10 w-full h-16  "
      >
        <div>
          <Link href={"/"} className="flex gap-2 items-center">
            <IconHeartFilled className="text-pink-600" />
            <p className="text-2xl font-semibold text-pink-600 ">Olvite</p>
          </Link>
        </div>
        <div className="flex gap-10">

          <Group className="w-full h-16" gap={5} visibleFrom="sm">
            <Link href="/" className={pathname === '/' ? 'font-bold text-pink-600 cursor-default text-sm px-2' : `${classes.link}`}>
              Home
            </Link>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <div className={`${pathname.includes('template') ? 'flex items-center px-2 justify-center font-semibold text-sm text-pink-600 hover:bg-zinc-50 h-full' : `${classes.link}`}  cursor-pointer`}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Templates
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </div>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Template Undangan</Text>
                  <Anchor href="/template" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  <Link
                    href="/template/undangan-pernikahan"
                    className={` flex gap-2 items-center hover:bg-slate-100 p-2`}
                  >
                    <GiBigDiamondRing size="1.5em" color="red" />
                    <span className="text-sm font-semibold">
                      Undangan Pernikahan
                    </span>
                  </Link>
                  <Link
                    href="/template/undangan-ulang-tahun"
                    className={` flex gap-2 items-center hover:bg-slate-100 p-2`}
                  >
                    <BsCake2 size="1.5em" color="red" />
                    <span className="text-sm font-semibold">
                      Undangan Ulang Tahun
                    </span>
                  </Link>
                  <Link
                    href="/template/undangan-pingitan"
                    className={` flex gap-2 items-center hover:bg-slate-100 p-2`}
                  >
                    <PiFlowerTulipThin size="1.5em" color="red" />
                    <span className="text-sm font-semibold">
                      Undangan Pingitan
                    </span>
                  </Link>
                  <Link
                    href="/template/undangan-aqiqah"
                    className={` flex gap-2 items-center hover:bg-slate-100 p-2`}
                  >
                    <IoCutOutline size="1.5em" color="red" />
                    <span className="text-sm font-semibold">
                      Undangan Aqiqah
                    </span>
                  </Link>
                  <Link
                    href="/template/undangan-katoba"
                    className={` flex gap-2 items-center hover:bg-slate-100 p-2`}
                  >
                    <FaUserInjured size="1.5em" color="red" />
                    <span className="text-sm font-semibold">
                      Undangan Katoba
                    </span>
                  </Link>
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Request Desain Undangan
                      </Text>
                      <Text size="xs" c="dimmed">
                        Bisa melakukan permintaan custom desain sesuai keinginan
                        dan style anda.
                      </Text>
                    </div>
                    <Link
                      className="border rounded-md p-2 hover:bg-slate-100"
                      href={"#"}
                    >
                      Request
                    </Link>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <Link href="/user" className={pathname === '/user' ? 'font-semibold text-sm text-pink-600 cursor-default ' : `${classes.link}`}>
              Undanganku
            </Link>

            <Link href="/about" className={pathname === '/about' ? 'font-semibold text-pink-600 cursor-default text-sm px-2' : `${classes.link}`}>
              About
            </Link>
          </Group>
          <Group visibleFrom="sm">
            {session?.user ? (
              <UserMenu session={session} />

            ) : (
              <Link href={"/login"}>
                <Button variant="default">Masuk</Button>
              </Link>
            )}
          </Group>
        </div>
        {/* mobile mode */}
        <Burger opened={drawerOpened} onClick={open} hiddenFrom="sm" />
        <Drawer opened={opened} onClose={close} position="right">
          <div className="flex flex-col gap-5">
            <div>
              {session?.user && (
                <Link className={`${classes.link}`} href={'/user'}>
                  {session?.user?.image ? (
                    <div className="flex items-center gap-5">
                      <Avatar src={session?.user?.image} alt={session?.user?.name} className="cursor-pointer" />
                      <span className="text-xs font-semibold text-gray-700">{session?.user?.name}</span>
                    </div>
                  ) : (
                    <Avatar className="cursor-pointer" radius="xl" />
                  )}
                </Link>
              )}
              <Link href="/" className={`${pathname === '/' ? ' text-pink-600 cursor-default  gap-3 flex py-2 px-[14px] text-sm font-semibold ' : `${classes.link} gap-3`} `}>
                <RiHome2Line size="1.5em" />
                Home
              </Link>
              <NavLink
                className="font-semibold"
                leftSection={<TbTemplate size="1.5em" />}
                label="Templates"
                childrenOffset={28}
                href="#required-for-focus"
              >
                <NavLink
                  leftSection={<GoProjectTemplate size="1em" color="red" />}
                  label="All Templates"
                  component={Link}
                  href="/template"
                />
                <NavLink
                  leftSection={<GiBigDiamondRing size="1em" color="red" />}
                  label="Undangan Pernikahan"
                  component={Link}
                  href="/template/undangan-pernikahan"
                />
                <NavLink
                  leftSection={<BsCake2 size="1em" color="red" />}
                  label="Undangan Ulang Tahun"
                  component={Link}
                  href="/template/undangan-ulang-tahun"
                />
                <NavLink
                  leftSection={<IoCutOutline size="1em" color="red" />}
                  label="Undangan Aqiqah"
                  component={Link}
                  href="/template/undangan-aqiqah"
                />
                <NavLink
                  leftSection={<PiFlowerTulipThin size="1em" color="red" />}
                  label="Undangan Pingitan"
                  component={Link}
                  href="/template/undangan-pingitan"
                />
                <NavLink
                  leftSection={<FaUserInjured size="1em" color="red" />}
                  label="Undangan Katoba"
                  component={Link}
                  href="/template/undangan-katoba"
                />
                <div className="flex flex-col gap-2 w-full border-t border-t-slate-300">
                  <div>
                    <Text fw={500} fz="sm">
                      Request Desain Undangan
                    </Text>
                    <Text size="xs" c="dimmed">
                      Bisa melakukan permintaan custom desain sesuai keinginan
                      dan style anda.
                    </Text>
                  </div>
                  <Link
                    className="text-sm p-2 border rounded-md  font-semibold hover:bg-slate-50"
                    href="#"
                  >
                    Request
                  </Link>
                </div>
              </NavLink>

              <Link href="/user" className={`${pathname === '/user' ? ' text-pink-600 cursor-default  gap-3 flex py-2  px-[14px] text-sm font-semibold ' : `${classes.link} gap-3`} `}>
                <FaUser size="1.5em" />
                Undanganku
              </Link>
              <Link href="/" className={`${pathname === '/about' ? ' text-pink-600 cursor-default  gap-3 flex py-2  px-[14px] text-sm font-semibold ' : `${classes.link} gap-3`} `}>
                <IoIosHelpCircle size="1.5em" />
                About
              </Link>
            </div>
            <div>
              {session?.user ? (
                <form action={handleLogout}>
                  <button className="w-full" type="submit">
                    <Button variant="default">Logout</Button>
                  </button>
                </form>
              ) : (
                <Link href={"/login"}>
                  <Button variant="default">Masuk</Button>
                </Link>
              )}
            </div>
          </div>
        </Drawer>
      </Group>
    </div>
  );
}
