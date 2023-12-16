"use client";
import MenuDock from "@/components/MenuDock";
import Music from "@/components/Music";
import Particle from "@/components/Particle";
import CountDown2 from "@/components/countDown2";
import { ProfileProps } from "@/types/types";
import {
  IconCalendar,
  IconForms,
  IconHeartBolt,
  IconHome,
  IconNote,
  IconPhoto,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Index({ profile }: { profile: ProfileProps }) {
  const listMusic = [
    "https://invisimple.id/wp-content/uploads/2023/06/Bruno-Mars-Marry-You.mp3",
  ];

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
  ];

  const dateTime = profile?.dateTime_akad_nikah;
  const waktu = `
    ${dateTime?.toLocaleString("id-ID", { weekday: "long" })},
    ${dateTime?.toLocaleString("id-ID", {
    day: "2-digit",
  })}-${dateTime?.toLocaleString("id-ID", {
    month: "2-digit",
  })}-${dateTime?.toLocaleString("id-ID", { year: "numeric" })}
    `;

  return (
    <>
      <div className="bg-slate-900 min-h-full w-screen flex justify-center">
        <div className="flex flex-col max-w-lg w-full h-screen  items-center bg-slate-100 relative">
          <div className="w-full">
            <motion.div
              className={` absolute  right-2 top-2 origin-top-right `}
              animate={{ scale: [1, 1.07, 1], rotate: [0, 6, -6, 0] }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            >
              <Image
                src="/img/flower.png"
                width={200}
                height={200}
                alt="flower"
              />
            </motion.div>
            <motion.div
              className={`absolute  left-2 top-2 origin-top-left `}
              animate={{ scale: [1, 1.07, 1], rotate: [0, -6, 6, 0] }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            >
              <Image
                src="/img/flower.png"
                width={200}
                height={200}
                alt="flower"
                className="scale-x-[-1]"
              />
            </motion.div>
          </div>

          <section className="w-full min-h-screen justify-center items-center flex flex-col">
            <div className="w-52 h-52 bg-blue-300 rounded-full relative overflow-hidden border-spacing-1  border-2">
              {profile.url_foto_utama && (
                <Image
                  alt="Flower"
                  src={profile.url_foto_utama as string}
                  quality={100}
                  fill
                  sizes="100vw"
                  className="object-cover "
                />
              )}
            </div>
            <p>The Wedding of</p>
            <p>
              {profile.nama_pria} & {profile.nama_ayah_wanita}
            </p>
            <p>{waktu}</p>
            <CountDown2 date_time={profile.dateTime_akad_nikah} />
          </section>

          <section className="w-full p-10 ">3</section>

          <Music listMusic={listMusic} />
          <MenuDock menus={menus} />
          <Particle />
        </div>
      </div>
    </>
  );
}
