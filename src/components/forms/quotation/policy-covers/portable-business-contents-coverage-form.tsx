"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
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
  CATEGORY_OPTIONS,
  CLAIMS_BOOLEAN,
  CLAIMS_DEFAULT,
  CLAIMS_IN_LAST_FIVE_YEARS,
  EXCESS,
  SUMEXCESS,
} from "../../data/form-fields";
import { formatCurrency } from "@/lib/utils";

import { useEffect } from "react";
import SectionHeading from "../components/section-heading";
import { BooleanRadioBtn } from "../components/boolean-radio-btn";
import ClaimsInLastFiveYears from "../components/claims-in-last-five-years";
import { TrashIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
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

export const PortableBusinessContentsCoverageSchema = z
  .object({
    BlanketCoverContent: AMOUNT("Blanket Cover Content"),
    BlanketCoverStock: AMOUNT("Blanket Cover Stock"),

    Excess: SUMEXCESS,
    InterestedParty: z.string().optional(),

    PortableBusinessClaimHistory: CLAIMS_BOOLEAN,
    Claims: z.array(CLAIMS_IN_LAST_FIVE_YEARS),

    PortableSpecifiedItems: z
      .array(
        z.object({
          category: z
            .enum(CATEGORY_OPTIONS, {
              message: "Category is required",
            })
            .optional(),
          description: z.string().optional(),
          value: AMOUNT("Value", true),
        })
      )
      .optional(),
  })
  .superRefine((data, ctx) => {
    const claimHistory = data.PortableBusinessClaimHistory;
    const claims = data.Claims;
    if (claimHistory === "yes" && claims.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one claim is required when claim history is yes",
        path: ["Claims"],
      });
    }
  });

type PortableBusinessContentsCoverageSchemaTypes = z.infer<
  typeof PortableBusinessContentsCoverageSchema
>;

interface PortableBusinessContentsCoverageFormPropsTypes {
  user: UserTypes;
  formTypes: InsuranceFormQueryTypes;
  routes: InsuranceFormRoutes;
}

export default function PortableBusinessContentsCoverageForm({
  user,
  formTypes,
  routes,
}: PortableBusinessContentsCoverageFormPropsTypes) {
  const router = useRouter();

  const form = useForm<PortableBusinessContentsCoverageSchemaTypes>({
    resolver: zodResolver(PortableBusinessContentsCoverageSchema),

    async defaultValues() {
      const [res, error] =
        await InsuranceFormStatus<PortableBusinessContentsCoverageSchemaTypes>(
          user,
          formTypes
        );

      if (res && !error) {
        return res.data;
      }

      return {
        BlanketCoverContent: "",
        BlanketCoverStock: "",
        PortableSpecifiedItems: [
          {
            description: "",
          },
        ],
      } as PortableBusinessContentsCoverageSchemaTypes;
    },
  });

  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: "PortableSpecifiedItems",
  });

  const handleAddField = () => {
    append({
      value: "",
    });
  };

  const handleRemoveField = (index: number) => {
    remove(index);
  };

  async function onSubmit(values: PortableBusinessContentsCoverageSchemaTypes) {

    const [res, error] =
      await InsuranceFormSetData<PortableBusinessContentsCoverageSchemaTypes>(
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

  const ClaimHistory = form.watch("PortableBusinessClaimHistory");

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
              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="BlanketCoverContent"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>
                        Blanket Cover Content (Up to $2,500 per Item) *
                      </FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Blanket Cover Content"
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
                  name="BlanketCoverStock"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>
                        Blanket Cover Stock (Up to $2,500 per Item) *
                      </FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Blanket Cover Stock"
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

              <SectionHeading title="Portable Business Contents Specified Items" />

              <div className="flex flex-col gap-6  py-2 ">
                {fields.map((item, key) => (
                  <div key={key} className="w-full flex flex-col gap-2">
                    <div className="flex w-full  items-center justify-between  ">
                      <span className=" text-primary font-medium ">
                        ITEM {key + 1}
                      </span>
                      {fields.length > 1 && (
                        <Button
                          onClick={() => handleRemoveField(key)}
                          type="button"
                          variant={"ghost"}
                          className="flex items-center justify-center  text-destructive hover:bg-destructive hover:text-white">
                          <TrashIcon className="h-6 w-6 " />
                          <span>Delete</span>
                        </Button>
                      )}
                    </div>

                    <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name={`PortableSpecifiedItems.${key}.category`}
                        render={({ field }) => (
                          <FormItem className="">
                            <FormLabel>Category</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a Category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {CATEGORY_OPTIONS.map((value, index) => {
                                  return (
                                    <SelectItem key={index} value={value}>
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

                      <FormField
                        control={form.control}
                        name={`PortableSpecifiedItems.${key}.description`}
                        render={({ field }) => {
                          return (
                            <FormItem className="sm:col-span-2 md:col-span-1">
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <Input placeholder="Description" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />

                      <FormField
                        control={form.control}
                        name={`PortableSpecifiedItems.${key}.value`}
                        render={({ field }) => {
                          return (
                            <FormItem className="sm:col-span-2 md:col-span-1">
                              <FormLabel>Replacement Value</FormLabel>
                              <FormControl>
                                <NumberInput
                                  placeholder="Replacement Value"
                                  value={field.value}
                                  onChange={field.onChange}
                                  isMoney
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  </div>
                ))}

                <Button
                  className="w-full sm:w-1/4"
                  type="button"
                  variant={"secondary"}
                  onClick={handleAddField}>
                  +Add Another
                </Button>
              </div>

              <SectionHeading title="Portable Business Contents Claims History" />

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="PortableBusinessClaimHistory"
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
