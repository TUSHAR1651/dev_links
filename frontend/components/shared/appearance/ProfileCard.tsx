import ProfileForm from "@/components/forms/ProfileForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <>
      <div>
        <h3 className="h3-semibold mb-4 pl-2">Profile</h3>
        <div className="bg-white py-8 px-8 rounded-3xl">
          <div className="flex gap-12 items-center justify-center mb-8">
            {/* <Image
              width={100}
              height={100}
              alt="user_image"
              src=""
              className="rounded-full"
            /> */}
            <div className="h-[100px] w-[100px] bg-slate-400 rounded-full"></div>
            {/* Need to change the w-full property */}
            <div className="flex flex-col gap-4 w-full">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full py-6">
                Upload Image
              </Button>
              <Button className="bg-white hover:bg-gray-100 rounded-full py-6">
                Remove
              </Button>
            </div>
          </div>
          <ProfileForm />
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
