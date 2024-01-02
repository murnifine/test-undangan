"use client";

import { DateTimePicker } from "@mantine/dates";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import DataFormPria from "../components/formStep/dataFormPria";
import { useRef, useState } from "react";
import {
    Stepper,
    Button,
    Group,
    Image,
} from "@mantine/core";
import { useRouter } from "next/navigation";

import "@mantine/dates/styles.css";

import InputsDataForm from "../components/inputsDataForm";
import { updateProfile } from "@/actions/actions-profile";
import { Profile } from "@prisma/client";

export default function EditBank({ sessionId, dataValue }: { sessionId: string, dataValue: Profile }) {

    const router = useRouter();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setSelectedFile(file);
    };

    const [pending, setPending] = useState(false);

    const getParams = useSearchParams();

    const getTemplateId = getParams.get("templateId");

    const { handleSubmit, control, register } = useForm();

    const [active, setActive] = useState(0);
    const nextStep = () => {
        setActive((current) => (current < 0 ? current + 1 : current));
        selectedFile;
    };
    const prevStep = () =>
        setActive((current) => (current > 0 ? current - 1 : current));
    return (
        <form
            onSubmit={handleSubmit(async (data) => {




                // setSelectedFile(data.fotoMemplaiPria)
            })}
            className=" flex flex-col w-full max-w-xl shadow-lg p-10 h-max overflow-scroll bg-zinc-50 rounded-lg"
        >
            <Stepper size="sm" active={active} onStepClick={setActive} iconSize={20}>


                <Stepper.Step>
                    <div className="flex gap-5 flex-col">
                        <div className="flex flex-col gap-5">
                            <span className="text-xl font-semibold">Akad Nikah</span>
                            <div className="">
                                <Controller
                                    name="nama_bank"
                                    defaultValue={dataValue}
                                    control={control}
                                    render={({ field }: { field: any }) => (
                                        <InputsDataForm label="Alamat" configName={field} />
                                    )}
                                />
                                <Controller
                                    name="nomor_rekening"
                                    defaultValue={dataValue.url_akad_nikah}
                                    control={control}
                                    render={({ field }: { field: any }) => (
                                        <InputsDataForm label="Alamat Url" configName={field} />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </Stepper.Step>


            </Stepper>
            <div className="  bottom-8  w-full max-w-xl mt-5">
                <Group justify="between">
                    <div className="flex w-full justify-between items-center px-5">
                        {pending === true ? (
                            <>
                                <Button type="button" variant="default" disabled>
                                    Back
                                </Button>
                                <Button loading={pending} type="button" disabled>
                                    Loading
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button type="button" variant="default" onClick={prevStep}>
                                    Back
                                </Button>
                                {active === 0 && <Button type="submit">Save</Button>}
                            </>
                        )}
                        {active !== 0 && (
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
