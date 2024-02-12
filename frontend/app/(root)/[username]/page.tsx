"use client";

import Branding from "@/components/shared/profile/Branding";
import ProfileHeader from "@/components/shared/profile/ProfileHeader";
import ProfileLinks from "@/components/shared/profile/ProfileLinks";
import axios from "axios";
import React, { useEffect, useState } from "react";

type User = any;

const Page = ({ params }: any) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  const { username } = params;

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `http://localhost:5000/user/${username}`
        );
        setUser(data.user);
      } catch (error) {
        console.log(error);
        return error;
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [username]);

  return (
    <div className={`${user?.theme?.background} h-[100vh]`}>
      <div className=" w-[600px] h-full m-auto flex flex-col justify-between">
        <div>
          <ProfileHeader
            image={user?.image}
            username={user?.username}
            socialLinks={user?.socialLinks}
          />
          <ProfileLinks links={user?.links} />
        </div>
        <Branding />
      </div>
    </div>
  );
};

export default Page;
