import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PreviewBox = () => {
  return (
    <div>
      <div>
        <Tabs defaultValue="phone" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="phone">Phone</TabsTrigger>
            <TabsTrigger value="tablet">Tablet</TabsTrigger>
            <TabsTrigger value="laptop">Laptop</TabsTrigger>
          </TabsList>
          <TabsContent value="phone">Display Phone here </TabsContent>
          <TabsContent value="tablet">Tab here</TabsContent>
          <TabsContent value="laptop">laptop here</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PreviewBox;
