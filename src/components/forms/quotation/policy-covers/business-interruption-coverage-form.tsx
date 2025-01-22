"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import NumberInput from "@/components/ui/custom/number-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  AMOUNT,
  CLAIMS_BOOLEAN,
  CLAIMS_DEFAULT,
  CLAIMS_IN_LAST_FIVE_YEARS,
  EXCESS,
  INDEMNITY_PERIOD,
  SUMEXCESS,
} from "../../data/form-fields";
import { cn, formatCurrency, parseCurrency } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import SectionHeading from "../components/section-heading";
import { BooleanRadioBtn } from "../components/boolean-radio-btn";
import ClaimsInLastFiveYears from "../components/claims-in-last-five-years";
import { UserTypes } from "@/types/user";
import {
  InsuranceFormQueryTypes,
  InsuranceFormRoutes,
} from "@/types/insurance-form";
import { useRouter } from "next/navigation";
import { InsuranceFormSetData, InsuranceFormStatus } from "@/server/insurance";
import { ToastError, ToastSuccess } from "@/components/ui/custom/toast";
import { ROUTES } from "@/config/routes";
import SaveBtn from "../components/save-btn";
import Loader from "@/components/ui/custom/Loader";

export const BusinessInterruptionCoverageSchema = z
  .object({
    IndemnityPeriod: z.enum(INDEMNITY_PERIOD, {
      message: "Indemnity Period is required",
    }),
    AnnualGrossProfit: AMOUNT("Annual Gross Profit"),
    AdditionalIncreaseCostOfWork: AMOUNT(
      "Additional Increase Cost of Work",
      true
    ),
    ClaimPreparationCost: AMOUNT("Claim Preparation Cost", true),
    Excess: SUMEXCESS,
    BusinessInterruptionClaimHistory: CLAIMS_BOOLEAN,
    Claims: z.array(CLAIMS_IN_LAST_FIVE_YEARS),
    InterestedParty: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const claimHistory = data.BusinessInterruptionClaimHistory;
    const claims = data.Claims;
    if (claimHistory === "yes" && claims.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one claim is required when claim history is yes",
        path: ["Claims"],
      });
    }
  });

type BusinessInterruptionCoverageSchemaTypes = z.infer<
  typeof BusinessInterruptionCoverageSchema
>;

interface BusinessInterruptionCoverageFormPropsTypes {
  user: UserTypes;
  formTypes: InsuranceFormQueryTypes;
  routes: InsuranceFormRoutes;
}

export default function BusinessInterruptionCoverageForm({
  user,
  formTypes,
  routes,
}: BusinessInterruptionCoverageFormPropsTypes) {
  const [meta, setMeta] = useState({ turnover: "" });
  const router = useRouter();

  const form = useForm<BusinessInterruptionCoverageSchemaTypes>({
    resolver: zodResolver(BusinessInterruptionCoverageSchema),

    async defaultValues() {
      const [res, error] = await InsuranceFormStatus<
        BusinessInterruptionCoverageSchemaTypes & {
          meta: { turnover: string };
        }
      >(user, formTypes);

      if (res && !error) {
        const { meta, ...rest } = res.data;
        setMeta(meta);

        return rest;
      }

      return {
        AnnualGrossProfit: "",
      } as BusinessInterruptionCoverageSchemaTypes;
    },
  });

  async function onSubmit(values: BusinessInterruptionCoverageSchemaTypes) {
    const [res, error] =
      await InsuranceFormSetData<BusinessInterruptionCoverageSchemaTypes>(
        user,
        formTypes,
        values
      );

    if (error) {
      ToastError(error);
    }

    if (res && !error) {
      router.push(ROUTES.DASHBOARD.QUOTATION.ROOT(routes.next!));

      ToastSuccess(res.message);
    }
  }

  const ClaimHistory = form.watch("BusinessInterruptionClaimHistory");
  const IndenmityPeriod = form.watch("IndemnityPeriod");
  const annualGross = form.watch("AnnualGrossProfit");

  useEffect(() => {
    if (ClaimHistory === "no") {
      form.setValue("Claims", []);
    }

    if (ClaimHistory === "yes") {
      form.setValue("Claims", CLAIMS_DEFAULT);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ClaimHistory]);

  const defaultMonth = ["18 Months", "24 Months", "36 Months"];

  return (
    <>
      {form.formState.isLoading ? (
        <Loader />

      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
            <div className="flex flex-col  gap-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <FormItem className="w-full md:w-1/2">
                  <FormLabel>Annual Turnover *</FormLabel>
                  <Input
                    defaultValue={formatCurrency(Number(meta.turnover))}
                    disabled
                  />
                </FormItem>

                <FormField
                  control={form.control}
                  name="IndemnityPeriod"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Indemnity Period *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Indemnity Period" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {INDEMNITY_PERIOD.map((value, key) => {
                            return (
                              <SelectItem key={key} value={value}>
                                {value}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="AnnualGrossProfit"
                  render={({ field }) => (
                    <FormItem
                      className={cn(
                        "w-full",
                        defaultMonth.includes(
                          IndenmityPeriod
                        )
                          ? "sm:w-1/2"
                          : "sm:w-full"
                      )}>
                      <FormLabel>Annual Gross Profit *</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Annual Gross Profit"
                          isMoney
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {defaultMonth.includes(IndenmityPeriod) && (
                  <FormItem className="w-full md:w-1/2">
                    <FormLabel>Gross Profit</FormLabel>
                    <Input
                      value={`${formatCurrency(
                        (Number(parseCurrency(annualGross)) / 12) *
                          Number(IndenmityPeriod.replace("Months", ""))
                      )}`}
                      disabled
                    />
                  </FormItem>
                )}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="AdditionalIncreaseCostOfWork"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Additional Increase Cost of Work</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Additional Increase Cost of Work"
                          isMoney
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ClaimPreparationCost"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Claim Preparation Cost</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Claim Preparation Cost"
                          isMoney
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="InterestedParty"
                  render={({ field }) => (
                    <FormItem className=" w-full sm:w-1/2">
                      <FormLabel>Interested Party</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Interested Party"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Excess"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Excess *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Excess" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {EXCESS.map((value, key) => {
                            return (
                              <SelectItem key={key} value={value}>
                                {formatCurrency(Number(value))}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <SectionHeading title="Business Interruption Claims History" />

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="BusinessInterruptionClaimHistory"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2 ">
                      <FormLabel>Claims In Last Five Years? *</FormLabel>
                      <FormControl>
                        <BooleanRadioBtn
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <ClaimsInLastFiveYears control={form.control} name={"Claims"} />
            </div>

            <SaveBtn
              isLoading={form.formState.isSubmitting}
              back={routes.back}
            />
          </form>
        </Form>
      )}
    </>
  );
}
