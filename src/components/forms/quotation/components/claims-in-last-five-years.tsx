import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateSixYears } from "@/lib/utils";
import { TrashIcon } from "lucide-react";
import * as React from "react";
import {
  ArrayPath,
  Control,
  FieldArray,
  FieldValues,
  Path,
  useFieldArray,
} from "react-hook-form";
import { CLAIM_TYPES, FIVE_YEAR_LIABILITY } from "../../data/form-fields";
import NumberInput from "@/components/ui/custom/number-input";

interface ClaimsInLastFiveYearsPropsTypes<
  TFieldValues extends FieldValues,
  TName extends ArrayPath<TFieldValues>
> {
  control: Control<TFieldValues, TName>;
  name: TName;
  CLAIMTYPE?: "ALL" | "LIABILITY";
}

export default function ClaimsInLastFiveYears<
  TFieldValues extends FieldValues = FieldValues,
  TName extends ArrayPath<TFieldValues> = ArrayPath<TFieldValues>
>({
  control,
  name,
  CLAIMTYPE = "ALL",
}: ClaimsInLastFiveYearsPropsTypes<TFieldValues, TName>) {
  const { fields, remove, append } = useFieldArray({
    control: control,
    name: name,
  });

  const handleAddField = () => {
    append({
      YearOfLoss: "",
      ClaimType: "",
      Value: "",
    } as FieldArray<TFieldValues, TName>);
  };

  const handleRemoveField = (index: number) => {
    remove(index);
  };

  return (
    fields.length !== 0 && (
      <div className="flex flex-col gap-6  py-2 ">
        {fields.map((item, key) => (
          <div
            key={key}
            className="w-full flex flex-col gap-2"
            data-aria={`claim-${key + 1}`}>
            <div className="flex w-full  items-center justify-between  ">
              <span className=" text-primary font-medium ">
                CLAIM {key + 1}
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
                control={control}
                name={`${name}.${key}.YearOfLoss` as Path<TFieldValues>}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year Of Loss *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Year Of Loss" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {generateSixYears().map((value, index) => {
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
                control={control}
                name={`${name}.${key}.ClaimType` as Path<TFieldValues>}
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Claim Type *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Claim Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                          (CLAIMTYPE === "ALL"
                            ? CLAIM_TYPES
                            : FIVE_YEAR_LIABILITY)
                        .map((value, index) => {
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
                control={control}
                name={`${name}.${key}.Value` as Path<TFieldValues>}
                render={({ field }) => {
                  return (
                    <FormItem className="sm:col-span-2 md:col-span-1">
                      <FormLabel>Value *</FormLabel>
                      <FormControl>
                        <NumberInput
                          placeholder="Value"
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
          +Add Another Claim
        </Button>
      </div>
    )
  );
}
