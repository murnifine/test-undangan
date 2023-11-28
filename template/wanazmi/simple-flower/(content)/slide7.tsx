/* eslint-disable react/no-unescaped-entities */
"use client";

import { AllDataUserProps } from "@/types/types";
import Image from "next/image";

export default function Slide7({
  AllDataUser,
}: {
  AllDataUser: AllDataUserProps;
}) {
  const photoMoments = AllDataUser.user.Profile?.photo_moment;

  return (
    <div className="flex flex-col items-center w-full h-full z-20 text-slate-800  bg-white/5 gap-10 border-2 border-white py-10  px-5 rounded-xl shadow-md">
      <div className="flex flex-col gap-5 mt-10 pb-20 ">
        <div className="flex flex-col items-center gap-5 text-xs">
          <span className=" text-center italic">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang."
          </span>
          <span className=" font-semibold">Q.S Ar-Rum : 21</span>
        </div>
        <div className="flex justify-center items-center gap-3">
          {photoMoments?.slice(0, 3).map((photoMoment) => (
            <Image
              key={photoMoment.id}
              className=" w-20 h-20 rounded-full object-cover shadow-xl p-1 "
              src={`${photoMoment.url_foto}`}
              width={75}
              height={75}
              alt="imageData"
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-5 text-xs">
          <span className=" text-center ">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada
            kami.
          </span>
          <span className=" italic">
            Wassalamu'alaikum warahmatullahi wabarakatuh
          </span>
        </div>
        <div className="flex flex-col items-center gap-5 text-xs">
          <span className=" font-semibold">Kami yang berbahagia</span>
          <span className="text-3xl font-semibold font-Sacramento">
            {AllDataUser.user?.Profile?.nama_wanita} &{" "}
            {AllDataUser.user?.Profile?.nama_pria}
          </span>
        </div>
      </div>
    </div>
  );
}
