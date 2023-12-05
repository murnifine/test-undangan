"use server";

import { signIn } from "@/lib/auth";

export async function handleSignInWithEmail(
  email: string,
  callbackUrl: string
) {
  // const { email } = Object.fromEntries(formData);
  return await signIn("email", { redirect: false, email, callbackUrl });
}
