import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  MoreVertical, 
  Calendar, 
  CheckCircle, 
  ChevronDown,
  FileText,
  RefreshCw
} from "lucide-react";
import { DialogTitle } from '@/components/ui/dialog';

const policyHistoryData = [
  {
    referenceNo: "0000043546",
    transactionType: "New Business",
    transactionStatus: "Issued",
    billedAmount: "AU$343.67",
    effectiveDate: "24/12/2024"
  }
];

const documentsData = [
  {
    name: "PDS.pdf",
    timestamp: "23/12/2024, 21:52",
    fileSize: "394 KB"
  },
  {
    name: "Certificate Of Currency.pdf",
    timestamp: "23/12/2024, 21:52",
    fileSize: "64 KB"
  }
];
interface Props{
    isOpen: boolean;
    drawerTrigger: () => void;
}

const InsuranceDashboard = ({isOpen , drawerTrigger}: Props) => {

  return (
    <div className="p-4">
      <div className="fixed left-0 top-0 h-screen bg-white shadow-lg">
        <Sheet open={isOpen} onOpenChange={drawerTrigger}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="w-12 h-12 hidden">
              <MoreVertical className="h-6 w-6 hidden " />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="md:w-[750px] min-w-max h-auto overflow-scroll">
                <DialogTitle className='py-4'>Insurance Dashboard</DialogTitle>
            <div className="space-y-6">
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">Policy No</span>
                    <span className="font-medium">PB-000004356</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">24/12/2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Issued</span>
                  </div>
                </CardHeader>
              </Card>

              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <ChevronDown className="h-4 w-4" />
                  <h3 className="font-medium">Policy History</h3>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Reference No</TableHead>
                      <TableHead>Transaction Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {policyHistoryData.map((row) => (
                      <TableRow key={row.referenceNo}>
                        <TableCell className="text-blue-500">{row.referenceNo}</TableCell>
                        <TableCell>{row.transactionType}</TableCell>
                        <TableCell>{row.transactionStatus}</TableCell>
                        <TableCell>{row.billedAmount}</TableCell>
                        <TableCell>{row.effectiveDate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Policy Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Operating Company</p>
                    <p>Clover MGA Insurance Company</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Insured Name</p>
                    <p>SURE INSURANCE PTY LTD</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Product Name</p>
                    <p>Clover-Business Pack v1.17</p>
                  </div>
                </CardContent>
              </Card>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <h3 className="font-medium">Documents</h3>
                  </div>
                  <div className="space-x-2">
                    <Button variant="destructive" size="sm">
                      Reissue Document
                    </Button>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="h-4 w-4 mr-1" />
                      Reload
                    </Button>
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Name</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Size</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {documentsData.map((doc) => (
                      <TableRow key={doc.name}>
                        <TableCell>{doc.name}</TableCell>
                        <TableCell>{doc.timestamp}</TableCell>
                        <TableCell>{doc.fileSize}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default InsuranceDashboard;