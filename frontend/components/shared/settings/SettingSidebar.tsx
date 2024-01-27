import Link from "next/link";
import React from "react";

const SettingSidebar = () => {
  return (
    <>
      <div className="flex flex-col p-4 gap-8">
        <Link
          href="/admin/settings"
          className="h3-semibold hover:bg-slate-200 p-4 rounded-md"
        >
          Social Icons
        </Link>
      </div>
    </>
  );
};

export default SettingSidebar;
