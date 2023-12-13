"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "../lib/auth";

export async function handleLogout() {
  await signOut({ redirectTo: "/" });
}

export async function handleLogin(provider: string) {
  await signIn(provider);
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function handleSignInWithEmail(
  email: string,
  callbackUrl: string
) {
  // const { email } = Object.fromEntries(formData);
  return await signIn("email", { redirect: false, email, callbackUrl });
}
