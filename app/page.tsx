"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

export default function Home() {
  const [template, setTemplate] = useState("edi/edi1");

  const Templates = dynamic(() => import(`../template/${template}/`), {
    ssr: false,
  });
  return (
    <>
      <div>
        <select onChange={(e) => setTemplate(e.target.value)} name="" id="">
          <option value="edi/edi1">edi 1</option>
          <option value="edi/edi2">edi 2</option>
          <option value="oscar/tmp1">tmp 1 by oscar</option>
        </select>
      </div>
      {/* <Templates /> */}
    </>
  );
}
