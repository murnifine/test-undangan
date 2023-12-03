"use client";
import { AllDataUserProps } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import { FcInvite } from "react-icons/fc";
import { motion } from "framer-motion";


export default function Cover({
  AllDataUser,
}: {
  AllDataUser: AllDataUserProps;
}) {
  const [openUndangan, setOpenUndangan] = useState(0)

  const HandleOpen = () => {
    const openMove = -1000
    const isiUndangan = document.querySelector('#isiUndangan')
    const playMusic = document.querySelector('#musicBtn')

    isiUndangan?.classList.add('flex')
    isiUndangan?.classList.remove('hidden');
    (playMusic as HTMLElement).click()
    setOpenUndangan(openMove)
  }
  return (
    <motion.div className="flex  fixed justify-center items-center w-full top-0 h-screen bg-white z-50 py-20"
      animate={{ y: openUndangan }}
      transition={{ ease: "easeOut", duration: 1, times: [0, 0.5, 1], }}

    >
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
            {AllDataUser?.user?.Profile?.nama_pria?.charAt(0)}
          </span>
          <span className=" translate-y-10 -translate-x-5   ">
            {AllDataUser?.user?.Profile?.nama_wanita?.charAt(0)}
          </span>
        </div>
        <div className="text-xs font-medium font-serif mt-5">WEDDING INVITATION</div>
        <div className="flex gap-2 font-GlassAntiqu text-2xl text-red-500">
          <span className="   ">{AllDataUser?.user?.Profile?.nama_wanita}</span>
          <span>&</span>
          <span className="  ">{AllDataUser?.user?.Profile?.nama_pria}</span>
        </div>
        <div className="flex flex-col items-center gap-1 mt-2">
          <span className="text-xs">
            Kepada Yth:
          </span>
          <span className=" text-lg font-GlassAntiqu">
            wanazmi
          </span>
        </div>
        <button onClick={HandleOpen} className="flex items-center justify-center gap-2  bg-red-300 px-4 py-2 rounded-full mt-5">
          <img width={15} height={15} src="https://img.icons8.com/external-outline-satawat-anukul/64/external-card-wedding-outline-satawat-anukul.png" alt="external-card-wedding-outline-satawat-anukul" />
          <span className="text-xs  text-slate-800" >Buka Undangan</span>
        </button>
      </div>
    </motion.div>
  );
}
