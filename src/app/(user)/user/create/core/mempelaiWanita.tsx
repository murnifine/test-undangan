"use client"

import { Accordion } from '@mantine/core';
import DataFormPria from '../../components/formStep/dataFormPria';
import { useForm, Controller } from "react-hook-form";
import DataFormWanita from '../../components/formStep/dataFormWanita';

export default function MempelaiWanita({ control }: { control: any }) {
    return (
        <>
            <Accordion.Item value="formWanita">
                <Accordion.Control>
                    Form Mempelai Wanita
                </Accordion.Control>
                <Accordion.Panel>
                    <div className="flex flex-col gap-4">
                        <DataFormWanita
                            control={control}
                            Controller={Controller}
                        />
                    </div>
                </Accordion.Panel>
            </Accordion.Item>
        </>

    )
}