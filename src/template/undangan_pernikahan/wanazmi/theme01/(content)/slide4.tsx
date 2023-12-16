"use client";

import { ProfileProps } from "@/types/types";

import Masonry from "react-responsive-masonry";
import { Image } from "antd";

const Slide4 = ({ profile }: { profile: ProfileProps }) => {
  const photoMoments = profile?.photo_moment;

  return (
    <div
      id="section4"
      className="flex flex-col items-center justify-center w-full z-20 overflow-hidden  bg-white/5 gap-10 border-2 border-white py-10  rounded-xl shadow-md"
    >
      <span className=" font-Shadows text-3xl text-pink-700">Our Moments</span>
      <Masonry columnsCount={3} className="p-5" gutter="10px">
        {photoMoments?.map((image, i) => (
          <Image
            alt="Foto"
            key={i}
            src={`${image.url_foto}`}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </Masonry>
    </div>
  );
};
export default Slide4;
