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
import { FURTHER_QUESTIONS } from "../data/further-questions";
import SectionHeading from "./components/section-heading";
import { BooleanRadioBtn } from "./components/boolean-radio-btn";

import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import {
  InsuranceFormCreateQuote,
  InsuranceFormStatus,
} from "@/server/insurance";
import { useState } from "react";
import { ToastError, ToastSuccess } from "@/components/ui/custom/toast";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/custom/Loader";

const GetOptions = (
  field: keyof typeof FURTHER_QUESTIONS,
  code: number,
  isShow: boolean,
  values: {
    id: number;
    question: string;
    answer: "yes" | "no";
  }[]
) => {
  return isShow
    ? FURTHER_QUESTIONS[field]
        .filter((q) => q.ANZSIC.includes(code) || q.ANZSIC.length === 0)
        .map((q) => {
          const value =
            values.length !== 0 ? values.find((v) => v.id === q.id) : undefined;
          return {
            id: q.id,
            question: q.question,
            answer: value ? value.answer : undefined,
          };
        })
    : [];
};

const FURTHER_QUESTIONS_SCHEMA = z.object({
  id: z.number(),
  question: z.string(),
  answer: z.enum(["yes", "no"], {
    message: "Answer is required",
  }),
});

interface FurtherAndEndorsementsQuestionsFormPropsTypes {
  user: UserTypes;
  formTypes: InsuranceFormQueryTypes;
  routes: InsuranceFormRoutes;
}

type FieldArrayTypes =
  | "BusinessAndContents"
  | "TheftMoneyAndGlass"
  | "BusinessLiabilityCoverage";

type Meta = {
  meta: {
    effectiveDate: boolean;
    BusinessAndContents: boolean;
    TheftMoneyAndGlass: boolean;
    BusinessLiabilityCoverage: boolean;
    ANZSICCode: number;
  };
};

export default function FurtherAndEndorsementsQuestionsForm({
  user,
  formTypes,
  routes,
}: FurtherAndEndorsementsQuestionsFormPropsTypes) {
  const router = useRouter();
  const [meta, setMeta] = useState<Omit<Meta["meta"], "ANZSICCode">>({
    effectiveDate: false,
    BusinessAndContents: false,
    TheftMoneyAndGlass: false,
    BusinessLiabilityCoverage: false,
  });

  const FurtherAndEndorsementsQuestionsSchema = z
    .object({
      DisclaimerAgreedTag: z.boolean().optional(),
      BusinessAndContents: z.array(FURTHER_QUESTIONS_SCHEMA).optional(),
      TheftMoneyAndGlass: z.array(FURTHER_QUESTIONS_SCHEMA).optional(),
      BusinessLiabilityCoverage: z.array(FURTHER_QUESTIONS_SCHEMA).optional(),
    })
    .superRefine((data, ctx) => {
      if (meta.effectiveDate && !data.DisclaimerAgreedTag) {
        ctx.addIssue({
          message: "Required",
          code: z.ZodIssueCode.custom,
          path: ["DisclaimerAgreedTag"],
        });
      }
    });

  type FurtherAndEndorsementsQuestionsSchemaTypes = z.infer<
    typeof FurtherAndEndorsementsQuestionsSchema
  >;

  const form = useForm<FurtherAndEndorsementsQuestionsSchemaTypes>({
    resolver: zodResolver(FurtherAndEndorsementsQuestionsSchema),

    async defaultValues() {
      const [res, error] = await InsuranceFormStatus<
        FurtherAndEndorsementsQuestionsSchemaTypes & Meta
      >(user, formTypes);

      if (res && !error) {
        const { meta, ...value } = res.data;
        const { ANZSICCode, ...data } = meta;
        setMeta(data);

        return {
          DisclaimerAgreedTag: res.data.DisclaimerAgreedTag,
          BusinessAndContents: GetOptions(
            "Business and Contents",
            ANZSICCode,
            meta.BusinessAndContents,
            value["BusinessAndContents"] || []
          ),
          TheftMoneyAndGlass: GetOptions(
            "Theft, Money and Glass",
            ANZSICCode,
            meta.TheftMoneyAndGlass,
            value["TheftMoneyAndGlass"] || []
          ),
          BusinessLiabilityCoverage: GetOptions(
            "Business Liability",
            ANZSICCode,
            meta.BusinessLiabilityCoverage,
            value["BusinessLiabilityCoverage"] || []
          ),
        } as FurtherAndEndorsementsQuestionsSchemaTypes;
      }

      return {} as FurtherAndEndorsementsQuestionsSchemaTypes;
    },
  });

  async function onSubmit(values: FurtherAndEndorsementsQuestionsSchemaTypes) {
    const [res, error] =
      await InsuranceFormCreateQuote<FurtherAndEndorsementsQuestionsSchemaTypes>(
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

  const BusinessAndContentsFields = useFieldArray({
    control: form.control,
    name: "BusinessAndContents",
  });

  const TheftMoneyAndGlassFields = useFieldArray({
    control: form.control,
    name: "TheftMoneyAndGlass",
  });

  const BusinessLiabilityCoverageFields = useFieldArray({
    control: form.control,
    name: "BusinessLiabilityCoverage",
  });

  const fields = [
    {
      title: "Business and Contents",
      fields: BusinessAndContentsFields,
      name: "BusinessAndContents",
    },
    {
      title: "Theft, Money and Glass",
      fields: TheftMoneyAndGlassFields,
      name: "TheftMoneyAndGlass",
    },
    {
      title: "Business Liability Coverage",
      fields: BusinessLiabilityCoverageFields,
      name: "BusinessLiabilityCoverage",
    },
  ];

  return (
    <>
      {form.formState.isLoading ? (
        <Loader />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
            {meta.effectiveDate && (
              <FormField
                control={form.control}
                name="DisclaimerAgreedTag"
                render={({ field }) => (
                  <FormItem className=" space-y-2 rounded-md border p-4 shadow">
                    <div className="flex flex-row  gap-5 items-center">
                      <FormLabel className="text-sm">
                        You have created a transaction where the proposed start
                        date is backdated. By choosing to proceed, you
                        acknowledge that 1) There are no known claims in the
                        period between the start date and when this transaction
                        is bound or 2) This transaction is to replace an
                        existing IAMI policy with no gap in cover. You accept
                        that IAMI reserves it rights to cancel as null and void
                        backdated policies which do not meet either of these
                        criteria. *
                      </FormLabel>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="rounded-none"
                        />
                      </FormControl>
                    </div>
                    <div>
                      <Link
                        href={ROUTES.DASHBOARD.QUOTATION.ROOT(
                          "coverage-selection"
                        )}
                        className="text-primary text-sm underline">
                        Go To Coverage Selection and update the Effective Date
                      </Link>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {fields.map(
              (field, index) =>
                meta[
                  field.name as keyof Omit<
                    Meta["meta"],
                    "ANZSICCode" | "effectiveDate"
                  >
                ] &&
                field.fields.fields.length !== 0 && (
                  <div key={index} className="flex flex-col gap-6">
                    <SectionHeading title={field.title} />

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
                )
            )}

            <SaveBtn
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
