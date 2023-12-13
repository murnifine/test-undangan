// import LoginWithEmail from "@/components/login-with-email";
// import LoginWithEmailBtn from "@/components/login-with-email";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
import { MotionDiv } from "@/components/MotionDiv";
import LoginWithEmail from "@/components/auth/login-with-email";
import LogoutButton from "@/components/auth/logout-button";
import { SubmitButton } from "@/components/auth/submit-button";
import LoginForm from "@/components/ui/login-form";
import { auth, signIn } from "@/lib/auth";
import { Button, Divider } from "@mantine/core";
import {
  IconBrandDiscordFilled,
  IconBrandFacebookFilled,
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
  IconBrandTiktokFilled,
  IconHeart,
  IconHeartFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { redirect } from "next/navigation";
// import { CSRF_experimental } from '@/auth'

const provider = [
  // {
  //   name: "github",
  //   icon: <IconBrandGithubFilled />,
  // },
  {
    name: "google",
    icon: <IconBrandGoogleFilled />,
  },
  // {
  //   name: "facebook",
  //   icon: <IconBrandFacebookFilled />,
  // },
  // {
  //   name: "tiktok",
  //   icon: <IconBrandTiktokFilled />,
  // },
  // {
  //   name: "discord",
  //   icon: <IconBrandDiscordFilled />,
  // },
];

const errors = {
  Signin: "Try signing with a different account.",
  OAuthSignin: "Try signing with a different account.",
  OAuthCallback: "Try signing with a different account.",
  OAuthCreateAccount: "Try signing with a different account.",
  EmailCreateAccount: "Try signing with a different account.",
  Callback: "Try signing with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "Check your email address.",
  CredentialsSignin:
    "Sign in failed. Check the details you provided are correct.",
  default: "Unable to sign in.",
};

const SignIn = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { error, callbackUrl } = searchParams;

  const session = await auth();
  if (session?.user) return redirect("/user");

  // if (session?.user && callbackUrl) return redirect(callbackUrl as string);
  // if (session?.user) return redirect("/");

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-lg w-full bg-zinc-50 shadow border  p-20  rounded-md gap-y-5">
        {/* 
        <p className="text-sm text-red-500">
          {error && (errors[error as keyof typeof errors] ?? errors.default)}
        </p> */}

        {/* <form
          className="gap-y-3 flex flex-col"
          autoComplete="off"
          action={async (formData: FormData) => {
            "use server";
            const { email } = Object.fromEntries(formData);
            await signIn("email", { redirect: false, email });
          }}
        >
          <Input
            type="email"
            placeholder="Masukkan alamat email kamu"
            name="email"
            required
            autoFocus
            className=""
          />
          <LoginWithEmailBtn />
        </form> */}
        {/* <LoginWithEmail /> */}

        {/* <Divider /> */}

        <div className="flex flex-col items-center gap-y-5">
          <div className="flex flex-col  gap-3 ">
            {/* <Link href="/user">User</Link> */}
            {/* <LogoutButton /> */}
            <div className="flex flex-col justify-center items-center">
              <IconHeart size={80} className="text-pink-600" />
              <h1 className="text-2xl font-bold text-center">Olvite</h1>
            </div>

            <p className="text-base mb-3">
              Log in untuk mulai menggunakan Olvite.com
            </p>
            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: callbackUrl as string });
              }}
            >
              <MotionDiv whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <SubmitButton />
              </MotionDiv>
            </form>

            {/* <LoginForm /> */}

            {/* {provider.map((item) => (
              <form
                className=""
                key={item.name}
                action={async () => {
                  "use server";
                  await signIn(item.name);
                }}
              >
                <Button
                  type="submit"
                  variant="default"
                  className="flex gap-x-3"
                >
                  {item.icon}
                </Button>
              </form>
            ))} */}
          </div>
        </div>
      </div>
    </main>
  );
};
export default SignIn;
