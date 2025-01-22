"use client";

import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface BooleanRadioBtnPropsTypes {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void;
}

export function BooleanRadioBtn({
  value,
  onChange,
}: BooleanRadioBtnPropsTypes) {
  return (
    <RadioGroup
      onValueChange={onChange}
      value={value}
      className="flex gap-4">
      <FormItem className="flex items-center space-x-3 space-y-0">
        <FormControl>
          <RadioGroupItem value="yes" />
        </FormControl>
        <FormLabel className="font-normal">Yes</FormLabel>
      </FormItem>
      <FormItem className="flex items-center space-x-3 space-y-0">
        <FormControl>
          <RadioGroupItem value="no" />
        </FormControl>
        <FormLabel className="font-normal">No</FormLabel>
      </FormItem>
    </RadioGroup>
  );
}
