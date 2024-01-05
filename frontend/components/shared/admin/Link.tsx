import { GripVertical, Image, BarChart4, Star, Trash2 } from "lucide-react";
import { Delete } from "lucide-react";
import React from "react";
import LinkInput from "../LinkInput";

const Link = (props: any) => {
  const { title, url } = props;

  return (
    <div className="bg-white py-6 px-4 rounded-lg w-full">
      <div className=" grid grid-cols-10">
        <div className="col-span-1">
          <GripVertical strokeWidth={1} />
        </div>
        <div className="col-span-8">
          <LinkInput type="title" value={title} />
          <LinkInput type="url" value={url} />
          <div className="mt-6">
            <div className="flex gap-8">
              <div className="text-gray-400 hover:text-gray-800">
                <Image strokeWidth={1} />
              </div>
              <div className="text-gray-400 hover:text-gray-800">
                <Star strokeWidth={1} />
              </div>
              <div className="text-gray-400 hover:text-gray-800">
                <BarChart4 strokeWidth={1} />
              </div>
              <div className="ml-6 text-gray-400 hover:text-red-600">
                <Trash2 strokeWidth={1} />
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
