'use client';

import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} p-3 bg-gray-200 `}>
        <main className="w-full  flex flex-col max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold my-3">
            Learning Next Js 14 Features
          </h1>
          {children}
        </main>
      </body>
    </html>
  );
}
