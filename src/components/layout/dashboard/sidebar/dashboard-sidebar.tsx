"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavUser } from "../navbar/nav-user";
import { NavMain } from "../navbar/nav-main";
import NavTop from "../navbar/nav-top";
import { UserTypes } from "@/types/user";
import { COMMON_NAVMAINITEMS, FOOTER_NAVMAINITEMS, NAVMAINITEMS } from "@/config/routes-dashboard";



export function DashboardSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  user: UserTypes;
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavTop />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={[...COMMON_NAVMAINITEMS, ...NAVMAINITEMS[user.role]]} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} items={FOOTER_NAVMAINITEMS}/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
