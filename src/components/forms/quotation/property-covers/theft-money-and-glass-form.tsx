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
  EXCESS,
  SUMEXCESS,
  THEFT_MONEY_AND_GLASS,
  THEFT_SECURITY,
  THEFT_SECURITY_EXTRA,
  TYPE_OF_GLASS,
  TYPE_OF_PLATE,
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { InsuranceFormSetData, InsuranceFormStatus } from "@/server/insurance";
import { useRouter } from "next/navigation";
import { ToastError, ToastSuccess } from "@/components/ui/custom/toast";
import { ROUTES } from "@/config/routes";
import SaveBtn from "../components/save-btn";
import Loader from "@/components/ui/custom/Loader";

const TheftSchema = z.object({
  TheftTobaccoExcluding: AMOUNT("Theft (Tobacco Excluding)"),
  TheftTobacco: AMOUNT("Theft (Tobacco)"),
  TheftExcess: SUMEXCESS,
  TheftSecurity: z.enum(THEFT_SECURITY, {
    message: "Theft Security is required",
  }),
  TheftSecurityExtra: z
    .array(
      z.enum(THEFT_SECURITY_EXTRA, {
        message: "Theft Security is required",
      })
    )
    .optional(),
});

const MoneySchema = z.object({
  MoneyOnPremisesDuringBusinessHours: AMOUNT(
    "Money On Premises During Business Hours",
    true
  ),
  MoneyOnPremisesOutsideBusinessHours: AMOUNT(
    "Money On Premises Outside Business Hours",
    true
  ),
  MoneyOnPremisesInALockedSafe: AMOUNT(
    "Money On Premises In A Locked Safe",
    true
  ),
  MoneyInTransit: AMOUNT("Money In Transit", true),
  MoneyInAPrivateResidence: AMOUNT("Money In A Private Residence", true),
  MoneyExcess: SUMEXCESS.optional(),
});

const GlassSchema = z.object({
  IlluminatedSignsSumInsured: AMOUNT("Illuminated Signs Sum Insured", true),
  Percentage: z
    .string({
      message: "Percentage of Glass Above the Ground Floor is required",
    })
    .min(1, {
      message: "Percentage of Glass Above the Ground Floor is required",
    })
    .refine(
      (value) => {
        return Number(value) <= 100;
      },
      {
        message:
          "Percentage of Glass Above the Ground Floor cannot be greater than 100.",
      }
    )
    .refine(
      (value) => {
        return Number(value) > 0;
      },
      {
        message: "Percentage of Glass Above the Ground Floor cannot be 0.",
      }
    ),
  MoneyExcess: SUMEXCESS.optional(),
  TypeOfGlass: z.enum(TYPE_OF_GLASS, {
    message: "Type of glass is required",
  }),
  TypeOfPlate: z.enum(TYPE_OF_PLATE, {
    message: "Plate or Non-Plate Glass is required",
  }),
});

export const TheftMoneyAndGlassSchema = z
  .object({
    Sections: z
      .array(z.enum(THEFT_MONEY_AND_GLASS), {
        message: "Please select at least one coverage.",
      })
      .nonempty({
        message: "Please select at least one coverage.",
      }),

    Theft: TheftSchema.optional(), // Default to optional here

    Money: MoneySchema.optional(), // Default to optional here

    Glass: GlassSchema.optional(), // Default to optional here

    InterestedParty: z.string().optional(),
    TheftMoneyAndGlassClaimHistory: CLAIMS_BOOLEAN,
    Claims: z.array(CLAIMS_IN_LAST_FIVE_YEARS),
  })

  .superRefine((data, ctx) => {

    const claimHistory = data.TheftMoneyAndGlassClaimHistory;
    const claims = data.Claims;

    const sections = data.Sections;
    const money = data.Money;

    const allFieldsEmpty =
      money &&
      Object.entries(money)
        .filter(([key]) => key !== "MoneyExcess")
        .every(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ([_, value]) => value === undefined || value === null || value === ""
        );

    if (sections.includes("Money") && allFieldsEmpty) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Please enter at least one of the Sum Insured value In Money Section.",
        path: ["Sections"],
      });
    }

    if (claimHistory === "yes" && claims.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one claim is required when claim history is yes",
        path: ["Claims"],
      });
    }
  });

