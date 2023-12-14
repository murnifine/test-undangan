import { ProfileProps } from "@/types/types";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { PiTiktokLogoThin } from "react-icons/pi";

export default function SosialMediaWanita({
  profile,
}: {
  profile: ProfileProps;
}) {
  const { wanita_fb, wanita_ig, wanita_tk } = profile;

  return (
    <>
      <div className="flex h-10 gap-5 justify-start items-center bg-pink-300 px-4 rounded-lg shadow-md">
        {wanita_ig && (
          <Link href={wanita_ig} target="_blank">
            <IoLogoInstagram size="1.5rem" />
          </Link>
        )}
        {wanita_fb && (
          <Link href={wanita_fb} target="_blank">
            <CiFacebook size="1.5rem" />
          </Link>
        )}
        {wanita_tk && (
          <Link href={wanita_tk} target="_blank">
            <PiTiktokLogoThin size="1.5rem" />
          </Link>
        )}
      </div>
    </>
  );
}
