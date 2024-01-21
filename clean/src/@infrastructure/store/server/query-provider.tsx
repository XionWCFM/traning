'use client';
import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export const QueryProvider = ({ children }: React.PropsWithChildren) => {
  const [queryClientState] = React.useState(() => new QueryClient({}));
  return (
    <QueryClientProvider client={queryClientState}>
      {children}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};
