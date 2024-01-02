import AkadNikah from "@/components/akadNikahDanResepsi/wanazmi/akadNikah";
import Resepsi from "@/components/akadNikahDanResepsi/wanazmi/resepsi";
import { ProfileProps } from "@/types/types";

export default function Slide3({ profile }: { profile: ProfileProps }) {
  return (
    <div
      id="section3"
      className="flex flex-col items-center w-full h-full z-20   bg-white/5 gap-10 border-2 border-white py-10  px-5 rounded-xl shadow-md"
    >
      <AkadNikah profile={profile} />
      <Resepsi profile={profile} />
    </div>
  );
}
