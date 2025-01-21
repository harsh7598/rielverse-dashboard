import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Rielverse Dashboard built with ShadCN and TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
