"use client";

import { DateTimePicker } from "@mantine/dates";
import { useRouter, useSearchParams } from "next/navigation";
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

import "@mantine/dates/styles.css";

import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import InputsDataForm from "../components/inputsDataForm";

export default function Default({ sessionId }: { sessionId: string }) {
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
    setActive((current) => (current < 4 ? current + 1 : current));
    selectedFile;
  };
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        setPending(true);
        const sendData = new FormData();
        for (const dataForm in data) {
          sendData.append(dataForm, data[dataForm]);
        }
        sendData.delete("url_foto_pria");
        sendData.append("url_foto_pria", data.url_foto_pria[0]);

        sendData.delete("url_foto_wanita");
        sendData.append("url_foto_wanita", data.url_foto_wanita[0]);

        sendData.delete("url_foto_utama");
        sendData.append("url_foto_utama", data.url_foto_utama[0]);

        sendData.append("userId", sessionId);

        if (getTemplateId) {
          sendData.append("templateId", getTemplateId);
        }
        files.forEach((file, index) => {
          sendData.append(`fotoMoments[${index}]`, file);
        });

        const kirimData = await fetch("/api/upload-photos", {
          method: "POST",
          body: sendData,
        });
        const response = await kirimData.json();

        router.push("/user");

        // setSelectedFile(data.fotoMemplaiPria)
      })}
      className="relative flex flex-col w-full max-w-xl py-10 shadow-lg p-5 h-full  "
    >
      <Stepper size="sm" active={active} onStepClick={setActive} iconSize={20}>
        <Stepper.Step>
          <div className="flex flex-col gap-4">
            <span className="fixed md:absolute top-16 px-5 text-white py-2 left-0 text-lg font-semibold z-20 w-full bg-sky-700">
              Form Mempelai Pria
            </span>
            <DataFormPria
              control={control}
              Controller={Controller}
            />
            <input type="file" {...register("url_foto_pria")} />
          </div>
        </Stepper.Step>
        <Stepper.Step>
          <div className="flex flex-col gap-4 ">
            <span className="fixed md:absolute top-16 px-5 text-white py-2 left-0 text-lg font-semibold z-20 w-full bg-sky-700">
              Form Mempelai Wanita
            </span>

            <DataFormWanita control={control} Controller={Controller} />
            <input type="file" {...register("url_foto_wanita")} />
          </div>
        </Stepper.Step>
        <Stepper.Step>
          <div className="flex gap-5 flex-col">
            <div className="flex flex-col gap-5">
              <span className="text-xl font-semibold">
                Akad Nikah
              </span>
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
        <Stepper.Step>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold">Cover Foto</span>
            <input type="file" {...register("url_foto_utama")} />
          </div>
        </Stepper.Step>
        <Stepper.Step>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold">Foto Moment</span>
            <Dropzone
              className="pt-5 pb-8"
              accept={IMAGE_MIME_TYPE}
              onDrop={(fotoMoment) => {
                setFiles(fotoMoment);
                console.log(fotoMoment);
              }}
            >
              <Text ta="center">Drop images here</Text>
            </Dropzone>
            <SimpleGrid
              cols={{ base: 1, xs: 4 }}
              mt={previews.length > 0 ? "xl" : 0}
            >
              {previews}
            </SimpleGrid>
          </div>
        </Stepper.Step>
      </Stepper>
      <div className="  w-full max-w-xl mt-5">
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
                {active == 0 ? (
                  <Button type="button" color="red" onClick={() => router.back()}>
                    Batal
                  </Button>
                )
                  :
                  (
                    <Button type="button" variant="default" onClick={prevStep}>
                      Back
                    </Button>
                  )
                }

                {active === 4 && <Button type="submit">Save</Button>}
              </>
            )}
            {active !== 4 && (
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
