'use client';

import { Amplify } from 'aws-amplify';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import config from '../../../aws-exports';
const inter = Inter({ subsets: ['latin'] });

Amplify.configure({ ...config }, { ssr: true });
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
