"use client"


import { DateTimePicker } from "@mantine/dates";
import { useSearchParams } from 'next/navigation'
import { useForm, Controller } from "react-hook-form";
import DataFormPria from "../components/formStep/dataFormPria";
import { useRef, useState } from "react";
import { Stepper, Button, Group, FileInput } from "@mantine/core";
import DataFormWanita from "../components/formStep/dataFormWanita";
import { useRouter } from "next/navigation";

import "@mantine/dates/styles.css";
import { useFormStatus } from "react-dom";
import { space } from "postcss/lib/list";

export default function Default({ sessionId }: { sessionId: string }) {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
  };
  // const { pending } = useFormStatus()

  const [pending, setPending] = useState(false)
  // const handleButtonSubmit = useRef<HTMLFormElement>()


  const getParams = useSearchParams()

  const getTemplateId = getParams.get('templateId')
  // const limit: number = parseInt(getTemplateId as string)


  const { handleSubmit, control, register } = useForm();

  const [active, setActive] = useState(0);
  const nextStep = () => {
    setActive((current) => (current < 3 ? current + 1 : current));
    selectedFile;
  };
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        // console.log(data)
        setPending(true)
        const sendData = new FormData();
        for (const dataForm in data) {
          sendData.append(dataForm, data[dataForm]);
        }
        sendData.delete("url_foto_pria");
        sendData.append("url_foto_pria", data.url_foto_pria[0]);
        sendData.append("userId", sessionId);
        if (getTemplateId) {
          sendData.append("templateId", getTemplateId);
        }

        const kirimData = await fetch("/api/upload-photos", {
          method: "POST",
          body: sendData,
        });
        const response = await kirimData.json();

        router.push("/user");

        // setSelectedFile(data.fotoMemplaiPria)
      })}
      className=" flex flex-col w-full max-w-xl shadow-lg p-10 h-max overflow-scroll bg-zinc-50 rounded-lg"
    >
      <Stepper size="sm" active={active} onStepClick={setActive} iconSize={20}>
        <Stepper.Step>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold">Data Mempelai Pria</span>
            <DataFormPria
              control={control}
              Controller={Controller}
              register={register}
            />
            <input type="file" {...register("url_foto_pria")} />
          </div>
        </Stepper.Step>
        <Stepper.Step>
          <div className="flex flex-col gap-4 ">
            <span className="text-xl font-semibold">Data Mempelai Wanita</span>
            <DataFormWanita control={control} Controller={Controller} />
          </div>
        </Stepper.Step>
        <Stepper.Step>
          <div className="flex gap-5 flex-col">
            <div>
              <span className="text-xl font-semibold">Akad Nikah</span>
              <div className="">
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
            <div>
              <span className="text-xl font-semibold">Resepsi</span>
              <div className=" pb-5">
                <Controller
                  name="dateTime_resepsi"
                  control={control}
                  render={({ field }) => (
                    <DateTimePicker
                      dropdownType="modal"
                      // label="Pick date and time"
                      // placeholder="Pick date and time"
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
            <span className="text-xl font-semibold">Foto Moment</span>
            {/* <input type="file" {...register("pictue")} /> */}
            {/* <UploadPhotosMoments /> */}
            {/* <FileUpload register={{ ...register }} /> */}
            {/* <FileInput label="Upload files" placeholder="Upload files" multiple /> */}
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
                  {active === 3 && <Button type="submit">Save</Button>}
                </>
            }
            {active !== 3 && (
              <Button type="button" onClick={nextStep}>
                Next step
              </Button>
            )}

          </div>
          {/* <div className="flex w-full justify-between items-center px-5">
                        <Button variant="default" onClick={prevStep}>Back</Button>
                        <Button type="submit" onClick={nextStep}>Next step</Button>

                    </div> */}
        </Group>
      </div>
    </form>
  );
}