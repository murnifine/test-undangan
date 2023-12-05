"use client";

import { useEffect, useState } from "react";

const countDowntarget: Date = new Date("2023-12-26:12:59:59");
const TargetTimesamp = countDowntarget.getTime();
const waktuSekarang: Date = new Date();
const now = waktuSekarang.getTime();

const getTimeLeft = () => {
  const totalTimeLeft = TargetTimesamp - now;
  const Hari = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const Jam = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const Menit = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const Detik = Math.floor((totalTimeLeft / 1000) % 60);

  return { Hari, Jam, Menit, Detik };
};

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());
  console.log(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);
  return (
    <div className="flex  gap-2 mt-5">
      {Object.entries(timeLeft).map((cdTime, i) => {
        const label = cdTime[0];
        const value = cdTime[1];
        return (
          <div
            key={i}
            className="flex flex-col justify-center items-center gap-1 bg-pink-500 px-4 py-2 text-xs text-white rounded-lg w-20"
          >
            <span className="text-2xl">{value}</span>
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
