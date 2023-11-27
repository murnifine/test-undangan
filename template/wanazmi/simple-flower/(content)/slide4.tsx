"use client";
import React from "react";
import { Image } from "antd";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
const Slide4: React.FC = ({ dataWeddings }: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full z-20   bg-white/5 gap-10 border-2 border-white py-10   rounded-xl shadow-md">
      <span className=" font-Shadows text-3xl text-pink-700">Our Moments</span>
      <div className="flex justify-center items-center">
        <Carousel
          className="flex w-full "
          slideSize="70%"
          height={200}
          slideGap="xs"
          controlsOffset="xl"
          controlSize={31}
          loop
          withIndicators
        >
          <Carousel.Slide className="flex w-full items-center justify-center ">
            <Image
              className=" rounded-full"
              width={150}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Carousel.Slide>
          <Carousel.Slide className="flex w-full items-center justify-center ">
            <Image
              className=" rounded-full"
              width={150}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Carousel.Slide>
          <Carousel.Slide className="flex w-full items-center justify-center ">
            <Image
              className=" rounded-full"
              width={150}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Carousel.Slide>

          {/* ...other slides */}
        </Carousel>
      </div>
    </div>
  );
};
export default Slide4;
