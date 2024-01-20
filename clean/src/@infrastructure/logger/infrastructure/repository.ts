import { delay } from '@/src/@shared/utils/promise/delay';
import { useMutation } from '@tanstack/react-query';

export const useLogRepository = () => {
  const create = useMutation({
    mutationFn: async (log: any) => {
      delay(1000);
    },
  });
  return {
    create: (log: any) => {
      return create.mutateAsync(log);
    },
  };
};
