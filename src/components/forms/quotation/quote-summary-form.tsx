import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROUTES } from "@/config/routes";
import { InsuranceFormStatus } from "@/server/insurance";
import {
  InsuranceFormQueryTypes,
  InsuranceFormRoutes,
} from "@/types/insurance-form";
import { UserTypes } from "@/types/user";
import { format } from "date-fns";
import { redirect } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SectionHeading from "./components/section-heading";
import { cn, formatCurrency } from "@/lib/utils";
import Stripe from "./components/stripe";
import Loader from "@/components/ui/custom/Loader";
import InsruanceDocView from "./components/insurance-doc-view";

interface QuoteSummaryFormPropsTypes {
  user: UserTypes;
  formTypes: InsuranceFormQueryTypes;
  routes: InsuranceFormRoutes;
}

type MetaResponseTypes = {
  Address: string;
  status: string;
  effectiveDate: string;
  expiryDate: string;
  DuePremium: number;

  BrokerCommission: number;
  GSTBrokerCommission: number;

  ProposalNo: string;

  quote: {
    title: string;
    premium: number;
    emergencyServiceLevy: number;
    gst: number;
    stampDuty: number;
  }[];

  AgentFee: number;
  AgentFeeGST: number;
  BrokerFee: number;
  BrokerFeeGST: number;
  TransitionType: string;
  InsuredName: string;
  quoteNo: string;
};

