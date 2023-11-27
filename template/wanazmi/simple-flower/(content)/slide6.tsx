"use client";

import { sendUcapan } from "@/lib/actions";
import prisma from "@/lib/prisma";
import { PropsDataUser } from "@/types/types";
import { User } from "@prisma/client";
import { useRef } from "react";

export default function Slide6({ user }: { user: User }) {
  const ref = useRef(null);
  return (
    <div className="flex flex-col items-center w-full h-full z-20  bg-white/5 gap-10 border-2 border-white py-10  px-5 rounded-xl shadow-md">
      <span className=" font-Shadows text-3xl  text-pink-700">
        Ucapan & Doa
      </span>
      <form
        ref={ref}
        action={async (FormData) => {
          await sendUcapan(FormData, user);
          ref.current?.reset();
        }}
        method="POST"
        className="flex  flex-col w-full h-full gap-5"
      >
        <input
          className="text-xs w-full px-2 h-10"
          type="text"
          placeholder="nama"
          name={"nama"}
        />
        <textarea
          className="w-full h-24 rounded-sm p-5 text-xs border border-slate-600"
          id=""
          placeholder="Ucapan"
          name={"ucapan"}
        ></textarea>
        <button type="submit" className="w-full bg-pink-500 text-white py-2">
          SEND
        </button>
      </form>
      <span className=" top-2 left-0 translate-y-7 text-xs pb-2 pl-2 border-b border-b-slate-700 w-full">
        50 Ucapan
      </span>
      <div className="flex flex-col gap-4  w-full p-3 bg-white/50 h-64 overflow-scroll">
        {/* {user?.ucapan
          ?.map((x) => (
            <div className="flex flex-col text-sm gap-2  p-4  border border-sky-600 rounded-lg text-slate-800 ">
              <span className="text-sm pb-1 border-b border-slate-500">
                @{x.nama}
              </span>
              <span className="text-xs">{x.pesan}</span>
            </div>
          ))
          .reverse()} */}
      </div>
    </div>
  );
}
