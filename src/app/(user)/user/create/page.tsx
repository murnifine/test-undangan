
"use client"

import { DateTimePicker } from "@mantine/dates";

import { AllDataUserProps } from "@/types/types";

import { useForm, Controller } from "react-hook-form"
import DataFormPria from "../components/formStep/dataFormPria";
import { useState } from 'react';
import { Stepper, Button, Group, FileInput } from '@mantine/core';
import DataFormWanita from "../components/formStep/dataFormWanita";
import UploadPhotosMoments from "../components/formStep/uploadPhotosMoments";
import FileUpload, { kirimFilePhotos } from "@/app/(admin)/admin/foto/[userId]/FileUpload";


import '@mantine/dates/styles.css';
export default function Page({ dataFormusers }: { dataFormusers: AllDataUserProps }) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setSelectedFile(file);
    };


    const name = dataFormusers?.user?.Profile
    const { handleSubmit, control, register } = useForm()

    const [active, setActive] = useState(0);
    const nextStep = () => {
        setActive((current) => (current < 3 ? current + 1 : current))
        selectedFile

    };
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));



    return (
        <div className="flex flex-col gap-5 justify-center items-center p-5  w-full h-screen bg-slate-200 ">

            <form onSubmit={handleSubmit((data) => {
                console.log(data.fotoMemplaiPria)
                setSelectedFile(data.fotoMemplaiPria)

            })} className=" flex flex-col w-full max-w-xl shadow-lg py-5 px-4 h-max overflow-scroll bg-slate-100 rounded-lg">

                <Stepper size="sm" active={active} onStepClick={setActive}
                    iconSize={20}
                >
                    <Stepper.Step >
                        <div className="flex flex-col gap-4">
                            <span className="text-xl font-semibold">Data Mempelai Pria</span>
                            <DataFormPria control={control} Controller={Controller} register={register} />
                            <input type="file" {...register("fotoMemplaiPria")} />





                        </div>
                    </Stepper.Step>
                    <Stepper.Step >
                        <div className="flex flex-col gap-4 ">
                            <span className="text-xl font-semibold">Data Mempelai Wanita</span>
                            <DataFormWanita control={control} Controller={Controller} />
                        </div>
                    </Stepper.Step>
                    <Stepper.Step >
                        <div className="flex gap-5 flex-col">
                            <div>
                                <span className="text-xl font-semibold">Akad Nikah</span>
                                <div className="">
                                    <Controller
                                        name="akadNikah"
                                        control={control}
                                        render={({ field }) => <DateTimePicker
                                            dropdownType="modal"
                                            defaultValue={new Date()}
                                            {...field}
                                        />}
                                    />
                                </div>
                            </div>
                            <div>

                                <span className="text-xl font-semibold">Resepsi</span>
                                <div className=" pb-5">
                                    <Controller
                                        name="resepsi"
                                        control={control}
                                        render={({ field }) => <DateTimePicker
                                            dropdownType="modal"
                                            // label="Pick date and time"
                                            // placeholder="Pick date and time"
                                            defaultValue={new Date()}
                                            {...field}
                                        />}
                                    />
                                </div>
                            </div>
                        </div>

                    </Stepper.Step>
                    <Stepper.Step >
                        <div className="flex flex-col gap-4">
                            <span className="text-xl font-semibold">Foto Moment</span>
                            {/* <input type="file" {...register("pictue")} /> */}
                            {/* <UploadPhotosMoments /> */}
                            {/* <FileUpload register={{ ...register }} /> */}
                            {/* <FileInput label="Upload files" placeholder="Upload files" multiple /> */}
                        </div>
                    </Stepper.Step>

                </Stepper>
                <div className="  bottom-8  w-full max-w-xl mt-5" >
                    <Group justify="between">
                        <div className="flex w-full justify-between items-center px-5">
                            <Button type="button" variant="default" onClick={prevStep}>Back</Button>
                            {active === 3 &&
                                <Button type="submit">Save</Button>
                            }
                            {active !== 3 && <Button type="button" onClick={nextStep}>Next step</Button>}

                        </div>
                    </Group>
                </div>
            </form>
        </div >
    );
}

