"use client";

import React, { useEffect, useState } from "react";
import Link from "./Link";
import PrimaryButton from "./PrimaryButton";

const LINKS = [
  {
    title: "Buy my new Book",
    url: "/something.com",
    id: 1,
  },
  { title: "Buy my new new new Book", url: "/something.com", id: 2 },
];

const LinkContainer = () => {
  const [links, setLinks] = useState(LINKS);

  useEffect(() => {
    // make an fetch call to the backend api to all the links associated with the user
  }, []);

  const addLinkHandler = () => {
    setLinks((prevLinks: any) => {
      const newLink = {
        title: "New Link",
        url: "New Link",
        id: Math.random().toString(),
      };
      return [newLink, ...prevLinks];
    });
  };

  return (
    <div className="">
      <div className="mb-4">
        <PrimaryButton clickHandler={addLinkHandler} />
      </div>

      <div className="flex flex-col gap-6">
        {links.map((link) => {
          return <Link key={link.id} title={link.title} url={link.url} />;
        })}
      </div>
    </div>
  );
};

export default LinkContainer;
