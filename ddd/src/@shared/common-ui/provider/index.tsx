'use client';
import { StoreProvider } from '@/src/@infrastructure/store';

export const Providers = ({ children }: React.PropsWithChildren) => {
  return <StoreProvider>{children}</StoreProvider>;
};
