"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";

export function CopyIcon() {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4V3C4 2.20435 4.31607 1.44129 4.87868 0.87868C5.44129 0.31607 6.20435 0 7 0H11.586C12.1163 0.000113308 12.6251 0.210861 13.0001 0.585893M13.0001 0.585893L17.414 4.99979C17.414 4.99982 17.414 4.99975 17.414 4.99979C17.789 5.37476 17.9999 5.88345 18 6.41379V13C18 13.7957 17.6839 14.5587 17.1213 15.1213C16.5587 15.6839 15.7957 16 15 16H14V17C14 17.7957 13.6839 18.5587 13.1213 19.1213C12.5587 19.6839 11.7957 20 11 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7957 0 17V7C0 6.20435 0.31607 5.44129 0.87868 4.87868C1.44129 4.31607 2.20435 4 3 4H4M12 16V17C12 17.2652 11.8946 17.5196 11.7071 17.7071C11.5196 17.8946 11.2652 18 11 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H4V13C4 13.7957 4.31607 14.5587 4.87868 15.1213C5.44129 15.6839 6.20435 16 7 16H12Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ClipBoard({ url }: { url: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <TooltipProvider>
      <Tooltip open={open}>
        <TooltipTrigger
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
            navigator.clipboard.writeText(url);
          }}
          className="flex items-center justify-center text-primary w-3 h-3 ">
          <Copy />
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Copied</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
