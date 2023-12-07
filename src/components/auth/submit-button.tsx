"use client";

import { Button } from "@mantine/core";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import Image from "next/image";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      size="xl"
      loading={pending}
      disabled={pending}
      variant="filled"
      color="dark"
      type="submit"
      fullWidth
      className="flex gap-x-24 items-center"
    >
      {/* <IconBrandGoogleFilled className="w-5 h-5 mr-2" /> */}
      <Image
        priority
        src="/google.svg"
        alt="Google Icon"
        height={30}
        width={30}
        className=""
      />
      <p>Login dengan Google</p>
    </Button>
  );
}
