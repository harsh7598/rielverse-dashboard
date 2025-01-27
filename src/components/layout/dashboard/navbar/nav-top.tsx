'use client';

import * as React from 'react';
// import {
//   Command,
// } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { ROUTES } from '@/config/routes';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import LogoSmall from '@/assets/smallLogo.svg';

export default function NavTop() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className='flex items-center gap-2'>
        <SidebarMenuButton size='lg' asChild>
          <Link href={ROUTES.DASHBOARD.ROOT}>
            <Image
              src={LogoSmall.src}
              alt='Logo'
              width={32}
              height={32}
              // className='aspect-square'
            />
            <div className='grid flex-1 text-left text-sm leading-tight -ml-[11px] -mt-[3.2px]'>
              <Image src={Logo.src} alt='Logo' width={150} height={40} />
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
