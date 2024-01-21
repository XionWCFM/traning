import { fetcher } from '@/src/@packages/fetcher/fetcher';
import { useMutation } from '@tanstack/react-query';

export const useLogMutation = () => {
  return useMutation({
    mutationFn: async (log: any) => {
      const result = await fetcher.post('/api/log', {
        body: JSON.stringify(log),
      });
      console.log('log mutation', result);
      return result;
    },
  });
};
