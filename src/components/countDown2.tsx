"use client";

import { motion } from "framer-motion";

import React, { ReactNode, useEffect, useState } from "react";
import Countdown from "react-countdown";

export default function CountDown2({
  date_time,
  children,
}: {
  date_time: any;
  children?: ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  const countDowntarget = new Date(date_time);
  // const countDowntarget: Date = new Date("2024-01-07:12:59:59");
  const TargetTimesamp = countDowntarget.getTime();
  const waktuSekarang: Date = new Date();
  const now = waktuSekarang.getTime();
  const totalTimeLeft = TargetTimesamp - now;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <></>;

  return (
    <Countdown
      daysInHours={true}
      date={Date.now() + totalTimeLeft}
      renderer={renderer}
    />
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
    return (
      <span className="mt-5 font-Rajdhani font-bold bg-pink-500 text-white rounded-lg py-4 px-10">
        Acara Pernikahan Telah Selesai
      </span>
    );
  } else {
    return (
      <>
        <div className="flex  gap-4 mt-5">
          {boxContetnt.map((Timer) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              key={Timer.id}
              className="flex flex-col justify-center items-center  bg-pink-500 px-4 py-2 text-xs text-white rounded-lg w-16 h-16"
            >
              <div className="text-lg">{Timer.value}</div>
              <div>{Timer.label}</div>
            </motion.div>
          ))}
        </div>
      </>
    );
  }
};
