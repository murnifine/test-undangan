"use client"


import InputsDataForm from "../inputsDataForm"
import UploadPhotosMoments from "./uploadPhotosMoments"


export default function DataFormPria({ control, Controller, register }: { control: any, Controller: any, register: any }) {

  return (
    <div className="">
      <Controller
        name="nama_panggilan_pria"
        control={control}
        render={({ field }: { field: any }) => (
          <InputsDataForm label="Nama Inisial" configName={field} id={'inisial_pria'} />
        )}
      />
      <Controller
        name="nama_pria"
        control={control}
        render={({ field }: { field: any }) => (
          <InputsDataForm label="Nama Lengkap" configName={field} />
        )}
      />
      <Controller
        name="nama_ayah_pria"
        control={control}
        render={({ field }: { field: any }) => (
          <InputsDataForm label="Nama Ayah" configName={field} />
        )}
      />
      <Controller
        name="nama_ibu_pria"
        control={control}
        render={({ field }: { field: any }) => (
          <InputsDataForm label="Nama Ibu" configName={field} />
        )}
      />

      <Controller
        name="pria_fb"
        control={control}
        render={({ field }: { field: any }) => (
          <InputsDataForm label="Url Facebook" configName={field} />
        )}
      />
      <Controller
        name="pria_ig"
        control={control}
        render={({ field }: { field: any }) => (
          <InputsDataForm label="Url Instagram" configName={field} />
        )}
      />
      <Controller
        name="pria_tk"
        control={control}
        render={({ field }: { field: any }) => (
          <InputsDataForm label="Url Tiktok" configName={field} />
        )}
      />
    </div>
  );
}