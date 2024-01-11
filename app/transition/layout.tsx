import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import PageTransitionEffect from "./PageTransitionEffect";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Framer Motion Transition",
  description: "Framer Motion",
};

const WrapperMaxWidth = ({
  children,
  hide = false,
}: {
  children: React.ReactNode;
  hide?: boolean;
}) => (
  <div
    className={cn("min-h-screen", {
      hidden: hide,
    })}
  >
    {children}
  </div>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`} suppressHydrationWarning>
        {/* if using inner transition hide thi */}
        <div className="main">
          <WrapperMaxWidth hide>
            <header className="space-x-3">
              <Link className="border-b border-slate-100" href="/transition">
                Home
              </Link>
              <Link
                className="border-b border-slate-100"
                href="/transition/about"
              >
                About
              </Link>
              <Link
                className="border-b border-slate-100"
                href="/transition/contact"
              >
                Contact
              </Link>
            </header>
          </WrapperMaxWidth>
          <PageTransitionEffect>
            <WrapperMaxWidth>{children}</WrapperMaxWidth>
          </PageTransitionEffect>
        </div>
      </body>
    </html>
  );
}
