"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const countDowntarget: Date = new Date("2023-12-26:12:59:59");
const TargetTimesamp = countDowntarget.getTime();
const waktuSekarang: Date = new Date();
const now = waktuSekarang.getTime();
const totalTimeLeft = TargetTimesamp - now;
export default function CountDown2() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Countdown
          daysInHours={true}
          date={Date.now() + totalTimeLeft}
          renderer={renderer}
        />
      )}
    </>
  );
}

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  const boxContetnt = [
    {
      id: 1,
      label: "Hari",
      value: days,
    },
    {
      id: 2,
      label: "Jam",
      value: hours,
    },
    {
      id: 3,
      label: "Menit",
      value: minutes,
    },
    {
      id: 4,
      label: "Detik",
      value: seconds,
    },
  ];
  if (completed) {
    // Render a completed state
    return (
      <span className="mt-5 font-Rajdhani font-bold bg-pink-500 text-white rounded-lg py-4 px-10">
        Acara Pernikahan Telah Selesai
      </span>
    );
  } else {
    // Render a countdown
    return (
      <>
        <div className="flex  gap-2 mt-5">
          {boxContetnt.map((Timer) => (
            <div
              key={Timer.id}
              className="flex flex-col justify-center items-center gap-1 bg-pink-500 px-4 py-2 text-xs text-white rounded-lg w-20"
            >
              <div className="text-2xl">{Timer.value}</div>
              <div>{Timer.label}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
};
