"use client"


import { usePathname } from "next/navigation";
import InputsDataForm from "../inputsDataForm"
import UploadPhotosMoments from "./uploadPhotosMoments"
import InputsEditDataForm from "../inputsEditDataForm";
import { Profile } from "@prisma/client";


export default function DataFormPria({ control, Controller, dataValue }: { control: any, Controller: any, dataValue?: Profile }) {
  const pathname = usePathname();

  // if (!dataValue) return

  return (
    <div className="">
      <Controller
        name="nama_panggilan_pria"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              label="Nama Inisial"
              dataValue={dataValue.nama_panggilan_pria}
              configName={field}
              id={"inisial_pria"}
            />
          ) : (
            <InputsDataForm
              label="Nama Inisial"
              configName={field}
              id={"inisial_pria"}
            />
          )),
        })}
      />
      <Controller
        name="nama_pria"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              dataValue={dataValue.nama_pria}
              label="Nama Lengkap"
              configName={field}
            />
          ) : (
            <InputsDataForm label="Nama Lengkap" configName={field} />
          )),
        })}
      />
      <Controller
        name="nama_ayah_pria"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              dataValue={dataValue.nama_ayah_pria}
              label="Nama Ayah"
              configName={field}
            />
          ) : (
            <InputsDataForm label="Nama Ayah" configName={field} />
          )),
        })}
      />
      <Controller
        name="nama_ibu_pria"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              dataValue={dataValue.nama_ibu_pria}
              label="Nama Ibu"
              configName={field}
            />
          ) : (
            <InputsDataForm label="Nama Ibu" configName={field} />
          )),
        })}
      />

      <Controller
        name="pria_fb"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              dataValue={dataValue.pria_fb}
              label="Url Facebook"
              configName={field}
            />
          ) : (
            <InputsDataForm label="Url Facebook" configName={field} />
          )),
        })}
      />
      <Controller
        name="pria_ig"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              dataValue={dataValue.pria_ig}
              label="Url Instagram"
              configName={field}
            />
          ) : (
            <InputsDataForm label="Url Instagram" configName={field} />
          )),
        })}
      />
      <Controller
        name="pria_tk"
        control={control}
        render={({ field }: { field: any }) => ({
          ...(pathname.includes("/edit") && dataValue ? (
            <InputsEditDataForm
              dataValue={dataValue.pria_tk}
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