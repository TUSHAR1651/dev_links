"use client";

import { GripVertical, Image, BarChart4, Star, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import LinkInput from "../LinkInput";
import { useUser } from "@/context/userContext";

const Link = (props: any) => {
  const { id, title, url, active } = props;

  const [linkTitle, setLinkTitle] = useState(title);
  const [linkURL, setLinkURL] = useState(url);

  const { updateLink, toggleLink } = useUser();

  const urlChangeHandler = (e: any) => {
    setLinkURL(e.target.value);
  };

  const titleChangeHandler = (e: any) => {
    setLinkTitle(e.target.value);
  };

  const updateLinkBackend = () => {
    updateLink(id, linkTitle, linkURL);
  };

  return (
    <div className="bg-white py-6 px-4 rounded-lg w-full">
      <div className=" grid grid-cols-10">
        <div className="col-span-1">
          <GripVertical strokeWidth={1} />
        </div>
        <div className="col-span-8">
          <div className="flex flex-col gap-2">
            <LinkInput
              type="title"
              value={linkTitle}
              onChange={(e: Event) => titleChangeHandler(e)}
              onBlur={() => updateLinkBackend()}
            />
            <LinkInput
              type="url"
              value={linkURL}
              onChange={(e: Event) => urlChangeHandler(e)}
              onBlur={() => updateLinkBackend()}
            />
          </div>
          <div className="mt-6">
            <div className="flex gap-8">
              <div className="text-gray-400 hover:text-gray-800">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image strokeWidth={1} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="small-medium">ADD THUMBNAIL</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="text-gray-400 hover:text-gray-800">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Star strokeWidth={1} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="small-medium">PRIORTIZE</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="text-gray-400 hover:text-gray-800">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <BarChart4 strokeWidth={1} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="small-medium">ANALYTICS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="ml-6 text-gray-400 hover:text-red-600">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Trash2 strokeWidth={1} onClick={() => {}} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="small-medium">DELETE</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Switch
            checked={active}
            onCheckedChange={() => {
              toggleLink(id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Link;
