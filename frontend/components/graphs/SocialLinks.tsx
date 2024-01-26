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

const SocialLinks = () => {
  const { userLinks } = useAuth();
  return (
    <Table className="bg-white">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">Social Links</TableHead>
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
  );
};

export default SocialLinks;
