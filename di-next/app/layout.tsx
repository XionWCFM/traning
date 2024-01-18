import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { container } from '@/src/compositions';
import { AppInitiator } from '@/src/core';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const service = container.get<AppInitiator>();
service.init();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
