import { Text, Image, SimpleGrid } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from "@mantine/dropzone";
import { useState } from "react";

export default function InputDropzone({
  label,
  imgFiles,
  setImgFiles,
  name,
  isMultiple = false,
}: {
  label: string;
  imgFiles: File[];
  setImgFiles: any;
  name: string;
  isMultiple?: boolean;
}) {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        alt="foto"
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    );
  });

  return (
    <div className=" p-2  rounded-sm max-w-md  bg-slate-100 ">
      <Dropzone
        multiple={isMultiple}
        accept={IMAGE_MIME_TYPE}
        onDrop={(imgfiles) => {
          setFiles(imgfiles);
          if (isMultiple) {
            setImgFiles(imgfiles);
          } else {
            setImgFiles([...imgFiles, { name, file: imgfiles[0] }]);
          }
        }}
      >
        <Text ta="center">{label}</Text>
      </Dropzone>

      <SimpleGrid cols={{ base: 1 }} mt={previews.length > 0 ? "xl" : 0}>
        {previews}
      </SimpleGrid>
    </div>
  );
}
