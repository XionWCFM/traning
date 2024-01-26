export type PubSubEvent<
  EventContent extends Record<string, any> & { type: string },
> = EventContent;

export type DefaultPubSubEvent = PubSubEvent<{ type: string }>;

export type PubSubEventHandler<T extends DefaultPubSubEvent> = (
  event: T,
) => void;

export type PubSubEventHandlersMaps<Event extends DefaultPubSubEvent> = {
  [K in Event['type']]?: Array<PubSubEventHandler<Event>>;
};

export type NewPubSubEvent<T extends Record<string, any> & { type: string }> = {
  event: T;
  eventHandler: (event: T) => void;
  eventHandlersMap: { [K in T['type']]?: Array<(event: T) => void> };
};
