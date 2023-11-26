"use client";
import Image from "next/image";
import Slide1 from "./(content)/slide1";
import Slide2 from "./(content)/slide2";
import Layout from "./layout";
import dataWeedings from "../../../lib/dataweedings";
import Slide3 from "./(content)/slide3";
import Slide4 from "./(content)/slide4";
import Slide5 from "./(content)/slide5";
import Slide6 from "./(content)/slide6";
import { User } from "@prisma/client";
import { PropsDataUser } from "@/types/types";

export default function Tmp1({ defaultFoto, user }: PropsDataUser) {
  const dataWedding = dataWeedings[0];
  console.log(defaultFoto);
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
        <Slide1
          dataWeddings={dataWedding}
          user={user}
          defaultFoto={defaultFoto}
        />
        <Slide2
          dataWeddings={dataWedding}
          user={user}
          defaultFoto={defaultFoto}
        />
        <Slide3 dataWeddings={dataWedding} />
        <Slide4 dataWeddings={dataWedding} />
        <Slide6 dataWeddings={dataWedding} />
      </div>
    </Layout>
  );
}
