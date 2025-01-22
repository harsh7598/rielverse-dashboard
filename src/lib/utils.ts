import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (value: number , toFixed : number = 0) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: toFixed,
    minimumFractionDigits: 0,
  }).format(value);
};


export const parseCurrency = (formattedValue: string): string => {
  return formattedValue.replace(/[^0-9.-]+/g, "");
};

export const generateSixYears = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 6 }, (_, i) => String(currentYear - i));
};