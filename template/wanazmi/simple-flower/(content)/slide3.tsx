import AkadNikah from "@/components/akadNikahDanResepsi/wanazmi/akadNikah";
import Resepsi from "@/components/akadNikahDanResepsi/wanazmi/resepsi";

export default function Slide3({ dataWeddings }: any) {
  return (
    <div className="flex flex-col items-center w-full h-full z-20   bg-white/5 gap-10 border-2 border-white py-10  px-5 rounded-xl shadow-md">
      <AkadNikah />
      <Resepsi />
    </div>
  );
}
