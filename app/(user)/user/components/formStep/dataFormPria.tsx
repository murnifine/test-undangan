"use client"


import InputsDataForm from "../inputsDataForm"


export default function DataFormPria({ control, Controller }: { control: any, Controller: any }) {

    return (
        <div className=''>
            <Controller
                name="namaPria"
                control={control}
                render={({ field }) => <InputsDataForm label="Nama Mempelai Pria" configName={field} />}
            />
            <Controller
                name="namaAyah"
                control={control}
                render={({ field }) => <InputsDataForm label="Nama Ayah" configName={field} />}
            />
            <Controller
                name="namaIbu"
                control={control}
                render={({ field }) => <InputsDataForm label="Nama Ibu" configName={field} />}
            />

            <Controller
                name="UrlFacebook"
                control={control}
                render={({ field }) => <InputsDataForm label="Url Facebook" configName={field} />}
            />
            <Controller
                name="UrlInstagram"
                control={control}
                render={({ field }) => <InputsDataForm label="Url Instagram" configName={field} />}
            />
            <Controller
                name="UrlTiktok"
                control={control}
                render={({ field }) => <InputsDataForm label="Url Tiktok" configName={field} />}
            />

        </div>
    )
}