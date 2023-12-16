import Link from "next/link";
import { LuEye } from "react-icons/lu";

export default function CardPingitan() {
    return (
        <div className='flex flex-col gap-2 pb-10 bg-zinc-50 px-5 rounded-lg shadow-md pt-5'>
            <div className="  w-full  pb-10 h-screen">
                <span className=" text-xl md:text-2xl font-semibold text-red-400 border-b-2 pb-2 border-b-sky-800">
                    Undangan Pingitan
                </span>
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 flex-col md:flex-row  gap-8 md:gap-12 mt-2  py-5  w-full h-full overflow-scroll">
                    {[1, 2, 3].map((template) => (
                        <div className="flex flex-col gap-4 justify-center items-center w-full md:w-80 h-max bg-white border px-5 py-4 rounded-lg shadow-lg transition ease-in-out delay-150  hover:-translate-y-1  hover:bg-slate-50 duration-300 text-slate-800 ">
                            <span className="text-lg font-semibold">Thema 1</span>
                            <div className=" w-full h-64 bg-red-300">
                                gambar
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2 w-full">
                                <div className="flex gap-4">
                                    <span className="px-4 py-1 rounded-md font-semibold text-white bg-sky-400">Rp 150.000</span>
                                    <span className="px-4 py-1 rounded-md font-semibold text-white bg-red-400">50% OFF</span>
                                </div>
                                <span className="text-xl font-bold">
                                    Rp 75.000
                                </span>

                            </div>
                            <div className="w-full">
                                <div className="flex justify-between ">
                                    <Link href={'#'} className="flex gap-1 py-2 px-2 items-center rounded-md  bg-slate-100 text-slate-900 shadow-md hover:bg-red-200">
                                        <LuEye />
                                        <span className="text-xs">Demo</span>
                                    </Link>
                                    <Link href={'/user/create'} className="flex gap-1 py-2 px-2 items-center rounded-md  bg-sky-500 text-white shadow-md hover:bg-red-200 hover:text-sky-600">
                                        <LuEye />
                                        <span className="text-xs">Terapkan</span>
                                    </Link>

                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <Link className="w-full bg-red-300 px-4 py-2" href={'/template/undangan-pernikahan'}>Lihat Semua</Link>
        </div>
    )
}