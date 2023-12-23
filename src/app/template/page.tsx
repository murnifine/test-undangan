import prisma from "@/lib/prisma";

import CardUndangan from "./components/cardUndangan";
import { category } from "@prisma/client";
import CountShare from "@/components/countShare";

export default async function Template() {

  const dataTemplates = await prisma.templateUndangan.findMany()
  const categoryData = category


  const categoryNames = Object.keys(categoryData).map((key) => ((categoryData as any)[key] as string))

  return (
    <>
      <div className="flex flex-col items-center  gap-5 py-20 px-5 md:px-10 w-full  h-full bg-white">
        <CountShare />
        {categoryNames.map((categoryName) => (
          <CardUndangan key={categoryName} categoryName={categoryName} />
        ))}
      </div>
    </>
  );
}