import { useSuspenseQuery } from '@tanstack/react-query';
import { USER_KEY } from './factory';
import { authFetcher } from '@/src/@packages/fetcher/fetcher';
import { User } from '@/src/@apps/user/domain';

export const useUserQuery = () => {
  return useSuspenseQuery<User | null>({
    queryKey: USER_KEY.all,
    queryFn: async () => {
      try {
        const result = await authFetcher.get('/api/user');
        return result;
      } catch (e) {
        return null;
      }
    },
  });
};
