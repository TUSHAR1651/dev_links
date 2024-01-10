import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProfileHeader = ({
  username,
  socialLinks,
}: {
  username: string;
  socialLinks: any;
}) => {
  // console.log(socialLinks?.facebook);

  return (
    <div className="p-6 mb-12">
      <div className="flex justify-between mb-12">
        <Button className="bg-white">Share</Button>
        <Button className="bg-white">Subscribe</Button>
      </div>

      <div className="flex justify-center mb-4">
        <Image
          alt="Profile header image"
          src="https://ugc.production.linktr.ee/2ljqHzRRpe9Q20qqR7ag_fajRD8z3cZPD34T4?io=true&size=avatar-v1_0"
          width={96}
          height={96}
          className="rounded-full"
        />
      </div>

      <div className="flex justify-center mb-8 text-white">
        <h2 className="text-lg font-semibold">@{username}</h2>
      </div>

      <div className="flex text-white justify-center mb-8">
        {/* {socialLinks.map((link: any) => {
          return (
            <div className="flex gap-4 items-center justify-center">
              <Image
                alt="Social media icon"
                src={link.icon}
                width={24}
                height={24}
              />
              <p className="text-sm">{link.title}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default ProfileHeader;
