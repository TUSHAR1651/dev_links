"use client";
import ProfileForm from "@/components/forms/ProfileForm";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";
import Image from "next/image";
import React, { useState } from "react";

import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

import type { OurFileRouter } from ".../../../app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

const ProfileCard = () => {
  const { user, setUser, updateUserImage, loading } = useAuth();
  const [image, setImage] = useState(user?.image || "");

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div>
        <h3 className="h3-semibold mb-4 pl-2">Profile</h3>
        <div className="bg-white py-8 px-8 rounded-3xl">
          <div className="flex gap-12 items-center justify-center mb-8">
            <Image
              width={100}
              height={100}
              alt="user_image"
              src={image}
              className="rounded-full"
            />

            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res: any) => {
                setImage(res[0].url);

                // sending the image to the backend
                updateUserImage(res[0].url);
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />

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
