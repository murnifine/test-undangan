import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { PiTiktokLogoThin } from "react-icons/pi";

export default function SosialMediaPria({ dataWeddings }: any) {
  const { facebook, instagram, tiktok } = dataWeddings?.pria?.sosialMedia;
  // const facebook = dataWeddings?.pria?.sosialMedia.facebook;
  // console.log(facebook);
  // const instagram = dataWeddings?.pria?.sosialMedia.instagram;
  // const tiktok = dataWeddings?.pria?.sosialMedia.tiktok;
  return (
    <>
      <div className="flex h-10 gap-5 justify-start items-center bg-pink-300 px-4 rounded-lg shadow-md">
        {instagram && (
          <Link href={instagram} target="_blank">
            <IoLogoInstagram size="1.5rem" />
          </Link>
        )}
        {facebook && (
          <Link href={facebook} target="_blank">
            <CiFacebook size="1.5rem" />
          </Link>
        )}
        {tiktok && (
          <Link href={tiktok} target="_blank">
            <PiTiktokLogoThin size="1.5rem" />
          </Link>
        )}
      </div>
    </>
  );
}
