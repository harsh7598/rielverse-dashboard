import { QoutationSearchParams } from "@/app/dashboard/quotation/page";
import CoverageSelectionForm from "@/components/forms/quotation/coverage-selection-form";
import FurtherAndEndorsementsQuestionsForm from "@/components/forms/quotation/further-and-endorsements-questions-form";
import BusinessInterruptionCoverageForm from "@/components/forms/quotation/policy-covers/business-interruption-coverage-form";
import BusinessLiabilityCoverageForm from "@/components/forms/quotation/policy-covers/business-liability-coverage-form";
import PortableBusinessContentsCoverageForm from "@/components/forms/quotation/policy-covers/portable-business-contents-coverage-form";

import BusinessAndContentsForm from "@/components/forms/quotation/property-covers/business-and-contents-form";
import EquipmentBreakdownForm from "@/components/forms/quotation/property-covers/equipment-breakdown-form";
import PropertyDetailsForm from "@/components/forms/quotation/property-covers/property-details-form";
import TheftMoneyAndGlassForm from "@/components/forms/quotation/property-covers/theft-money-and-glass-form";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimeLine, TimelineEvent } from "@/components/ui/custom/timeline";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";
import { InsuranceStatus } from "@/server/insurance";
import {
  InsuranceFormQueryTypes,
  InsuranceFormRoutes,
} from "@/types/insurance-form";
import { UserTypes } from "@/types/user";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import ResetBtn from "./components/reset-btn";
import PremiumSummaryForm from "@/components/forms/quotation/premium-summary-form";
import QuoteSummaryForm from "@/components/forms/quotation/quote-summary-form";
import AlertWrapper from "./components/alert-wrapper";

interface QuotationViewPropsTypes {
  searchParams: QoutationSearchParams;
  user: UserTypes;
}

const completedRoutes = (data: TimelineEvent[]): number => {
  return data.reduce((count, item) => {
    if (
      item.status === "completed" &&
      !["Business Details", "Property Covers", "Policy Covers"].includes(
        item.title
      )
    ) {
      count += 1;
    }
    if (item.children) {
      count += completedRoutes(item.children);
    }
    return count;
  }, 0);
};

const findRouteDetails = (
  items: TimelineEvent[],
  query: string
): { title: string | null; disabled: boolean } => {
  for (const item of items) {
    if (item.query === query) {
      return { title: item.title, disabled: item.disabled || false };
    }
    if (item.children) {
      const result = findRouteDetails(item.children, query);
      if (result.title) {
        return result;
      }
    }
  }
  return { title: null, disabled: false };
};

function getBackAndNext(
  array: string[],
  searchString: InsuranceFormQueryTypes
): InsuranceFormRoutes {
  const index = array.indexOf(searchString);
  if (index === -1) {
    return { back: undefined, next: undefined };
  }

  const back = index > 0 ? array[index - 1] : undefined;
  const next = index < array.length - 1 ? array[index + 1] : undefined;

  return { back: back, next: next };
}

