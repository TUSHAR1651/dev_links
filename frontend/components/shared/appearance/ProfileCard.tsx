import ProfileForm from "@/components/forms/ProfileForm";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";
import Image from "next/image";
import React from "react";

import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

import type { OurFileRouter } from ".../../../app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

const ProfileCard = () => {
  return (
    <>
      <div>
        <h3 className="h3-semibold mb-4 pl-2">Profile</h3>
        <div className="bg-white py-8 px-8 rounded-3xl">
          <div className="flex gap-12 items-center justify-center mb-8">
            {/* <Image
              width={100}
              alt="user_image"
              src=""
              className="rounded-full"
            /> */}

            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res: any) => {
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
            {/* <div className="h-[100px] w-[100px] bg-slate-400 rounded-full"></div> */}
            {/* Need to change the w-full property */}
            <div className="flex flex-col gap-4 w-full">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full py-6">
                Upload Image
              </Button>
              <Button className="bg-white hover:bg-gray-200 rounded-full py-6">
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
