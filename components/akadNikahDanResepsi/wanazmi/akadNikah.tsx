import Link from "next/link";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { GiBigDiamondRing } from "react-icons/gi";

export default function AkadNikah() {
  return (
    <div className="flex flex-col justify-center items-center border-slate-600 border rounded-md h-full w-full">
      <div className="flex flex-col items-center  justify-center text-pink-700 gap-4 w-full h-full  px-5 py-10 ">
        <GiBigDiamondRing size="4em" />
        <span className=" font-Shadows text-3xl">Akad Nikah</span>
        <div className="flex items-center">
          <span className=" w-24 flex justify-center ">Selasa</span>
          <div className=" flex flex-col items-center border-x border-slate-700 px-6">
            <span className="text-3xl">26</span>
            <span className=" -mt-2">2023</span>
          </div>
          <span className="w-24 flex justify-center">Desember</span>
        </div>
        <div className="flex gap-2 items-center  text-slate-700 ">
          <CiClock2 size="1.3em" />
          <span className="text-sm">09.00 - SELESAI</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-lg">Lokasi</span>
          <span className="flex items-center text-center text-xs">
            Desa SUka Damai kec. Tiworo Kepulauan
          </span>
          <Link
            href={"https://maps.app.goo.gl/Gmn7a8gPqy9xPu1G8"}
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
