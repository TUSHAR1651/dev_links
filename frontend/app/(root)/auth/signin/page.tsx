"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onSignin, handleGoogleAuth } = useAuth();

  const signinHandler = async () => {
    // console.log({ email, password });
    const data = await onSignin({ email, password });
    // console.log({ data });
    router.push("/admin");
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const data = await handleGoogleAuth(tokenResponse.access_token);

      // need to improve this ans check for the status code instead of the user object
      if (data.user) {
        router.push("/admin");
      }
    },
    onError: (err) => {
      console.log("Google login error:", err);
    },
  });

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="w-full lg:w-1/2 flex justify-center items-center lg:items-start px-6 py-8 lg:px-16 lg:py-0">
        <img
          alt="Company Logo"
          className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
          height="300"
          src="/placeholder.svg"
          width="300"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 py-8 lg:px-16 lg:py-0">
        <div className="space-y-6">
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-3xl font-bold">Sign in to your account</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Or
              <Link className="underline" href="#">
                create a new account
              </Link>
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Email</Label>
              <Input
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button onClick={signinHandler} className="w-full" type="submit">
              Sign in
            </Button>
          </div>
          <div className="w-full flex justify-center lg:justify-start">
            <Button
              className="w-full"
              variant="outline"
              onClick={() => login()}
            >
              <ChromeIcon className="h-6 w-6 mr-2" />
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

export default Page;
