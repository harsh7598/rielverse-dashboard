"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import { useState } from "react";
import PolicyDetails from "./drawer";

type ColumnDeff = {
  key: string;
  header: string;
};

type DataTableProps<TData> = {
  columns: ColumnDeff[];
  mockData: TData[];
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PoliciesTabel<TData extends Record<string, any>>({
  columns,
  mockData,
}: DataTableProps<TData>) {
  console.log("Mock Data ---> ", mockData);
  const [isOpen, setIsOpen] = useState(false);
  const [dataForDrawer, setDataForDrawer] = useState<{
    PolicyNo: string;
    CarrierQuoteNumber: string;
    EffectiveDate: string;
    OperatingCompany: string;
    BusinessName: string;
    Product: string;
    TransactionType: string;
  }>();
  const drawerTrigger = () => {
    setIsOpen((prev) => !prev);
  };
  const handleSetDrawerData = (index: number) => {
    const getDrawerData = mockData.filter(
      (item, itemIndex) => itemIndex == index
    )[0] as unknown as {
      PolicyNo: string;
      CarrierQuoteNumber: string;
      EffectiveDate: string;
      OperatingCompany: string;
      BusinessName: string;
      Product: string;
      TransactionType: string;
    };
    setDataForDrawer(getDrawerData);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="rounded-md border overflow-hidden flex-1">
        <ScrollArea>
          <div className="w-[390px] md:w-[calc(100vw-16rem)] xl:w-full ">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  {columns.map((column) => (
                    <TableHead
                      key={column.key}
                      className="font-semibold text-sm whitespace-nowrap uppercase"
                    >
                      {column.header}
                    </TableHead>
                  ))}
                  <TableHead className="w-[48px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((row, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    {columns.map((column) => (
                      <TableCell
                        key={`${row.id}-${column.key}`}
                        className="text-sm uppercase"
                      >
                        {row[column.key]}
                      </TableCell>
                    ))}
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => {
                          drawerTrigger();
                          handleSetDrawerData(index);
                        }}
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>
      </div>
      <PolicyDetails
        isOpen={isOpen}
        drawerTrigger={drawerTrigger}
        data={dataForDrawer!}
      />
    </div>
  );
}
