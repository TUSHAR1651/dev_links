import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from "@/context/authContext";

const TopLinks = () => {
  const { userLinks, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // const [sort, setSort] = useState(userLinks);

  // const filterHandler = () => {};

  return (
    <div>
      {/* <div className="flex items-center py-4 px-4 bg-white justify-end">
        <Button onClick={filterHandler} className="ml-4 bg-gray-300">
          Date
        </Button>
      </div> */}
      <div className="rounded-md border">
        <Table className="bg-white">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Link</TableHead>
              <TableHead className="text-right font-semibold">Clicks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userLinks?.map((link: any) => {
              return (
                <TableRow>
                  <TableCell className="text-gray-500 font-medium">
                    {link.title}
                  </TableCell>
                  <TableCell className="text-gray-500 text-right">
                    {link.clicks.length}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TopLinks;
