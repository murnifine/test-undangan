
"use client"

import { DateTimePicker } from "@mantine/dates";

import { AllDataUserProps } from "@/types/types";

import { useForm, Controller } from "react-hook-form"
import DataFormPria from "../components/formStep/dataFormPria";
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';



export default function Page({ dataFormusers }: { dataFormusers: AllDataUserProps }) {

    const name = dataFormusers?.user?.Profile
    const { handleSubmit, control } = useForm()

    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <div className="flex flex-col gap-5 justify-center items-center p-5 w-full h-screen bg-white ">
            <span className="text-xl font-semibold">Data Mempelai Pria</span>
            <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })} className="flex flex-col w-full shadow-lg py-10 px-4 bg-slate-200 rounded-lg">


                <Stepper size="sm" active={active} onStepClick={setActive}
                    iconSize={20}
                >
                    <Stepper.Step >
                        <DataFormPria control={control} Controller={Controller} />
                    </Stepper.Step>
                    <Stepper.Step >
                        <DataFormPria control={control} Controller={Controller} />
                    </Stepper.Step>
                    <Stepper.Step >
                        <DataFormPria control={control} Controller={Controller} />
                    </Stepper.Step>
                    <Stepper.Step >
                        <DataFormPria control={control} Controller={Controller} />
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



                {/* <Controller
                    name="date"
                    control={control}
                    render={({ field }) => <DateTimePicker
                        clearable
                        defaultValue={new Date()}
                        label="Pick date and time"
                        placeholder="Pick date and time"
                        {...field}

                    />}


                /> */}



            </form>
        </div>
    );
}

