// "use client";

// // Import React FilePond
// import { FilePond, registerPlugin } from "react-filepond";

// // Import FilePond styles
// import "filepond/dist/filepond.min.css";

// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// import { useCallback, useRef, useState } from "react";

// // Import the plugin code
// import FilePondPluginImageEdit from "filepond-plugin-image-edit";

// // Import the plugin styles
// import "filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css";
// import { Button } from "@mantine/core";
// import { uploadGambar } from "@/lib/actions";
// import { ActualFileObject, FilePondFile, FilePondInitialFile, FilePond as FilePondInit } from "filepond";
// import { PutBlobResult } from "@vercel/blob";

// registerPlugin(
//   FilePondPluginImageExifOrientation,
//   FilePondPluginImagePreview,
//   FilePondPluginImageEdit
// );

// export default function Page({ params }: { params: { userId: string } }) {
//   // const [files, setFiles] = useState<(string | Blob | FilePondInitialFile)[]>(
//   //   []
//   // );

//   // const handleFileChange = (fileItems: FilePondFile[]) => {
//   //   fileItems.forEach((fileItem) => {
//   //     console.log(fileItem.file);
//   //     setFiles([fileItem.file]);
//   //     // setFiles((prev) => [...prev, fileItem.file]);
//   //   });
//   // };

//   const [files, setFiles] = useState<(string | Blob | FilePondInitialFile)[]>(
//     []
//   );
//   const [loading,setLoading] = useState(false);

//   const handleFileChange = useCallback((fileItems: FilePondFile[]) => {
//     const newFiles: (string | Blob | FilePondInitialFile)[] = [];

//     fileItems.forEach((fileItem) => {
//       newFiles.push(fileItem.source);
//     });

//     setFiles(newFiles);
//   }, []);

//   const kirim = async () => {
//     console.log(files);
//     await uploadGambar(files, params.userId);
//   };

//   FilePond.setOptions({
//     server:{
//         url: 'http://192.168.0.100',
//         process: './process',
//         revert: './revert',
//         restore: './restore/',
//         load: './load/',
//         fetch: './fetch/'
//     });

//   return (
//     <div className="flex flex-1 justify-center items-center">
//       <form
//         action={async () => {
//           // await uploadGambar(formData, params.userId);
//           // console.log(typeof files, typeof formData);
//           await uploadGambar(files, params.userId);

//           console.log(files);
//         }}
//         className="w-full"
//       >
//         <FilePond

//           files={files}
//           onupdatefiles={handleFileChange}
//           allowMultiple={true}
//           maxFiles={3}

//         // allowReorder={true}
//         // onaddfilestart={()=> setLoading(true)}
//         // onaddfile={()=> setLoading(false)}

//           // server="/api/avatar/upload"
//           // server={{
//           //   // url: "/api/avatar/upload",
//           //   //   process: async (
//           //   //     fieldName,
//           //   //     file,
//           //   //     metadata,
//           //   //     load,
//           //   //     error,
//           //   //     progress,
//           //   //     abort
//           //   //   ) => {
//           //   //     const response = await fetch(
//           //   //       `/api/avatar/upload?filename=${file.name}`,
//           //   //       {
//           //   //         method: "POST",
//           //   //         body: file,
//           //   //       }
//           //   //     );

//           //   //     const newBlob = (await response.json()) as PutBlobResult;

//           //   //     console.log({ fieldName, file, metadata, load, error, progress });

//           //   //     console.log(newBlob);
//           //   //   },
//           //   // }}
//           //   // ===============================================
//           //   // process: async (
//           //   //   fieldName,
//           //   //   file,
//           //   //   metadata,
//           //   //   load,
//           //   //   error,
//           //   //   progress,
//           //   //   abort
//           //   // ) => {
//           //   //   // fieldName is the name of the input field
//           //   //   // file is the actual file object to send
//           //   //   const formData = new FormData();
//           //   //   formData.append("filename", file.name);
//           //   //   formData.append(fieldName, file, file.name);

