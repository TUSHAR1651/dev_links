import { GripVertical, Image, BarChart4, Star, Trash2 } from "lucide-react";
import React from "react";
import LinkInput from "../LinkInput";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Link = (props: any) => {
  const { title, url } = props;

  return (
    <div className="bg-white py-6 px-4 rounded-lg w-full">
      <div className=" grid grid-cols-10">
        <div className="col-span-1">
          <GripVertical strokeWidth={1} />
        </div>
        <div className="col-span-8">
          <div className="flex flex-col gap-2">
            <LinkInput type="title" value={title} />
            <LinkInput type="url" value={url} />
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
                      <Trash2 strokeWidth={1} />
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
          <p>Switch</p>
        </div>
      </div>
    </div>
  );
};

export default Link;
