"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical, Filter, ArrowDownUp, Download } from "lucide-react";
import { useState } from "react";
import QuotesDetails from "./drawer";

type QuotesTypes = {
  _id: string;
  BusinessName: string;
  CarrierQuoteNumber: string;
  CarrierReferenceNumber: string;
  EffectiveDate: Date;
  PolicyStatus: number;
  ProductCode: string;
  Product: string;
  TransactionType: string;
  OperatingCompany: string;
};

type ColumnDeff = {
  key: keyof QuotesTypes;
  header: string;
};

type DataTableProps = {
  columns: ColumnDeff[];
  mockData: QuotesTypes[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AgentTable({ columns, mockData }: DataTableProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dataForDrawer, setDataForDrawer] = useState<{
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
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Quotes</CardTitle>
            <div className="flex items-center space-x-2">
              <Input className="w-64" placeholder="Search for policies" />
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <ArrowDownUp className="w-4 h-4" />
                Sorts
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
                Exports
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col h-full">
            <div className="rounded-md border overflow-hidden flex-1">
              <ScrollArea>
                <div className="overflow-auto w-[390px] md:w-[calc(100vw-16rem)] xl:w-full">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        {columns.map((column) => (
                          <TableHead
                            key={column.key}
                            className="font-semibold text-sm whitespace-nowrap"
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
                              key={`${row._id}-${column.key}`}
                              className="text-sm uppercase"
                            >
                              {/* {row[column.key]}
                               */}
                              {/* {row[column.key]} */}
                              {row[column.key] instanceof Date
                                ? row[column.key].toLocaleString() // Format Date
                                : row[column.key]?.toString()}{" "}
                              {/* Ensure value is string */}
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
            <QuotesDetails
              isOpen={isOpen}
              drawerTrigger={drawerTrigger}
              data={dataForDrawer!}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
