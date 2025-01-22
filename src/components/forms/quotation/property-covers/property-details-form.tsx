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

import { Input } from "@/components/ui/input";
import { UserTypes } from "@/types/user";
import {
  FLOOR,
  FLOOR_CONSTRUCTION,
  ROOF_CONSTRUCTION,
  WALL_CONSTRUCTION,
} from "../../data/form-fields";
import FormTooltipLabel from "@/components/forms/quotation/components/form-tooltip-label";
import { InsuranceFormSetData, InsuranceFormStatus } from "@/server/insurance";
import {
  InsuranceFormQueryTypes,
  InsuranceFormRoutes,
} from "@/types/insurance-form";
import { GetAddressFullDetails } from "@/server/chainhat";
import { useState } from "react";
import { ROUTES } from "@/config/routes";
import { ToastError, ToastSuccess } from "@/components/ui/custom/toast";
import { useRouter } from "next/navigation";
import SectionHeading from "../components/section-heading";
import SaveBtn from "../components/save-btn";
import Loader from "@/components/ui/custom/Loader";

export const PropertyDetailsSchema = z.object({
  YearBuilt: z
    .string()
    .min(4, {
      message: "Year Built is required",
    })
    .max(4, {
      message: "Year Built must be 4 digits",
    })
    .refine(
      (value) => {
        const currentYear = new Date().getFullYear();
        return Number(value) <= currentYear;
      },
      {
        message: `Year Started must be less than or equal to ${new Date().getFullYear()}`,
      }
    ),
  FloorConstruction: z.enum(FLOOR_CONSTRUCTION, {
    message: "Floor Construction is required",
  }),
  RoofConstruction: z.enum(ROOF_CONSTRUCTION,
    {
      message: "Roof Construction is required",
    }
  ),
  WallContruction: z.enum(
    WALL_CONSTRUCTION,
    {
      message: "Wall Construction is required",
    }
  ),
  EPS: z
    .string({
      message: "Sandwich Panel or EPS is required",
    })
    .min(1, {
      message: "Sandwich Panel or EPS is required",
    })
    .refine(
      (value) => {
        return Number(value) <= 100;
      },
      {
        message: "Sandwich Panel or EPS cannot be greater than 100.",
      }
    )
    .refine(
      (value) => {
        return Number(value) > 0;
      },
      {
        message: "Sandwich Panel or EPS cannot be 0.",
      }
    ),
  NumberOfStories: z
    .string()
    .min(1, {
      message: "Number of Stories is required",
    })
    .refine(
      (value) => {
        return Number(value) <= 20;
      },
      {
        message: "Number of Stories cannot be greater than 100.",
      }
    ),

  HeritageListing: z.enum(["yes", "no"], {
    message: "Heritage Listing is required",
  }),

  LowestFloorYouOccupy: z.enum(FLOOR, {
    message: "Lowest Floor You Occupy is required",
  }),

  InterestedParty: z.string().optional(),
});

type PropertyDetailsSchemaTypes = z.infer<typeof PropertyDetailsSchema>;

interface PropertyDetailsFormPropsTypes {
  user: UserTypes;
  formTypes: InsuranceFormQueryTypes;
  routes: InsuranceFormRoutes;
}

export default function PropertyDetailsForm({
  user,
  formTypes,
  routes,
}: PropertyDetailsFormPropsTypes) {
  const router = useRouter();
  const [extra, setExtra] = useState({
    address: "",
    occupation: "",
  });

  const form = useForm<PropertyDetailsSchemaTypes>({
    resolver: zodResolver(PropertyDetailsSchema),

    async defaultValues() {
      const [res, error] = await InsuranceFormStatus<
        PropertyDetailsSchemaTypes & {
          meta: { address: string; occupation: string };
        }
      >(user, formTypes);

      if (res && !error) {
        const { meta, ...rest } = res.data;

        const [location, error] = await GetAddressFullDetails(meta.address);

        if (location && !error) {
          setExtra({
            address: location.providerResponse.GNAF_Address,
            occupation: meta.occupation,
          });
        }

        return {
          ...rest,
        } as PropertyDetailsSchemaTypes;
      }

      return {
        YearBuilt: "",
        EPS: "",
        NumberOfStories: "",
        HeritageListing: "no",
        InterestedParty: "",
      } as PropertyDetailsSchemaTypes;
    },
  });

  async function onSubmit(values: PropertyDetailsSchemaTypes) {
    const [res, error] = await InsuranceFormSetData<PropertyDetailsSchemaTypes>(
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

  return (
    <>
      {form.formState.isLoading ? (
                <Loader />
        
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
            <div className="flex flex-col  gap-4">
              <SectionHeading title="Property 1 Address Details" />

              <div className="flex flex-col gap-4 md:flex-row">
                <FormItem className="w-full md:w-1/2">
                  <FormLabel>Address Lookup *</FormLabel>
                  <Input defaultValue={extra.address} disabled />
                </FormItem>
                <FormItem className="w-full md:w-1/2">
                  <FormLabel>Occupation *</FormLabel>
                  <Input defaultValue={extra.occupation} disabled />
                </FormItem>
              </div>

              <SectionHeading title="Property 1 Construction Details" />

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="YearBuilt"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Year Built *</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Year Built"
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
                  name="FloorConstruction"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Floor Construction *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Floor Construction" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {FLOOR_CONSTRUCTION.map((value, key) => {
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
                  name="RoofConstruction"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Roof Construction *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Roof Construction" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ROOF_CONSTRUCTION.map(
                            (value, key) => {
                              return (
                                <SelectItem key={key} value={value}>
                                  {value}
                                </SelectItem>
                              );
                            }
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="WallContruction"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Wall Construction *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Wall Construction" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {WALL_CONSTRUCTION.map(
                            (value, key) => {
                              return (
                                <SelectItem key={key} value={value}>
                                  {value}
                                </SelectItem>
                              );
                            }
                          )}
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
                  name="EPS"
                  render={({ field }) => (
                    <FormItem className="w-full  sm:w-1/2">
                      <FormTooltipLabel
                        label="Sandwich Panel or EPS (%) *"
                        tooltip="Need Info"
                      />
                      <FormControl>
                        <NumberInput
                          placeholder="Sandwich Panel or EPS (%)"
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
                  name="NumberOfStories"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Number of Stories *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Number of Stories" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 20 }, (_, i) => i + 1).map(
                            (value, key) => {
                              return (
                                <SelectItem key={key} value={String(value)}>
                                  {value}
                                </SelectItem>
                              );
                            }
                          )}
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
                  name="HeritageListing"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Heritage Listing *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              className="first-letter:uppercase"
                              placeholder="Select Heritage Listing"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {["yes", "no"].map((value, key) => {
                            return (
                              <SelectItem
                                className="first-letter:uppercase"
                                key={key}
                                value={value}>
                                {value.charAt(0).toUpperCase() + value.slice(1)}
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
                  name="LowestFloorYouOccupy"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Lowest Floor You Occupy *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Lowest Floor You Occupy" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {FLOOR.map((value, key) => {
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
            </div>

            <SaveBtn
              back={routes.back}
              isLoading={form.formState.isSubmitting}
            />
          </form>
        </Form>
      )}
    </>
  );
}
