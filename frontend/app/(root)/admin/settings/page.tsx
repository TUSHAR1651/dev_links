import TopLinks from "@/components/graphs/TopLinks";
import PreviewBox from "@/components/shared/PreviewBox";
import SettingContainer from "@/components/shared/settings/SettingContainer";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="grid grid-cols-5 justify-items-center mx-10">
        <div className="w-full col-span-3 justify-self-center">
          <SettingContainer />
        </div>
        <div className="justify-self-center">{/* <PreviewBox /> */}</div>
      </section>
    </div>
  );
};

export default page;
