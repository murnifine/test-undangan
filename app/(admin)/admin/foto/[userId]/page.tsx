// "use client";

import FileUpload from "./FileUpload";

export default function Page({ params }: { params: { userId: string } }) {
  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="w-full">
        <FileUpload userId={params.userId} />
      </div>
    </div>
  );
}
