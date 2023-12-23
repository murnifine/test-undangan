// "use client";

import Image from "next/image";
import Slide1 from "./(content)/slide1";
import Slide2 from "./(content)/slide2";
import Layout from "./layout";
import dataWeedings from "../../../../lib/dataweedings";
import Slide3 from "./(content)/slide3";
import Slide4 from "./(content)/slide4";
import Slide5 from "./(content)/slide5";
import Slide6 from "./(content)/slide6";
import Slide7 from "./(content)/slide7";
import Footer from "@/app/(tamu)/components/Footer/Footer";
import Music from "@/components/Music";
import MenuDock from "@/components/MenuDock";

import {
  IconCalendar,
  IconForms,
  IconHeartBolt,
  IconHome,
  IconNote,
  IconPhoto,
} from "@tabler/icons-react";

import Cover from "./(content)/cover";

import { Komponen1 } from "@/components/contoh/ControhContext";
import { ProfileProps } from "@/types/types";
import Particle from "@/components/Particle";
import prisma from "@/lib/prisma";

export default async function Tmp1({ profile }: { profile: ProfileProps }) {
  const music =
    profile.music?.url ??
    "https://invisimple.id/wp-content/uploads/2023/06/Bruno-Mars-Marry-You.mp3";

  // console.log(profile, profile.music);

  const listMusic = [music];

  const menus = [
    {
      icon: <IconHeartBolt color="white" />,
      link: "section1",
    },
    {
      icon: <IconHome color="white" />,
      link: "section2",
    },
    {
      icon: <IconCalendar color="white" />,
      link: "section3",
    },
    {
      icon: <IconPhoto color="white" />,
      link: "section4",
    },
    {
      icon: <IconForms color="white" />,
      link: "section6",
    },
    {
      icon: <IconNote color="white" />,
      link: "section7",
    },
  ];

  return (
    <>
      <Cover profile={profile} />
      <Layout>
        {/* <Komponen1 /> */}

        <div
          className="relative flex bgThema1  flex-col gap-5 pb-40 px-5  justify-center w-full  md:max-w-[600px] h-full  "
          data-selector="index"
          data-music="false"
        >
          <Slide1 profile={profile} />
          <Slide2 profile={profile} />
          <Slide3 profile={profile} />
          {profile.photo_moment.length > 0 && <Slide4 profile={profile} />}
          <Slide6 profile={profile} />
          <Slide7 profile={profile} />
        </div>

        <Music listMusic={listMusic} />
        <MenuDock menus={menus} />
        <Particle />

        <Footer />
      </Layout>
    </>
  );
}
