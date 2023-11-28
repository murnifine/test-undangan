// "use client";

import Image from "next/image";
import Slide1 from "./(content)/slide1";
import Slide2 from "./(content)/slide2";
import Layout from "./layout";
import dataWeedings from "../../../lib/dataweedings";
import Slide3 from "./(content)/slide3";
import Slide4 from "./(content)/slide4";
import Slide5 from "./(content)/slide5";
import Slide6 from "./(content)/slide6";
import { AllDataUserProps } from "@/types/types";
import Slide7 from "./(content)/slide7";
import Footer from "@/app/(tamu)/components/Footer/Footer";

export default function Tmp1({
  AllDataUser,
}: {
  AllDataUser: AllDataUserProps;
}) {
  const dataWedding = dataWeedings[0];

  return (
    <Layout>
      <div className="relative flex flex-col gap-5 pb-40   justify-center w-full px-5 md:max-w-[600px] h-full overflow-scroll  ">
        <Image
          className="absolute h-full inline-block  z-0"
          src={"/img/bg.jpg"}
          alt="bacground"
          fill
          quality={75}
          style={{ objectFit: "cover" }}
        />
        <Slide1 AllDataUser={AllDataUser} />
        <Slide2 AllDataUser={AllDataUser} />
        <Slide3 AllDataUser={AllDataUser} />
        <Slide4 AllDataUser={AllDataUser} />
        <Slide6 AllDataUser={AllDataUser} />
        <Slide7 AllDataUser={AllDataUser} />
      </div>

      <Footer />
    </Layout>
  );
}
