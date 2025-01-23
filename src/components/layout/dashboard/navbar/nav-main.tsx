import { ChevronRight } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import React from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import Image from "next/image";

export function NavMain({
  items,
}: {
  items: {
    title?: string;
    url: string;
    icon?: string;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      icon?: string;
    }[];
  }[];
}) {
  // const pathName = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <Link href={item.url}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    // isActive={pathName === item.url}
                    // className={`${pathName === item.url && "bg-gray-50"}`}
                    >
                    <Image
                      src={item.icon!}
                      alt={item.title!}
                      width={16}
                      height={16}
                      className="aspect-square"
                    />
                    {item.title}
                    {item.items && item.items.length > 0 && (
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    )}
                  </SidebarMenuButton>
                </Link>
              </CollapsibleTrigger>
              {item.items && item.items.length > 0 && (
                <CollapsibleContent>
                  <SidebarMenuSub className="border-l-2 border-l-orange-500 ml-9">
                    {item.items.map((subItem, key) => (
                      <Link
                        href={subItem.url}
                        key={key}
                        className="w-full hover:bg-[#F4F4F5] rounded-sm px-1">
                        <SidebarMenuSubItem className="flex items-center">
                          <Image
                            src={subItem.icon!}
                            alt={subItem.title}
                            width={16}
                            height={16}
                            className="aspect-square"
                          />
                          <SidebarMenuSubButton asChild>
                            <span>{subItem.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </Link>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
