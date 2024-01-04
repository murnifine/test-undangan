"use client";

import { DateTimePicker } from "@mantine/dates";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import DataFormPria from "../components/formStep/dataFormPria";
import { useRef, useState } from "react";
import {
    Accordion,
    Button,
} from "@mantine/core";
import { Notifications, notifications } from '@mantine/notifications';


import DataFormWanita from "../components/formStep/dataFormWanita";
import { useDisclosure } from '@mantine/hooks';
import "@mantine/dates/styles.css";
import MempelaiPria from "./core/mempelaiPria";
import InputsDataForm from "../components/inputsDataForm";
import MempelaiWanita from "./core/mempelaiWanita";
import axios from "axios";






export default function Index({ sessionId }: { sessionId: string }) {



    const router = useRouter();

    const [loading, isLoading] = useState(false);


    const getParams = useSearchParams();

    const getTemplateId = getParams.get("templateId");


    const { handleSubmit, control, register } = useForm();



    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                isLoading(true)



                const sendData = new FormData()
                for (const dataForm in data) {
                    sendData.append(dataForm, data[dataForm]);
                }
                if (getTemplateId) {
                    sendData.append("templateId", getTemplateId);
                }

                // sendData.set('dateTime_akad_nikah', new Date(
                //     sendData.get('dateTime_akad_nikah') as string
                // ).toString())
                // sendData.set('dateTime_resepsi', new Date(
                //     sendData.get('dateTime_resepsi') as string
                // ).toString())



                // sendData.slug = datas.nama_panggilan_pria + "-" + datas.nama_panggilan_wanita + '_(' + nanoid(6) + ')';


                const fetchData = await fetch('/api/profile', {
                    method: 'POST',
                    body: sendData
                })

                const respons = await fetchData.json();

                if (respons.message === "success") {
                    router.push(
                        `/user/create?profile_id=${respons.data.id}&type=add_bank`
                    );
                }

                if (respons.message === 'failed') {
                    notifications.show({
                        color: 'red',
                        title: 'Error',
                        message: 'Tidak Bisa menambahkan data',
                    })
                    isLoading(false)

                }


                // const sendData = new FormData()
                // for (const dataForm in data) {
                //     sendData.append(dataForm, data[dataForm]);
                // }
                // if (getTemplateId) {
                //     sendData.append("templateId", getTemplateId);
                // }
                // const kirimData = await fetch("/api/add-data-weddings", {
                //     method: "POST",
                //     body: sendData,
                // });
                // const response = await kirimData.json();
                // router.push("/user");


            })}
            className="flex flex-col md:max-w-2xl gap-4 w-full px-5 pb-10 h-full bg-white "
        >
            <Accordion variant="contained">
                <MempelaiPria control={control} />


                <Accordion.Item value="akadNikah">
                    <Accordion.Control>
                        Akad Nikah
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div className="flex flex-col gap-5">

                            <div className="">
                                <Controller
                                    name="alamat_akad_nikah"
                                    control={control}
                                    render={({ field }: { field: any }) => (
                                        <InputsDataForm label="Alamat" configName={field} />
                                    )}
                                />
                                <Controller
                                    name="url_akad_nikah"
                                    control={control}
                                    render={({ field }: { field: any }) => (
                                        <InputsDataForm label="Alamat Url" configName={field} />
                                    )}
                                />
                                <Controller
                                    name="dateTime_akad_nikah"
                                    control={control}
                                    defaultValue={new Date()}
                                    render={({ field }) => (
                                        <DateTimePicker
                                            dropdownType="modal"
                                            {...field}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="resepsi">
                    <Accordion.Control>
                        Resepsi
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div className="flex flex-col gap-5">
                            <div className="">
                                <Controller
                                    name="alamat_resepsi"
                                    control={control}
                                    render={({ field }: { field: any }) => (
                                        <InputsDataForm label="Alamat" configName={field} />
                                    )}
                                />
                                <Controller
                                    name="url_alamat_resepsi"
                                    control={control}
                                    render={({ field }: { field: any }) => (
                                        <InputsDataForm label="Alamat Url" configName={field} />
                                    )}
                                />
                                <Controller
                                    name="dateTime_resepsi"
                                    control={control}
                                    defaultValue={new Date()}
                                    render={({ field }) => (
                                        <DateTimePicker
                                            dropdownType="modal"
                                            {...field}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>

                <MempelaiWanita control={control} />



            </Accordion>
            <div className="flex justify-between pb-20">

                <Button type="button" color="red" onClick={() => router.back()}>
                    Batal
                </Button>
                {loading === true ?
                    <Button loading={loading} type="button" disabled>
                        Loading
                    </Button>
                    :
                    <Button type="submit">Next</Button>

                }

            </div>


        </form >
    );
}
