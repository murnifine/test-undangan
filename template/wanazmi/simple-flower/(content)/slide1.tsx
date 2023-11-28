"use client";

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
    <div className="relative  flex flex-col justify-center items-center max-w-full md:w-[600px] h-screen z-20" 
    // onMouseEnter={() => {
    //   const playBtn= (document.querySelector("#musicBtn") as HTMLButtonElement)
    //   if (playBtn.getAttribute("data-play") === "false") {
    //     (document.querySelector("#musicBtn") as HTMLButtonElement).click()
    //     playBtn.setAttribute("data-play", "true")
    //   }
    // }} 
    onClick={() => {
      const playBtn= (document.querySelector("#musicBtn") as HTMLButtonElement)
      if (playBtn.getAttribute("data-play") === "false") {
        (document.querySelector("#musicBtn") as HTMLButtonElement).click()
        playBtn.setAttribute("data-play", "true")
      }
    }} 
    >
      {["/img/flower.png", "/img/flower2.png"].map((url) => (
        <Image
        
          key={url}
          className=" absolute -top-0 w-40 z-30 -right-5"
          src={url}
          width={500}
          height={500}
          alt="flower"
        />
      ))}

      <div
        data-aos="fade-up"
        className="relative shadow-lg w-52 h-52 bg-white rounded-full overflow-hidden border-8 border-white"
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
          <span className=" border-r-2 pr-5 border-slate-600 mr-5 ">
            {waktu?.toLocaleString("en-GB", { weekday: "long" })}
          </span>

          <span>
            {waktu?.toLocaleString("en-GB", { day: "2-digit" })}
            {waktu?.toLocaleString("en-GB", { month: "2-digit" })}
            {waktu?.toLocaleString("en-GB", { year: "numeric" })}
          </span>
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
