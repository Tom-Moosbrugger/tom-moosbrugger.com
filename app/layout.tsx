import type { Metadata } from "next";
import { terminal, jetBrainsMono, ibm } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tom Moosbrugger",
  description: "Portfolio website for Tom Moosbrugger, full-stack developer extraordinaire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibm.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}