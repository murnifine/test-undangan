"use client";

import { motion } from "framer-motion";

import { ActionIcon } from "@mantine/core";
import { useTimeout } from "@mantine/hooks";
import { IconDisc, IconMusic } from "@tabler/icons-react";
import { LegacyRef, useEffect, useRef, useState } from "react";
// import useSound from "use-sound";
import { Howl } from "howler";

export default function Music({ listMusic }: { listMusic: string[] }) {
  const [music, setMusic] = useState<Howl>();
  const [isPlay, setIsPlay] = useState(false);

  function controlMusic() {
    if (!music) {
      setMusic(
        new Howl({
          src: listMusic,
          loop: true,
          autoplay: true,
        })
      );
      setIsPlay(true);
      return;
    }

    if (isPlay) {
      setIsPlay(false);
      music.pause();
    } else {
      setIsPlay(true);
      music.play();
    }
  }

  return (
    <div
      className={`fixed bottom-14 right-8 ${isPlay && " animate-pulse"}`}
      onClick={controlMusic}
    >
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <ActionIcon
          id="musicBtn"
          data-play="false"
          color={isPlay ? "blue" : "orange"}
          variant="filled"
          size="xl"
          radius="xl"
          aria-label="Play Music"
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
      </motion.div>
    </div>
  );
}
