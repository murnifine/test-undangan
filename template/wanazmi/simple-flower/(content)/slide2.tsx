import Candidate from "./components/candidate";
import { AllDataUserProps } from "@/types/types";
import { useScroll, MotionValue, useTransform } from "framer-motion";

export default function Slide2({
  AllDataUser,
}: {
  AllDataUser: AllDataUserProps;
}) {


  return (

    <div
      id="section2"
      data-aos="fade-up"
      className="flex flex-col   items-center w-full h-full z-20   bg-white/5 gap-10 border-2 border-white py-10 mt-20 px-5 rounded-xl shadow-md"
    >
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
      <Candidate AllDataUser={AllDataUser} />
    </div>
  );
}
