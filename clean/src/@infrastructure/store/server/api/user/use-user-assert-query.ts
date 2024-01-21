'use client';
import { User } from '@/src/@apps/user/domain';
import { authFetcher } from '@/src/@packages/fetcher/fetcher';
import { useSuspenseQuery } from '@tanstack/react-query';
import { USER_KEY } from './factory';
import { assert } from '@/src/@packages/assert';
import { END_POINT } from '../../end-point';

export const useUserAssertQuery = () => {
  return useSuspenseQuery<User | null>({
    queryKey: USER_KEY.assert,
    queryFn: async () => {
      const result = await authFetcher.get(END_POINT.user);
      assert(result !== null);
      return result;
    },
  });
};
