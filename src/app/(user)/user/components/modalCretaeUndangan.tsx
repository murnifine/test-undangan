"use client"

import { Button, Modal } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks';
import { MotionDiv } from "@/components/MotionDiv";
import Link from "next/link";
import { GiBigDiamondRing } from "react-icons/gi";
import { BsCake2 } from "react-icons/bs";
import { PiFlowerTulipThin } from "react-icons/pi";
import { IoCutOutline } from "react-icons/io5";
export default function ModalCretaeUndangan() {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div className=''>
            <Modal opened={opened} onClose={close} title="Create" centered>
                {/* Modal content */}
                <Link href="/template/undangan-pernikahan" className={` flex gap-2 items-center hover:bg-slate-100 p-2`}>
                    <GiBigDiamondRing size="1.5em" color="red" />
                    <span className="text-sm font-semibold">Undangan Pernikahan</span>
                </Link>
                <Link href="/template/undangan-ulang-tahun" className={` flex gap-2 items-center hover:bg-slate-100 p-2`}>
                    <BsCake2 size="1.5em" color="red" />
                    <span className="text-sm font-semibold">Undangan Ulang Tahun</span>
                </Link>
                <Link href="/template/undangan-pingitan" className={` flex gap-2 items-center hover:bg-slate-100 p-2`}>
                    <PiFlowerTulipThin size="1.5em" color="red" />
                    <span className="text-sm font-semibold">Undangan Pingitan</span>
                </Link>
                <Link href="/template/undangan-aqiqah" className={` flex gap-2 items-center hover:bg-slate-100 p-2`}>
                    <IoCutOutline size="1.5em" color="red" />
                    <span className="text-sm font-semibold">Undangan Aqiqah</span>
                </Link>

            </Modal>

            <div className="fixed bottom-5 left-0 w-full  flex justify-center">
                <MotionDiv whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button size="md" color="indigo" onClick={open} >
                        <IconPlus size={30} />
                    </Button>
                </MotionDiv>
            </div>
        </div>
    )
}