import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/user">
      <div className="flex gap-x-1 justify-center items-center">
        <IconHeartFilled size={30} className="text-pink-600" />
        <h1 className="text-2xl font-medium text-center">Olvite</h1>
      </div>
    </Link>
  );
}
