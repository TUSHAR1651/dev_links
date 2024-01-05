import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { BarChart4, Rows2, Settings, Smartphone } from "lucide-react";

const Header = () => {
  return (
    <header className=" h-[70px] background-white my-6 mx-2 rounded-full py-2 px-12 flex items-center justify-between">
      <div className="flex gap-8">
        <Link href="/admin">DEV_LINKS</Link>

        <ul className="flex gap-6">
          <Link
            href="/admin"
            className="flex gap-1 items-center justify-center text-light-800"
          >
            <Rows2 strokeWidth={1} />
            <p className="body-semibold">Links</p>
          </Link>
          <Link
            href="/admin/appearance"
            className="flex gap-1 items-center justify-center text-light-800"
          >
            <Smartphone strokeWidth={1} />
            <p className="body-semibold">Appearance</p>
          </Link>
          <Link
            href="/admin/analytics"
            className="flex gap-1 items-center justify-center text-light-800"
          >
            <BarChart4 strokeWidth={1} />
            <p className="body-semibold ">Analytics</p>
          </Link>
          <Link
            href="/admin/settings"
            className="flex gap-1 items-center justify-center text-light-800"
          >
            <Settings strokeWidth={1} />
            <p className="body-semibold">Settings</p>
          </Link>
        </ul>
      </div>

      <div className="flex gap-4">
        <Button className="">Share</Button>
        <Button>Profile</Button>
      </div>
    </header>
  );
};

export default Header;