export default async function QuotationView({
  searchParams,
  user,
}: QuotationViewPropsTypes) {
  const [TIMELINEITEMS, error] = await InsuranceStatus(user);
  const formDetails = findRouteDetails(
    TIMELINEITEMS?.data.status as TimelineEvent[],
    searchParams.form
  );

  if (
    TIMELINEITEMS &&
    (!TIMELINEITEMS.data.routes.includes(searchParams.form) ||
      formDetails.disabled) &&
    !error
  ) {
    return redirect(ROUTES.DASHBOARD.QUOTATION.ROOT("coverage-selection"));
  }

  const form = {
    "coverage-selection": (
      <CoverageSelectionForm user={user} formTypes={"coverage-selection"} 
       />
    ),
    "property-details": (
      <PropertyDetailsForm
        user={user}
        formTypes="property-details"
        routes={getBackAndNext(TIMELINEITEMS!.data.routes, "property-details")}
      />
    ),
    "business-and-contents": (
      <BusinessAndContentsForm
        user={user}
        formTypes="business-and-contents"
        routes={getBackAndNext(
          TIMELINEITEMS!.data.routes,
          "business-and-contents"
        )}
      />
    ),
    "equipment-breakdown": (
      <EquipmentBreakdownForm
        user={user}
        formTypes="equipment-breakdown"
        routes={getBackAndNext(
          TIMELINEITEMS!.data.routes,
          "equipment-breakdown"
        )}
      />
    ),
    "theft-money-and-glass": (
      <TheftMoneyAndGlassForm
        user={user}
        formTypes="theft-money-and-glass"
        routes={getBackAndNext(
          TIMELINEITEMS!.data.routes,
          "theft-money-and-glass"
        )}
      />
    ),
    "business-liability-coverage": (
      <BusinessLiabilityCoverageForm
        user={user}
        formTypes="business-liability-coverage"
        routes={getBackAndNext(
          TIMELINEITEMS!.data.routes,
          "business-liability-coverage"
        )}
      />
    ),
    "business-interruption-coverage": (
      <BusinessInterruptionCoverageForm
        user={user}
        formTypes="business-interruption-coverage"
        routes={getBackAndNext(
          TIMELINEITEMS!.data.routes,
          "business-interruption-coverage"
        )}
      />
    ),
    "portable-business-contents-coverage": (
      <PortableBusinessContentsCoverageForm
        user={user}
        formTypes="portable-business-contents-coverage"
        routes={getBackAndNext(
          TIMELINEITEMS!.data.routes,
          "portable-business-contents-coverage"
        )}
      />
    ),
    "further-and-endorsements-questions": (
      <FurtherAndEndorsementsQuestionsForm
        user={user}
        formTypes="further-and-endorsements-questions"
        routes={getBackAndNext(
          TIMELINEITEMS!.data.routes,
          "further-and-endorsements-questions"
        )}
      />
    ),
    "premium-summary": (
      <PremiumSummaryForm
        user={user}
        formTypes="premium-summary"
        routes={getBackAndNext(TIMELINEITEMS!.data.routes, "premium-summary")}
      />
    ),
    "quote-summary": (
      <QuoteSummaryForm
        user={user}
        formTypes="quote-summary"
        routes={getBackAndNext(TIMELINEITEMS!.data.routes, "quote-summary")}
      />
    ),
  };

  const formCompleted = (
    (completedRoutes(TIMELINEITEMS?.data.status as TimelineEvent[]) /
      (TIMELINEITEMS?.data.routes.length || 0)) *
    100
  ).toFixed(0);

  return (
    <AlertWrapper>
      <div className="flex flex-col  gap-4 lg:gap-0 lg:flex-row w-full lg:px-10 xl:px-28">
        <div className="lg:hidden">
          <Accordion type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="border border-primary rounded-lg ">
              <AccordionTrigger
                noIcon
                className={cn(
                  "justify-center  uppercase  rounded-md text-primary-foreground",
                  `bg-primary`
                )}>
                Form Completed {formCompleted}%
              </AccordionTrigger>
              <AccordionContent className="p-4  rounded-b-lg">
                <Suspense fallback={<div>Loading...</div>}>
                  <TimeLine
                    events={TIMELINEITEMS?.data.status as TimelineEvent[]}
                    current={searchParams.form}
                  />
                </Suspense>
                {Number(formCompleted) !== 0 &&
                  searchParams.form !== "coverage-selection" && (
                    <ResetBtn user={user} />
                  )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Card className="hidden lg:flex flex-col w-[34%] shadow-none bg-none border-none">
          <CardHeader className="font-medium text-2xl">
            Form Completed {formCompleted}%
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Loading...</div>}>
              <TimeLine
                events={TIMELINEITEMS?.data.status as TimelineEvent[]}
                current={searchParams.form}
              />
            </Suspense>
            {Number(formCompleted) !== 0 &&
              searchParams.form !== "coverage-selection" && (
                <ResetBtn user={user} />
              )}
          </CardContent>
        </Card>

        <div className="lg:w-[66%]">
          <Card className="">
            <CardHeader className="font-medium text-2xl">
              {formDetails.title}
            </CardHeader>
            <CardContent>
              {form[searchParams.form as keyof typeof form]}
            </CardContent>
          </Card>
        </div>
      </div>
    </AlertWrapper>
  );
}
