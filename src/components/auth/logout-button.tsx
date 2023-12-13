"use client";
import { signOut } from "@/lib/auth";
import { handleLogout } from "@/actions/auth-action";
import { Button } from "@mantine/core";
import { startTransition } from "react";
import { useFormStatus } from "react-dom";

export default function LogoutButton() {
  const { pending } = useFormStatus();
  return (
    <>
      <form
        className="gap-y-3 flex flex-col"
        autoComplete="off"
        action={handleLogout}
      >
        <Button
          loading={pending}
          disabled={pending}
          type="submit"
          className="w-full"
        >
          Logout
        </Button>
      </form>
    </>
  );
}
