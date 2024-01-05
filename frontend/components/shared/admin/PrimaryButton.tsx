import { Button } from "@/components/ui/button";
import React from "react";
import { Plus } from "lucide-react";

const PrimaryButton = (props: any) => {
  const { clickHandler } = props;
  return (
    <>
      <Button
        onClick={clickHandler}
        className="bg-primary-500 w-full text-white base-semibold flex gap-2 py-6 rounded-full hover:bg-primary-600"
      >
        <Plus />
        <p className="paragraph-medium">Add Link</p>
      </Button>
    </>
  );
};

export default PrimaryButton;
