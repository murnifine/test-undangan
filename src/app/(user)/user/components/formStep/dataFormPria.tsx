"use client"


import { usePathname } from "next/navigation";
import InputsDataForm from "../inputsDataForm"
import UploadPhotosMoments from "./uploadPhotosMoments"
import InputsEditDataForm from "../inputsEditDataForm";


export default function DataFormPria({ control, Controller, register }: { control: any, Controller: any, register: any }) {
  const pathname = usePathname()
  return (
    <div className="">
      <Controller
        name="nama_panggilan_pria"
        control={control}
        render={({ field }: { field: any }) => (
          {
            ...pathname.includes('/edit') ?
              <InputsEditDataForm label="Nama Inisial" configName={field} id={'inisial_pria'} />
              :
              <InputsDataForm label="Nama Inisial" configName={field} id={'inisial_pria'} />
          }

        )}
      />
      <Controller
        name="nama_pria"
        control={control}
        render={({ field }: { field: any }) => (
          {
            ...pathname.includes('/edit') ?
              <InputsEditDataForm label="Nama Lengkap" configName={field} />
              :
              <InputsDataForm label="Nama Lengkap" configName={field} />
          }
        )}
      />
      <Controller
        name="nama_ayah_pria"
        control={control}
        render={({ field }: { field: any }) => (
          {
            ...pathname.includes('/edit') ?
              <InputsEditDataForm label="Nama Ayah" configName={field} />
              :
              <InputsDataForm label="Nama Ayah" configName={field} />
          }
        )}
      />
      <Controller
        name="nama_ibu_pria"
        control={control}
        render={({ field }: { field: any }) => (
          {
            ...pathname.includes('/edit') ?
              <InputsEditDataForm label="Nama Ibu" configName={field} />
              :
              <InputsDataForm label="Nama Ibu" configName={field} />

          }

        )}
      />

      <Controller
        name="pria_fb"
        control={control}
        render={({ field }: { field: any }) => (
          {
            ...pathname.includes('/edit') ?
              <InputsEditDataForm label="Url Facebook" configName={field} />
              :
              <InputsDataForm label="Url Facebook" configName={field} />

          }

        )}
      />
      <Controller
        name="pria_ig"
        control={control}
        render={({ field }: { field: any }) => (
          {
            ...pathname.includes('/edit') ?
              <InputsEditDataForm label="Url Instagram" configName={field} />
              :
              <InputsDataForm label="Url Instagram" configName={field} />
          }

        )}
      />
      <Controller
        name="pria_tk"
        control={control}
        render={({ field }: { field: any }) => (
          {
            ...pathname.includes('/edit') ?
              <InputsEditDataForm label="Url Tiktok" configName={field} />
              :
              <InputsDataForm label="Url Tiktok" configName={field} />
          }


        )}
      />
    </div>
  );
}