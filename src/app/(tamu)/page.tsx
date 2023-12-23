import { Header } from "@/app/(tamu)/components/Header/Header";
import CountShare from "@/components/countShare";
import NoteDev from "@/components/noteDev";
import { Link } from "react-scroll";
import { GoCheckCircleFill } from "react-icons/go";

export default function Home() {
  return (
    <div className="" >
      <Header />
      <div className="">
        <div className="py-10 flex justify-center items-center w-full px-5 md:px-14">
          <CountShare />
        </div>
        <NoteDev />
        <section className="flex-col py-20 flex justify-center items-center bg-slate-50">
          <span className="text-2xl font-semibold text-pink-600">Unggulan</span>
          <div className="flex gap-5 flex-col pt-10">
            <ul className="flex flex-col gap-2 w-full text-sm text-slate-800">

              <li className="flex items-center gap-2 bg-slate-200 p-2 rounded-lg">
                <GoCheckCircleFill size='1.5em' color='red' />
                <span className="w-[280px] md:w-max">
                  Share undangan disemua sosial media tanpa batas
                </span>
              </li>
              <li className="flex items-center gap-2 bg-slate-200 p-2 rounded-lg">
                <GoCheckCircleFill size='1.5em' color='red' />
                <span className="w-[280px] md:w-max">
                  Custom nama tamu tanpa batas
                </span>
              </li>
              <li className="flex items-center gap-2 bg-slate-200 p-2 rounded-lg">
                <GoCheckCircleFill size='1.5em' color='red' />
                <span className="w-[280px] md:w-max">
                  Amplop/Kado Digital
                </span>
              </li>
              <li className="flex items-center gap-2 bg-slate-200 p-2 rounded-lg">
                <GoCheckCircleFill size='1.5em' color='red' />
                <span className="w-[280px] md:w-max">
                  Pesan Ucapan
                </span>
              </li>
              <li className="flex items-center gap-2 bg-slate-200 p-2 rounded-lg">
                <GoCheckCircleFill size='1.5em' color='red' />
                <span className="w-[280px] md:w-max">
                  Mode preview dengan data diri anda
                </span>
              </li>
              <li className="flex items-center gap-2 bg-slate-200 p-2 rounded-lg">
                <GoCheckCircleFill size='1.5em' color='red' />
                <span className="w-[280px] md:w-max">
                  Pilihan music yang beragam sesuai keinginan dan juga bisa melakukan request music (jika tidak ada dilist music)
                </span>
              </li>
              <li className="flex items-center gap-2 bg-slate-200 p-2 rounded-lg ">
                <GoCheckCircleFill size='1.5em' color='red' />
                <span className="w-[280px] md:w-max">
                  Bisa melakukan Reqest Desain Template Undangan sesuai dengan tema acara
                </span>
              </li>
            </ul>


          </div>

        </section>
      </div>
      <div className="py-10 px-5 flex justify-center items-center w-full">
        {/* <Link
          duration={500}
          spy={true}
          smooth={true}
          offset={-70}
          activeClass="active"

          className="flex  justify-center items-center px-4 py-2 bg-sky-600  transition ease-in-out delay-150 hover:scale-105 hover:-translate-y-1  text-white rounded-lg text-sm font-semibold"
          to='home'>
          Buat Undanganmu Sekarang Juga!
        </Link> */}

      </div>
      {/* <section className="bg-green-200 py-20 flex justify-center items-center">
        2
      </section> */}
      {/* <section className="bg-blue-200 py-20 flex justify-center items-center">
        3
      </section> */}
      {/* <section className="bg-yellow-200 py-20 flex justify-center items-center">
        4
      </section> */}

    </div>
  );
}
