import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileHeader = ({
  username,
  socialLinks,
  image,
}: {
  image: string;
  username: string;
  socialLinks: any;
}) => {
  console.log(socialLinks);

  return (
    <div className="p-6 pb-0 mb-12">
      <div className="flex justify-between mb-12">
        <Button className="bg-white">Share</Button>
        <Button className="bg-white">Subscribe</Button>
      </div>

      <div className="flex justify-center">
        <Image
          alt="Profile header image"
          src={image}
          width={96}
          height={96}
          className="rounded-full mb-1"
        />
      </div>

      <div className="flex justify-center text-white mb-4">
        <h2 className="text-lg font-semibold">@{username}</h2>
      </div>

      <div className="flex gap-8 justify-center items-center">
        {socialLinks?.map((link: any) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              className={`h-[32px] w-[32px] bg-slate-300 rounded-sm cursor-pointer`}
            >
              {/* {link.title} */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileHeader;
