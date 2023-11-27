"use client";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useCallback, useRef, useState } from "react";
import FilePondPluginImageEdit from "filepond-plugin-image-edit";

import "filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css";
import { Button } from "@mantine/core";
// import { uploadGambar } from "@/lib/actions";
import { FilePondFile, FilePondInitialFile } from "filepond";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageEdit
);

export default function FileUpload({ userId }: { userId: string }) {
  const [files, setFiles] = useState<(string | Blob | FilePondInitialFile)[]>(
    []
  );

  const pond = useRef<FilePond>(null);

  const handleFileChange = useCallback((fileItems: FilePondFile[]) => {
    const newFiles: (string | Blob | FilePondInitialFile)[] = [];
    fileItems.forEach((fileItem) => {
      newFiles.push(fileItem.source);
    });

    setFiles(newFiles);
  }, []);

  const kirim = async () => {
    // const formData = new FormData();
    // console.log("pond", pond);

    if (pond.current) {
      pond.current.processFiles();
    }

    // console.log(files);
    // await uploadGambar(files, params.userId);
  };

  return (
    <>
      <FilePond
        ref={pond}
        instantUpload={false}
        files={files}
        onupdatefiles={handleFileChange}
        allowMultiple={true}
        maxFiles={3}
        acceptedFileTypes={["image/*"]}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        server={{
          process: async (
            fieldName,
            file,
            metadata,
            load,
            error,
            progress,
            abort
          ) => {
            // fieldName is the name of the input field
            // file is the actual file object to send
            const formData = new FormData();
            // formData.append("filename", file.name);
            formData.append("userId", userId);
            formData.append(fieldName, file, file.name);

            const request = new XMLHttpRequest();
            request.open("POST", `/api/upload`);

            // Should call the progress method to update the progress to 100% before calling load
            // Setting computable to false switches the loading indicator to infinite mode
            request.upload.onprogress = (e) => {
              progress(e.lengthComputable, e.loaded, e.total);
            };

            // Should call the load method when done and pass the returned server file id
            // this server file id is then used later on when reverting or restoring a file
            // so your server knows which file to return without exposing that info to the client
            request.onload = function () {
              if (request.status >= 200 && request.status < 300) {
                // the load method accepts either a string (id) or an object
                load(request.responseText);
              } else {
                // Can call the error method if something is wrong, should exit after
                error("oh no");
              }
            };

            // CARA 1 : send sebagai FormData
            request.send(formData);

            // CARA 2 : send sebagai File ke server menjadi ReadableStream
            // request.send(file);

            // Should expose an abort method so the request can be cancelled
            return {
              abort: () => {
                // This function is entered if the user has tapped the cancel button
                request.abort();

                // Let FilePond know the request has been cancelled
                abort();
              },
            };
          },
        }}
      />
      <Button onClick={kirim}>Upload Gambar</Button>
    </>
  );
}
