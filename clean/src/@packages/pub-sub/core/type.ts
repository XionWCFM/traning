export type PubSubEvent<
  EventContent extends Record<string, any> & { type: string },
> = EventContent;

export type DefaultPubSubEvent = PubSubEvent<{ type: string }>;
// PubSubEvent

export type PubSubEventHandler<T extends DefaultPubSubEvent> = (
  event: T,
) => void;

export type PubSubEventHandlersMaps<Event extends DefaultPubSubEvent> = {
  [K in Event['type']]?: Array<PubSubEventHandler<Event>>;
};
