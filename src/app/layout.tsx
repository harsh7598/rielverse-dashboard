import { Header } from "@/components";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dashboard",
  description: "Rielverse Dashboard built with ShadCN and TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
    <body>
      {/* <QueryProviders>
        <AuthProvider>
          <Toaster />
          <Navbar />
          <AuthModal /> */}
          <Header />
          <Footer />
          <main
            // className={`relative overflow-hidden min-h-screen ${montserrat.variable} ${baskervville.variable}`}
            >
            {children}
          </main>
          {/*
        </AuthProvider>
      </QueryProviders> */}
    </body>
  </html>
  );
}
