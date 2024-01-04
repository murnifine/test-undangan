import imageCompression from "browser-image-compression";

export default async function compressImage(file: File) {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  const blobImgCompressed = await imageCompression(file, options);

  const blobImgUrl = URL.createObjectURL(blobImgCompressed);
  const imgFileFromBlob = new File([blobImgCompressed], blobImgCompressed.name);

  //   console.log({
  //     file,
  //     blobImgCompressed,
  //     blobImgUrl,
  //     imgFileFromBlob,
  //   });

  return imgFileFromBlob;
}
