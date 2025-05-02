import type { Metadata } from "next";
import { JetBrains_Mono, VT323 } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
})

const terminal = VT323({
  weight: ["400"],
  subsets: ["latin"]
})

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
      <body className={`${terminal.className}`}>
        {children}
      </body>
    </html>
  );
}
