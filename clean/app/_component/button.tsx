'use client';

import { useLogger } from '@/src/@infrastructure/logger/application/implement/use-logger';
import { pubSubManager } from '@/src/@infrastructure/pub-sub-example/provider';
import { useRootStore } from '@/src/@infrastructure/store/client/client-store';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}
export const Button = (prop: ButtonProps) => {
  const { track } = useLogger();
  const store = useRootStore();

  return (
    <button
      onClick={() => {
        pubSubManager.publish({
          type: 'CREATE_USER',
          userName: 'hello world',
        });
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
