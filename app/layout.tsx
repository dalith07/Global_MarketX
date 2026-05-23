import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/header";
const recursive = Recursive({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Global MarketX",
  description: "Global marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={recursive.className}>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}