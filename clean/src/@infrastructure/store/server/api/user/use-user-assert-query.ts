'use client';
import { User } from '@/src/@apps/user/domain';
import { authFetcher } from '@/src/@packages/fetcher/fetcher';
import { useSuspenseQuery } from '@tanstack/react-query';
import { USER_KEY } from './factory';
import { assert } from '@/src/@packages/assert';

export const useUserAssertQuery = () => {
  return useSuspenseQuery<User | null>({
    queryKey: USER_KEY.all,
    queryFn: async () => {
      const result = await authFetcher.get('/api/user');
      assert(result !== null);
      return result;
    },
  });
};
