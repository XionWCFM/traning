'use client';

import { useLogger } from '@/src/@infrastructure/logger/application/implement/use-logger';
import { useRootStore } from '@/src/@infrastructure/store/client/client-store';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}
export const Button = (prop: ButtonProps) => {
  const { track } = useLogger();
  const store = useRootStore();

  return (
    <button
      onClick={() => {
        track(
          ['traning', 'cta-button', 'click'],
          ['traning', 'cart', 'bottom-sheet', 'cta-button'],
        );
      }}
      {...prop}
    >
      {prop.children}
    </button>
  );
};
