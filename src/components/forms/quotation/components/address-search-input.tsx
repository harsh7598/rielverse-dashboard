import {
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import {
  useState,
  useRef,
  useCallback,
  type KeyboardEvent,
  useEffect,
} from "react";

import { useDebouncedCallback } from "use-debounce";

import { cn } from "@/lib/utils";
import { ChainHatAddressTypes } from "@/types/chainhat";
import { Input } from "@/components/ui/input";
import { GetAddress } from "@/server/chainhat";

export type Option = ChainHatAddressTypes;

type AutoCompleteProps = {
  option: Option;
  value?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
};

export const AddressSearchInput = ({
  option,
  value,
  disabled,
  onValueChange,
}: AutoCompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [options, setOptions] = useState<Option[]>([option]);

  const [isOpen, setOpen] = useState(false);

  const [selected, setSelected] = useState<string>(option.GNAF_PID || "");

  const [isLoading, setIsLoading] = useState(false);

  const [inputText, setInputText] = useState(option.Address || "");
  const [text, setText] = useState(option.Address || "");

  const inputTextDebounced = useDebouncedCallback(async (value: string) => {
    setInputText(value);
    setIsLoading(true);

    const [result, error] = await GetAddress(value);

    if (typeof result === null || error) {
      setOptions([]);
    }

    if (typeof result !== "undefined" && !error) {
      setOptions(result as Option[]);
    }

    setIsLoading(false);
  }, 1000);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true);
      }

      // This is not a default behaviour of the <input /> field
      if (event.key === "Enter" && input.value !== "") {
        const optionToSelect = options.find(
          (option) => option.GNAF_PID === input.value
        );
        if (optionToSelect) {
          setSelected(optionToSelect.GNAF_PID);
          setInputText(optionToSelect.Address);
        }
      }

      if (event.key === "Escape") {
        input.blur();
      }
    },
    [isOpen, options, setInputText]
  );

  const handleBlur = useCallback(() => {
    setOpen(false);
    onValueChange?.(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      setText(selectedOption.Address);
      setInputText(selectedOption.Address);
      setSelected(selectedOption.GNAF_PID);

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur();
      }, 0);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onValueChange]
  );

  const clearBtn = () => {
    setText("");
    setSelected("");
    setInputText("");
  };

  useEffect(() => {
    if (value === undefined) {
      clearBtn();
    }
  }, [value]);

  useEffect(() => {
    if(text === '')  {
      clearBtn()
    }
  }, [text]);

  useEffect(() => {

    if (option.Address && !options[0].Address) {
      setOptions([option]);
      setText(option.Address);
      setSelected(option.GNAF_PID);
      setInputText(option.Address);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option]);

  return (
    <CommandPrimitive onKeyDown={handleKeyDown}>
      <div>
        <Input
          ref={inputRef}
          value={text}
          disabled={disabled}
          onBlurCapture={handleBlur}
          onFocus={() => setOpen(true)}
          onBlur={handleBlur}
          onFocusCapture={() => setOpen(true)}
          onInput={(e) => {
            const inp = e.currentTarget.value ?? "";
            setText(inp);
            inputTextDebounced(inp);
          }}
          placeholder={"Search Street Address"}
        />
      </div>
      <div className="relative mt-1">
        <div
          className={cn(
            "animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-xl bg-white outline-none",
            isOpen ? "block" : "hidden"
          )}>
          <CommandList className="rounded-lg ring-1 ring-slate-200">
            {text === "" ? (
              <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                Enter an Address to Search
              </CommandPrimitive.Empty>
            ) : (text !== inputText && text !== "") || isLoading ? (
              <CommandPrimitive.Loading className="flex items-center justify-center py-5 ">
                <div className="flex h-full items-center justify-center space-x-2 ">
                  <span className="sr-only">Loading...</span>
                  <div className="h-3 w-3 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></div>
                  <div className="h-3 w-3 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]"></div>
                  <div className="h-3 w-3 animate-bounce rounded-full bg-primary"></div>
                </div>
              </CommandPrimitive.Loading>
            ) : options.length === 0 ? (
              <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                No Address Found
              </CommandPrimitive.Empty>
            ) : (
              <CommandGroup>
                {options.map((option, key) => {
                  return (
                    <CommandItem
                      key={key}
                      value={option.GNAF_PID}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      onSelect={() => handleSelectOption(option)}
                      className={cn("flex w-full items-center gap-2")}>
                      {option.Address}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            )}
          </CommandList>
        </div>
      </div>
    </CommandPrimitive>
  );
};
