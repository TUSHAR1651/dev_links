import React from "react";

const ProfileLinks = (props: any) => {
  const { links } = props;
  return (
    <div className="">
      <div className="flex flex-col gap-8 justify-center items-center">
        {links
          ?.filter((link: any) => link.active)
          .map((link: any) => {
            return (
              <div
                key={link.id}
                className="bg-white w-full text-center px-4 py-4 rounded-full"
              >
                {link.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProfileLinks;
