import Image from "next/image";

import { AllDataUserProps, PropsDataUser } from "@/types/types";
import SosialMediaPria from "./sosialMediaPria";
import SosialMediaWanita from "./sosialMediaWanita";

export default function Candidate({
  AllDataUser,
}: {
  AllDataUser: AllDataUserProps;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-10">
      <div className="flex flex-col justify-center items-center gap-5 text-xlå">
        <div
          data-aos="fade-right"
          className="border-4 border-white shadow-lg flex justify-center items-center w-44 h-64 rounded-t-full rounded-b-2xl bg-red-400 overflow-hidden "
        >
          <Image
            src={
              AllDataUser.user.Profile?.url_foto_pria
                ? AllDataUser.user.Profile?.url_foto_pria
                : AllDataUser.defaultFoto
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
              {AllDataUser.user.Profile?.nama_ibu_pria} &{" "}
              {AllDataUser.user.Profile?.nama_ayah_pria}
            </span>
          </div>
          <span className="text-4xl font-Sacramento ">
            {AllDataUser.user.Profile?.nama_pria}
          </span>
          <SosialMediaPria AllDataUser={AllDataUser} />
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
              AllDataUser.user.Profile?.url_foto_wanita
                ? AllDataUser.user.Profile?.url_foto_wanita
                : AllDataUser.defaultFoto
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
              {AllDataUser.user.Profile?.nama_ayah_wanita} &{" "}
              {AllDataUser.user.Profile?.nama_ibu_wanita}
            </span>
          </div>
          <span className="text-4xl font-Sacramento ">
            {AllDataUser.user.Profile?.nama_wanita}
          </span>
          <SosialMediaWanita AllDataUser={AllDataUser} />
        </div>
      </div>
    </div>
  );
}
