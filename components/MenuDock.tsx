"use client";
import {
  IconCalendar,
  IconForms,
  IconHeartBolt,
  IconHome,
  IconNote,
  IconPhoto,
} from "@tabler/icons-react";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef } from "react";
import { Link } from "react-scroll";

export default function MenuDock() {
  let mouseX = useMotionValue(Infinity);

  const menus = [
    {
      icon: <IconHeartBolt color="white" />,
      link: "section1",
    },
    {
      icon: <IconHome color="white" />,
      link: "section2",
    },
    {
      icon: <IconCalendar color="white" />,
      link: "section3",
    },
    {
      icon: <IconPhoto color="white" />,
      link: "section4",
    },
    {
      icon: <IconForms color="white" />,
      link: "section6",
    },
    {
      icon: <IconNote color="white" />,
      link: "section7",
    },
  ];

  return (
    <div className="fixed z-40 bottom-3 right-0  flex w-full gap-3 justify-center items-center">
      <motion.div
        // onMouseMove={(e) => mouseX.set(e.pageX)}
        // onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-16 items-end gap-2 rounded-2xl bg-white shadow-md px-4 pb-3"
      >
        {menus.map((menu) => (
          <AppIcon mouseX={mouseX} menu={menu} key={menu.link} />
        ))}
      </motion.div>
    </div>
  );
}

function AppIcon({ mouseX, menu }: { mouseX: MotionValue; menu: any }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link
      activeClass="active"
      to={menu.link}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="cursor-pointer"
    >
      <motion.div
        ref={ref}
        style={{ width }}
        className="aspect-square w-7 rounded-full bg-gray-400 hover:bg-gray-600 flex justify-center items-center"
      >
        <i className="">{menu.icon}</i>
      </motion.div>
    </Link>
  );
}
