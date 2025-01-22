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
  CLAIMS_DEFAULT_LI,
  CLAIMS_IN_LAST_FIVE_YEARS_LI,
  EXCESS,
  LIABILITY,
  SUMEXCESS,
  SUMLIABILITY,
  TAXAUDIT,
  TAXAUDITCOVER,
} from "../../data/form-fields";
import { formatCurrency } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import FormTooltipLabel from "@/components/forms/quotation/components/form-tooltip-label";
import { useEffect, useState } from "react";
import SectionHeading from "../components/section-heading";
import { BooleanRadioBtn } from "../components/boolean-radio-btn";
import ClaimsInLastFiveYears from "../components/claims-in-last-five-years";
import { UserTypes } from "@/types/user";
import {
  InsuranceFormQueryTypes,
  InsuranceFormRoutes,
} from "@/types/insurance-form";
import { InsuranceFormSetData, InsuranceFormStatus } from "@/server/insurance";
import { useRouter } from "next/navigation";
import { ToastError, ToastSuccess } from "@/components/ui/custom/toast";
import { ROUTES } from "@/config/routes";
import SaveBtn from "../components/save-btn";
import Loader from "@/components/ui/custom/Loader";

export const BusinessLiabilityCoverageSchema = z
  .object({
    LimitsOfLiability: SUMLIABILITY,
    AnnualWages: AMOUNT("Annual Wages"),
    Property: AMOUNT(
      "Property in Your Physical or Legal Care, Custody or Control"
    ),
    Contractor: AMOUNT("Contractor or Labour Hire Payments"),
    TaxAudit: TAXAUDITCOVER,
    Excess: SUMEXCESS,
    InterestedParty: z.string().optional(),
    BuildingLiabilityClaimHistory: CLAIMS_BOOLEAN,
    Claims: z.array(CLAIMS_IN_LAST_FIVE_YEARS_LI),
  })
  .superRefine((data, ctx) => {
    const claimHistory = data.BuildingLiabilityClaimHistory;
    const claims = data.Claims;
    if (claimHistory === "yes" && claims.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one claim is required when claim history is yes",
        path: ["Claims"],
      });
    }
  });

type BusinessLiabilityCoverageSchemaTypes = z.infer<
  typeof BusinessLiabilityCoverageSchema
>;

interface BusinessLiabilityCoverageFormPropsTypes {
  user: UserTypes;
  formTypes: InsuranceFormQueryTypes;
  routes: InsuranceFormRoutes;
}

export default function BusinessLiabilityCoverageForm({
  user,
  formTypes,
  routes,
}: BusinessLiabilityCoverageFormPropsTypes) {
  const [meta, setMeta] = useState({ turnover: "", employees: "" });
  const router = useRouter();

  const form = useForm<BusinessLiabilityCoverageSchemaTypes>({
    resolver: zodResolver(BusinessLiabilityCoverageSchema),

    async defaultValues() {
      const [res, error] = await InsuranceFormStatus<
        BusinessLiabilityCoverageSchemaTypes & {
          meta: { turnover: string; employees: string };
        }
      >(user, formTypes);

      if (res && !error) {
        const { meta, ...rest } = res.data;
        setMeta(meta);

        return rest;
      }

      return {
        LimitsOfLiability: "5000000",
        AnnualWages: "",
        Property: "",
        InterestedParty: "",
        Contractor: "",
      } as BusinessLiabilityCoverageSchemaTypes;
    },
  });

  async function onSubmit(values: BusinessLiabilityCoverageSchemaTypes) {
    const [res, error] =
      await InsuranceFormSetData<BusinessLiabilityCoverageSchemaTypes>(
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

  const ClaimHistory = form.watch("BuildingLiabilityClaimHistory");

  useEffect(() => {
    if (ClaimHistory === "no") {
      form.setValue("Claims", []);
    }

    if (ClaimHistory === "yes") {
      form.setValue("Claims", CLAIMS_DEFAULT_LI);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ClaimHistory]);

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
                  <Input defaultValue={formatCurrency(Number(meta.turnover))}  disabled />
                </FormItem>
                <FormItem className="w-full md:w-1/2">
                  <FormLabel>Number of Employees *</FormLabel>
                  <Input value={meta.employees} disabled />
                </FormItem>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="LimitsOfLiability"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Limit of Liability *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Limit of Liability" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {LIABILITY.map((value, key) => {
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

                <FormField
                  control={form.control}
                  name="AnnualWages"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Annual Wages *</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Annual Wages"
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
                  name="Property"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormTooltipLabel
                        tooltip="Property in Your Physical or Legal Care, Custody or Control"
                        label="Property *"
                      />
                      <FormControl>
                        <NumberInput
                          placeholder="Property in Your Physical or Legal Care, Custody or Control"
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
                  name="Contractor"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>
                        Contractor or Labour Hire Payments *
                      </FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Contractor or Labour Hire Payments"
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
                  name="TaxAudit"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Tax Audit Sum Insured *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Tax Audit Sum Insured" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {TAXAUDIT.map((value, key) => {
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

                <FormField
                  control={form.control}
                  name="Excess"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Excess for each Claim *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Excess for each Claim" />
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
              </div>

              <SectionHeading title="Business Liability Coverage Loss History" />

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="BuildingLiabilityClaimHistory"
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

              <ClaimsInLastFiveYears
                control={form.control}
                name={"Claims"}
                CLAIMTYPE="LIABILITY"
              />
            </div>

            <SaveBtn isLoading={form.formState.isSubmitting} back={routes.back} />


          </form>
        </Form>
      )}
    </>
  );
}
