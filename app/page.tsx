"use client";

import MantineProvideLayout from "@/lib/MantineProvideLayout";
import { Button } from "@mantine/core";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Weeding Nasir &",
//   description: "come to my weeding",
// };

export default function Home() {
  const [template, setTemplate] = useState("edi/tmp1");

  const exampleTemplates = [];

  const Templates = dynamic(() => import(`../template/${template}/`));

  return (
    <>
      {/* <MantineProvideLayout> */}
      <div>
        <select onChange={(e) => setTemplate(e.target.value)} name="" id="">
          <option value="edi/edi1">edi 1</option>
          <option value="edi/edi2">edi 2</option>
          <option value="oscar/tmp1">tmp 1 by oscar edit</option>
        </select>
      </div>
      <Button>Halo</Button>
      {/* </MantineProvideLayout> */}
      {/* <Templates /> */}
    </>
  );
}
