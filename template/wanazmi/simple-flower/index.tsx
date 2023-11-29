// "use client";

import Image from "next/image";
import Slide1 from "./(content)/slide1";
import Slide2 from "./(content)/slide2";
import Layout from "./layout";
import dataWeedings from "../../../lib/dataweedings";
import Slide3 from "./(content)/slide3";
import Slide4 from "./(content)/slide4";
import Slide5 from "./(content)/slide5";
import Slide6 from "./(content)/slide6";
import { AllDataUserProps } from "@/types/types";
import Slide7 from "./(content)/slide7";
import Footer from "@/app/(tamu)/components/Footer/Footer";
import Music from "@/components/Music";
import MenuDock from "@/components/MenuDock";
import { Komponen1 } from "@/components/contoh/ControhContext";

export default function Tmp1({
  AllDataUser,
}: {
  AllDataUser: AllDataUserProps;
}) {
  const listMusic = [
    "music/snowfall.mp3",
    "https://invisimple.id/wp-content/uploads/2023/06/Bruno-Mars-Marry-You.mp3",
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/LS3LNGNUv9ggLA10rIC67I31xO4g3GWdwovPm8wA.mp3",
    "https://cdn.discordapp.com/attachments/997069374009659415/1179276306018467861/snowfall.mp3",
  ];

  return (
    <Layout>
      <Komponen1 />

      <div
        className="relative flex flex-col gap-5 pb-40   justify-center w-full  md:max-w-[600px] h-full  "
        data-selector="index"
        data-music="false"
      >
        <Image
          className="absolute h-full inline-block z-0"
          src={"/img/bg.jpg"}
          alt="bacground"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={75}
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL={"/img/bg.jpg"}
        />
        <Slide1 AllDataUser={AllDataUser} />
        <Slide2 AllDataUser={AllDataUser} />
        <Slide3 AllDataUser={AllDataUser} />
        <Slide4 AllDataUser={AllDataUser} />
        <Slide6 AllDataUser={AllDataUser} />
        <Slide7 AllDataUser={AllDataUser} />
      </div>

      <Footer />
      <Music listMusic={listMusic} />
      <MenuDock />
    </Layout>
  );
}
