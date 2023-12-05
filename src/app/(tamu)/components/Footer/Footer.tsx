import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { BsCake2 } from "react-icons/bs";
import { PiFlowerTulipThin } from "react-icons/pi";
import { IconHeartFilled } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="flex relative flex-col justify-center items-center w-full bg-slate-200 gap-10  py-20 px-5">
      <div className="flex flex-col items-center">
        <Link href={"/"} className="flex gap-2 items-center">
          <IconHeartFilled className="text-pink-600" />
          <p className="text-2xl font-semibold text-pink-600 ">Olvite</p>
        </Link>
        <span className="text-xs text-slate-700">www.olvite.com</span>
      </div>
      <div className="flex gap-2 md:gap-5">
        <Link
          href={"/"}
          className="flex gap-2  items-center hover:text-red-600 "
        >
          <GiBigDiamondRing size="1.5em" color="red" />
          <span className="text-xs">Undangan Pernikahan</span>
        </Link>
        <Link
          href={"/"}
          className="flex gap-2  items-center hover:text-red-600 "
        >
          <BsCake2 size="1.5em" color="red" />
          <span className="text-xs">Undangan Ulang Tahun</span>
        </Link>
        <Link
          href={"/"}
          className="flex gap-2  items-center hover:text-red-600 "
        >
          <PiFlowerTulipThin size="1.5em" color="red" />
          <span className="text-xs">Undangan Pingitan</span>
        </Link>
      </div>
      <div className="flex flex-col gap-1 text-white w-full md:w-max">
        <Link
          href={"/"}
          target="_blank"
          className="flex justify-center items-center  gap-2 bg-sky-500 py-2 px-4 rounded-lg"
        >
          <FaWhatsapp />
          <span className="text-sm">070-9062-2543</span>
        </Link>
        <Link
          href={"/"}
          target="_blank"
          className="flex justify-center items-center  gap-2 bg-sky-500 py-2 px-4 rounded-lg"
        >
          <CiInstagram />
          <span className="text-sm">olvite</span>
        </Link>
      </div>
      <div className=" absolute flex justify-center bottom-5 text-xs text-slate-700 w-full">
        Copyright © 2023
      </div>
    </footer>
  );
}
