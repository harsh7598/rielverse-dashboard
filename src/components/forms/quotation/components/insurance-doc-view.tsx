"use client";

import {
  DownloadInsruanceDoc,
  FetchInsruanceDoc,
} from "@/server/insuarance-doc";
import { InsuremoDocTypes } from "@/types/insurance-doc";
import { useCallback, useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/custom/icons";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { ROUTES } from "@/config/routes";

interface InsuremoDocPropsTypes {
  value: string;
  entity: "proposalNo" | "policyNo";
  className?: string;
}

export default function InsruanceDocView({
  value,
  entity,
  className,
}: InsuremoDocPropsTypes) {
  const params = useSearchParams();
  const formType = params.get("form");
  const path = usePathname()
  const [isLoading, setIsLoading] = useState(true);
  const [isDocDownloading, setIsDocDownloading] = useState({
    status: false,
    docName: "",
  });
  const [docs, setDocs] = useState<InsuremoDocTypes[]>([]);

  const getDocs = async () => {
    setIsLoading(true);
    const [res, error] = await FetchInsruanceDoc(value, entity);
    if (res && !error) {
      setDocs((res as unknown as { Status: string }).Status ? [] : res);
    }
    setIsLoading(false);
  };

  const downloadDocs = useCallback(async (value: string, name: string) => {
    setIsDocDownloading({
      status: true,
      docName: name,
    });
    const [res, error] = await DownloadInsruanceDoc(value);
    if (res && !error) {
      const url = window.URL.createObjectURL(res);
      const a = document.createElement("a");
      a.href = url;
      a.download = name; // Use the document name for the downloaded file
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }
    setIsDocDownloading({
      status: false,
      docName: "",
    });
  }, []);

  useEffect(() => {
    getDocs();
    const quotes = sessionStorage.getItem("quotes");
    if (!quotes && formType === "quote-summary") {
      sessionStorage.setItem("quotes", "true");
    }

    if(path === ROUTES.DASHBOARD.QUOTATION.PAYMENT) {
      sessionStorage.removeItem("quotes");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formType , path]);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex w-full justify-between items-center">
        <SectionHeading title="Insurance Documents" />
        <Button onClick={getDocs}>Reload</Button>
      </div>

      <div className="flex flex-wrap gap-5 justify-center items-center">
        {isLoading ? (
          Array.from({ length: entity === "proposalNo" ? 4 : 6 }).map(
            (_, i) => (
              <Card key={i} className="w-full sm:w-[48%]">
                <CardHeader className="p-4">
                  <CardTitle>
                    <Skeleton className="w-full h-[18px]" />
                  </CardTitle>
                </CardHeader>
              </Card>
            )
          )
        ) : !isLoading && docs.length === 0 ? (
          <div className="flex justify-center items-center w-full h-32">
            <p>No documents found. Please reload to check it again</p>
          </div>
        ) : (
          docs.map((doc, index) => (
            <Card
              key={index}
              id="download-doc"
              onClick={() =>
                !isDocDownloading.status &&
                isDocDownloading.docName === "" &&
                downloadDocs(doc.docKey, doc.docName)
              }
              className="w-full sm:w-[48%]  cursor-pointer hover:bg-primary hover:text-primary-foreground group">
              <CardHeader className="p-4">
                <CardTitle className="flex items-center text-sm justify-between">
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.3335 11.8333H10.6668"
                        className="stroke-black group-hover:stroke-white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.3335 9.16666H8.00016"
                        className="stroke-black group-hover:stroke-white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.6665 2.16666V2.49999C8.6665 4.38561 8.6665 5.32842 9.2523 5.91421C9.8381 6.49999 10.7809 6.5 12.6665 6.5H12.9998M13.3332 7.6046V9.83333C13.3332 12.3475 13.3332 13.6046 12.5521 14.3856C11.7711 15.1667 10.514 15.1667 7.99984 15.1667C5.48568 15.1667 4.2286 15.1667 3.44755 14.3856C2.6665 13.6046 2.6665 12.3475 2.6665 9.83333V6.80389C2.6665 4.64054 2.6665 3.55887 3.25722 2.82621C3.37656 2.6782 3.51138 2.54338 3.65939 2.42404C4.39204 1.83333 5.47372 1.83333 7.63704 1.83333C8.10744 1.83333 8.34257 1.83333 8.55797 1.90933C8.60277 1.92514 8.64664 1.94333 8.6895 1.96383C8.89557 2.06236 9.06184 2.22866 9.39444 2.56125L12.5521 5.71895C12.9375 6.10432 13.1302 6.29701 13.2317 6.54203C13.3332 6.78706 13.3332 7.05956 13.3332 7.6046Z"
                        className="stroke-black group-hover:stroke-white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>{doc.docName}</span>
                  </div>
                  {isDocDownloading &&
                  doc.docName === isDocDownloading.docName ? (
                    <Icons.spinner className=" h-4 w-4 animate-spin group-hover:text-white" />
                  ) : (
                    // <DownloadIcon className="h-4 w-4 group-hover:text-white" />
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 group-hover:text-white"
                      >
                      <path
                        d="M6.00024 28L6.46794 29.3252C8.28824 34.4826 9.1984 37.0614 11.2751 38.5308C13.3518 40 16.0864 40 21.5558 40H26.4448C31.914 40 34.6488 40 36.7254 38.5308C38.802 37.0614 39.7122 34.4826 41.5326 29.3252L42.0002 28"
                        stroke="black"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="group-hover:stroke-white"
                      />
                      <path
                        d="M24.0002 28V8M24.0002 28C22.5998 28 19.9833 24.0114 19.0002 23M24.0002 28C25.4006 28 28.0172 24.0114 29.0002 23"
                        stroke="black"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-white"
                      />
                    </svg>
                  )}
                </CardTitle>
              </CardHeader>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
