import type { Metadata } from "next";
import { terminal, jetBrainsMono, ibm } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tom Moosbrugger",
  description:
    "Portfolio website for Tom Moosbrugger, full-stack developer extraordinaire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const storedMode = localStorage.getItem('mode');
              if (storedMode === 'light') {
                document.documentElement.className = '';
              } else {
                document.documentElement.className = 'dark';
              }
            })();
          `,
        }}
      />
      <body className={`${ibm.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
