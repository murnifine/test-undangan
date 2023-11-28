"use client";

import { ActionIcon } from "@mantine/core";
import { useTimeout } from "@mantine/hooks";
import { IconDisc, IconMusic } from "@tabler/icons-react";
import { LegacyRef, useEffect, useRef, useState } from "react";
import useSound from "use-sound";

export default function Music() {
  const [play, { pause }] = useSound("/oneheart.mp3", {
    repeat: true,
  });
  const [isPlay, setIsPlay] = useState(false);
  // const musicBtn: LegacyRef<HTMLDivElement> | undefined | null = useRef(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     musicBtn.current?.click();
  //     alert()
  //   }, 300);
  // }, []);

  return (
    <div
      className={`fixed bottom-5 right-8 ${isPlay && " animate-pulse"}`}
      // ref={musicBtn}

      onClick={() => {
        if (isPlay) {
          setIsPlay(false);
          pause();
        } else {
          setIsPlay(true);
          play();
        }
      }}
    >
      <ActionIcon
        id="musicBtn"
        data-play="false"
        color={isPlay ? "blue" : "orange"}
        variant="filled"
        size="xl"
        radius="xl"
        aria-label="Play Music"
        title="Play Music"
        className={`relative flex ${
          isPlay && "animate-[spin_8s_linear_infinite]"
        } `}
      >
        {isPlay && (
          <>
            <IconDisc
              style={{ width: "50%", height: "50%" }}
              stroke={1.5}
              className={
                (isPlay ? "animate-ping " : "") +
                " absolute inline-flex rounded-full h-5 w-5"
              }
            />

            <IconDisc
              style={{ width: "60%", height: "60%" }}
              stroke={1.5}
              className="relative inline-flex rounded-full h-4 w-4"
            />
          </>
        )}

        {!isPlay && (
          <IconMusic style={{ width: "50%", height: "50%" }} stroke={1.5} />
        )}
      </ActionIcon>
    </div>
  );
}
