"use client";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

interface SearchSelectPropsTypes {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void;
  options: {
    value: string;
    label: string;
  }[];
  placeholder: string;
  emptyMsg: string;
}

export function SearchSelect({
  value,
  onChange,
  options,
  placeholder,
  emptyMsg,
}: SearchSelectPropsTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const [label, setLabel] = useState(value || "");

  return (
    <Popover open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger asChild className="w-full">
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            "w-full justify-between font-normal text-sm",
            !value && "text-muted-foreground"
          )}>
          <span className="text-wrap line-clamp-1 w-[200px]  text-start">
            {label || value || placeholder}
          </span>

          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandList>
            <CommandEmpty>{emptyMsg}</CommandEmpty>
            <CommandGroup>
              {options.map((item, key) => (
                <CommandItem
                  value={item.value}
                  key={key}
                  onSelect={(value) => {
                    onChange(value);
                    setIsOpen(false);
                    setLabel(item.label);
                  }}>
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      item.value === value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
