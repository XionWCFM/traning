import { objectEntries } from '@/src/@shared/utils/object/object-entries';

type EventName<Event> = Event extends string ? Event : never;

type EventHandler<Event extends EventName<string>> = (event: {
  type: Event;
}) => void;

export class PubSubManager<Event extends EventName<string>> {
  private subscribers: { [eventType in Event]?: Array<EventHandler<Event>> } =
    {};

  subscribe(eventType: Event, handler: EventHandler<Event>) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    this.subscribers[eventType]?.push(handler);
  }

  publish(event: { type: EventName<Event> }) {
    const handlers = this.subscribers[event.type] || [];
    handlers.forEach((handler) => handler(event));
  }

  initiate(handlerObject: {
    [K in EventName<Event>]?: Array<EventHandler<Event>>;
  }) {
    const entries = objectEntries(this.subscribers);
    entries.forEach(([eventType, handlers]) => {
      handlers?.forEach((handler) => {
        this.subscribe(eventType, handler);
      });
    });
  }
}
