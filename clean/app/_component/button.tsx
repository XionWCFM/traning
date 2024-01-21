'use client';

import { useLogger } from '@/src/@infrastructure/logger/application/implement/use-logger';
import { MyEvent } from '@/src/@infrastructure/pub-sub-example/domain';
import { pubSubManager } from '@/src/@infrastructure/pub-sub-example/provider';
import { useRootStore } from '@/src/@infrastructure/store/client/client-store';
import { EventHandler } from '@/src/@packages/pub-sub/core/type';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}
export const Button = (prop: ButtonProps) => {
  const { track } = useLogger();
  const store = useRootStore();

  return (
    <button
      onClick={() => {
        console.group('구독끊기');
        const handler: EventHandler<MyEvent> = (event) => {
          console.log('크리에이트 생성 동작함', event);
        };
        pubSubManager.subscribe('CREATE_USER', handler);
        pubSubManager.publish({
          type: 'CREATE_USER',
          userName: 'hello world',
        });
        pubSubManager.unsubscribe('CREATE_USER', handler);
        pubSubManager.publish({
          type: 'CREATE_USER',
          userName: '이건 동작하면안돼',
        });

        console.groupEnd();
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
