
"use client"

import { DateTimePicker } from "@mantine/dates";

import { AllDataUserProps } from "@/types/types";

import { useForm, Controller } from "react-hook-form"
import DataFormPria from "../components/formStep/dataFormPria";
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import DataFormWanita from "../components/formStep/dataFormWanita";
import UploadPhotosMoments from "../components/formStep/uploadPhotosMoments";
import FileUpload from "@/app/(admin)/admin/foto/[userId]/FileUpload";



export default function Page({ dataFormusers }: { dataFormusers: AllDataUserProps }) {

    const name = dataFormusers?.user?.Profile
    const { handleSubmit, control, register } = useForm()

    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <div className="flex flex-col gap-5 justify-center items-center p-5 w-full h-screen bg-slate-200 ">

            <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })} className="flex flex-col w-full shadow-lg py-10 px-4 bg-slate-100 rounded-lg">


                <Stepper size="sm" active={active} onStepClick={setActive}
                    iconSize={20}
                >
                    <Stepper.Step >
                        <div className="flex flex-col gap-4">
                            <span className="text-xl font-semibold">Data Mempelai Pria</span>
                            <DataFormPria control={control} Controller={Controller} />
                        </div>
                    </Stepper.Step>
                    <Stepper.Step >
                        <div className="flex flex-col gap-4">
                            <span className="text-xl font-semibold">Data Mempelai Wanita</span>
                            <DataFormWanita control={control} Controller={Controller} register={register} />
                        </div>
                    </Stepper.Step>
                    <Stepper.Step >
                        <div className="flex flex-col gap-4">
                            <span className="text-xl font-semibold">Waktu</span>
                            <Controller
                                name="akadNikah"
                                control={control}
                                render={({ field }) => <DateTimePicker
                                    clearable
                                    defaultValue={new Date()}
                                    label="Akad Nikah"
                                    placeholder="Akad Nikah"
                                    {...field}

                                />}


                            />
                        </div>
                    </Stepper.Step>
                    <Stepper.Step >
                        <div className="flex flex-col gap-4">
                            <span className="text-xl font-semibold">Foto Moment</span>
                            {/* <input type="file" {...register("pictue")} /> */}
                            {/* <UploadPhotosMoments /> */}
                            {/* <FileUpload /> */}
                        </div>
                    </Stepper.Step>





                    <Stepper.Completed>
                        <button type="submit"
                            className="w-full bg-sky-200 py-2">
                            kirim
                        </button>
                    </Stepper.Completed>
                </Stepper>

                <Group justify="center" mt="xl">
                    <Button variant="default" onClick={prevStep}>Back</Button>
                    <Button onClick={nextStep}>Next step</Button>
                </Group>







            </form>
        </div>
    );
}

