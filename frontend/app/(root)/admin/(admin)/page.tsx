"use client";

import LinkBar from "@/components/shared/LinkBar";
import PreviewBox from "@/components/shared/PreviewBox";
import SettingsBox from "@/components/shared/SettingsBox";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

import React from "react";

const Page = () => {
  const router = useRouter();
  const { isAuthenticated, loading, user } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    router.push("/auth/signin");
  }

  return (
    <>
      <section className="grid grid-cols-5 justify-items-center gap-12 mx-10">
        <div className="w-full col-span-3 justify-self-center">
          <LinkBar user={user} />
          <SettingsBox />
        </div>
        <div className="justify-self-center w-full">
          <PreviewBox />
        </div>
      </section>
    </>
  );
};

export default Page;
