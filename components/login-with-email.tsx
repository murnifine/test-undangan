"use client";
import { toast } from "sonner";
import { useState } from "react";
import { IconCircleCheck, IconX } from "@tabler/icons-react";
import { handleSignInWithEmail } from "@/app/login/action";
import { Button, Input } from "@mantine/core";

export default function LoginWithEmail() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <form
        className="gap-y-3 flex flex-col"
        autoComplete="off"
        onSubmit={(e) => {
          setIsLoading(true);
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const { email } = Object.fromEntries(formData);

          const promise = handleSignInWithEmail(email as string, "/sign-up");

          // toast.success();
          toast.promise(promise, {
            loading: "Loading...",
            duration: 5000,
            success: (data) => {
              setIsLoading(false);
              return (
                <div className="relative flex  items-center w-full gap-x-3 ">
                  <IconCircleCheck className="text-green-500 h-7 w-7" />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-sm font-medium">Periksa Email Kamu</h1>
                    <p className="text-sm">
                      Tautan masuk telah dikirim ke email kamu.
                    </p>
                  </div>
                  <IconX
                    size={15}
                    onClick={() => toast.dismiss()}
                    className="absolute -top-2 -right-2 cursor-pointer hover:text-red-500"
                  />
                </div>
              );
            },
            error: "Error",
          });
        }}
      >
        <Input
          type="email"
          placeholder="Masukkan alamat email kamu"
          name="email"
          required
          autoFocus
        />

        <Button
          disabled={isLoading}
          type="submit"
          variant="default"
          className="w-full"
        >
          Login
        </Button>
      </form>
    </>
  );
}
