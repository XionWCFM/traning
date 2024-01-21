import { PubSubProvider } from './event-comp';

export const EventProvder = ({ children }: React.PropsWithChildren) => {
  return (
    <PubSubProvider
      handler={{
        USER_CREATED: [
          (event) => {
            console.log('created event', event);
          },
        ],
        USER_DELETED: [
          (event) => {
            console.log('deleted', event);
          },
        ],
      }}
    ></PubSubProvider>
  );
};
