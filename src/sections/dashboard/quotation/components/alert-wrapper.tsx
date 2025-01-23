"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ROUTES } from "@/config/routes";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

interface AlertWrapperPropsTypes {
  children: React.ReactNode;
}

export default function AlertWrapper({ children }: AlertWrapperPropsTypes) {
  const router = useRouter();
  const params = useSearchParams();
  const formType = params.get("form");


  const ALERT = [
    {
      title: "Request Accepted Successfully",
      description: "Our friendly team contact you soon",
      button: [
        {
          btn: <AlertDialogAction>Continue</AlertDialogAction>,
        },
      ],
    },
    {
      title: "Are You Sure?",
      description:
        "Once you leave this page,if you make edit on this page then you will lose the current quotation",
      button: [
        {
          btn: (
            <AlertDialogAction
              onClick={() =>
                router.push(ROUTES.DASHBOARD.QUOTATION.ROOT("quote-summary"))
              }>
              Cancel
            </AlertDialogAction>
          ),
        },
        {
          btn: <AlertDialogCancel>Continue</AlertDialogCancel>,
        },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [alertData, setAlertData] = useState({
    title: "",
    description: "",
    button: [{ btn: <AlertDialogCancel>Cancel</AlertDialogCancel> }],
  });

  useEffect(() => {
    const payment = sessionStorage.getItem("isPaymentMonthly");
    const isQuotes = sessionStorage.getItem("quotes");

    if (payment) {
      sessionStorage.removeItem("quotes");
      setAlertData(ALERT[0]);
      setIsOpen(true);
      sessionStorage.removeItem("isPaymentMonthly");
    }

    if (isQuotes && formType !== "quote-summary" && !payment) {
      setAlertData(ALERT[1]);
      setIsOpen(true);
      sessionStorage.removeItem("quotes");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formType]);

  return (
    <section>
      <AlertDialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertData.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertData.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {alertData.button.map((btn, key) => (
              <Fragment key={key}>{btn.btn}</Fragment>
            ))}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {children}
    </section>
  );
}
