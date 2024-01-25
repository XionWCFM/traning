import '@/src/@shared/style/globals.css';

import { QueryProvider } from '@/src/@infrastructure/store/server/query-provider';
import React from 'react';
import { Logger } from '@/src/@packages/logger/core/logger';
import { MyLogEvent } from '@/src/@infrastructure/logger';
import { LoggerProvider } from './_component/logger';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
        <LoggerProvider />
      </body>
    </html>
  );
}
