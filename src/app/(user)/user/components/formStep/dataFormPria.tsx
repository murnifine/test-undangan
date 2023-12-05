"use client"


import InputsDataForm from "../inputsDataForm"
import UploadPhotosMoments from "./uploadPhotosMoments"


export default function DataFormPria({ control, Controller, register }: { control: any, Controller: any, register: any }) {

    return (
        <div className=''>
            <Controller
                name="namaPria"
                control={control}
                render={({ field }) => <InputsDataForm label="Nama Mempelai Pria" configName={field} />}
            />
            <Controller
                name="namaAyahPria"
                control={control}
                render={({ field }) => <InputsDataForm label="Nama Ayah" configName={field} />}
            />
            <Controller
                name="namaIbuPria"
                control={control}
                render={({ field }) => <InputsDataForm label="Nama Ibu" configName={field} />}
            />

            <Controller
                name="UrlFacebookPria"
                control={control}
                render={({ field }) => <InputsDataForm label="Url Facebook" configName={field} />}
            />
            <Controller
                name="UrlInstagramPria"
                control={control}
                render={({ field }) => <InputsDataForm label="Url Instagram" configName={field} />}
            />
            <Controller
                name="UrlTiktokPria"
                control={control}
                render={({ field }) => <InputsDataForm label="Url Tiktok" configName={field} />}
            />
            <Controller
                name="UrlTiktokPria"
                control={control}
                render={({ field }) => <UploadPhotosMoments label="Url Tiktok" configName={field} />}
            />


        </div>
    )
}