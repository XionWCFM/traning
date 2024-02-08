import type { Metadata } from 'next';
import './globals.css';
import { EffectorNext } from '@effector/next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <EffectorNext>{children}</EffectorNext>
      </body>
    </html>
  );
}
