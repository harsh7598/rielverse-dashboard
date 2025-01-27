import { Header } from '@/components';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { DashboardSidebar } from '@/components/layout/dashboard/sidebar/dashboard-sidebar';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import NavTop from '@/components/layout/dashboard/navbar/nav-top';
import NavPath from '@/components/layout/dashboard/topbar/nav-path';
import { Separator } from '@/components/ui/separator';
import { COMMON_NAVMAINITEMS, NAVMAINITEMS } from '@/config/routes-dashboard';
import { NavMain } from '@/components/layout/dashboard/navbar/nav-main';

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Rielverse',
  description: 'Insurance Agency Management Interface',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${outfit.className} antialiased`}>
        <SidebarProvider defaultOpen={false}>
          <Sidebar collapsible='icon'>
            <SidebarHeader>
              <NavTop />
            </SidebarHeader>
            <SidebarContent>
              <NavMain items={[...COMMON_NAVMAINITEMS, ...NAVMAINITEMS["SuperAdmin"] as any[]]} />
            </SidebarContent>
            <SidebarFooter>
              {/* <NavUser user={user} items={FOOTER_NAVMAINITEMS}/> */}
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>{' '}
          <SidebarInset>
            <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
              <div className='flex items-center gap-2 px-4'>
                <SidebarTrigger className='-ml-1' />
                <Separator orientation='vertical' className='mr-2 h-4' />
                <NavPath />
              </div>
            </header>
            <div className='p-4'>{children}</div>
          </SidebarInset>
        </SidebarProvider>

        <Toaster />
      </body>
    </html>
  );
}