export default async function QuoteSummaryForm({
  user,
  formTypes,
  routes,
}: QuoteSummaryFormPropsTypes) {
  const [res, error] = await InsuranceFormStatus<
    {} & { meta: MetaResponseTypes }
  >(user, formTypes);

  if (error && !res) {
    redirect(ROUTES.DASHBOARD.QUOTATION.ROOT(routes.back!));
  }

  if (!res) {
    return <Loader />;
  }

  const data = res.data.meta;

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2 space-y-2">
            <Label>Quote No</Label>
            <Input
              defaultValue={data.quoteNo}
              disabled
              className="disabled:opacity-70"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-2">
            <Label>Quote Status</Label>
            <Input
              defaultValue={data.status}
              disabled
              className="disabled:opacity-70 uppercase"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2 space-y-2">
            <Label>Policy Effective Date</Label>
            <Input
              defaultValue={format(new Date(data.effectiveDate), "PPP")}
              disabled
              className="disabled:opacity-70"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-2">
            <Label>Policy Expiration Date</Label>
            <Input
              defaultValue={format(new Date(data.expiryDate), "PPP")}
              disabled
              className="disabled:opacity-70"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full md:w-1/2 space-y-2">
            <Label>Insured Name</Label>
            <Input
              defaultValue={data.InsuredName}
              disabled
              className="disabled:opacity-70"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-2">
            <Label>Transaction Type</Label>
            <Input
              defaultValue={data.TransitionType}
              disabled
              className="disabled:opacity-70 uppercase"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full  space-y-2">
            <Label>Primary Address</Label>
            <Input
              defaultValue={data.Address}
              disabled
              className="disabled:opacity-70"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <SectionHeading title="Premium Summary" />

        <div className="flex flex-col gap-4 max-w-xs sm:max-w-full">
          <Table parentClass="border rounded-lg">
            <TableHeader className="">
              <TableRow className="">
                <TableHead className="text-center w-[20%] text-[#452262] py-4 border-r border-[#452262]/40">
                  COVERAGE
                </TableHead>
                <TableHead className="text-center w-[16%] text-[#452262] py-4 border-r border-[#452262]/40">
                  BASE PREMIUM
                </TableHead>
                <TableHead className="text-center w-[16%] text-[#452262] py-4 border-r border-[#452262]/40">
                  EMERGENCY SERVICE LEVY
                </TableHead>
                <TableHead className="text-center w-[16%] text-[#452262] py-4 border-r border-[#452262]/40">
                  GST
                </TableHead>
                <TableHead className="text-center w-[16%] text-[#452262] py-4 border-r border-[#452262]/40">
                  STAMP DUTY
                </TableHead>
                <TableHead className="text-center w-[16%] text-[#452262] py-4 ">
                  TOTAL
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.quote.map((value, key) => (
                <TableRow
                  key={key}
                  className={cn(
                    "text-center",
                    key % 1 === 0 && "bg-[#EBE9EE] text-[#333]",
                    value.title === "Subtotal" &&
                      "bg-[#FDDED2] rounded-lg text-[#F55A1D]"
                  )}>
                  <TableCell
                    className={cn(
                      "  font-medium py-4",
                      value.title === "Subtotal"
                        ? "border-r border-primary"
                        : "border-r border-[#452262]/40"
                    )}>
                    {value.title}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "   py-4",
                      value.title === "Subtotal"
                        ? "border-r border-primary"
                        : "border-r  border-[#452262]/40"
                    )}>
                    {formatCurrency(value.premium, 2)}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "   py-4",
                      value.title === "Subtotal"
                        ? "border-r border-primary"
                        : "border-r  border-[#452262]/40"
                    )}>
                    {formatCurrency(value.emergencyServiceLevy, 2)}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "   py-4",
                      value.title === "Subtotal"
                        ? "border-r border-primary"
                        : "border-r  border-[#452262]/40"
                    )}>
                    {formatCurrency(value.gst, 2)}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "   py-4",
                      value.title === "Subtotal"
                        ? "border-r border-primary"
                        : "border-r  border-[#452262]/40"
                    )}>
                    {formatCurrency(value.stampDuty, 2)}
                  </TableCell>
                  <TableCell className={cn("py-4")}>
                    {formatCurrency(
                      value.premium +
                        value.gst +
                        value.emergencyServiceLevy +
                        value.stampDuty,
                      2
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="bg-[#EBE9EE] text-[#452262] w-fit p-3 rounded-lg">
            ( Total Payable includes commission of{" "}
            {formatCurrency(data.BrokerCommission || 0, 2)} and GST on
            commission {formatCurrency(data.GSTBrokerCommission || 0, 2)} ).
          </p>
        </div>

        {user.role !== "User" ? (
          <div className="flex max-w-xs">
            <Table parentClass="">
              <TableBody className="">
                <TableRow>
                  <TableCell className="w-1/2">Agent Fees</TableCell>
                  <TableCell className="px-5">
                    {formatCurrency(data.AgentFee || 0, 2)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-1/2">GST on Agent Fees</TableCell>
                  <TableCell className="px-5">
                    {formatCurrency(data.AgentFeeGST || 0, 2)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-1/2">Broker Fees</TableCell>
                  <TableCell className="px-5">
                    {formatCurrency(data.BrokerFee || 0, 2)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-1/2">GST on Broker Fees</TableCell>
                  <TableCell className="px-5">
                    {formatCurrency(data.BrokerFeeGST || 0, 2)}
                  </TableCell>
                </TableRow>
                <TableRow className="bg-[#FDD7C6] text-[#F55A1D]">
                  <TableCell className="w-1/2">Total Payable</TableCell>
                  <TableCell className="px-5">
                    {formatCurrency(data.DuePremium, 2)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="flex max-w-xs">
            <Table parentClass="">
              <TableBody className="">
                <TableRow>
                  <TableCell className="w-1/2">Admin Fees</TableCell>
                  <TableCell className="px-5">
                    {formatCurrency(
                      (data.AgentFee || 0) + (data.BrokerFee || 0),
                      2
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-1/2">GST on Admin Fees</TableCell>
                  <TableCell className="px-5">
                    {formatCurrency(
                      (data.AgentFeeGST || 0) + (data.BrokerFeeGST || 0),
                      2
                    )}
                  </TableCell>
                </TableRow>

                <TableRow className="bg-[#FDD7C6] text-[#F55A1D]">
                  <TableCell className="w-1/2">Total Payable</TableCell>
                  <TableCell className="px-5">
                    {formatCurrency(data.DuePremium, 2)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      <InsruanceDocView value={data.ProposalNo} entity="proposalNo" />

      <Stripe routes={routes} user={user} amount={String(data.DuePremium)} />
    </section>
  );
}
