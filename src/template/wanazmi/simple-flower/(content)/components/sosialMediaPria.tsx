import { ProfileProps } from "@/types/types";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { PiTiktokLogoThin } from "react-icons/pi";

export default function SosialMediaPria({
  profile,
}: {
  profile: ProfileProps;
}) {
  const { pria_fb, pria_ig, pria_tk } = profile;

  return (
    <>
      <div className="flex h-10 gap-5 justify-start items-center bg-pink-300 px-4 rounded-lg shadow-md">
        {pria_ig && (
          <Link href={pria_ig} target="_blank">
            <IoLogoInstagram size="1.5rem" />
          </Link>
        )}
        {pria_fb && (
          <Link href={pria_fb} target="_blank">
            <CiFacebook size="1.5rem" />
          </Link>
        )}
        {pria_tk && (
          <Link href={pria_tk} target="_blank">
            <PiTiktokLogoThin size="1.5rem" />
          </Link>
        )}
      </div>
    </>
  );
}
