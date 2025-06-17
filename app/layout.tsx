import type { Metadata } from 'next';
import { ibm } from '@/lib/fonts';
import Navbar from '@/components/Navbar/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tom Moosbrugger',
  description: 'Portfolio website for Tom Moosbrugger, full-stack developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* 
          add script to check local storage for stored theme variable
          if theme variable exists, set html element's classname to corresponding variable
          if not, default theme to dark. 
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (() => {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme === 'light') {
              document.documentElement.className = '';
            } else {
              document.documentElement.className = 'dark';
            }
          })();
        `,
          }}
        />
      </head>
      <body
        className={`${ibm.className} bg-white text-black antialiased dark:bg-black dark:text-white`}
      >
        <header className='mb-15'>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
