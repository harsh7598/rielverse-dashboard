import { Header } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

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
        {/* <Header /> */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
