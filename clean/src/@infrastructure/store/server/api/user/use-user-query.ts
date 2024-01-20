import { useSuspenseQuery } from '@tanstack/react-query';
import { USER_KEY } from './factory';
import { authFetcher } from '@/src/@packages/fetcher/fetcher';
import { User } from '@/src/@apps/user/domain';

export const useUserQuery = () => {
  return useSuspenseQuery<User>({
    queryKey: USER_KEY.all,
    queryFn: async () => {
      const result = await authFetcher.get('/api/user');
      return result;
    },
  });
};
