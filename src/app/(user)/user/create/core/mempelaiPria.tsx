"use client"

import { Accordion } from '@mantine/core';
import DataFormPria from '../../components/formStep/dataFormPria';
import { useForm, Controller } from "react-hook-form";

export default function MempelaiPria({ control }: { control: any }) {
    return (
        <>
            <Accordion.Item value="formPria">
                <Accordion.Control>
                    Form Mempelai Pria
                </Accordion.Control>
                <Accordion.Panel>
                    <div className="flex flex-col gap-4">
                        <DataFormPria
                            control={control}
                            Controller={Controller}
                        />
                    </div>
                </Accordion.Panel>
            </Accordion.Item>
        </>

    )
}