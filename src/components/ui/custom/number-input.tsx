import * as React from "react";

import { cn, formatCurrency } from "@/lib/utils";
import { Input } from "../input";

const NumberInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & {
    isMoney?: boolean;
    value?: string;
    onChange?: (value: string) => void;
  }
>(({ className, isMoney, value, ...props }, ref) => {
  const [text, setText] = React.useState(
    isMoney ? (value ? String(formatCurrency(Number(value))) : "") : value || ""
  );

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    let value = input.value.replace(/[^0-9]/g, "");

    if (value.length > 1 && value[0] === "0") {
      value = "0";
    }

    setText(
      isMoney ? (value ? String(formatCurrency(Number(value))) : "") : value
    );
  };

  React.useEffect(() => {
    if (value && value !== '$' && !text) {

      setText(
        isMoney
          ? value
            ? String(formatCurrency(Number(value)))
            : ""
          : value || ""
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, isMoney]);

  return (
    <Input
      ref={ref}
      value={text}
      {...props}
      className={cn("", className)}
      onInput={handleInput}
    />
  );
});
NumberInput.displayName = "NumberInput";

export default NumberInput;
