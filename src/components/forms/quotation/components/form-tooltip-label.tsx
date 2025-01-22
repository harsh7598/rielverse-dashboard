import { Info } from "lucide-react";
import { FormLabel } from "../../../ui/form";
import { TooltipProvider } from "../../../ui/tooltip";
import { HybridTooltip, HybridTooltipContent, HybridTooltipTrigger, TouchProvider } from "../../../ui/custom/hybrid-tooltip";

export default function FormTooltipLabel({
  label,
  tooltip,
}: {
  label: string;
  tooltip: string;
}) {

  return (
    <div className="relative">
      <FormLabel className="h-[18px]">{label}</FormLabel>
      <TouchProvider>
        <TooltipProvider>
          <HybridTooltip>
            <HybridTooltipTrigger
              asChild
              className="absolute right-0 top-1/2 -translate-y-1/2">
              <Info className="w-3.5 h-3.5" />
            </HybridTooltipTrigger>
            <HybridTooltipContent>
              <p>{tooltip}</p>
            </HybridTooltipContent>
          </HybridTooltip>
        </TooltipProvider>
      </TouchProvider>
    </div>
  );
}
