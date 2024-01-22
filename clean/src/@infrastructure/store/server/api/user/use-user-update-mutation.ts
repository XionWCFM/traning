import { fetcher } from '@/src/@packages/fetcher/fetcher';
import { useMutation } from '@tanstack/react-query';
import { END_POINT } from '../../end-point';

export const useUserUpdateMutation = () => {
  const mutation = useMutation({
    mutationFn: async () => {
      const result = await fetcher.post(END_POINT.user);
      return result;
    },
  });
  return mutation;
};
