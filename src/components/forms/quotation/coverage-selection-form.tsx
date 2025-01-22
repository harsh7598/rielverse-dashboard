"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import NumberInput from "@/components/ui/custom/number-input";
import { DateTimePicker } from "@/components/ui/custom/calendar";
import { Fragment, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SearchSelect } from "./components/search-select";
import { BUISNESS_DESCRIPTION, STATE } from "../data/buisness-description";
import { Input } from "@/components/ui/input";
import { InsuranceFormSetData, InsuranceFormStatus } from "@/server/insurance";
import { UserTypes } from "@/types/user";
import {
  COVERAGES,
  COVERAGESROUTES,
  LOCATION_TYPE,
  TYPE_OF_BUSINESS,
} from "../data/form-fields";
import { InsuranceFormQueryTypes } from "@/types/insurance-form";
import { AddressSearchInput } from "./components/address-search-input";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";
import { ChainHatAddressTypes } from "@/types/chainhat";
import {
  GetAddress,
  GetAddressFullDetails,
  GetProfileDetail,
} from "@/server/chainhat";
import { ToastError, ToastSuccess } from "@/components/ui/custom/toast";
import { parseCurrency } from "@/lib/utils";
import SaveBtn from "./components/save-btn";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/custom/icons";
import Loader from "@/components/ui/custom/Loader";
import { Checkbox } from "@/components/ui/checkbox";

const BUS_DESC = Object.keys(BUISNESS_DESCRIPTION).map((value) => {
  return {
    label: value,
    value: value,
  };
});

const ManualAddress = z.object({
  streetNumber: z
    .string({
      message: "Street Number is required",
    })
    .nonempty({
      message: "Street Number is required",
    }),
  streetName: z
    .string({
      message: "Street Name is required",
    })
    .nonempty({
      message: "Street Name is required",
    }),
  streetType: z
    .string({
      message: "Street Type is required",
    })
    .nonempty({
      message: "Street Type is required",
    }),
  town: z
    .string({
      message: "Town/Suburb is required",
    })
    .nonempty({
      message: "Town/Suburb is required",
    }),
  state: z
    .string({
      message: "State/Territory is required",
    })
    .nonempty({
      message: "State/Territory is required",
    }),
  postCode: z
    .string({
      message: "Post Code is required",
    })
    .nonempty({
      message: "Post Code is required",
    }),
});

