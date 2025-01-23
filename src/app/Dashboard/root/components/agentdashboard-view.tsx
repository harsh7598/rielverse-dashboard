// "use client";
import React from "react";
import { Button } from "@/components/ui/button";
import AgentTable from "./agent-table";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { UserTypes } from "@/types/user";
import { Policies } from "@/server/policies";
import Error from "@/components/ui/error";

type PoliciesTypes = {
  _id: string;
  BrokerFee: number;
  BusinessName: string;
  CarrierReferenceNumber: string;
  DuePremium: number;
  EffectiveDate: string;
  GSTBrokerFee: number;
  PolicyNo: string;
  PolicyStatus: number;
  ProductCode: string;
  Product: string;
  TransactionType: string;
  OperatingCompany: string;
};

type ColumnDeff = {
  key: keyof PoliciesTypes;
  header: string;
};

const columns: ColumnDeff[] = [
  { key: "BusinessName", header: "Policy Holder Name" },
  { key: "PolicyNo", header: "Policy No" },
  { key: "Product", header: "Product Name" },
  { key: "TransactionType", header: "Transaction Type" },
  { key: "DuePremium", header: "Net Premium" },
  { key: "BrokerFee", header: "Net Commission Amount" },
];
interface AgentDashboardViewPropsTypes {
  user: UserTypes;
}
export default async function AgentDashboardView({
  user,
}: AgentDashboardViewPropsTypes) {
  const dashboardUserRole = user.role;
  const [res, error] = await Policies(user, dashboardUserRole);

  // Error handling
  if (error) {
    return <Error message={`Something went wrong with error : ${error}`} />;
  }
  if (!res) {
    return <>No Data</>;
  }
  return (
    <>
      <Link
        href={ROUTES.DASHBOARD.QUOTATION.ROOT("coverage-selection")}
        className="flex justify-end"
      >
        <Button className="text-lg">Get A Quote</Button>
      </Link>
      <AgentTable columns={columns} mockData={res?.data || []} />
    </>
  );
}
