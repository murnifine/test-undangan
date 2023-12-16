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
import { useEffect, useState } from "react";

const Share = ({ slug, profile }: { slug: string; profile: ProfileProps }) => {
  const [kepada, setKepada] = useState(``);

  const clipboard = useClipboard({ timeout: 1000 });

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

  return (
    <>
      <div className="w-full px-7 mt-2">
        <Input
          size="lg"
          placeholder="Nama penerima undangan"
          leftSection={<IconUserCheck size={16} />}
          onChange={(e) => setKepada(e.target.value)}
        />

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

            <div className=" mt-1 p-2 text-center">
              olvite.com/{slug}?to={kepada}
            </div>

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
              {clipboard.copied
                ? "Link undangan disalin"
                : "Salin link undangan"}
            </Button>

            <p className="mt-10 mb-3 text-center">Bagikan melalui :</p>

            <div className="flex gap-3 w-full justify-center p-5">
              <Button size="md" variant="filled" color="green">
                <IconBrandWhatsapp />
              </Button>
              <Button size="md" variant="filled" color="blue">
                <IconBrandFacebookFilled />
              </Button>
              <Button size="md" variant="filled" color="pink">
                <IconBrandInstagram />
              </Button>
              <Button size="md" variant="filled" color="dark">
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
