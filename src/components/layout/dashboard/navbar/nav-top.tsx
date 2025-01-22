"use client";

import * as React from "react";
// import {
//   Command,
// } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import Image from "next/image";
import Logo from '@/assets/logo.svg'

export default function NavTop() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center gap-2">
        <SidebarMenuButton size="lg" asChild>
          <Link href={ROUTES.DASHBOARD.ROOT}>
            <Image src={Logo.src} alt="Logo" width={32} height={32} className="aspect-square" />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">IAMI Insurance</span>
              <span className="truncate text-xs">Enterprise</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
