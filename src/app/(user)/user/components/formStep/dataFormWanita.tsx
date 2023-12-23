"use client"


import { usePathname } from "next/navigation";
import InputsDataForm from "../inputsDataForm"
import UploadPhotosMoments from "./uploadPhotosMoments"
import InputsEditDataForm from "../inputsEditDataForm";
import { Profile } from "@prisma/client";


export default function DataFormWanita({ control, Controller, register, dataValue }: { control: any, Controller: any, register?: any, dataValue?: Profile }) {
  const pathname = usePathname()

  return (
    <div className="">
      <Controller
        name="nama_panggilan_wanita"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              label="Nama Inisial"
              dataValue={dataValue.nama_panggilan_wanita}
              configName={field}
              id={"inisial_wanita"}
            />
          ) : (
            <InputsDataForm
              label="Nama Inisial"
              configName={field}
              id={"inisial_wanita"}
            />
          )),
        })}
      />
      <Controller
        name="nama_wanita"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              dataValue={dataValue.nama_wanita}
              label="Nama Lengkap"
              configName={field}
            />
          ) : (
            <InputsDataForm label="Nama Lengkap" configName={field} />
          )),
        })}
      />
      <Controller
        name="nama_ayah_wanita"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              dataValue={dataValue.nama_ayah_wanita}
              label="Nama Ayah"
              configName={field}
            />
          ) : (
            <InputsDataForm label="Nama Ayah" configName={field} />
          )),
        })}
      />
      <Controller
        name="nama_ibu_wanita"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              dataValue={dataValue.nama_ibu_wanita}
              label="Nama Ibu"
              configName={field}
            />
          ) : (
            <InputsDataForm label="Nama Ibu" configName={field} />
          )),
        })}
      />

      <Controller
        name="wanita_fb"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              dataValue={dataValue.wanita_fb}
              label="Url Facebook"
              configName={field}
            />
          ) : (
            <InputsDataForm label="Url Facebook" configName={field} />
          )),
        })}
      />
      <Controller
        name="wanita_ig"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              dataValue={dataValue.wanita_ig}
              label="Url Instagram"
              configName={field}
            />
          ) : (
            <InputsDataForm label="Url Instagram" configName={field} />
          )),
        })}
      />
      <Controller
        name="wanita_tk"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              dataValue={dataValue.wanita_tk}
              label="Url Tiktok"
              configName={field}
            />
          ) : (
            <InputsDataForm label="Url Tiktok" configName={field} />
          )),
        })}
      />
    </div>
  );
}