"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import anime from "animejs";
import CountDown2 from "@/components/countDown2";

// import { AosInit } from "@/lib/aos";
import { AllDataUserProps } from "@/types/types";
import Aos from "aos";
import { jalankanAos } from "@/lib/aos";

export default function Slide1({
  AllDataUser,
}: {
  AllDataUser: AllDataUserProps;
}) {
  useEffect(() => {
    jalankanAos();
    //   document.body.addEventListener("mouseenter",()=>{
    //     (document.querySelector("#musicBtn") as HTMLButtonElement).click()
    //     console.log("first")
    //   })
  }, []);

  const waktu = AllDataUser.user?.Profile?.dateTime_akad_nikah;

  return (
    <div
      id="section1"
      className="relative  flex flex-col justify-center items-center max-w-full md:w-[600px] h-screen z-20"
      // onMouseEnter={() => {
      //   const playBtn= (document.querySelector("#musicBtn") as HTMLButtonElement)
      //   if (playBtn.getAttribute("data-play") === "false") {
      //     (document.querySelector("#musicBtn") as HTMLButtonElement).click()
      //     playBtn.setAttribute("data-play", "true")
      //   }
      // }}
      // onClick={() => {
      //   const playBtn = document.querySelector(
      //     "#musicBtn"
      //   ) as HTMLButtonElement;
      //   if (playBtn.getAttribute("data-play") === "false") {
      //     (document.querySelector("#musicBtn") as HTMLButtonElement).click();
      //     playBtn.setAttribute("data-play", "true");
      //   }
      // }}
    >
      {[
        {
          image_url: "/img/flower.png",
          position: "top-0 right-0 origin-top-right",
        },
        {
          image_url: "/img/flower2.png",
          position: "bottom-0 left-0 origin-bottom-left",
        },
      ].map((item) => (
        <motion.div
          key={item.image_url}
          className={`absolute w-56  ${item.position}`}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        >
          <Image src={item.image_url} width={500} height={500} alt="flower" />
        </motion.div>
      ))}

      {/* <motion.div
        className="absolute top-0 right-0 w-56  origin-top-right"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      >
        <Image src={"/img/flower.png"} width={500} height={500} alt="flower" />
      </motion.div> */}

      <div
        data-aos="fade-up"
        className=".image_url2 h-52 bg-white rounded-full overflow-hidden border-8 border-white"
      >
        <Image
          className=" w-72 scale-150 mt-5"
          src={
            AllDataUser.user?.Profile?.url_foto_utama
              ? AllDataUser.user?.Profile?.url_foto_utama
              : AllDataUser.defaultFoto
          }
          width={700}
          height={500}
          alt="bg"
        />
      </div>

      <div
        data-aos="zoom-in"
        className="mt-10 flex flex-col justify-center items-center gap-2"
      >
        <span className="font-Shadows text-lg">THE WEDDING OF</span>
        <span className=" text-4xl font-Rouge">
          {AllDataUser.user?.Profile?.nama_wanita} &
          {AllDataUser.user?.Profile?.nama_pria}
        </span>
        <div
          data-aos="fade-in"
          className="flex justify-center items-center  font-Rajdhani font-bold text-lg text-slate-800 mt-2 "
        ></div>
        <div
          data-aos="fade-in"
          className="flex justify-center items-center  font-Rajdhani font-bold text-lg text-slate-800 mt-2 "
        >
          {/* <span>
            {AllDataUser.user?.Profile?.dateTime_akad_nikah.toLocaleString(
              "en-GB",
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}
          </span> */}

          {/* <motion.div
            className="container"
            initial={{ scale: 180 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 10,
            }}
          > */}
          <span className=" border-r-2 pr-5 border-slate-600 mr-5 ">
            {waktu?.toLocaleString("id-ID", { weekday: "long" })}
          </span>

          <div className="flex">
            {waktu?.toLocaleString("id-ID", { day: "2-digit" })}-
            {waktu?.toLocaleString("id-ID", { month: "2-digit" })}-
            {waktu?.toLocaleString("id-ID", { year: "numeric" })}
          </div>
        </div>

        <CountDown2 />

        <div className="flex flex-col justify-center text-sky-600 items-center gap-2 mt-10">
          <IoIosArrowRoundDown id="arrow-scroll" size="2em" />
          <span className=" text-sky-600 font-bold font-Rajdhani">
            Scroll Down
          </span>
        </div>
      </div>
    </div>
  );
}
