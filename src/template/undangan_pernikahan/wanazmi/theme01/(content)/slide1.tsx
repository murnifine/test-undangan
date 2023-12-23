"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import CountDown2 from "@/components/countDown2";
import { ProfileProps } from "@/types/types";
import { jalankanAos } from "@/lib/aos";
import imageDefault from "@/utils/imageDefault";
export default function Slide1({ profile }: { profile: ProfileProps }) {
  const waktu = profile?.dateTime_akad_nikah;

  return (
    <div
      id="section1"
      className="relative scale-90 flex flex-col justify-center items-center max-w-full md:w-[600px] h-screen z-20"
    >
      {[
        {
          image_url: "/img/flower.png",
          position: "-top-10 -right-10 origin-top-right w-16 z-10",
        },
        {
          image_url: "/img/flower2.png",
          position: "-bottom-10 -left-10 -bottom-5 origin-bottom-left w-16 z-10",
        },
      ].map((item) => (
        <motion.div
          key={item.image_url}
          className={`absolute w-56  ${item.position}`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        >
          <Image src={item.image_url} width={300} height={300} alt="flower" />
        </motion.div>
      ))}

      <div
        data-aos="fade-up"
        className=".image_url2 relative bg-white w-56 h-56 z-50 rounded-full overflow-hidden border-2 border-white "
      >
        <Image
          className="absolute object-cover z-50  "
          src={
            profile?.url_foto_utama
              ? profile?.url_foto_utama
              : "https://placehold.co/400x400"
          }
          // width={500}
          // height={500}
          fill
          quality={75}
          alt="bg"
        />
      </div>

      <div
        data-aos="zoom-in"
        className="mt-10 flex flex-col justify-center items-center"
      >
        <span className="font-Shadows text-lg">THE WEDDING OF</span>
        <span className=" text-4xl font-Rouge">
          {profile?.nama_wanita} &{profile?.nama_pria}
        </span>
        <div
          data-aos="fade-in"
          className="flex justify-center items-center  font-Rajdhani font-bold text-lg text-slate-800 mt-2 "
        ></div>
        <div
          data-aos="fade-in"
          className="flex justify-center items-center  font-Rajdhani font-bold text-lg text-slate-800 mt-2 "
        >

          <span className=" border-r-2 pr-5 border-slate-600 mr-5 ">
            {waktu?.toLocaleString("id-ID", { weekday: "long" })}
          </span>

          <div className="flex">
            {waktu?.toLocaleString("id-ID", { day: "2-digit" })}-
            {waktu?.toLocaleString("id-ID", { month: "2-digit" })}-
            {waktu?.toLocaleString("id-ID", { year: "numeric" })}
          </div>
        </div>

        <CountDown2 date_time={profile.dateTime_akad_nikah} />

        <div className="flex flex-col justify-center text-sky-600 items-center gap-2 mt-5">
          <IoIosArrowRoundDown id="arrow-scroll" size="2em" />
          <span className=" text-sky-600 font-bold font-Rajdhani">
            Scroll Down
          </span>
        </div>
      </div>
    </div>
  );
}
