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
import { useState } from "react";

const Share = ({ slug }: { slug: string }) => {
  const [kepada, setKepada] = useState(``);

  const clipboard = useClipboard({ timeout: 1000 });

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
      </div>
    </>
  );
};
export default Share;
