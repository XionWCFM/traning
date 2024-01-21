import { fetcher } from '@/src/@packages/fetcher/fetcher';
import { useMutation } from '@tanstack/react-query';
import { END_POINT } from '../../end-point';

export const useLogMutation = () => {
  return useMutation({
    mutationFn: async (log: any) => {
      const result = await fetcher.post(END_POINT.log, {
        body: JSON.stringify(log),
      });
      return result;
    },
  });
};