export const CoverageSchema = z.object({
  ABN: z.string().optional(),
  EffectiveDate: z.date(),
  ExpiryDate: z.date(),
  BusinessName: z.string().nonempty({
    message: "Bussiness Name is required",
  }),
  BusinessDescription: z.string().nonempty({
    message: "Business Description is required",
  }),
  ANZSICCode: z.string().nonempty({
    message: "ANZSIC Code is required",
  }),
  streetAddress: z.string(),

  isManual: z.boolean().default(false).optional(),

  address: ManualAddress.optional(),

  AnnualTurnover: z
    .string()
    .nonempty({
      message: "Annual Turnover is required",
    })
    .min(1, {
      message: "Annual Turnover must be greater than 0",
    })
    .transform((value) => {
      return parseCurrency(value);
    }),
  NumberOfEmployees: z
    .string({
      message: "Number of Employees is required",
    })
    .min(1, {
      message: "Number of Employees must be greater than 0",
    }),
  YearStarted: z
    .string()
    .min(4, {
      message: "Year Started is required",
    })
    .max(4, {
      message: "Year Started must be 4 digits",
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
  LocationType: z.enum(LOCATION_TYPE, {
    message: "Location Type is required",
  }),
  TypeOfBusiness: z.enum(TYPE_OF_BUSINESS, {
    message: "Type Of Business is required",
  }),
  Coverages: z
    .array(z.enum(COVERAGES), {
      message: "Coverages is required",
    })
    .nonempty({
      message: "Coverages is required",
    })
    .refine((data) => {
      const coverages = data;

      if (
        coverages.includes("Equipment Breakdown") &&
        !(
          coverages.includes("Business Liability") ||
          coverages.includes("Business Building and Contents")
        )
      ) {
        return false;
      }

      return true;
    }, "Please Select 'Business Liability' or 'Business Building and Contents' with 'Equipment Breakdown' to proceed further")
    .refine((data) => {
      const coverages = data;

      if (
        coverages.includes("Theft, Money and Glass") &&
        !(
          coverages.includes("Business Liability") ||
          coverages.includes("Business Building and Contents")
        )
      ) {
        return false;
      }

      return true;
    }, "Please Select 'Business Liability' or 'Business Building and Contents' with 'Theft, Money and Glass' to proceed further"),
});
// .superRefine((data, ctx) => {
//   const isManual = data.isManual;
//   if (isManual) {
//     if (!data.streetNumber) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         message: "Street Number is required",
//         path: ["streetNumber"],
//       });
//     }
//   }
// });

type CoverageSchemaTypes = z.infer<typeof CoverageSchema>;

interface CoverageSelectionFormPropsTypes {
  user: UserTypes;
  formTypes: InsuranceFormQueryTypes;
}

export default function CoverageSelectionForm({
  user,
  formTypes,
}: CoverageSelectionFormPropsTypes) {
  const router = useRouter();
  const [isABNLoading, setIsABNLoading] = useState(false);
  const [address, setAddress] = useState<ChainHatAddressTypes>({
    GNAF_PID: "",
    Address: "",
  });

  const form = useForm<CoverageSchemaTypes>({
    resolver: zodResolver(CoverageSchema),

    async defaultValues() {
      const [res, error] = await InsuranceFormStatus<CoverageSchemaTypes>(
        user,
        formTypes
      );

      if (res && !error) {
        if (res.data.streetAddress !== "") {
          const [location, error] = await GetAddressFullDetails(
            res.data.streetAddress
          );

          if (location && !error) {
            setAddress({
              Address: location.providerResponse.GNAF_Address,
              GNAF_PID: res.data.streetAddress,
            });
          }
        }
        return {
          ...res.data,
          EffectiveDate: new Date(res.data.EffectiveDate),
          ExpiryDate: new Date(res.data.ExpiryDate),
        } as CoverageSchemaTypes;
      }

      return {
        ABN: "",
        EffectiveDate: new Date(),
        ExpiryDate: new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        ),
        BusinessName: "",
        BusinessDescription: "",
        ANZSICCode: "",
        AnnualTurnover: "",
        NumberOfEmployees: "",
        YearStarted: "",
        streetAddress: "",
        TypeOfBusiness: "Business Operations Only",
      } as CoverageSchemaTypes;
    },
  });

  async function onSubmit(values: CoverageSchemaTypes) {
    const [res, error] = await InsuranceFormSetData<CoverageSchemaTypes>(
      user,
      formTypes,
      values
    );

    const query = Object.keys(COVERAGESROUTES).find((value) => {
      return values.Coverages.includes(value as keyof typeof COVERAGESROUTES);
    }) as keyof typeof COVERAGESROUTES;

    if (error) {
      ToastError(error);
    }

    if (res && !error) {
      console.log(query);

      router.push(
        ROUTES.DASHBOARD.QUOTATION.ROOT(
          query === "Business Building and Contents" ||
            ((query === "Equipment Breakdown" ||
              query === "Theft, Money and Glass") &&
              values.Coverages.includes("Business Liability"))
            ? "property-details"
            : COVERAGESROUTES[query]
        )
      );

      ToastSuccess(res.message);
    }
  }

  const effectiveDate = form.watch("EffectiveDate");
  const businessDescription = form.watch("BusinessDescription");
  const coverages = form.watch("Coverages");
  const streetAddress = form.watch("streetAddress");
  const isManual = form.watch("isManual");

  const handleABN = async () => {
    setIsABNLoading(true);
    const ABN = form.getValues("ABN");

    if (ABN && ABN.length > 0) {
      const [res, error] = await GetProfileDetail(ABN);

      const data =
        res?.providerResponse["soap:Envelope"]["soap:Body"]
          .RiskPlusResponseType;

      if (!data || error) {
        ToastError("Invalid ABN");
      }

      if (data && !error) {
        const value = [
          {
            name: "BusinessName",
            value: data.Name,
          },
          {
            name: "BusinessDescription",
            value: data.AnzSic.IndustryDescription,
          },
          {
            name: "AnnualTurnover",
            value: data.Finance.Revenue,
          },
          {
            name: "NumberOfEmployees",
            value: data.Operations.NumberOfEmployees,
          },
          {
            name: "YearStarted",
            value: data.Age.YearStarted,
          },
        ];

        value.map((val) => {
          form.setValue(val.name as keyof CoverageSchemaTypes, val.value);
          form.clearErrors(val.name as keyof CoverageSchemaTypes);
        });

        const [location, error] = await GetAddress(data.Address.AddressLine1);

        if (location && !error) {
          const [details, issue] = await GetAddressFullDetails(
            location[0].GNAF_PID
          );

          if (details && !issue) {
            setAddress({
              Address: details.providerResponse.GNAF_Address,
              GNAF_PID: location[0].GNAF_PID,
            });
            form.setValue("streetAddress", location[0].GNAF_PID);
            form.clearErrors("streetAddress");
          }
        }

        ToastSuccess("Successfully validated ABN");
      }
    }

    setIsABNLoading(false);
  };

  useEffect(() => {
    const expiryDate = new Date(effectiveDate);
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    form.setValue("ExpiryDate", expiryDate);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effectiveDate]);

  useEffect(() => {
    if (coverages) {
      if (
        coverages.includes("Business Interruption") &&
        !coverages.includes("Business Building and Contents")
      ) {
        form.setValue("Coverages", [
          ...coverages,
          "Business Building and Contents",
        ]);
      }

      if (
        coverages.includes("Portable Business Content") &&
        !coverages.includes("Business Building and Contents")
      ) {
        form.setValue("Coverages", [
          ...coverages,
          "Business Building and Contents",
        ]);
      }

      if (
        coverages.includes("Equipment Breakdown") &&
        !(
          coverages.includes("Business Liability") ||
          coverages.includes("Business Building and Contents")
        )
      ) {
        form.setError("Coverages", {
          message:
            "Please Select 'Business Liability' or 'Business Building and Contents' with 'Equipment Breakdown' to proceed further",
        });
      }

      if (
        coverages.includes("Equipment Breakdown") &&
        (coverages.includes("Business Liability") ||
          coverages.includes("Business Building and Contents"))
      ) {
        form.clearErrors("Coverages");
      }

      if (
        coverages.includes("Theft, Money and Glass") &&
        !(
          coverages.includes("Business Liability") ||
          coverages.includes("Business Building and Contents")
        )
      ) {
        form.setError("Coverages", {
          message:
            "Please Select 'Business Liability' or 'Business Building and Contents' with 'Theft, Money and Glass' to proceed further",
        });
      }

      if (
        coverages.includes("Theft, Money and Glass") &&
        (coverages.includes("Business Liability") ||
          coverages.includes("Business Building and Contents"))
      ) {
        form.clearErrors("Coverages");
      }
    }

    if (coverages && coverages.length === 0) {
      form.clearErrors("Coverages");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coverages]);

  useEffect(() => {
    if (businessDescription) {
      form.setValue(
        "ANZSICCode",
        BUISNESS_DESCRIPTION[
          businessDescription as keyof typeof BUISNESS_DESCRIPTION
        ]
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessDescription]);

  useEffect(() => {}, [isManual]);

  return (
    <>
      {form.formState.isLoading ? (
        <Loader />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
            <div className="flex flex-col  gap-4">
              <FormField
                control={form.control}
                name="ABN"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ABN</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <NumberInput
                          placeholder="ABN (Optional)"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>

                      <Button
                        type="button"
                        disabled={
                          isABNLoading || form.getValues("ABN")?.length === 0
                        }
                        className="w-full lg:w-1/4"
                        onClick={handleABN}>
                        {isABNLoading && (
                          <Icons.spinner className="mr-2 h-4 w-4 animate-spin group-hover:text-gray-500" />
                        )}
                        Validate
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="EffectiveDate"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Effective Date *</FormLabel>
                      <FormControl>
                        <DateTimePicker
                          granularity="day"
                          value={field.value}
                          onChange={field.onChange}
                          // disabled={{
                          //   before: new Date(),
                          // }}
                          yearFrom="both"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ExpiryDate"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Expiry Date *</FormLabel>
                      <FormControl>
                        <DateTimePicker
                          granularity="day"
                          value={field.value}
                          onChange={field.onChange}
                          // disabled={{
                          //   after: new Date(),
                          // }}
                          popoverDisabled
                          yearFrom="both"
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
                  name="BusinessName"
                  render={({ field }) => (
                    <FormItem className=" w-full sm:w-1/2">
                      <FormLabel>Business Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Business Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="BusinessDescription"
                  render={({ field }) => (
                    <FormItem className="space-y-2 w-full sm:w-1/2 ">
                      <FormLabel>Business Description *</FormLabel>
                      <FormControl>
                        <SearchSelect
                          onChange={field.onChange}
                          value={field.value}
                          options={BUS_DESC}
                          emptyMsg="No results"
                          placeholder="Search Business Description"
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
                  name="ANZSICCode"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>ANZSIC Code *</FormLabel>
                      <FormControl>
                        <Input placeholder="ANZSIC Code" {...field} disabled />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="AnnualTurnover"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Annual Turnover *</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Annual Turnover"
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
                  name="NumberOfEmployees"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Number of Employees *</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Number of Employees"
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
                  name="YearStarted"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Year Started *</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Business Start Year"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address *</FormLabel>
                    <FormControl>
                      <AddressSearchInput
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={isManual}
                        option={address}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isManual"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-row-reverse   gap-3 items-center justify-end">
                      <FormLabel className="text-sm">
                        Can&apos;t find your address above? I would like to
                        refer to get the address validation
                      </FormLabel>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="rounded-none"
                          disabled={streetAddress === ""}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {isManual && (
                <Fragment>
                  <div className="flex flex-col gap-4 sm:flex-row ">
                    <FormField
                      control={form.control}
                      name="address.streetNumber"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Street Number *</FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Street Number"
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
                      name="address.streetName"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Street Name *</FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Street Name"
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
                      name="address.streetType"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Street Type *</FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Street Type"
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
                      name="address.town"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Town/Suburb *</FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Town/Suburb"
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
                      name="address.state"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>State/Territory *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select State/Territory" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {STATE.map((value, key) => {
                                return (
                                  <SelectItem key={key} value={value.code}>
                                    {value.value}
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
                      name="address.postCode"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Post Code *</FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Post Code"
                              value={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </Fragment>
              )}

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="LocationType"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Location Type *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Location Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {LOCATION_TYPE.map((value) => {
                            return (
                              <SelectItem key={value} value={value}>
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
                  name="TypeOfBusiness"
                  render={({ field }) => (
                    <FormItem className="w-full sm:w-1/2">
                      <FormLabel>Type of Business *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a location type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {TYPE_OF_BUSINESS.map((value) => {
                            return (
                              <SelectItem key={value} value={value}>
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

              <FormField
                control={form.control}
                name="Coverages"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ToggleGroup
                        type="multiple"
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex flex-col gap-4 items-start">
                        <div className="space-y-2">
                          <FormLabel className="font-semibold text-2xl justify-start">
                            Policy Level Coverages
                          </FormLabel>

                          <div className="flex flex-wrap gap-2">
                            {COVERAGES.slice(0, 3).map((value, key) => (
                              <ToggleGroupItem
                                key={key}
                                value={value}
                                aria-label={`Toggle ${value}`}
                                className="bg-secondary  px-4 border-1 text-secondary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary ">
                                {value}
                              </ToggleGroupItem>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <FormLabel className="font-semibold text-2xl justify-start">
                            Business Pack Property Coverages
                          </FormLabel>

                          <div className="flex flex-wrap gap-2">
                            {COVERAGES.slice(3, 6).map((value, key) => (
                              <ToggleGroupItem
                                key={key}
                                value={value}
                                aria-label={`Toggle ${value}`}
                                className="bg-secondary px-4 border-1 text-secondary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary ">
                                {value}
                              </ToggleGroupItem>
                            ))}
                          </div>
                        </div>
                      </ToggleGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <SaveBtn isLoading={form.formState.isSubmitting} />
          </form>
        </Form>
      )}
    </>
  );
}
