'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { USER_KEY } from './factory';
import { authFetcher } from '@/src/@packages/fetcher/fetcher';
import { User } from '@/src/@apps/user/domain';
import { END_POINT } from '../../end-point';

export const useUserQuery = () => {
  return useSuspenseQuery<User | null>({
    queryKey: USER_KEY.safe,
    queryFn: async () => {
      try {
        const result = await authFetcher.get(END_POINT.user);
        return result;
      } catch (e) {
        return null;
      }
    },
  });
};
