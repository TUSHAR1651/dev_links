import PreviewBox from "@/components/shared/PreviewBox";
import SettingsBox from "@/components/shared/SettingsBox";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="grid grid-cols-5 justify-items-center mx-10">
        <div className="w-full col-span-3 justify-self-center">
          <SettingsBox />
        </div>
        <div className="justify-self-center">
          <PreviewBox />
        </div>
      </section>
    </>
  );
};

export default Page;
