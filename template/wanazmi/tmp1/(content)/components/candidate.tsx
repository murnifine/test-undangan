import Image from "next/image";
// import mempelaiPria from "";
import dataWeedings from "@/lib/dataweedings";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
import SosialMediaPria from "./sosialMediaPria";
import SosialMediaWanita from "./sosialMediaWanita";

export default function Candidate({ dataWeddings }: any) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-10">
      <div className="flex flex-col justify-center items-center gap-5 text-xlå">
        <div className="border-4 border-white shadow-lg flex justify-center items-center w-44 h-64 rounded-t-full rounded-b-2xl bg-red-400 overflow-hidden ">
          <Image
            src={dataWeddings.pria.photos}
            width={500}
            height={700}
            alt="mempelai pria"
          />
        </div>
        <div className="flex flex-col items-center gap-5 text-slate-800">
          <div className=" flex flex-col items-center text-sm ">
            <span className=" font-semibold ">Putra dari</span>
            <span>
              {dataWeddings.pria.bapak} & {dataWeddings.pria.ibu}
            </span>
          </div>
          <span className="text-4xl font-Sacramento ">
            {dataWeddings.pria?.namaMempelai}
          </span>
          <SosialMediaPria dataWeddings={dataWeddings} />
        </div>
      </div>
      <div>
        <span className="text-[60px] font-Sacramento">&</span>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 text-xl">
        <div className="border-4 border-white shadow-lg flex justify-center items-center w-44 h-64 rounded-t-full rounded-b-2xl bg-red-400 overflow-hidden ">
          <Image
            src={dataWeddings.wanita.photos}
            width={500}
            height={700}
            alt="mempelai wanita"
          />
        </div>
        <div className="flex flex-col items-center gap-5 text-slate-800">
          <div className=" flex flex-col items-center text-sm ">
            <span className=" font-semibold ">Putra dari</span>
            <span>
              {dataWeddings.wanita.bapak} & {dataWeddings.wanita.ibu}
            </span>
          </div>
          <span className="text-4xl font-Sacramento ">
            {dataWeddings.wanita?.namaMempelai}
          </span>
          <SosialMediaWanita dataWeddings={dataWeddings} />
        </div>
      </div>
    </div>
  );
}
