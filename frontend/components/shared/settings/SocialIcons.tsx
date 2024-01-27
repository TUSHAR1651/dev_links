"use client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Facebook } from "lucide-react";
import React from "react";
import SocialLinkModal from "./SocialLinkForm";

const SocialIcons = () => {
  return (
    <div>
      <h2 className="base-semibold">Socail Icons</h2>

      <div className="bg-white rounded-lg p-4 ">
        <p className="text-slate-500">
          Add social links and track activity on them too.
        </p>
        <SocialLinkModal />
        <div>List</div>
      </div>
    </div>
  );
};

export default SocialIcons;
