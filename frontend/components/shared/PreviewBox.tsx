import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Phone from "./devices/Phone";

const PreviewBox = () => {
  return (
    <div className="">
      <div>
        <Tabs defaultValue="phone">
          <TabsList>
            {/* <TabsTrigger value="phone">Phone</TabsTrigger> */}
            {/* <TabsTrigger value="tablet">Tablet</TabsTrigger> */}
            {/* <TabsTrigger value="laptop">Laptop</TabsTrigger> */}
          </TabsList>
          <TabsContent value="phone">
            <Phone />
          </TabsContent>
          <TabsContent value="tablet">Tab here</TabsContent>
          <TabsContent value="laptop">laptop here</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PreviewBox;
