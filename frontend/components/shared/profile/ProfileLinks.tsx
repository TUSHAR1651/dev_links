import axios from "axios";
import Link from "next/link";
import React from "react";

const ProfileLinks = (props: any) => {
  const { links } = props;

  const linkClickHandler = async (id: string) => {
    console.log(id);

    const data = await axios.post(
      `http://localhost:5000/user/link/register-click/${id}`,
      {
        id: id,
      }
    );

    console.log(data);
  };

  return (
    <div className="">
      <div className="flex flex-col gap-8">
        {links
          ?.filter((link: any) => link.active)
          .map((link: any) => {
            return (
              <Link
                onClick={() => linkClickHandler(link._id)}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  key={link.id}
                  className="bg-white w-full text-center px-4 py-4 rounded-full"
                >
                  {link.title}
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ProfileLinks;
