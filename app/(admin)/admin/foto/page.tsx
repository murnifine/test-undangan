// "use client";
import { getAllUsers, uploadGambar } from "@/lib/actions";
import prisma from "@/lib/prisma";
import { Button, MultiSelect, Select } from "@mantine/core";
import { User } from "@prisma/client";
import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef, useEffect } from "react";

export default async function Page() {
  //   const inputFileRef = useRef<HTMLInputElement>(null);
  //   const [blob, setBlob] = useState<PutBlobResult | null>(null);

  const users = await prisma.user.findMany();
  const userId_name = users.map((item) => ({
    value: item.id.toString(),
    label: item.name,
  }));

  console.log(userId_name);
  //   const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     async function getUsers() {
  //       const TempUsers = await getAllUsers();
  //       setUsers(TempUsers as User);
  //     }

  //     getUsers();
  //   }, []);

  return (
    <div className="p-10">
      {/* <h1>Unggah Gambar</h1> */}

      <form
        className=" gap-5 flex flex-col"
        // onSubmit={async (event) => {
        //   event.preventDefault();

        //   if (!inputFileRef.current?.files) {
        //     throw new Error("No file selected");
        //   }

        //   const file = inputFileRef.current.files[0];

        //   const response = await fetch(
        //     `/api/avatar/upload?filename=${file.name}`,
        //     {
        //       method: "POST",
        //       body: file,
        //     }
        //   );

        //   const newBlob = (await response.json()) as PutBlobResult;

        //   setBlob(newBlob);
        // }}

        //   action={(formData)=>uploadGambar(formData, user)}
      >
        {userId_name.length > 0 && (
          <Select placeholder="Untuk user?" data={userId_name} />
        )}

        {/* <input name="file" ref={inputFileRef} type="file" required /> */}
        <Button type="submit">Upload</Button>
      </form>
      {/* {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )} */}
    </div>
  );
}
