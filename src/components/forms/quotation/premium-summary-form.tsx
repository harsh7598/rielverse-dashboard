"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UserTypes } from "@/types/user";
import {
  InsuranceFormQueryTypes,
  InsuranceFormRoutes,
} from "@/types/insurance-form";
import SaveBtn from "./components/save-btn";
import SectionHeading from "./components/section-heading";
import { BooleanRadioBtn } from "./components/boolean-radio-btn";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  InsuranceFormBlockQuote,
  InsuranceFormFullQuote,
  InsuranceFormStatus,
} from "@/server/insurance";
import { useState } from "react";
import { cn, formatCurrency } from "@/lib/utils";
import { ToastError, ToastSuccess } from "@/components/ui/custom/toast";
import { ROUTES } from "@/config/routes";
import { useRouter } from "next/navigation";
import NumberInput from "@/components/ui/custom/number-input";
import { AMOUNT } from "../data/form-fields";
import Loader from "@/components/ui/custom/Loader";

const PREMIUM_QUESTIONS_SCHEMA = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.enum(["yes", "no"], {
    message: "Answer is required",
  }),
});

const PremiumSummarySchema = z.object({
  DeclarationQuestions: z.array(PREMIUM_QUESTIONS_SCHEMA),
  Exemption: z.array(PREMIUM_QUESTIONS_SCHEMA),
  Liability: z
    .string({
      message: "Liability is required",
    })
    .refine(
      (value) => {
        return Number(value) <= 100;
      },
      {
        message: "Liability cannot be greater than 100.",
      }
    )
    .optional(),
  Property: z
    .string({
      message: "Property is required",
    })
    .refine(
      (value) => {
        return Number(value) <= 100;
      },
      {
        message: "Property cannot be greater than 100.",
      }
    )
    .optional(),
  BrokerFees: AMOUNT("Broker Fees"),
});

type PremiumSummarySchemaTypes = z.infer<typeof PremiumSummarySchema>;

type FieldArrayTypes = "DeclarationQuestions" | "Exemption";

type MetaTypes = {
  AgentFee: number;
  AgentFeeGST: number;
  BrokerFee: number;
  isLiability: boolean;
  isFullQuote: boolean;
  isProperty: boolean;
  BrokerFeeGST: number;
  DuePremium: number;

  BrokerCommission: number;
  GSTBrokerCommission: number;

  BrokerFees : string;
  Liability : string;
  Property : string;

  quote: {
    emergencyServiceLevy: number;
    gst: number;
    premium: number;
    stampDuty: number;
    title: string;
  }[];
};

interface PremiumSummaryFormPropsTypes {
  user: UserTypes;
  formTypes: InsuranceFormQueryTypes;
  routes: InsuranceFormRoutes;
}

