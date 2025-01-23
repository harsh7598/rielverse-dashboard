import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {  ImageDown } from "lucide-react";
import { DialogTitle } from "@/components/ui/dialog";

interface Props {
  isOpen: boolean;
  drawerTrigger: () => void;
  data: {
    PolicyNo: string;
    CarrierQuoteNumber: string;
    EffectiveDate: string;
    OperatingCompany: string;
    BusinessName: string;
    Product: string;
    TransactionType: string;
  };
}

const documents = [
  { name: "PDS.pdf", timestamp: "23/12/2024, 21:52", size: "394 KB" },
  { name: "PDS.pdf", timestamp: "23/12/2024, 21:52", size: "394 KB" },
  { name: "PDS.pdf", timestamp: "23/12/2024, 21:52", size: "394 KB" },
  { name: "PDS.pdf", timestamp: "23/12/2024, 21:52", size: "394 KB" },
];

export default function PolicyDetails({ isOpen, drawerTrigger, data }: Props) {
  return (
    <Sheet open={isOpen} onOpenChange={drawerTrigger}>
      <SheetContent className="md:w-[800px] min-w-max h-auto overflow-scroll">
        <DialogTitle className="py-4">Policy Details</DialogTitle>
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex items-start gap-8">
            <div className="bg-green-50 p-4 rounded-lg w-3/5 border-t-2 border-green-600 text-[#157F12] font-medium text-sm">
              <div className="text-green-800">
                <div>Policy Number : {data?.PolicyNo}</div>
                <div>Issue Date : {data?.EffectiveDate}</div>
              </div>
            </div>
            <div className="rounded-lg border-t-2 border-l border-r border-green-600 pb-2 pt-2 pl-4 w-44">
              <div>Policy Status</div>
              <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-green-200 text-green-800 text-sm">
                Issued
              </div>
            </div>
          </div>

          {/* Policy Info Card */}
          <Card className="border-t-2 border-[#452262] shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#323232]">
                Policy info
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="text-purple-900 font-medium mb-1">
                      Operating Company
                    </div>
                    <div>{data?.OperatingCompany}</div>
                  </div>
                  <div>
                    <div className="text-purple-900 font-medium mb-1">
                      Insured Name
                    </div>
                    <div>{data?.BusinessName}</div>
                  </div>
                  <div>
                    <div className="text-purple-900 font-medium mb-1">
                      Policy Effective Date
                    </div>
                    <div>{data?.EffectiveDate}</div>
                  </div>
                </div>
                <div className=" border-r border-[#452262]" />
                <div className="space-y-6">
                  <div>
                    <div className="text-purple-900 font-medium mb-1">
                      Product Name
                    </div>
                    <div>{data?.Product}</div>
                  </div>
                  <div>
                    <div className="text-purple-900 font-medium mb-1">
                      Transaction Type
                    </div>
                    <div>{data?.TransactionType}</div>
                  </div>
                  {/* <div>
                    <div className="text-purple-900 font-medium mb-1">
                      Insured Name
                    </div>
                    <div>SURE INSURANCE PTY LTD</div>
                  </div>
                  <div>
                    <div className="text-purple-900 font-medium mb-1">
                      Product Name
                    </div>
                    <div>Clover-Business Pack v1.17</div>
                  </div> */}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents Card */}
          <Card className="border-t-2 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-500">Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader className="bg-orange-50">
                  <TableRow className="hover:bg-orange-50">
                    <TableHead className="text-orange-500">
                      Document Name
                    </TableHead>
                    <TableHead className="text-orange-500">Timestamp</TableHead>
                    <TableHead className="text-orange-500">File Size</TableHead>
                    <TableHead className="text-orange-500 w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.map((doc, i) => (
                    <TableRow key={i} className="hover:bg-orange-50">
                      <TableCell>{doc.name}</TableCell>
                      <TableCell>{doc.timestamp}</TableCell>
                      <TableCell>{doc.size}</TableCell>
                      <TableCell>
                        <ImageDown className="h-4 w-4 text-orange-500 cursor-pointer" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}
