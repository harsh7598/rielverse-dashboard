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
import {
  AMOUNT,
  CLAIMS_BOOLEAN,
  CLAIMS_DEFAULT,
  CLAIMS_IN_LAST_FIVE_YEARS,
  COVER,
  EXCESS,
  SUMEXCESS,
} from "../../data/form-fields";
import {
  InsuranceFormQueryTypes,
  InsuranceFormRoutes,
} from "@/types/insurance-form";
import { useEffect } from "react";
import SectionHeading from "../components/section-heading";
import { formatCurrency } from "@/lib/utils";
import ClaimsInLastFiveYears from "../components/claims-in-last-five-years";
import { BooleanRadioBtn } from "../components/boolean-radio-btn";
import { useRouter } from "next/navigation";
import { InsuranceFormSetData, InsuranceFormStatus } from "@/server/insurance";
import { ToastError, ToastSuccess } from "@/components/ui/custom/toast";
import { ROUTES } from "@/config/routes";
import SaveBtn from "../components/save-btn";
import Loader from "@/components/ui/custom/Loader";

export const EquipmentBreakdownSchema = z
  .object({
    BlanketCover: z.enum(COVER, {
      message: "Select a Blanket Cover",
    }),
    DeteriorationOfStock: AMOUNT("Deterioration Of Stock", true),
    IncreasedCostOfWorking: AMOUNT("Increased Cost Of Working", true),
    NumberOfMachines: AMOUNT("Number Of Machines"),

    MachineryBreakdownExcess: SUMEXCESS.optional(),

    Computers: AMOUNT("Computers", true),

    PortableElectronicEquipment: AMOUNT("Portable Electronic Equipment", true),

    OtherElectronicEquipment: AMOUNT("Other Electronic Equipment", true),

    ElectronicEquipmentExcess: SUMEXCESS.optional(),

    EquipmentBreakdownClaimHistory: CLAIMS_BOOLEAN,

    Claims: z.array(CLAIMS_IN_LAST_FIVE_YEARS),
  })
  .superRefine((data, ctx) => {
    const claimHistory = data.EquipmentBreakdownClaimHistory;
    const claims = data.Claims;
    if (claimHistory === "yes" && claims.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one claim is required when claim history is yes",
        path: ["Claims"],
      });
    }
  });

type EquipmentBreakdownSchemaTypes = z.infer<typeof EquipmentBreakdownSchema>;

interface EquipmentBreakdownFormPropsTypes {
  user: UserTypes;
  formTypes: InsuranceFormQueryTypes;
  routes: InsuranceFormRoutes;
}

export default function EquipmentBreakdownForm({
  user,
  formTypes,
  routes,
}: EquipmentBreakdownFormPropsTypes) {
  const router = useRouter();

  const form = useForm<EquipmentBreakdownSchemaTypes>({
    resolver: zodResolver(EquipmentBreakdownSchema),

    async defaultValues() {
      const [res, error] =
        await InsuranceFormStatus<EquipmentBreakdownSchemaTypes>(
          user,
          formTypes
        );

      if (res && !error) {
        return res.data;
      }

      return {
        DeteriorationOfStock: "",
        NumberOfMachines: "",
        IncreasedCostOfWorking: "",

        OtherElectronicEquipment: "",
        Computers: "",
        PortableElectronicEquipment: "",
      } as EquipmentBreakdownSchemaTypes;
    },
  });

  async function onSubmit(values: EquipmentBreakdownSchemaTypes) {
    const [res, error] =
      await InsuranceFormSetData<EquipmentBreakdownSchemaTypes>(
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

  const ClaimHistory = form.watch("EquipmentBreakdownClaimHistory");

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
              <SectionHeading title="Machinery Breakdown" />

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="BlanketCover"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Blanket Cover *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Blanket Cover" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {COVER.map((value, key) => {
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
                  name="DeteriorationOfStock"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Deterioration of Stock</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Deterioration of Stock"
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
                  name="IncreasedCostOfWorking"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Increased Cost of Working</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Increased Cost of Working"
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
                  name="NumberOfMachines"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Number of Machines *</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Number of Machines"
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
                  name="MachineryBreakdownExcess"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Excess</FormLabel>
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

              <SectionHeading title="Electronic Equipment" />

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="Computers"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Computers</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Computers"
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
                  name="PortableElectronicEquipment"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Portable Electronic Equipment</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Portable Electronic Equipment"
                          value={field.value}
                          onChange={field.onChange}
                          isMoney
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
                  name="OtherElectronicEquipment"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Other Electronic Equipment</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Other Electronic Equipment"
                          value={field.value}
                          onChange={field.onChange}
                          isMoney
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ElectronicEquipmentExcess"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Excess</FormLabel>
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
                  name="EquipmentBreakdownClaimHistory"
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
