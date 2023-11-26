import { User } from "@prisma/client";
import Candidate from "./components/candidate";

type Props = {
  dataWeddings: any;
  user: User;
};

export default function Slide2({ dataWeddings, user }: Props) {
  return (
    <div className="flex flex-col   items-center w-full h-full z-20   bg-white/5 gap-10 border-2 border-white py-10 my-20 px-5 rounded-xl shadow-md">
      <div className="flex flex-col items-center gap-2">
        <span className="text-3xl text-">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </span>
        <span className="pt-2 text-xs">
          Assalamualaikum warahmatullahi wabarakatuh
        </span>
        <span className=" text-center text-xs w-full max-w-lg mt-5">
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
          Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
        </span>
      </div>
      <Candidate dataWeddings={dataWeddings} user={user} />
    </div>
  );
}
