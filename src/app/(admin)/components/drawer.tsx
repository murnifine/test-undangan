"use client"

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Burger } from '@mantine/core';
import Link from 'next/link';

export default function DrawerDashboard() {
    const [opened, { open, close, toggle }] = useDisclosure(false);

    return (
        <>
            <Drawer opened={opened} onClose={close} title="Admin Panel">
                {/* Drawer content */}
                <ul>
                    <li>
                        <Link href={'/dashboard/templates'}>
                            Template
                        </Link>

                    </li>
                </ul>
            </Drawer>

            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
        </>
    );
}