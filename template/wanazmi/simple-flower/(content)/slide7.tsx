import { PropsDataUser } from "@/types/types";

export default function Slide7({ user }: PropsDataUser) {
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
            {user?.nama_wanita} & {user?.nama_pria}
          </span>
        </div>
      </div>
    </div>
  );
}
