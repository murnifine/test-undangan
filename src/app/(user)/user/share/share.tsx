"use client";
import { ProfileProps } from "@/types/types";
import { Button, Input } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { Profile } from "@prisma/client";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTiktokFilled,
  IconBrandWhatsapp,
  IconLock,
  IconLockAccess,
  IconUserCheck,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

const Share = ({ slug, id }: { slug: string; id: number }) => {
  const [kepada, setKepada] = useState(``);

  const clipboard = useClipboard({ timeout: 1000 });

  async function bayar() {
    const data = {
      id: 59,
      //   id: id,
      harga: 250000,
    };

    const req = await fetch("/api/tokenizer", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const res = await req.json();

    console.log({ res });

    // https://simulator.sandbox.midtrans.com/bca/va/index
    (window as any).snap.pay(res.token, {
      onSuccess: function (result: any) {
        console.log("success");
        console.log(result);
      },
      onPending: function (result: any) {
        console.log("pending");
        console.log(result);
      },
      onError: function (result: any) {
        console.log("error");
        console.log(result);
      },
      onClose: function () {
        console.log("customer closed the popup without finishing the payment");
      },
    });
  }

  return (
    <>
      <div className="w-full px-7 mt-5">
        <Input
          size="lg"
          placeholder="Nama penerima undangan"
          leftSection={<IconUserCheck size={16} />}
          onChange={(e) => setKepada(e.target.value)}
        />

        {kepada && (
          <div className="relative mt-5 rounded-lg overflow-hidden">
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
            <div className=" mt-1 p-2 text-center">
              olvite.com/{slug}?to={kepada}
            </div>

            <Button
              fullWidth
              size="sm"
              variant="light"
              color={clipboard.copied ? "teal" : "blue"}
              onClick={() => clipboard.copy(`olvite.com/${slug}?to=${kepada}`)}
            >
              {clipboard.copied
                ? "Link undangan disalin"
                : "Salin link undangan"}
            </Button>

            <p className="mt-10 mb-3 text-center">Bagikan melalui :</p>

            <div className="flex gap-3 w-full">
              <Button fullWidth size="lg" variant="filled" color="green">
                <IconBrandWhatsapp />
              </Button>
              <Button fullWidth size="lg" variant="filled" color="blue">
                <IconBrandFacebookFilled />
              </Button>
              <Button fullWidth size="lg" variant="filled" color="pink">
                <IconBrandInstagram />
              </Button>
              <Button fullWidth size="lg" variant="filled" color="dark">
                <IconBrandTiktokFilled />
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Share;