export default function PremiumSummaryForm({
  user,
  formTypes,
  routes,
}: PremiumSummaryFormPropsTypes) {
  const router = useRouter();
  const [premium, setPremium] = useState<MetaTypes>();

  const [isReCalculate, setIsReCalculate] = useState(false);

  const form = useForm<PremiumSummarySchemaTypes>({
    resolver: zodResolver(PremiumSummarySchema),

    async defaultValues() {
      const [res, error] = await InsuranceFormStatus<
        PremiumSummarySchemaTypes & { meta: MetaTypes }
      >(user, formTypes);

      if (res && !error) {
        const { meta, ...rest } = res.data;
        const { BrokerFees, ...value } = rest;
        setPremium(meta);
        return {
          BrokerFees: user.role === 'User' ?  meta.BrokerFees  : BrokerFees ? BrokerFees : String(meta.BrokerFee),
          Liability: meta.Liability,
          Property: meta.Property,
          ...value,
        };
      }

      return {
        Liability: "20",
        Property: "20",
      } as PremiumSummarySchemaTypes;
    },
  });

  async function onSubmit(values: PremiumSummarySchemaTypes) {
    let error;

    if (isReCalculate) {
      const [value, issue] = await InsuranceFormFullQuote<
        PremiumSummarySchemaTypes,
        MetaTypes
      >(user, formTypes, values);

      error = issue;

      if (value && !issue) {
        ToastSuccess(value.message);
      }
      setPremium(value?.data);

      setIsReCalculate(false);
    } else {
      const [res, error] =
        await InsuranceFormBlockQuote<PremiumSummarySchemaTypes>(
          user,
          formTypes,
          values
        );

      if (res && !error) {
        router.push(ROUTES.DASHBOARD.QUOTATION.ROOT(routes.next!));
        ToastSuccess(res.message);
      }
    }

    if (error) {
      ToastError(error);
    }
  }

  const DeclarationQuestionsFields = useFieldArray({
    control: form.control,
    name: "DeclarationQuestions",
  });

  const ExemptionFields = useFieldArray({
    control: form.control,
    name: "Exemption",
  });

  const fields = [
    {
      title: "Declaration Questions",
      desc: "In the last 5 years, has your business or you or any partner or director :",
      fields: DeclarationQuestionsFields,
      name: "DeclarationQuestions",
    },
    {
      title: "Exemption",
      desc: "Any exemption :",
      fields: ExemptionFields,
      name: "Exemption",
    },
  ];

  return (
    <>
      {form.formState.isLoading ? (
        <Loader />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
            {fields.map((field, index) => (
              <div key={index} className="flex flex-col gap-6">
                {field.title === "Declaration Questions" ? (
                  <div className="flex items-center justify-between">
                    <SectionHeading title={field.title} />
                    <Button
                      className="text-sm"
                      onClick={() => {
                        field.fields.fields.map((q, i) =>
                          form.setValue(
                            `${field.name as FieldArrayTypes}.${i}.answer`,
                            "no"
                          )
                        );
                      }}>
                      No To All
                    </Button>
                  </div>
                ) : (
                  <SectionHeading title={field.title} />
                )}

                <FormLabel>{field.desc}</FormLabel>

                {field.fields.fields.map((q, i) => (
                  <FormField
                    key={i}
                    control={form.control}
                    name={`${field.name as FieldArrayTypes}.${i}.answer`}
                    render={({ field }) => (
                      <FormItem className="">
                        <div className="w-full flex flex-col  gap-2 sm:flex-row sm:items-center  justify-between sm:gap-10">
                          <FormLabel className="text-md">
                            {q.question} *
                          </FormLabel>
                          <FormControl>
                            <BooleanRadioBtn
                              value={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            ))}

            {user.role !== "User" && (
              <>
                <SectionHeading title="Commission" />

                <div className="flex flex-col gap-4 sm:flex-row ">
                  {premium?.isLiability && (
                    <FormField
                      control={form.control}
                      name="Liability"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Liability</FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Liability"
                              value={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {premium?.isProperty && (
                    <FormField
                      control={form.control}
                      name="Property"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Property</FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Property"
                              value={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
              </>
            )}

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
                  {premium?.quote.map((value, key) => (
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
                {formatCurrency(premium?.BrokerCommission || 0, 2)} and GST on
                commission{" "}
                {formatCurrency(premium?.GSTBrokerCommission || 0, 2)} ).
              </p>
            </div>

            {user.role !== "User" ? (
              <div className="flex max-w-xs">
                <Table parentClass="">
                  <TableBody className="">
                    <TableRow>
                      <TableCell className="w-1/2">Agent Fees</TableCell>
                      <TableCell className="px-5">
                        {formatCurrency(premium?.AgentFee || 0, 2)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="w-1/2">GST on Agent Fees</TableCell>
                      <TableCell className="px-5">
                        {formatCurrency(premium?.AgentFeeGST || 0, 2)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="w-1/2">Broker Fees</TableCell>
                      <TableCell>
                        <FormField
                          control={form.control}
                          name="BrokerFees"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormControl>
                                <NumberInput
                                  placeholder="Broker Fees"
                                  value={field.value}
                                  onChange={field.onChange}
                                  isMoney
                                  className=" shadow-none"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="w-1/2">
                        GST on Broker Fees
                      </TableCell>
                      <TableCell className="px-5">
                        {formatCurrency(premium?.BrokerFeeGST || 0, 2)}
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-[#FDD7C6] text-[#F55A1D]">
                      <TableCell className="w-1/2">Total Payable</TableCell>
                      <TableCell className="px-5">
                        {formatCurrency(premium?.DuePremium || 0, 2)}
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
                          (premium?.AgentFee || 0) +
                            Number(premium?.BrokerFees || 0),
                          2
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="w-1/2">GST on Admin Fees</TableCell>
                      <TableCell className="px-5">
                        {formatCurrency(
                          (premium?.AgentFeeGST || 0) +
                            Number(premium?.BrokerFeeGST || 0),
                          2
                        )}
                      </TableCell>
                    </TableRow>

                    <TableRow className="bg-[#FDD7C6] text-[#F55A1D]">
                      <TableCell className="w-1/2">Total Payable</TableCell>
                      <TableCell className="px-5">
                        {formatCurrency(premium?.DuePremium || 0, 2)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            )}

            <SaveBtn
              isReCalculate
              isSubmitDisabled={!premium?.isFullQuote}
              isReCalculateTrigger={isReCalculate}
              setIsReCalculateTrigger={setIsReCalculate}
              isLoading={form.formState.isSubmitting}
              back={routes.back}
              btn="Submit"
            />
          </form>
        </Form>
      )}
    </>
  );
}
