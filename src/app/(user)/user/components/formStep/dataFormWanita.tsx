"use client"


import InputsDataForm from "../inputsDataForm"


export default function DataFormWanita({ control, Controller }: { control: any, Controller: any }) {

    return (
      <div className="">
        <Controller
          name="nama_panggilan_wanita"
          control={control}
          render={({ field }: { field: any }) => (
            <InputsDataForm label="Nama Panggilan Wanita" configName={field} />
          )}
        />
        <Controller
          name="nama_wanita"
          control={control}
          render={({ field }: { field: any }) => (
            <InputsDataForm label="Nama Wanita" configName={field} />
          )}
        />
        <Controller
          name="nama_ayah_wanita"
          control={control}
          render={({ field }: { field: any }) => (
            <InputsDataForm label="Nama Ayah" configName={field} />
          )}
        />
        <Controller
          name="nama_ibu_wanita"
          control={control}
          render={({ field }: { field: any }) => (
            <InputsDataForm label="Nama Ibu" configName={field} />
          )}
        />

        <Controller
          name="wanita_fb"
          control={control}
          render={({ field }: { field: any }) => (
            <InputsDataForm label="Url Facebook" configName={field} />
          )}
        />
        <Controller
          name="wanita_ig"
          control={control}
          render={({ field }: { field: any }) => (
            <InputsDataForm label="Url Instagram" configName={field} />
          )}
        />
        <Controller
          name="wanita_tk"
          control={control}
          render={({ field }: { field: any }) => (
            <InputsDataForm label="Url Tiktok" configName={field} />
          )}
        />
      </div>
    );
}