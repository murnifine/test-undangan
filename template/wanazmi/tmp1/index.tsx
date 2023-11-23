import Image from "next/image";
import Slide1 from "./(content)/slide1";
import Slide2 from "./(content)/slide2";
import Layout from "./layout";
import dataweedings from "../../../lib/dataweedings";

export default function Tmp1() {
  const dataWeddings = dataweedings[0];

  return (
    <Layout>

      <h1>Edi : ini saya edit</h1>

      <div className="relative flex flex-col   justify-center w-full px-5 md:max-w-[600px] h-full overflow-scroll  ">
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
      </div>
    </Layout>
  );
}
