import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

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
        <main
        // className={`relative overflow-hidden min-h-screen ${montserrat.variable} ${baskervville.variable}`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
