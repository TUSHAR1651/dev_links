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
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  key={link.id}
                  className="bg-white w-full text-center px-4 py-4 rounded-full"
                >
                  {link.title}
                </div>

                {/* <div className="relative inline-flex  group">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <a
                    href="#"
                    title="Get quote now"
                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Get it now
                  </a>
                </div> */}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ProfileLinks;
