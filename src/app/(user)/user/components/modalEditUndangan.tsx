"use client"

import { Button, Modal } from "@mantine/core";
import { IconEdit, IconPlus } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks';
import { MotionDiv } from "@/components/MotionDiv";
import Link from "next/link";
import { GiBigDiamondRing } from "react-icons/gi";
import { BsCake2 } from "react-icons/bs";
import { PiFlowerTulipThin } from "react-icons/pi";
import { IoCutOutline } from "react-icons/io5";
import { Profile } from "@prisma/client";
export default function ModalEditUndangan({
  opened,
  open,
  close,
  profile,
}: {
  opened: boolean;
  open: any;
  close: any;
  profile: Profile;
}) {
  return (
    <div className="">
      <Modal opened={opened} onClose={close} title="Edit" centered>
        {/* Modal content */}
        <Link
          href={`/user/edit?profileId=${profile.id}&type=dataMempelai`}
          className={` flex gap-2 items-center hover:bg-slate-100 p-2`}
        >
          <GiBigDiamondRing size="1.5em" color="red" />
          <span className="text-sm font-semibold">Edit Form Mempelai</span>
        </Link>
        <Link
          href={`/user/edit?profileId=${profile.id}&type=waktu`}
          className={` flex gap-2 items-center hover:bg-slate-100 p-2`}
        >
          <BsCake2 size="1.5em" color="red" />
          <span className="text-sm font-semibold">Edit Tanggal</span>
        </Link>
        <Link
          href={`/user/edit?profileId=${profile.id}&type=foto-moments`}
          className={` flex gap-2 items-center hover:bg-slate-100 p-2`}
        >
          <BsCake2 size="1.5em" color="red" />
          <span className="text-sm font-semibold">Edit Foto Moment</span>
        </Link>
        <Link
          href="#"
          className={` flex gap-2 items-center hover:bg-slate-100 p-2`}
        >
          <BsCake2 size="1.5em" color="red" />
          <span className="text-sm font-semibold">Edit Foto Mempelai</span>
        </Link>
        <Link
          href="#"
          className={` flex gap-2 items-center hover:bg-slate-100 p-2`}
        >
          <BsCake2 size="1.5em" color="red" />
          <span className="text-sm font-semibold">Edit Foto Cover</span>
        </Link>
        <Link
          href={`/user/edit?profileId=${profile.id}&type=bank`}
          className={` flex gap-2 items-center hover:bg-slate-100 p-2`}
        >
          <BsCake2 size="1.5em" color="red" />
          <span className="text-sm font-semibold">Edit Rekening Bank</span>
        </Link>
      </Modal>

      {/* <button className=" w-full flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded-sm" onClick={open} >
                <IconEdit size='0.9em' />
                <span className="text-sm">
                    Edit
                </span>
            </button> */}
    </div>
  );
}