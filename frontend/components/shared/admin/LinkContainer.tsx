import { link } from "fs";
import React from "react";
import Link from "./Link";

const LINKS = [
  {
    title: "Buy my new Book",
    url: "/something.com",
    id: 1,
  },
  { title: "Buy my new new new Book", url: "/something.com", id: 2 },
];

const LinkContainer = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        {LINKS.map((link) => {
          return <Link key={link.id} title={link.title} url={link.url} />;
        })}
      </div>
    </div>
  );
};

export default LinkContainer;