type TheftMoneyAndGlassSchemaTypes = z.infer<typeof TheftMoneyAndGlassSchema>;

interface TheftMoneyAndGlassFormPropsTypes {
  user: UserTypes;
  formTypes: InsuranceFormQueryTypes;
  routes: InsuranceFormRoutes;
}

export default function TheftMoneyAndGlassForm({
  user,
  formTypes,
  routes,
}: TheftMoneyAndGlassFormPropsTypes) {
  const router = useRouter();

  const form = useForm<TheftMoneyAndGlassSchemaTypes>({
    resolver: zodResolver(TheftMoneyAndGlassSchema),

    async defaultValues() {
      const [res, error] =
        await InsuranceFormStatus<TheftMoneyAndGlassSchemaTypes>(
          user,
          formTypes
        );

      if (res && !error) {
        return res.data;
      }

      return {} as TheftMoneyAndGlassSchemaTypes;
    },
  });

  async function onSubmit(values: TheftMoneyAndGlassSchemaTypes) {
    const [res, error] =
      await InsuranceFormSetData<TheftMoneyAndGlassSchemaTypes>(
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

  const ClaimHistory = form.watch("TheftMoneyAndGlassClaimHistory");
  const sections = form.watch("Sections");
  const TheftSecurity = form.watch("Theft.TheftSecurity");

  useEffect(() => {
    if (ClaimHistory === "no") {
      form.setValue("Claims", []);
    }

    if (ClaimHistory === "yes") {
      form.setValue("Claims", CLAIMS_DEFAULT);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ClaimHistory]);

  useEffect(() => {
    if (TheftSecurity && TheftSecurity === "No Security") {
      form.setValue("Theft.TheftSecurityExtra", []);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TheftSecurity]);

  useEffect(() => {
    if (sections) {
      const Theft = sections.includes("Theft");
      const Money = sections.includes("Money");
      const Glass = sections.includes("Glass");

      const theftValue = form.getValues("Theft");
      const moneyValue = form.getValues("Money");
      const glassValue = form.getValues("Glass");

      if (!Theft) {
        form.resetField("Theft");
      }

      if (theftValue && !Theft) {
        form.setValue("Theft", undefined )
      }

      if (!Money) {
        form.resetField("Money");
      }

      if (moneyValue && !Money) {
        form.setValue("Money", undefined);
      }

      if (!Glass) {
        form.resetField("Glass");
      }

      if (glassValue && !Glass) {
        form.setValue("Glass", undefined);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

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
                name="Sections"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ToggleGroup
                        type="multiple"
                        onValueChange={field.onChange}
                        value={field.value}>
                        {THEFT_MONEY_AND_GLASS.map((value, key) => (
                          <ToggleGroupItem
                            key={key}
                            value={value}
                            aria-label={`Toggle ${value}`}
                            className="bg-secondary w-1/3 px-4 border-1 text-secondary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary ">
                            {value}
                          </ToggleGroupItem>
                        ))}
                      </ToggleGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {sections && sections.includes("Theft") && (
                <>
                  <SectionHeading title="Theft" />

                  <div className="flex flex-col gap-4 sm:flex-row ">
                    <FormField
                      control={form.control}
                      name="Theft.TheftTobaccoExcluding"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Theft (Tobacco Excluding) *</FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Theft (Tobacco Excluding) *"
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
                      name="Theft.TheftTobacco"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Theft (Tobacco) *</FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Theft (Tobacco) *"
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

                  <FormField
                    control={form.control}
                    name="Theft.TheftSecurity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Security *</FormLabel>
                        <FormControl>
                          <ToggleGroup
                            type="single"
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-wrap md:flex-nowrap gap-2">
                            {THEFT_SECURITY.map((value, key) => (
                              <ToggleGroupItem
                                key={key}
                                value={value}
                                aria-label={`Toggle ${value}`}
                                className="bg-secondary w-[48%] md:w-1/3 px-4 border-1 text-secondary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary ">
                                {value}
                              </ToggleGroupItem>
                            ))}
                          </ToggleGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {TheftSecurity && !TheftSecurity.includes("No Security") && (
                    <FormField
                      control={form.control}
                      name="Theft.TheftSecurityExtra"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <ToggleGroup
                              type="multiple"
                              onValueChange={field.onChange}
                              value={field.value}
                              className="flex flex-col md:flex-wrap md:flex-row gap-2">
                              {THEFT_SECURITY_EXTRA.map((value, key) => (
                                <ToggleGroupItem
                                  key={key}
                                  value={value}
                                  aria-label={`Toggle ${value}`}
                                  className="bg-secondary w-full md:w-[48%] px-4 border-1 text-secondary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary ">
                                  {value}
                                </ToggleGroupItem>
                              ))}
                            </ToggleGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <div className="flex flex-col gap-4 sm:flex-row ">
                    <FormField
                      control={form.control}
                      name="Theft.TheftExcess"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Theft Excess *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a Theft Excess *" />
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
                </>
              )}

              {sections && sections.includes("Money") && (
                <>
                  <SectionHeading title="Money" />

                  <div className="flex flex-col gap-4 sm:flex-row ">
                    <FormField
                      control={form.control}
                      name="Money.MoneyOnPremisesDuringBusinessHours"
                      render={({ field }) => {
                        return (
                          <FormItem className="w-full sm:w-1/2">
                            <FormLabel>
                              Money On Premises During Business Hours
                            </FormLabel>
                            <FormControl>
                              <NumberInput
                                placeholder="Money On Premises During Business Hours"
                                isMoney
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="Money.MoneyOnPremisesOutsideBusinessHours"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>
                            Money On Premises Outside Business Hours
                          </FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Money On Premises Outside Business Hours"
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
                      name="Money.MoneyOnPremisesInALockedSafe"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>
                            Money On Premises In A Locked Safe
                          </FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Money On Premises In A Locked Safe"
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
                      name="Money.MoneyInTransit"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Money In Transit</FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Money In Transit"
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
                      name="Money.MoneyInAPrivateResidence"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Money In A Private Residence</FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Money In A Private Residence"
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
                      name="Money.MoneyExcess"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Money Excess</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a Money Excess" />
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
                </>
              )}

              {sections && sections.includes("Glass") && (
                <>
                  <SectionHeading title="Glass" />

                  <div className="flex flex-col gap-4 sm:flex-row ">
                    <FormItem className="w-full md:w-1/2">
                      <FormLabel>Glass Sum Insured</FormLabel>
                      <Input defaultValue={"Replacement Value"} disabled />
                    </FormItem>

                    <FormField
                      control={form.control}
                      name="Glass.IlluminatedSignsSumInsured"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Illuminated Signs Sum Insured</FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Illuminated Signs Sum Insured"
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
                      name="Glass.Percentage"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>
                            Percentage of Glass Above the Ground Floor *
                          </FormLabel>
                          <FormControl>
                            <NumberInput
                              placeholder="Percentage of Glass Above the Ground Floor *"
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
                      name="Glass.MoneyExcess"
                      render={({ field }) => (
                        <FormItem className="w-full sm:w-1/2">
                          <FormLabel>Glass Excess</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a Glass Excess" />
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

                  <FormField
                    control={form.control}
                    name="Glass.TypeOfGlass"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type Of Glass *</FormLabel>
                        <FormControl>
                          <ToggleGroup
                            type="single"
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-wrap md:flex-nowrap gap-2">
                            {TYPE_OF_GLASS.map((value, key) => (
                              <ToggleGroupItem
                                key={key}
                                value={value}
                                aria-label={`Toggle ${value}`}
                                className="bg-secondary w-[48%] md:w-1/3 px-4 border-1 text-secondary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary ">
                                {value}
                              </ToggleGroupItem>
                            ))}
                          </ToggleGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="Glass.TypeOfPlate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Plate or Non-Plate Glass *</FormLabel>
                        <FormControl>
                          <ToggleGroup
                            type="single"
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-wrap md:flex-nowrap gap-2">
                            {TYPE_OF_PLATE.map((value, key) => (
                              <ToggleGroupItem
                                key={key}
                                value={value}
                                aria-label={`Toggle ${value}`}
                                className="bg-secondary w-[48%] px-4 border-1 text-secondary-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary ">
                                {value}
                              </ToggleGroupItem>
                            ))}
                          </ToggleGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

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

              <SectionHeading title="Theft, Money and Glass Claims History" />

              <div className="flex flex-col gap-4 sm:flex-row ">
                <FormField
                  control={form.control}
                  name="TheftMoneyAndGlassClaimHistory"
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
