"use client";
import Image from "next/image";

import { ProfileProps } from "@/types/types";
import SosialMediaPria from "./sosialMediaPria";
import SosialMediaWanita from "./sosialMediaWanita";
import imageDefault from "@/utils/imageDefault";
import { useEffect, useState } from "react";

export default function Candidate({ profile }: { profile: ProfileProps }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 ">
      <div className="flex flex-col justify-center items-center gap-5 text-xl">
        <div
          data-aos="fade-right"
          className="border-4 border-white shadow-lg flex justify-center items-center w-44 h-64 rounded-t-full rounded-b-2xl bg-red-400 overflow-hidden "
        >
          <Image
            src={
              profile?.url_foto_pria
                ? profile?.url_foto_pria
                : "https://placehold.co/400x400"
              // : AllDataUser.defaultFoto
            }
            width={500}
            height={700}
            alt="mempelai pria"
          />
        </div>
        <div className="flex flex-col items-center gap-5 text-slate-800">
          <div className=" flex flex-col items-center text-sm ">
            <span className=" font-semibold ">Putra dari</span>
            <span>
              {profile?.nama_ibu_pria} & {profile?.nama_ayah_pria}
            </span>
          </div>
          <span className="text-4xl font-Sacramento ">
            {profile?.nama_pria}
          </span>
          <SosialMediaPria profile={profile} />
        </div>
      </div>

      <div>
        <span className="text-[60px] font-Sacramento">&</span>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 text-xl">
        <div
          data-aos="fade-left"
          className="border-4 border-white shadow-lg flex justify-center items-center w-44 h-64 rounded-t-full rounded-b-2xl bg-red-400 overflow-hidden "
        >
          <Image
            src={
              profile?.url_foto_wanita
                ? profile?.url_foto_wanita
                : "https://placehold.co/400x400"
              // : AllDataUser.defaultFoto
            }
            width={500}
            height={700}
            alt="mempelai wanita"
          />
        </div>
        <div className="flex flex-col items-center gap-5 text-slate-800">
          <div className=" flex flex-col items-center text-sm ">
            <span className=" font-semibold ">Putri dari</span>
            <span>
              {profile?.nama_ayah_wanita} & {profile?.nama_ibu_wanita}
            </span>
          </div>
          <span className="text-4xl font-Sacramento ">
            {profile?.nama_wanita}
          </span>
          <SosialMediaWanita profile={profile} />
        </div>
      </div>
    </div>
  );
}
