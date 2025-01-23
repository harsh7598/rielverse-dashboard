import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ChevronDown, Plus } from "lucide-react";
import PoliciesTabel from "./policies-table";
import { Policies } from "@/server/policies";
import { UserTypes } from "@/types/user";
import Error from "@/components/ui/error";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

interface PolicyViewPropsTypes {
  user: UserTypes;
  role: "Agent" | "User";
}

const columns = [
  { key: "BusinessName", header: "Business Name" },
  { key: "PolicyNo", header: "Policy No" },
  { key: "Product", header: "Product" },
  { key: "CarrierReferenceNumber", header: "Carrier Reference No" },
  { key: "TransactionType", header: "Transaction Type" },
  { key: "PolicyStatus", header: "Policy Status" },
  { key: "EffectiveDate", header: "Effective Date" },
  { key: "OperatingCompany", header: "Operating Company" },
];

export default async function PoliciesView({
  user,
  role,
}: PolicyViewPropsTypes) {
  const [res, error] = await Policies(user, role);
  if (error) {
    <Error
      message={error ? error : "Something went wrong.Please try again!"}
    />;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Search All Transaction
        </h1>
        <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-sm sm:text-base">
          SureInsure Insurance Advisors
        </Button>
      </div>
      <Card>
        <CardContent className="p-3 sm:p-4 lg:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Input placeholder="Insured Name" className="w-full" />
            <Input placeholder="Policy No" className="w-full" />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business">Clover-Business Pack</SelectItem>
                <SelectItem value="home">Clover-Home Pack</SelectItem>
                <SelectItem value="motor">Clover-Motor Pack</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Reference No" className="w-full" />
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-4 mb-4 sm:mb-6">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2"
            >
              <Plus className="h-4 w-4" /> More
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 flex items-center justify-center gap-2">
              <Search className="h-4 w-4" /> Search
            </Button>
            <Button variant="outline">Clear Filter</Button>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <PoliciesTabel
              columns={columns}
              mockData={res?.data ? res?.data : []}
            />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
