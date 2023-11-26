"use client";
import Image from "next/image";
import Slide1 from "./(content)/slide1";
import Slide2 from "./(content)/slide2";
import Layout from "./layout";
import dataweedings from "../../../lib/dataweedings";
import Slide3 from "./(content)/slide3";
import Slide4 from "./(content)/slide4";
import Slide5 from "./(content)/slide5";
import Slide6 from "./(content)/slide6";


export default function Tmp1({ user }: { user: User }) {
  const dataWeddings = dataweedings[0];

  return (
    <Layout>
      <div className="relative flex flex-col gap-5 mt-5 mb-10   justify-center w-full px-5 md:max-w-[600px] h-full overflow-scroll  ">
        <Image
          className="absolute h-full inline-block  z-0"
          src={"/img/bg.jpg"}
          alt="bacground"
          fill
          quality={75}
          style={{ objectFit: "cover" }}
        />
        <Slide1 dataWeddings={dataWeddings} />
        <Slide2 dataWeddings={dataWeddings} />
        <Slide3 dataWeddings={dataWeddings} />
        <Slide4 dataWeddings={dataWeddings} />
        <Slide6 dataWeddings={dataWeddings} />

      </div>
    </Layout>
  );
}
