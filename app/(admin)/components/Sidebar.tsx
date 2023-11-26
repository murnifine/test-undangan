"use client";
import { useState } from "react";
import { SegmentedControl, Text } from "@mantine/core";
import {
  IconShoppingCart,
  IconLicense,
  IconMessage2,
  IconBellRinging,
  IconMessages,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconUsers,
  IconFileAnalytics,
  IconDatabaseImport,
  IconReceipt2,
  IconReceiptRefund,
  IconLogout,
  IconSwitchHorizontal,
  IconUser,
  IconUserHexagon,
  IconTemplate,
  IconPhoto,
} from "@tabler/icons-react";
import classes from "./Sidebar.module.css";

const tabs = {
  account: [
    { link: "admin", label: "Admin", icon: IconUserHexagon },
    { link: "admin/user", label: "User", icon: IconUser },
    { link: "admin/template", label: "Template", icon: IconTemplate },
    { link: "admin/foto", label: "Foto", icon: IconPhoto },
    { link: "admin/ucapan", label: "Ucapan", icon: IconMessages },
  ],
  other: [
    { link: "", label: "Orders", icon: IconShoppingCart },
    { link: "", label: "Receipts", icon: IconLicense },
    { link: "", label: "Reviews", icon: IconMessage2 },
    { link: "", label: "Messages", icon: IconMessages },
    { link: "", label: "Customers", icon: IconUsers },
    { link: "", label: "Refunds", icon: IconReceiptRefund },
    { link: "", label: "Files", icon: IconFileAnalytics },
  ],
};

export function Sidebar() {
  const [section, setSection] = useState<"account" | "other">("account");
  const [active, setActive] = useState("Admin");

  const links = tabs[section].map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className="flex flex-col p-5 bg-slate-50 min-h-screen w-60">
      <div className="flex-none w-full">
        {/* <Text fw={500} size="sm" className={classes.title} c="dimmed" mb="xs">
          bgluesticker@mantine.dev
        </Text> */}

        <SegmentedControl
          value={section}
          onChange={(value: any) => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            { label: "Account", value: "account" },
            { label: "Other", value: "other" },
          ]}
        />
      </div>

      <div className="flex-1 mt-5">{links}</div>

      <div className="flex-none">
        {/* <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a> */}

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Keluar</span>
        </a>
      </div>
    </nav>
  );
}
