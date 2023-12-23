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
    FileInput,
    SimpleGrid,
    Image,
    Text,
} from "@mantine/core";
import DataFormWanita from "../components/formStep/dataFormWanita";
import { useRouter } from "next/navigation";

import "@mantine/dates/styles.css";

import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import InputsDataForm from "../components/inputsDataForm";
import { updateProfile } from "@/actions/actions-profile";
import { Profile } from "@prisma/client";

export default function EditWaktu({ sessionId, dataValue }: { sessionId: string, dataValue: Profile }) {
    const [files, setFiles] = useState<File[]>([]);
    const openRef = useRef<() => void>(null);

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
            <Image
                alt="Foto"
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
                console.log(data)
                data.dateTime_akad_nikah = new Date(
                    data.dateTime_akad_nikah as string
                ).toISOString();

                data.dateTime_resepsi = new Date(
                    data.dateTime_resepsi as string
                ).toISOString();

                await updateProfile(dataValue.id, data)



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
                                    name="alamat_akad_nikah"
                                    defaultValue={dataValue.alamat_akad_nikah}
                                    control={control}
                                    render={({ field }: { field: any }) => (
                                        <InputsDataForm label="Alamat" configName={field} />
                                    )}
                                />
                                <Controller
                                    name="url_akad_nikah"
                                    defaultValue={dataValue.url_akad_nikah}
                                    control={control}
                                    render={({ field }: { field: any }) => (
                                        <InputsDataForm label="Alamat Url" configName={field} />
                                    )}
                                />
                                <Controller
                                    name="dateTime_akad_nikah"
                                    defaultValue={dataValue.dateTime_akad_nikah}
                                    control={control}
                                    render={({ field }) => (
                                        <DateTimePicker
                                            dropdownType="modal"
                                            defaultValue={new Date()}
                                            {...field}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <span className="text-xl font-semibold">Resepsi</span>
                            <div className="">
                                <Controller
                                    name="alamat_resepsi"
                                    defaultValue={dataValue.alamat_resepsi}
                                    control={control}
                                    render={({ field }: { field: any }) => (
                                        <InputsDataForm label="Alamat" configName={field} />
                                    )}
                                />
                                <Controller
                                    name="url_alamat_resepsi"
                                    defaultValue={dataValue.url_alamat_resepsi}
                                    control={control}
                                    render={({ field }: { field: any }) => (
                                        <InputsDataForm label="Alamat Url" configName={field} />
                                    )}
                                />
                                <Controller
                                    name="dateTime_resepsi"
                                    defaultValue={dataValue.dateTime_resepsi}
                                    control={control}
                                    render={({ field }) => (
                                        <DateTimePicker
                                            dropdownType="modal"
                                            defaultValue={new Date()}
                                            {...field}
                                        />
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
