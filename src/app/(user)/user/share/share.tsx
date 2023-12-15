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
  IconUserCheck,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

const Share = ({ slug, id }: { slug: string; id: number }) => {
  const [kepada, setKepada] = useState(``);

  const clipboard = useClipboard({ timeout: 1000 });

  async function bayar() {
    const data = {
      id: 50,
      //   id: id,
      harga: 250000,
    };

    const req = await fetch("/api/tokenizer", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const res = await req.json();

    console.log({ res });

    // https://simulator.sandbox.midtrans.com/bca/va/payment
    (window as any).snap.pay(res.token);
  }

  useEffect(() => {
    // const src = "https://app.sandbox.midtrans.com/snap/snap.js";
    // const clientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY as string;
    // const script = document.createElement("script");
    // script.src = src;
    // script.setAttribute("data-client-key", clientKey);
    // script.async = true;
    // document.body.appendChild(script);
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);

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
          <>
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
          </>
        )}

        <Button className="mt-10" onClick={bayar}>
          Bayar
        </Button>
      </div>
    </>
  );
};
export default Share;
