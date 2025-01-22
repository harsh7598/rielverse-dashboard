import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/custom/icons";
import { ROUTES } from "@/config/routes";
import Link from "next/link";

interface SaveBtnPropsTypes {
  isLoading: boolean;
  isReCalculate?: boolean;
  isReCalculateTrigger?: boolean;
  setIsReCalculateTrigger?: (value: boolean) => void;
  btn?: "Save" | "Submit";
  back?: string;
  isSubmitDisabled?: boolean;
}

export default function SaveBtn({
  back,
  isLoading,
  isReCalculateTrigger,
  setIsReCalculateTrigger,
  isReCalculate,
  btn = "Save",
  isSubmitDisabled,
}: SaveBtnPropsTypes) {
  return (
    <div className="flex justify-end gap-2">
      {isReCalculate && (
        <Button
          type={isReCalculateTrigger ? "submit" : "button"}
          variant={"outline"}
          onClick={() => setIsReCalculateTrigger!(true)}
          disabled={isReCalculateTrigger && isLoading}
          className="w-full lg:w-1/3">
          {isReCalculateTrigger && isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin group-hover:text-gray-500" />
          )}
          Re-Calculate Premium
        </Button>
      )}

      {back && (
        <Link
          href={ROUTES.DASHBOARD.QUOTATION.ROOT(back)}
          className="w-full lg:w-1/4">
          <Button
            type="button"
            variant={"secondary"}
            disabled={isLoading}
            className="w-full">
            Back
          </Button>
        </Link>
      )}

      <Button
        type="submit"
        disabled={(isLoading && !isReCalculateTrigger) || isSubmitDisabled}
        className="w-full lg:w-1/4">
        {isLoading && !isReCalculateTrigger && (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin group-hover:text-gray-500" />
        )}
        {btn}
      </Button>
    </div>
  );
}
