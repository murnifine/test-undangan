"use client"


import InputsDataForm from "../inputsDataForm"


export default function DataFormWanita({ control, Controller }: { control: any, Controller: any }) {

    return (
        <div className=''>
            <Controller
                name="namaWanita"
                control={control}
                render={({ field }) => <InputsDataForm label="Nama Mempelai Wanita" configName={field} />}
            />
            <Controller
                name="namaAyahWanita"
                control={control}
                render={({ field }) => <InputsDataForm label="Nama Ayah" configName={field} />}
            />
            <Controller
                name="namaIbuWanita"
                control={control}
                render={({ field }) => <InputsDataForm label="Nama Ibu" configName={field} />}
            />

            <Controller
                name="UrlFacebookWanita"
                control={control}
                render={({ field }) => <InputsDataForm label="Url Facebook" configName={field} />}
            />
            <Controller
                name="UrlInstagramWanita"
                control={control}
                render={({ field }) => <InputsDataForm label="Url Instagram" configName={field} />}
            />
            <Controller
                name="UrlTiktokWanita"
                control={control}
                render={({ field }) => <InputsDataForm label="Url Tiktok" configName={field} />}
            />

        </div>
    )
}