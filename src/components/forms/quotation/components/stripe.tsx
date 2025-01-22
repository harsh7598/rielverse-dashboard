"use client";
import * as React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { InsuranceFormRoutes } from "@/types/insurance-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import {
  InsurancePaymentCreate,
  InsurancePaymentMonthly,
} from "@/server/payment";
import { UserTypes } from "@/types/user";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

import { Icons } from "@/components/ui/custom/icons";
import { ToastError } from "@/components/ui/custom/toast";
import { useRouter } from "next/navigation";

interface StripePropsTypes {
  routes: InsuranceFormRoutes;
  user: UserTypes;
  amount: string;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Stripe({ routes, user, amount }: StripePropsTypes) {
  const router = useRouter();
  const [showCheckout, setShowCheckout] = React.useState(false);
  const [options, setOptions] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPeriodLoading, setIsPeriodLoading] = React.useState(false);

  const handleShowCheckout = async () => {
    setIsLoading(true);
    const [res, error] = await InsurancePaymentCreate<{ clientSecret: string }>(
      user,
      amount
    );

    if (error || !res) {
      console.error(error);
      setShowCheckout(false);
    } else {
      setOptions({ clientSecret: res.data.clientSecret });
      setIsLoading(false);
      setShowCheckout(true);
    }
  };

  const handlePeriodPayment = async () => {
    setIsPeriodLoading(true);
    const [res, error] = await InsurancePaymentMonthly(user);

    if (error) {
      ToastError(error);
    }

    if (res) {
      router.push(ROUTES.DASHBOARD.QUOTATION.ROOT("coverage-selection"));
      sessionStorage.setItem("isPaymentMonthly", "true");
    }

    setIsPeriodLoading(false);
  };

  return (
    <div>
      <div className="flex justify-end gap-2">
        <Link
          href={ROUTES.DASHBOARD.QUOTATION.ROOT(routes.back!)}
          className="w-full lg:w-1/4">
          <Button
            type="button"
            variant={"secondary"}
            disabled={false}
            className="w-full">
            Back
          </Button>
        </Link>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full lg:w-1/4"
          onClick={handleShowCheckout}>
          {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin group-hover:text-gray-500" />
          )}
          Pay Now
        </Button>
      </div>

      {showCheckout && (
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <Sheet
            open={showCheckout}
            onOpenChange={(open) => setShowCheckout(open)}>
            <SheetTitle hidden>Payment</SheetTitle>
            <SheetContent className="overflow-y-auto space-y-5">
              <Button className="w-full mt-10" disabled={isPeriodLoading} onClick={handlePeriodPayment}>
                {isPeriodLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin group-hover:text-gray-500" />
                )}
                Pay Monthly
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  OR
                </span>
              </div>
              <EmbeddedCheckout />
            </SheetContent>
          </Sheet>
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
}
