"use client";
import {
  getOrderByProfileId,
  getPaymentToken,
  updateStatusOrderSuccess,
  verifyTransaction,
} from "@/actions/action-order";
import { ProfileProps } from "@/types/types";
import { Button, Input } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { Order, Profile } from "@prisma/client";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTiktokFilled,
  IconBrandWhatsapp,
  IconLock,
  IconLockAccess,
  IconUserCheck,
} from "@tabler/icons-react";
import { revalidatePath, revalidateTag } from "next/cache";
import Link from "next/link";
import { useEffect, useState } from "react";


const Share = ({
  slug,
  profile,
  host,
}: {
  slug: string;
  profile: ProfileProps;
  host: string;
}) => {

  
const nama_pria = profile.nama_pria?.toUpperCase();
const nama_wanita = profile.nama_wanita?.toUpperCase();
const nama_panggilan_pria = profile.nama_panggilan_pria?.toUpperCase();
const nama_panggilan_wanita = profile.nama_panggilan_wanita?.toUpperCase();


const [kepada, setKepada] = useState(``);

const [finalUrl, setFinalUrl] = useState(`${host}/${slug}`);

const clipboard = useClipboard({ timeout: 1000 });


const text = `Kepada Yth.\nBapak/Ibu/Saudara/i\n\n${kepada}\n\n\nAssalamu’alaikum Wr. Wb.\n\nBismillahirahmanirrahim.\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami:\n\n${nama_pria} & ${nama_wanita}\n\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\n\nWassalamu’alaikum Wr. Wb.\n\nTerima Kasih..\n\nHormat kami,\n${nama_panggilan_pria} & ${nama_panggilan_wanita}\n\n\nBerikut link untuk info lengkap undangan kami\n`;

async function bayar() {
  // const data = {
  //   // id: profile.id,
  //   profile_id: profile.id,
  //   harga: 250000,
  // };

  // const req = await fetch("/api/tokenizer", {
  //   method: "POST",
  //   body: JSON.stringify(data),s
  // });
  // const { token } = await req.json();
  // console.log({ token });

  const snap = (window as any).snap;

  snap.show();

  const orders = await getOrderByProfileId(profile.id);

  const order = orders[0];
  if (order && order?.status === "pending") {
    console.log("ini muncul", { order });
    const trxStatus = await verifyTransaction(order.id, profile.id);

    if (trxStatus?.transaction_status === "settlement") {
      console.log("ini muncul dalamnya");
      snap.hide();
      return;
    }
  }

  const token = await getPaymentToken(25000, profile.id);

  if (!token) return snap.hide();

  // simulasi pembayaran
  // https://simulator.sandbox.midtrans.com/bca/va/index

  snap.pay(token, {
    onSuccess: async function (result: any) {
      console.log("success");
      await updateStatusOrderSuccess(result.order_id, profile.id);
      // console.log(result);
    },
    onPending: function (result: any) {
      console.log("pending");
      // console.log(result);
    },
    onError: function (result: any) {
      console.log("error");
      // console.log(result);
    },
    onClose: function () {
      console.log("customer closed the popup without finishing the payment");
    },
  });
}

async function handleShare() {
  const data = {
    title: `Undangan pernikahan ${profile.nama_pria} & ${profile.nama_wanita}`,
    // text,
    url: text,
    // url: `${finalUrl}`,
  };

  try {
    await navigator.share(data);
  } catch (e) {
    console.log("share error", e);
  }
}

  return (
    <>
      <div className="w-full px-7 mt-2">
        <Input
          size="lg"
          placeholder="Nama penerima undangan"
          leftSection={<IconUserCheck size={16} />}
          onChange={(e) => {
            setKepada(e.target.value);

            const tempValue =
              e.target.value !== ""
                ? `${host}/${slug}?to=${e.target.value}`
                : `${host}/${slug}`;

            setFinalUrl(tempValue);
          }}
        />

        <div className="border mt-5 p-5 text-center rounded-sm flex flex-col gap-y-3">
          <Link href={finalUrl} className="underline text-blue-500">
            {/* localhost:3000/{slug} */}

            {finalUrl}
          </Link>

          <Button
            fullWidth
            size="sm"
            variant="light"
            color={clipboard.copied ? "teal" : "blue"}
            onClick={() =>
              clipboard.copy(
                `olvite.com/${slug}?to=${kepada.replace(" ", "%20")}`
              )
            }
          >
            {clipboard.copied ? "Link undangan disalin" : "Salin link undangan"}
          </Button>
        </div>

        {kepada && (
          <div className="relative mt-5 rounded-lg overflow-hidden">
            {profile?.order[0]?.status !== "success" && (
              <div className="absolute  bg-gray-500/90 w-full h-full z-50 flex flex-col justify-center items-center">
                <p className="text-sm text-white text-center mb-4">
                  Fitur terkunci, selesaikan pembayaran untuk dapat menggunakan
                  fitur ini
                </p>
                <IconLock size={70} color="white" />

                <Button className="mt-4 z-[9999] opacity-100" onClick={bayar}>
                  Selesaikan Pembayaran
                </Button>
              </div>
            )}

            <p className="mt-10 mb-3 text-center">Bagikan melalui :</p>

            <div className="flex gap-3 w-full justify-center p-5">
              {/* <Link
                href={"#"}
                className="p-2 bg-sky-400 rounded-lg hover:bg-sky-500 hover:scale-105"
              >
                <IconBrandWhatsapp />
              </Link>
              <Link
                href={"#"}
                className="p-2 bg-sky-400 rounded-lg hover:bg-sky-500 hover:scale-105"
              >
                <IconBrandFacebookFilled />
              </Link>
              <Link
                href={"#"}
                className="p-2 bg-sky-400 rounded-lg hover:bg-sky-500 hover:scale-105"
              >
                <IconBrandInstagram />
              </Link>
              <Link
                href={"#"}
                className="p-2 bg-sky-400 rounded-lg hover:bg-sky-500 hover:scale-105"
              >
                <IconBrandTiktokFilled />
              </Link> */}

              <Button onClick={handleShare}>Share</Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Share;
