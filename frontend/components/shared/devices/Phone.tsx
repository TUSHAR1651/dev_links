"use client";

import React from "react";

import { useAuth } from "@/context/authContext";

import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

import ProfileHeader from "../profile/ProfileHeader";
import ProfileLinks from "../profile/ProfileLinks";
import Branding from "../profile/Branding";

const Phone = () => {
  const { user, userLinks, userTheme, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <DeviceFrameset device="iPhone X" color="gold">
      <div
        className={`${userTheme?.background} py-4 px-8 h-full w-full rounded-lg`}
      >
        <ProfileHeader
          image={user?.image}
          username={user?.username}
          socialLinks={user?.socialLinks}
        />

        <div className="flex flex-col gap-6 justify-center items-center">
          {userLinks
            .filter((link: any) => link.active)
            .map((link: any) => {
              return (
                <div
                  key={link.id}
                  className={`${userTheme?.buttons} w-[200px] text-center py-4 rounded-full cursor-pointer`}
                >
                  {link.title}
                </div>
              );
            })}
        </div>
        <Branding />
      </div>
    </DeviceFrameset>
  );
};

export default Phone;
