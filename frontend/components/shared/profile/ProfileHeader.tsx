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
  return (
    <div className="p-6 pb-0 mb-12">
      <div className="flex justify-between mb-12">
        <Button className="bg-white">Share</Button>
        <Button className="bg-white">Subscribe</Button>
      </div>

      <div className="flex justify-center">
        <Image
          src={image}
          alt="Profile header image"
          width={96}
          height={96}
          className="rounded-full mb-1"
        />
      </div>

      <div className="flex justify-center text-white mb-4">
        <h2 className="text-lg font-semibold">@{username}</h2>
      </div>

      <div className="flex gap-12 justify-center items-center mt-8">
        {socialLinks?.map((link: any) => {
          return (
            <Link
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/svg_outline/${link.title}.svg`}
                alt={link.title}
                width={28}
                height={28}
                className="opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileHeader;
