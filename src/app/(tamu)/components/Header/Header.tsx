import classes from "./Header.module.css";
import Link from "next/link";
import { IconCheck, IconCheckbox } from "@tabler/icons-react";
import Image from "next/image";
import Particle from "@/components/Particle";
import { GiBigDiamondRing } from "react-icons/gi";
import { BsCake2 } from "react-icons/bs";
import { IoCutOutline } from "react-icons/io5";
import { PiFlowerTulipThin } from "react-icons/pi";
import { FaUserInjured } from "react-icons/fa";

export function Header() {
  return (
    <>
      <div className="flex  relative   md:flex-row  py-20 md:py-0 px-5  bg-white  md:px-14 items-center w-full h-screen ">
        {/* <Particle /> */}
        <Image
          src={'/img/bg-home.jpg'}
          className="absolute  saturate-50 brightness-50 "
          fill
          quality={75}
          alt="bg-home" />

        <div className="flex justify-center md:items-start items-center flex-col gap-5 z-20 w-full md:w-max  text-white ">
          <div className="">
            <span className="text-3xl  md:text-4xl font-bold ">UNDANGAN DIGITAL</span>
            <div className="flex flex-col">
              <span className="font-semibold ">pertama di Indonesia</span>
              <span>Semua jenis undangan hanya ada disini!</span>
            </div>

          </div>
          <div className="flex flex-col w-full  gap-5 ">
            <div>
              <ul className="flex flex-col gap-4 text-sm">
                <li>
                  <Link href={'/template/undangan-pernikahan'}
                    className="flex justify-center items-center gap-2 py-2   rounded-lg text-white border hover:border-pink-300  hover:shadow-md transition ease-in-out delay-150"
                  >
                    <GiBigDiamondRing size="1em" color="red" />
                    Undangan Pernikahan
                  </Link>
                </li>
                <li>
                  <Link href={'/template/undangan-ulang-tahun'}
                    className="flex justify-center items-center gap-2 py-2   rounded-lg text-white border hover:border-pink-300  hover:shadow-md transition ease-in-out delay-150"
                  >
                    <BsCake2 size="1em" color="red" />
                    Undangan Ulang Tahun
                  </Link>
                </li>
                <li>
                  <Link href={'/template/undangan-aqiqah'}
                    className="flex justify-center items-center gap-2 py-2   rounded-lg text-white border hover:border-pink-300  hover:shadow-md transition ease-in-out delay-150"
                  >
                    <IoCutOutline size="1em" color="red" />
                    Undangan Aqiqah
                  </Link>
                </li>
                <li>
                  <Link href={'/template/undangan-pingitan'}
                    className="flex justify-center items-center gap-2 py-2   rounded-lg text-white border hover:border-pink-300  hover:shadow-md transition ease-in-out delay-150"
                  >
                    <PiFlowerTulipThin size="1em" color="red" />
                    Undangan Pingitan
                  </Link>
                </li>
                <li>
                  <Link href={'/template/undangan-katoba'}
                    className="flex justify-center items-center gap-2 py-2   rounded-lg text-white border hover:border-pink-300  hover:shadow-md transition ease-in-out delay-150"
                  >
                    <FaUserInjured size="1em" color="red" />
                    Undangan Katoba
                  </Link>
                </li>

              </ul>
            </div>
            <Link className="flex justify-center items-center px-4 py-2 bg-sky-600  transition ease-in-out delay-150 hover:scale-105 hover:-translate-y-1  text-white rounded-lg text-sm font-semibold" href={'/template'}>
              Lihat Semua
            </Link>
          </div>


        </div>
      </div>
    </>


  );
}
