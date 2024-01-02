"use client"

import { ProfileProps } from "@/types/types";
import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Text, Collapse, Box, CopyButton } from '@mantine/core';
import { CiGift } from "react-icons/ci";

export default function Gift({ profile }: { profile: ProfileProps }) {
    const [opened, { toggle }] = useDisclosure(false);
    return (
        <div
            // id="section2"
            data-aos="fade-up"
            className="flex flex-col  items-center w-full h-full z-40   bg-white/5 gap-10 border-2 border-white py-10 mt-20 px-5 rounded-xl shadow-md"
        >
            <span className=" font-Shadows text-3xl text-pink-700">Wedding Gift</span>
            <div className="flex flex-col items-center gap-5 text-xs">
                <span className=" text-center text-xs">
                    Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
                    Dan jika memberi adalah ungkapan tanda kasih Anda,
                    <p>
                        Anda dapat memberi kado secara cashless.
                    </p>
                </span>

                <Box maw={400} mx="auto">
                    <Group justify="center">
                        <button type="button" onClick={toggle}
                            className="flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-sky-600 text-white"
                        >
                            <CiGift size='1.5em' />
                            Klik di sini
                        </button>
                    </Group>

                    <Collapse in={opened} transitionDuration={300} transitionTimingFunction="linear">
                        <div className="flex flex-col gap-5 pt-10 pb-5 w-full">
                            {[1, 2, 3].map((bank) => (
                                <>
                                    <div className="flex flex-col px-10 py-4 gap-2 border border-slate-700 rounded-lg">
                                        <span className="font-semibold">Bank BNI</span>
                                        <div className="flex flex-col gap-1">
                                            <span>Atas nama :</span>
                                            <span className="font-semibold">Nasir</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span>No. Rek. :</span>
                                            <span className="font-semibold">0808080808</span>
                                        </div>
                                        <CopyButton value="https://mantine.dev">

                                            {({ copied, copy }) => (
                                                <button type="button" onClick={copy}
                                                    className={`py-2 px-4 text-white rounded-md  ${copied ? 'bg-teal-600' : 'bg-sky-700'}`} >
                                                    {copied ? 'Tersalin' : 'Salin No. Rek.'}
                                                </button>

                                            )}
                                        </CopyButton>

                                    </div>
                                </>
                            ))}

                        </div>
                    </Collapse>
                </Box>

            </div>

        </div>
    );
}

