import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import SuperAdminTable from "./superadmin-table";
import { UserTypes } from "@/types/user";
import Error from "@/components/ui/error";
import { Quotations } from "@/server/quotation";

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

const columnsOfQuotations: ColumnDeff[] = [
  { key: "BusinessName", header: "Insured Name" },
  { key: "CarrierQuoteNumber", header: "Reference No" },
  { key: "TransactionType", header: "Transaction Type" },
  { key: "EffectiveDate", header: "Effective Date" },
  { key: "OperatingCompany", header: "Renewed By" },
];

interface SuperAdminDashboardProps {
  user: UserTypes;
}

export default async function SuperAdmin({ user }: SuperAdminDashboardProps) {
  const dashboardUserRole = user.role;
  const [res, error] = await Quotations(user, dashboardUserRole);

  // Error handling
  if (error) {
    return <Error message={`Something went wrong with error : ${error}`} />;
  }
  if (!res) {
    return <>No Data</>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Quotes</span>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold">{0}</div>
              <div className="text-sm text-[#452262] flex justify-between w-full">
                <p className="bg-[#F1F5F7] px-4 py-2 rounded-md">
                  +12.7% <span className="text-[#809FB8]">vs. last month</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Policies</span>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold">{0}</div>
              <div className="text-sm text-red-500 flex justify-between">
                <p className="text-[#F97316] px-4 py-2 rounded-md bg-[#F1F5F7]">
                  -14.5%{" "}
                  <span className="text-[#809FB8]"> vs. last month </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Users</span>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold">500</div>
              <div className="text-sm text-green-500 flex justify-between">
                <p className="bg-[#F1F5F7] px-4 py-2 rounded-md">
                  +12.7% <span className="text-[#809FB8]">vs. last month</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-end mb-4 mt-4">
        <Button className="text-lg">Get A Quote</Button>
      </div>
      <SuperAdminTable
        columns={columnsOfQuotations}
        mockData={res?.data || []}
      />
    </>
  );
}
