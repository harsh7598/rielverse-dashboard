import { Header } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Dashboard',
  description: 'Rielverse Dashboard built with ShadCN and TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
