
import { useState } from 'react';
import { Text, Image, SimpleGrid, Button } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { useRef } from 'react';


export function FotoMoments({ control, Controller, register }: { control: any, Controller: any, register: any }) {
    const [files, setFiles] = useState<FileWithPath[]>([]);
    const openRef = useRef<() => void>(null)

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
    });

    return (
        <div>
            <Dropzone className='pt-5 pb-8' title='' accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
                <Button size="sm" radius="xl" onClick={() => openRef.current?.()}>
                    Pilih Foto
                </Button>
                {/* <Controller
                    name="url_foto"
                    control={control}
                    render={({ field }: { field: any }) => (
                        <input type="file" multiple />

                    )}
                /> */}
            </Dropzone>

            <SimpleGrid cols={{ base: 1, xs: 4 }} mt={previews.length > 0 ? 'xl' : 0}>
                {previews}
            </SimpleGrid>

        </div>

    );
}