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
import { FaUser } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";

const mockdata = [
  {
    icon: IconCode,
    title: "Undangan Pernikahan",
  },
  {
    icon: IconCoin,
    title: "Undangan Ulang Tahun",
  },
  {
    icon: IconBook,
    title: "Undangan Pingitan",
  },
  {
    icon: IconFingerprint,
    title: "Undangan Aqiqah",
  },

];

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);


  return (
    <div className={`fixed w-full z-50 bg-white  `}>
      <Group justify="space-between" className="flex px-5 md:px-10 w-full h-16  ">
        <div>
          <Link href={"/"} className="flex gap-2 items-center">
            <IconHeartFilled className="text-pink-600" />
            <p className="text-2xl font-semibold text-pink-600 ">Olvite</p>
          </Link>
        </div>
        <div className="flex gap-10">
          <Group className="w-full h-16" gap={5} visibleFrom="sm">
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <div className={`${classes.link} cursor-pointer`}>
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

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Template Undangan</Text>
                  <Anchor href="/template" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  <Link href="/template/undangan-pernikahan" className={` flex gap-2 items-center hover:bg-slate-100 p-2`}>
                    <GiBigDiamondRing size="1.5em" color="red" />
                    <span className="text-sm font-semibold">Undangan Pernikahan</span>
                  </Link>
                  <Link href="/template/undangan-ulang-tahun" className={` flex gap-2 items-center hover:bg-slate-100 p-2`}>
                    <BsCake2 size="1.5em" color="red" />
                    <span className="text-sm font-semibold">Undangan Ulang Tahun</span>
                  </Link>
                  <Link href="/template/undangan-pingitan" className={` flex gap-2 items-center hover:bg-slate-100 p-2`}>
                    <PiFlowerTulipThin size="1.5em" color="red" />
                    <span className="text-sm font-semibold">Undangan Pingitan</span>
                  </Link>
                  <Link href="/template/undangan-aqiqah" className={` flex gap-2 items-center hover:bg-slate-100 p-2`}>
                    <IoCutOutline size="1.5em" color="red" />
                    <span className="text-sm font-semibold">Undangan Aqiqah</span>
                  </Link>

                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Request Desain Undangan
                      </Text>
                      <Text size="xs" c="dimmed">
                        Bisa melakukan permintaan custom desain sesuai keinginan dan style anda.
                      </Text>
                    </div>
                    <Link className="border rounded-md p-2 hover:bg-slate-100" href={'#'}>Request</Link>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <Link href="/user" className={classes.link}>
              Profile
            </Link>

            <Link href="/about" className={classes.link}>
              About
            </Link>

          </Group>
          <Group visibleFrom="sm">
            <Link href={"/login"}>
              <Button variant="default">Masuk</Button>
            </Link>
          </Group>
        </div>
        {/* mobile mode */}
        <Burger
          opened={drawerOpened}
          onClick={open}
          hiddenFrom="sm"
        />
        <Drawer opened={opened} onClose={close} position="right" >
          <div className="flex flex-col gap-5">
            <div>
              <NavLink className="font-semibold" leftSection={<TbTemplate size="1.5em" />} label="Templates" childrenOffset={28} href="#required-for-focus">
                <NavLink leftSection={<GiBigDiamondRing size="1em" color="red" />}
                  label="Undangan Pernikahan" component={Link} href="/template/undangan-pernihahan" />
                <NavLink leftSection={<BsCake2 size="1em" color="red" />}
                  label="Undangan Ulang Tahun" component={Link} href="/template/undangan-ulang-tahun" />
                <NavLink leftSection={<PiFlowerTulipThin size="1em" color="red" />}
                  label="Undangan Pingitan" component={Link} href="/template/undangan-pingitan" />
                <NavLink leftSection={<IoCutOutline size="1em" color="red" />}
                  label="Undangan Aqiqah" component={Link} href="/template/undangan-aqiqah" />
                <div className="flex flex-col gap-2 w-full border-t border-t-slate-300">
                  <div>
                    <Text fw={500} fz="sm">
                      Request Desain Undangan
                    </Text>
                    <Text size="xs" c="dimmed">
                      Bisa melakukan permintaan custom desain sesuai keinginan dan style anda.
                    </Text>
                  </div>
                  <Link className="text-sm p-2 border rounded-md  font-semibold hover:bg-slate-50" href='#'>Request</Link>
                </div>
              </NavLink>

              <Link href="/user" className={`${classes.link}  gap-3`}>
                <FaUser size="1.5em" />
                Profile
              </Link>
              <Link href="/" className={`${classes.link}  gap-3`}>
                <IoIosHelpCircle size="1.5em" />
                About
              </Link>
            </div>
            <div>
              <Link href={"/login"} >
                <Button variant="default">Masuk</Button>
              </Link>
            </div>
          </div>

        </Drawer>


      </Group >
    </div >
  );
}
