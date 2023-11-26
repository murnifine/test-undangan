import Image from "next/image";
import SosialMediaPria from "../../../../../components/sosialMedia/wanazmi/sosialMediaPria";
import SosialMediaWanita from "../../../../../components/sosialMedia/wanazmi/sosialMediaWanita";
import { PropsDataUser } from "@/types/types";

export default function Candidate({
  dataWeddings,
  user,
  defaultFoto,
}: PropsDataUser) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-10">
      <div className="flex flex-col justify-center items-center gap-5 text-xlå">
        <div
          data-aos="fade-right"
          className="border-4 border-white shadow-lg flex justify-center items-center w-44 h-64 rounded-t-full rounded-b-2xl bg-red-400 overflow-hidden "
        >
          <Image
            src={user.url_foto_pria ? user.url_foto_pria : "/img/flower.png"}
            width={500}
            height={700}
            alt="mempelai pria"
          />
        </div>
        <div className="flex flex-col items-center gap-5 text-slate-800">
          <div className=" flex flex-col items-center text-sm ">
            <span className=" font-semibold ">Putra dari</span>
            <span>
              {user.nama_ibu_pria} & {user.nama_ayah_pria}
            </span>
          </div>
          <span className="text-4xl font-Sacramento ">{user.nama_pria}</span>
          <SosialMediaPria dataWeddings={dataWeddings} />
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
            src={user.url_foto_wanita ? user.url_foto_wanita : defaultFoto}
            width={500}
            height={700}
            alt="mempelai wanita"
          />
        </div>
        <div className="flex flex-col items-center gap-5 text-slate-800">
          <div className=" flex flex-col items-center text-sm ">
            <span className=" font-semibold ">Putri dari</span>
            <span>
              {user.nama_ayah_wanita} & {user.nama_ibu_wanita}
            </span>
          </div>
          <span className="text-4xl font-Sacramento ">{user.nama_wanita}</span>
          <SosialMediaWanita dataWeddings={dataWeddings} />
        </div>
      </div>
    </div>
  );
}
