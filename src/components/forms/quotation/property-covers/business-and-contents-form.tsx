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

import { UserTypes } from "@/types/user";
import { BooleanRadioBtn } from "../components/boolean-radio-btn";
import {
  AMOUNT,
  CLAIMS_BOOLEAN,
  CLAIMS_DEFAULT,
  CLAIMS_IN_LAST_FIVE_YEARS,
  EXCESS,
  SUMEXCESS,
} from "../../data/form-fields";
import { formatCurrency } from "@/lib/utils";
import SectionHeading from "../components/section-heading";
import ClaimsInLastFiveYears from "../components/claims-in-last-five-years";
import { useEffect } from "react";
import {
  InsuranceFormQueryTypes,
  InsuranceFormRoutes,
} from "@/types/insurance-form";
import { InsuranceFormSetData, InsuranceFormStatus } from "@/server/insurance";
import { ToastError, ToastSuccess } from "@/components/ui/custom/toast";
import { ROUTES } from "@/config/routes";
import { useRouter } from "next/navigation";
import SaveBtn from "../components/save-btn";
import Loader from "@/components/ui/custom/Loader";

export const BusinessAndContentsSchema = z
  .object({
    BuildingLimitAndExcess_Insured: AMOUNT("Sum Insured"),
    BuildingLimitAndExcess_Excess: SUMEXCESS,

    ContentsLimitAndExcess_Insured: AMOUNT("Sum Insured"),
    ContentsLimitAndExcess_Excess: SUMEXCESS,

    StockLimitAndExcess_Insured: AMOUNT("Sum Insured"),
    StockLimitAndExcess_Excess: SUMEXCESS,

    BuildingAndContentClaimHistory: CLAIMS_BOOLEAN,

    Claims: z.array(CLAIMS_IN_LAST_FIVE_YEARS),
  })
  .superRefine((data, ctx) => {
    const claimHistory = data.BuildingAndContentClaimHistory;
    const claims = data.Claims;
    if (claimHistory === "yes" && claims.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one claim is required when claim history is yes",
        path: ["Claims"],
      });
    }
  });

type BusinessAndContentsSchemaTypes = z.infer<typeof BusinessAndContentsSchema>;

interface BusinessAndContentsFormPropsTypes {
  user: UserTypes;
  formTypes: InsuranceFormQueryTypes;
  routes: InsuranceFormRoutes;
}

export default function BusinessAndContentsForm({
  user,
  formTypes,
  routes,
}: BusinessAndContentsFormPropsTypes) {
  const router = useRouter();

  const form = useForm<BusinessAndContentsSchemaTypes>({
    resolver: zodResolver(BusinessAndContentsSchema),

    async defaultValues() {
      const [res, error] =
        await InsuranceFormStatus<BusinessAndContentsSchemaTypes>(
          user,
          formTypes
        );

      if (res && !error) {
        return res.data as BusinessAndContentsSchemaTypes;
      }

      return {
        BuildingLimitAndExcess_Insured: "",
        BuildingLimitAndExcess_Excess: "250",
        ContentsLimitAndExcess_Insured: "",
        ContentsLimitAndExcess_Excess: "1000",
        StockLimitAndExcess_Insured: "",
        StockLimitAndExcess_Excess: "1000",
      } as BusinessAndContentsSchemaTypes;
    },
  });

  async function onSubmit(values: BusinessAndContentsSchemaTypes) {
    const [res, error] =
      await InsuranceFormSetData<BusinessAndContentsSchemaTypes>(
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

  const ClaimHistory = form.watch("BuildingAndContentClaimHistory");

  useEffect(() => {
    if (ClaimHistory === "no") {
      form.setValue("Claims", []);
    }

    if (ClaimHistory === "yes") {
      form.setValue("Claims", CLAIMS_DEFAULT);
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
              <SectionHeading title="Building Limits and Excess" />

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="BuildingLimitAndExcess_Insured"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Sum Insured *</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Sum Insured"
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
                  name="BuildingLimitAndExcess_Excess"
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

              <SectionHeading title="Contents Limit and Excess" />

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="ContentsLimitAndExcess_Insured"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Sum Insured *</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Sum Insured"
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
                  name="ContentsLimitAndExcess_Excess"
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

              <SectionHeading title="Stock Limits and Excess" />

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="StockLimitAndExcess_Insured"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Sum Insured *</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Sum Insured"
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
                  name="StockLimitAndExcess_Excess"
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

              <SectionHeading title="Building and Content Claim History" />

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="BuildingAndContentClaimHistory"
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
