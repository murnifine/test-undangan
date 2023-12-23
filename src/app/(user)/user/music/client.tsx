"use client";

import { Music, Profile } from "@prisma/client";
import {
  IconMusicPlus,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Howl, Howler } from "howler";
import { setMusic } from "@/actions/actions-profile";

export function MusicItem({
  allMusic,
  profile,
}: {
  allMusic: Music[];
  profile: Profile;
}) {
  const [musicPlayNow, setMusicPlayNow] = useState("");
  //   const [sound, setSound] = useState<Howl>()

  function controlMusic(url: string) {
    Howler.stop();

    if (musicPlayNow === url) {
      setMusicPlayNow("");
      return;
    }

    const newSound = new Howl({
      src: [url],
      preload: false,
      autoplay: false,
      html5: true,

      onplayerror: function (e) {
        newSound.once("unlock", function () {
          newSound.play();
        });
        console.log("Musik eeror", e);
      },
      onplay: (e) => {
        setMusicPlayNow(url);
        // setSound(newSound)
        console.log("mulai", e);
      },
      onload: (e) => {
        console.log("Loaidng musik", e);
      },
    });

    newSound.load();
    newSound.play();
  }

  return allMusic.map((item) => {
    // if (item.title === "halo") return;
    return (
      <div
        key={item.id}
        className="bg-slate-100  rounded-sm flex overflow-hidden hover:bg-slate-200 transition-all"
      >
        <div className="flex-1 flex items-center pl-5">{item.title}</div>
        <div className="flex gap-1">
          <div
            className="p-3 bg-slate-400 cursor-pointer group rounded-sm"
            onClick={() => {
              controlMusic(item.url);
            }}
          >
            {musicPlayNow === item.url ? (
              <IconPlayerPauseFilled className="text-white group-hover:w-[28px] group-hover:h-[28px] transition-all " />
            ) : (
              <IconPlayerPlayFilled className="text-white group-hover:w-[28px] group-hover:h-[28px] transition-all " />
            )}
          </div>
          <button className="p-3 bg-slate-400 cursor-pointer group rounded-sm">
            <IconMusicPlus
              className="text-white"
              onClick={async () => await setMusic(profile.id, item.id)}
            />
          </button>
        </div>
      </div>
    );
  });
}
