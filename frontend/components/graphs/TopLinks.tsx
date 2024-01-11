import React from "react";
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
  const { userLinks } = useAuth();
  return (
    <Table className="bg-white">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
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
                {link.clicks}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TopLinks;