//           //   //   const request = new XMLHttpRequest();
//           //   //   request.open("POST", `/api/upload`);

//           //   //   // Should call the progress method to update the progress to 100% before calling load
//           //   //   // Setting computable to false switches the loading indicator to infinite mode
//           //   //   request.upload.onprogress = (e) => {
//           //   //     progress(e.lengthComputable, e.loaded, e.total);
//           //   //   };

//           //   //   // Should call the load method when done and pass the returned server file id
//           //   //   // this server file id is then used later on when reverting or restoring a file
//           //   //   // so your server knows which file to return without exposing that info to the client
//           //   //   request.onload = function () {
//           //   //     if (request.status >= 200 && request.status < 300) {
//           //   //       // the load method accepts either a string (id) or an object
//           //   //       load(request.responseText);
//           //   //     } else {
//           //   //       // Can call the error method if something is wrong, should exit after
//           //   //       error("oh no");
//           //   //     }
//           //   //   };

//           //   //   // CARA 1 : send sebagai FormData
//           //   //   // request.send(formData);

//           //   //   // CARA 2 : send sebagai File ke server menjadi ReadableStream
//           //   //   request.send(file);

//           //   //   // Should expose an abort method so the request can be cancelled
//           //   //   return {
//           //   //     abort: () => {
//           //   //       // This function is entered if the user has tapped the cancel button
//           //   //       request.abort();

//           //   //       // Let FilePond know the request has been cancelled
//           //   //       abort();
//           //   //     },
//           //   //   };
//           //   // },
//           //   // ================================
//           //   remove: (source, load, error) => {
//           //     // Should somehow send `source` to server so server can remove the file with this source
//           //     console.log({ source });

//           //     // Can call the error method if something is wrong, should exit after
//           //     // error('oh my goodness');

//           //     // Should call the load method when done, no parameters required
//           //     load();
//           //   },
//           //   process: (
//           //     fieldName,
//           //     file,
//           //     metadata,
//           //     load,
//           //     error,
//           //     progress,
//           //     abort
//           //   ) => {
//           //     const formData = new FormData();
//           //     formData.append(fieldName, file, file.name);

//           //     const response = fetch(`/api/upload`, {
//           //       method: "POST",
//           //       body: formData,
//           //     });

//           //     response
//           //       .then((res) => {
//           //         console.log(res);
//           //         load(res);
//           //       })
//           //       .catch((err) => error("oh no"));

//           //     return;

//           //     const request = new XMLHttpRequest();
//           //     request.open("POST", `/api/upload`);

//           //     // Should call the progress method to update the progress to 100% before calling load
//           //     // Setting computable to false switches the loading indicator to infinite mode
//           //     request.upload.onprogress = (e) => {
//           //       progress(e.lengthComputable, e.loaded, e.total);
//           //     };

//           //     // Should call the load method when done and pass the returned server file id
//           //     // this server file id is then used later on when reverting or restoring a file
//           //     // so your server knows which file to return without exposing that info to the client
//           //     request.onload = function () {
//           //       if (request.status >= 200 && request.status < 300) {
//           //         // the load method accepts either a string (id) or an object
//           //         load(request.responseText);
//           //       } else {
//           //         // Can call the error method if something is wrong, should exit after
//           //         error("oh no");
//           //       }
//           //     };

//           //     // CARA 1 : send sebagai FormData
//           //     // request.send(formData);

//           //     // CARA 2 : send sebagai File ke server menjadi ReadableStream
//           //     request.send(file);

//           //     // Should expose an abort method so the request can be cancelled
//           //     return {
//           //       abort: () => {
//           //         // This function is entered if the user has tapped the cancel button
//           //         request.abort();
//           //         // Let FilePond know the request has been cancelled
//           //         abort();
//           //       },
//           //     };
//           //   },
//           // }}
//           acceptedFileTypes={["image/*"]}
//           name="files"
//           labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
//         />
//         <Button type="submit">Kirim</Button>
//         {/* <Button onClick={kirim}>Kirim</Button> */}
//       </form>
//     </div>
//   );
// }
