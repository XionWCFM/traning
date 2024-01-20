'use client';

import { useLogger } from '@/src/@infrastructure/logger/application/implement/use-logger';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}
export const Button = (prop: ButtonProps) => {
  const { track } = useLogger();
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
