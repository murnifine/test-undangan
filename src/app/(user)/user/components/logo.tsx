import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

export default function Logo() {
  return (
    <>
      <div className="flex gap-x-1 justify-center items-center">
        <IconHeartFilled size={30} className="text-pink-600" />
        <h1 className="text-2xl font-medium text-center">Olvite</h1>
      </div>
    </>
  );
}
