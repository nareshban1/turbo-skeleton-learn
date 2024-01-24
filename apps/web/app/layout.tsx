'use client';

import { Button } from '@repo/ui';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode, useState } from 'react';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  agents,
  weapons,
  maps,
  modal,
}: {
  children: ReactNode;
  agents: ReactNode;
  maps: ReactNode;
  weapons: ReactNode;
  modal: ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} p-3 bg-gray-200 `}>
        <main className="w-full  flex flex-col max-w-7xl mx-auto">
          {children}
          Valorant
          {modal}
          <section className="flex w-full">
            <div className="bg-red-200 w-1/2">{agents}</div>
            <div className="bg-orange-200 w-1/2">{weapons}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
