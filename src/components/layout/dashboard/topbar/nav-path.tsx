"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


export default function NavPath() {
  const pathName = usePathname();

  const pathArray = pathName.split("/").splice(1);
  const result = pathArray.reduce(
    (acc: { name: string; link: string }[], item, index, arr) => {
      const link = `/${pathArray.slice(0, index + 1).join("/")}`;
      acc.push({ name: item, link: link });
      if (index < arr.length - 1) {
        acc.push({ name: "break", link: "" });
      }
      return acc;
    },
    []
  );

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {result.map((item, key) =>
          item.name === "break" ? (
            <BreadcrumbSeparator key={key} className="hidden md:block" />
          ) : (
            <BreadcrumbItem
              className={cn(
                "first-letter:uppercase",
                result.length === key + 1 ? "" : "hidden md:block"
              )}
              key={key}>
              {result.length === key + 1 ? (
                <BreadcrumbPage className="first-letter:uppercase">
                  {item.name}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
