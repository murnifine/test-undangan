"use client";

import { motion } from "framer-motion";
import { ActionIcon } from "@mantine/core";
import { IconDisc, IconMusicPause } from "@tabler/icons-react";
import { useState } from "react";
import { Howl } from "howler";

export default function Music({ listMusic }: { listMusic: string[] }) {
  const [music, setMusic] = useState<Howl>();
  const [isPlay, setIsPlay] = useState(false);


  function controlMusic(index: number = 0) {
    if (!music) {
      setMusic(
        new Howl({
          // loop: true,
          src: [listMusic[index]],
          preload: true,
          autoplay: true,
          onend: function () {
            if (index + 1 == listMusic.length) {
              controlMusic(0);
            } else {
              controlMusic(index + 1);
            }
          },
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
      className={`fixed bottom-28 right-4   ${
        isPlay && " animate-pulse"
      } z-30 `}
      onClick={() => controlMusic(0)}
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
          className={`relative flex z-10 ${
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
            <IconMusicPause
              style={{ width: "50%", height: "50%" }}
              stroke={1.5}
            />
          )}
        </ActionIcon>
      </motion.div>
    </div>
  );
}
