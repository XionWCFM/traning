import { objectEntries } from '@/src/@shared/utils/object/object-entries';

type EventName<Event> = Event extends string ? Event : never;

type EventProperty<Prop> = Prop extends Record<string, any> ? Prop : never;

type EventCreator<T = EventName<string>, P = EventProperty<{}>> = P & {
  type: T;
};

type EventHandler<
  Event extends EventCreator<string, {}> = EventCreator<string, {}>,
> = (event: Event) => void;

export class PubSubManager<Event extends EventCreator<string, {}>> {
  private subscribers: {
    [eventType in Event['type']]?: Array<EventHandler<Event>>;
  } = {};

  subscribe(eventType: Event['type'], handler: EventHandler<Event>) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    this.subscribers[eventType]?.push(handler);
  }

  publish(event: Event) {
    const handlers =
      this.subscribers?.[event?.type as unknown as Event['type']] || [];

    handlers.forEach((handler) => handler(event));
  }

  initiate(handlerObject: {
    [K in Event['type']]?: Array<EventHandler<Event>>;
  }) {
    const entries = objectEntries(handlerObject);
    entries.forEach(([eventType, handlers]) => {
      handlers?.forEach((handler) => {
        this.subscribe(eventType, handler);
      });
    });
  }
}
