"use client";

import Branding from "@/components/shared/profile/Branding";
import ProfileHeader from "@/components/shared/profile/ProfileHeader";
import ProfileLinks from "@/components/shared/profile/ProfileLinks";
import axios from "axios";
import React, { useEffect, useState } from "react";

// interface User {
//   links: string[]; // Add the 'links' property with the appropriate type
//   name: string;
// }
// Change that to the interface later
type User = any;

const Page = ({ params }: any) => {
  const [user, setUser] = useState<User>(); // Update the type of 'user' state
  const [loading, setLoading] = useState(true);

  const { username } = params;

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `http://localhost:5000/user/${username}`
        );

        // console.log(data.user[0]);
        setUser(data.user[0]);
      } catch (error) {
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
            username={user?.username}
            socialLinks={user?.socialLinks}
          />
          <ProfileLinks links={user?.links} /> {/* Fixed the type error */}
        </div>
        <Branding />
      </div>
    </div>
  );
};

export default Page;
