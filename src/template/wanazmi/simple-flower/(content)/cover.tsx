"use client";
import { ProfileProps } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Cover({ profile }: { profile: ProfileProps }) {
  const [openUndangan, setOpenUndangan] = useState(0);
  const [opacity, setOpacity] = useState(100);

  const HandleOpen = () => {
    const openMove = -500;
    const isiUndangan = document.querySelector("#isiUndangan");
    const playMusic = document.querySelector("#musicBtn");

    isiUndangan?.classList.add("h-full");
    isiUndangan?.classList.remove("overflow-hidden");
    isiUndangan?.classList.remove("h-screen");
    (playMusic as HTMLElement).click();
    setOpenUndangan(openMove);
    setOpacity(0);
  };
  return (
    <motion.div
      className="flex  fixed justify-center items-center w-full  top-0 h-screen bg-slate-900 z-50 py-20"
      animate={{ y: openUndangan, opacity: opacity }}
      // transition={{ ease: "easeOut", duration: 2, times: [0, 1.5, 1], }}
      transition={{ ease: "easeOut", duration: 2 }}
      // transition={{ duration: 2 }}
    >
      <div className="flex  fixed justify-center items-center w-full  md:max-w-[600px] shadow-md  top-0 h-screen">
        <Image
          className="absolute h-full inline-block z-0"
          src={"/img/bgCoverUtama.jpg"}
          alt="bacground"
          fill
          priority
          quality={75}
          blurDataURL={"/img/bg.jpg"}
        />
        <div className="flex flex-col gap-2 items-center justify-center w-72 h-[500px] rounded-full bg-pink-100 shadow-md  bg-opacity-20  z-20 ">
          <div className="flex z-20  text-[100px] font-Rouge text-red-400">
            <span className=" translate-x-4  ">
              {profile?.nama_pria?.charAt(0)}
            </span>
            <span className=" translate-y-10 -translate-x-5   ">
              {profile?.nama_wanita?.charAt(0)}
            </span>
          </div>
          <div className="text-xs font-medium font-serif mt-5">
            WEDDING INVITATION
          </div>
          <div className="flex gap-2 font-GlassAntiqu text-2xl text-red-500">
            <span className="   ">{profile?.nama_wanita}</span>
            <span>&</span>
            <span className="  ">{profile?.nama_pria}</span>
          </div>
          <div className="flex flex-col items-center gap-1 mt-2">
            <span className="text-xs">Kepada Yth:</span>
            <span className=" text-lg font-GlassAntiqu">wanazmi</span>
          </div>
          <button
            onClick={HandleOpen}
            className="flex items-center justify-center gap-2  bg-red-300 px-4 py-2 rounded-full mt-5"
          >
            <img
              width={15}
              height={15}
              src="https://img.icons8.com/external-outline-satawat-anukul/64/external-card-wedding-outline-satawat-anukul.png"
              alt="external-card-wedding-outline-satawat-anukul"
            />
            <span className="text-xs  text-slate-800">Buka Undangan</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
