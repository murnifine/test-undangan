"use client"


import { DateTimePicker } from "@mantine/dates";
import { useSearchParams } from 'next/navigation'
import { useForm, Controller } from "react-hook-form";
import DataFormPria from "../components/formStep/dataFormPria";
import { useRef, useState } from "react";
import { Stepper, Button, Group, FileInput, SimpleGrid, Image, Text } from "@mantine/core";
import DataFormWanita from "../components/formStep/dataFormWanita";
import { useRouter } from "next/navigation";

import "@mantine/dates/styles.css";

import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import InputsDataForm from "../components/inputsDataForm";
import { Profile } from "@prisma/client";
import { updateProfile } from "@/actions/actions-profile";

export default function EditFormMempelai({ sessionId, dataValue }: { sessionId: string, dataValue: Profile }) {
    const [files, setFiles] = useState<File[]>([]);
    const openRef = useRef<() => void>(null)

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
            <Image
                alt="Foto mempelai"
                key={index}
                src={imageUrl}
                onLoad={() => URL.revokeObjectURL(imageUrl)}
            />
        );
    });


    const router = useRouter();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setSelectedFile(file);
    };

    const [pending, setPending] = useState(false)


    const getParams = useSearchParams()

    const getTemplateId = getParams.get('templateId')


    const { handleSubmit, control, register } = useForm();

    const [active, setActive] = useState(0);
    const nextStep = () => {
        setActive((current) => (current < 1 ? current + 1 : current));
        selectedFile;
    };
    const prevStep = () =>
        setActive((current) => (current > 0 ? current - 1 : current));
    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                await updateProfile(dataValue.id, data)
            })}
            className=" flex flex-col w-full max-w-xl shadow-lg p-10 h-max overflow-scroll bg-zinc-50 rounded-lg"
        >
            <Stepper size="sm" active={active} onStepClick={setActive} iconSize={20}>
                <Stepper.Step>
                    <div className="flex flex-col gap-4">
                        <span className="text-xl font-semibold">Form Mempelai Pria</span>
                        <DataFormPria
                            dataValue={dataValue}
                            control={control}
                            Controller={Controller}
                        />
                    </div>
                </Stepper.Step>
                <Stepper.Step>
                    <div className="flex flex-col gap-4 ">
                        <span className="text-xl font-semibold">Form Mempelai Wanita</span>
                        <DataFormWanita dataValue={dataValue} control={control} Controller={Controller} register={register} />
                    </div>
                </Stepper.Step>

            </Stepper>
            <div className="  bottom-8  w-full max-w-xl mt-5">
                <Group justify="between">
                    <div className="flex w-full justify-between items-center px-5">
                        {
                            pending === true ?
                                <>
                                    <Button type="button" variant="default" disabled >
                                        Back
                                    </Button>
                                    <Button loading={pending} type="button" disabled>Loading</Button>
                                </>
                                :
                                <>
                                    <Button type="button" variant="default" onClick={prevStep}>
                                        Back
                                    </Button>
                                    {active === 1 && <Button type="submit">Save</Button>}
                                </>
                        }
                        {active !== 1 && (
                            <Button type="button" onClick={nextStep}>
                                Next step
                            </Button>
                        )}

                    </div>
                </Group>
            </div>
        </form>
    );
}