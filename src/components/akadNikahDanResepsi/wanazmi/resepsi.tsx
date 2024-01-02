import { ProfileProps } from "@/types/types";
import Link from "next/link";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { PiFlowerTulipThin } from "react-icons/pi";

export default function Resepsi({ profile }: { profile: ProfileProps }) {
  const waktuResepsi = profile?.dateTime_resepsi;

  return (
    <div className="flex flex-col justify-center items-center border-slate-600 border rounded-md h-full w-full">
      <div className="flex flex-col items-center  justify-center text-pink-700 gap-4 w-full h-full  px-5 py-10 ">
        <PiFlowerTulipThin size="4em" />
        <span className=" font-Shadows text-3xl">Resepsi</span>
        <div className="flex items-center">
          <span className=" w-24 flex justify-center ">
            {waktuResepsi?.toLocaleString("id-ID", { weekday: "long" })}
          </span>
          <div className=" flex flex-col items-center border-x border-slate-700 px-6">
            <span className="text-3xl">
              {waktuResepsi?.toLocaleString("id-ID", { day: "2-digit" })}
            </span>
            <span className=" -mt-2">
              {waktuResepsi?.toLocaleString("id-ID", { year: "numeric" })}
            </span>
          </div>
          <span className="w-24 flex justify-center">
            {waktuResepsi?.toLocaleString("id-ID", { month: "long" })}
          </span>
        </div>
        <div className="flex gap-2 items-center  text-slate-700 ">
          <CiClock2 size="1.3em" />
          <span className="text-sm">
            {waktuResepsi?.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} - SELESAI
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-lg">Lokasi</span>
          <span className="flex items-center text-center text-xs">
            {profile?.alamat_akad_nikah}
            {/* Desa SUka Damai kec. Tiworo Kepulauan */}
          </span>
          <Link
            href={profile?.url_alamat_resepsi as string}
            target="_blank"
            className="flex bg-pink-500 text-white px-4 py-2 justify-center rounded-lg gap-2 items-center text-xs mt-5"
          >
            <CiLocationOn size="1.7em" />
            <span>Google Maps</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
