import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default async function AuthCardLayout({
  children,
  imgSrc,
  imgAlt,
  title,
  description,
  noImg,
}: Readonly<{
  children: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  noImg?: boolean;
}>) {
  return (
    <div className={cn("flex flex-col gap-6" , noImg && "items-center")}>
      <Card className={cn("overflow-hidden" , noImg &&  "w-1/2 min-w-[280px]")}>
        <CardContent className={cn("grid p-0", !noImg && "md:grid-cols-2")}>
          <section className="p-6 md:p-8 flex flex-col gap-8">
            <CardHeader className="items-center text-center p-0">
              <CardTitle className="text-[#003780] font-semibold text-lg">{title}</CardTitle>
              <CardDescription className="text-[#71717A]">{description}</CardDescription>
            </CardHeader>
            {children}
          </section>
          {!noImg && (
            <section className="relative hidden bg-muted md:block">
              <Image
                src={imgSrc}
                alt={imgAlt}
                width={400}
                height={400}
                className="absolute inset-0 h-full w-full  dark:brightness-[0.2] dark:grayscale object-contain"
              />
            </section>
          )}
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-[#71717A] font-semibold [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our{" "}
        <Link href="#" className="text-[#003780] font-semibold">Terms of Service</Link> &{" "}
        <Link href="#" className="text-[#003780] font-semibold">Privacy Policy</Link>.
      </div>
    </div>
  );
}
